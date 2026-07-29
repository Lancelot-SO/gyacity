require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(cors({ origin: process.env.ALLOWED_ORIGIN || '*' }));
app.use(express.json());

// ── Nodemailer transporter ────────────────────────────────────────────────────

const transporter = nodemailer.createTransport({
  host:   process.env.SMTP_HOST,
  port:   Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',   // true only for port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// ── Helpers ───────────────────────────────────────────────────────────────────

function esc(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ── Email design ──────────────────────────────────────────────────────────────
// Dark, editorial layout mirroring the Gyacity website: near-black canvas, cream
// (#f4dcc0) type, coral (#d97757) accents, monospace uppercase eyebrows, thin
// hairline rules and the big Gyacity© wordmark. Table-based + inline styles so it
// survives Gmail / Outlook / Apple Mail. Palette is flattened to solid hex (no
// rgba) for old-client safety.

const C = {
  bg:     '#0a0908',
  card:   '#100e0c',
  cream:  '#f4dcc0',
  cream2: '#e8dccb',
  mute:   '#a1927d',
  dim:    '#6b6153',
  line:   '#322d27',
  lineSoft:'#221e19',
  coral:  '#d97757',
  mono:   "'Courier New', ui-monospace, monospace",
  sans:   "-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif",
};

function row(label, value) {
  if (!value) return '';
  return `
    <tr>
      <td style="padding:15px 0;border-bottom:1px solid ${C.lineSoft};font-family:${C.mono};
                 font-size:10px;text-transform:uppercase;letter-spacing:0.18em;color:${C.dim};
                 white-space:nowrap;width:120px;vertical-align:top;">${label}</td>
      <td style="padding:15px 0;border-bottom:1px solid ${C.lineSoft};font-family:${C.sans};
                 font-size:15px;color:${C.cream};line-height:1.5;">${value}</td>
    </tr>`;
}

function buildHtml({ name, email, phone, location, projectType, message, nda }) {
  const firstName = esc(String(name || '').trim().split(/\s+/)[0] || 'them');
  const received  = new Date().toLocaleString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="dark">
  <title>New inquiry — Gyacity</title>
</head>
<body style="margin:0;padding:0;background:${C.bg};">
  <!-- preheader (hidden inbox preview) -->
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:${C.bg};font-size:1px;line-height:1px;">
    New project inquiry from ${esc(name)}${projectType ? ' · ' + esc(projectType) : ''} — reply directly to respond.
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.bg};">
    <tr><td align="center" style="padding:40px 16px;">

      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:${C.card};border:1px solid ${C.line};">

        <!-- Masthead -->
        <tr><td style="padding:26px 40px;border-bottom:1px solid ${C.line};">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
            <td align="left" style="font-family:${C.sans};font-size:15px;font-weight:800;letter-spacing:0.02em;color:${C.cream};">
              GYACITY<span style="color:${C.coral};">&#169;</span>
            </td>
            <td align="right" style="font-family:${C.mono};font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:${C.dim};">
              ${received}
            </td>
          </tr></table>
        </td></tr>

        <!-- Headline -->
        <tr><td style="padding:40px 40px 34px;border-bottom:1px solid ${C.line};">
          <div style="font-family:${C.mono};font-size:11px;letter-spacing:0.26em;text-transform:uppercase;color:${C.coral};padding-bottom:18px;">
            New Project Inquiry
          </div>
          <div style="font-family:${C.sans};font-size:38px;font-weight:800;letter-spacing:-0.025em;line-height:1.02;color:${C.cream};">
            ${esc(name)}
          </div>
          <div style="width:44px;height:3px;background:${C.coral};margin-top:22px;font-size:0;line-height:0;">&nbsp;</div>
        </td></tr>

        <!-- Details -->
        <tr><td style="padding:14px 40px 24px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
            ${row('Email',        `<a href="mailto:${esc(email)}" style="color:${C.coral};text-decoration:none;">${esc(email)}</a>`)}
            ${row('Phone',        esc(phone))}
            ${row('Location',     esc(location))}
            ${row('Project type', esc(projectType))}
            ${row('NDA', nda ? `<span style="color:${C.coral};font-family:${C.mono};font-size:11px;letter-spacing:0.14em;text-transform:uppercase;">Requested before engagement</span>` : '')}
          </table>
        </td></tr>

        <!-- Message -->
        <tr><td style="padding:12px 40px 22px;">
          <div style="font-family:${C.mono};font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:${C.dim};padding-bottom:14px;">
            Message
          </div>
          <div style="font-family:Georgia,'Times New Roman',serif;font-size:40px;line-height:1;color:${C.coral};padding-bottom:2px;">&ldquo;</div>
          <div style="font-family:${C.sans};font-size:15px;color:${C.cream2};line-height:1.8;white-space:pre-wrap;">${esc(message)}</div>
        </td></tr>

        <!-- Reply CTA -->
        <tr><td style="padding:8px 40px 40px;">
          <table role="presentation" cellpadding="0" cellspacing="0"><tr>
            <td bgcolor="${C.coral}" style="mso-padding-alt:14px 26px;">
              <a href="mailto:${esc(email)}?subject=Re:%20Your%20inquiry%20with%20Gyacity"
                 style="display:inline-block;padding:14px 26px;font-family:${C.sans};font-size:12px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:${C.bg};text-decoration:none;">
                Reply to ${firstName} &rarr;
              </a>
            </td>
          </tr></table>
        </td></tr>

        <!-- Footer wordmark -->
        <tr><td align="center" style="padding:36px 24px 30px;border-top:1px solid ${C.line};background:${C.bg};">
          <div style="font-family:${C.sans};font-size:44px;font-weight:800;letter-spacing:-0.035em;line-height:1;color:${C.cream};">
            Gyacity<span style="color:${C.coral};">&#169;</span>
          </div>
          <div style="font-family:${C.mono};font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:${C.dim};padding-top:18px;">
            Sent via gyacityconstruction.com
          </div>
          <div style="font-family:${C.mono};font-size:9px;letter-spacing:0.2em;text-transform:uppercase;color:${C.dim};padding-top:8px;">
            Accra &middot; Lagos &middot; Berlin &nbsp;&middot;&nbsp; &#169; MMXXVI Gyacity Ltd.
          </div>
        </td></tr>

      </table>

    </td></tr>
  </table>
</body>
</html>`;
}

// ── POST /api/contact ─────────────────────────────────────────────────────────

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, location, projectType, message, nda } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required.' });
  }

  try {
    await transporter.sendMail({
      from:    `"${process.env.MAIL_FROM || 'Gyacity Contact Form'}" <${process.env.SMTP_USER}>`,
      to:      process.env.MAIL_TO,
      replyTo: email,
      subject: `New inquiry from ${name} — Gyacity`,
      html:    buildHtml({ name, email, phone, location, projectType, message, nda }),
    });

    res.json({ ok: true });
  } catch (err) {
    console.error('[mail error]', err.message);
    res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
});

// ── Start ─────────────────────────────────────────────────────────────────────

if (require.main === module) {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Gyacity API running on port ${PORT}`);
  });
}

module.exports = { app, buildHtml };
