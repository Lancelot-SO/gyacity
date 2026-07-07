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

function row(label, value) {
  if (!value) return '';
  return `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #e8e8e8;font-size:11px;
                 text-transform:uppercase;letter-spacing:0.12em;color:#888;
                 white-space:nowrap;width:130px;vertical-align:top;">${label}</td>
      <td style="padding:12px 0;border-bottom:1px solid #e8e8e8;font-size:14px;color:#111;">
        ${value}
      </td>
    </tr>`;
}

function buildHtml({ name, email, phone, location, projectType, message }) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>New inquiry — Gyacity</title></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:ui-sans-serif,system-ui,sans-serif;">
  <div style="max-width:600px;margin:40px auto;background:#fff;border-radius:4px;overflow:hidden;">

    <!-- Header -->
    <div style="background:#0a0908;padding:32px 40px;">
      <div style="font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#d97757;margin-bottom:12px;">
        New project inquiry
      </div>
      <div style="font-size:28px;font-weight:800;color:#f4dcc0;letter-spacing:-0.03em;line-height:1.1;">
        ${esc(name)}
      </div>
    </div>

    <!-- Fields -->
    <div style="padding:8px 40px 32px;">
      <table style="width:100%;border-collapse:collapse;">
        ${row('Email',        `<a href="mailto:${esc(email)}" style="color:#d97757;">${esc(email)}</a>`)}
        ${row('Phone',        esc(phone))}
        ${row('Location',     esc(location))}
        ${row('Project type', esc(projectType))}
      </table>
    </div>

    <!-- Message -->
    <div style="padding:0 40px 40px;">
      <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.12em;
                  color:#888;margin-bottom:12px;">Message</div>
      <div style="font-size:14px;color:#111;line-height:1.7;white-space:pre-wrap;">${esc(message)}</div>
    </div>

    <!-- Footer -->
    <div style="padding:20px 40px;background:#f5f5f5;border-top:1px solid #e8e8e8;
                font-size:11px;color:#aaa;letter-spacing:0.1em;text-transform:uppercase;">
      Sent via gyacity.com contact form
    </div>

  </div>
</body>
</html>`;
}

// ── POST /api/contact ─────────────────────────────────────────────────────────

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, location, projectType, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required.' });
  }

  try {
    await transporter.sendMail({
      from:    `"${process.env.MAIL_FROM || 'Gyacity Contact Form'}" <${process.env.SMTP_USER}>`,
      to:      process.env.MAIL_TO,
      replyTo: email,
      subject: `New inquiry from ${name} — Gyacity`,
      html:    buildHtml({ name, email, phone, location, projectType, message }),
    });

    res.json({ ok: true });
  } catch (err) {
    console.error('[mail error]', err.message);
    res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
});

// ── Start ─────────────────────────────────────────────────────────────────────

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Gyacity API running on port ${PORT}`);
});
