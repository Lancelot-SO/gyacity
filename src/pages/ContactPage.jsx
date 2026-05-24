import { useState } from 'react';
import { motion } from 'framer-motion';
import { V2 } from '@/tokens';
import { HCaps, Eyebrow, Pill, CTA, GhostCTA, OutlineCard, ArrowUR, StarField, TiltCard, MotionSection, FloatingOrbs } from '@/components/ui';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { OFFICES } from '@/data';
import { fadeUp, fadeLeft, fadeRight, stagger } from '@/animations/variants';

const PROJECT_TYPES = ['Private residence', 'Hospitality', 'Corporate office', 'Real-estate dev.', 'Exterior'];

function ContactRow({ label, value, badge, href, accent }) {
  return (
    <motion.a
      href={href || '#'}
      whileHover={{ borderColor: accent || V2.coral, x: 4 }}
      style={{ padding: '18px 20px', border: `1px solid ${V2.line}`, background: V2.bg, display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: 14, transition: 'border-color 0.2s' }}
    >
      <div>
        <Eyebrow color={V2.mute}>{label}</Eyebrow>
        <div style={{ marginTop: 8, fontFamily: V2.mono, fontSize: 14, color: V2.cream }}>{value}</div>
        {badge && <div style={{ marginTop: 6, fontFamily: V2.font, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: accent || V2.coral }}>{badge}</div>}
      </div>
      <motion.span
        whileHover={{ scale: 1.15, borderColor: accent || V2.coral, color: accent || V2.coral }}
        style={{ width: 36, height: 36, borderRadius: '50%', border: `1px solid ${V2.line}`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: V2.cream }}
      >
        <ArrowUR size={12} />
      </motion.span>
    </motion.a>
  );
}

export function ContactPage({ accent, onNavigate }) {
  const [name, setName]               = useState('');
  const [email, setEmail]             = useState('');
  const [phone, setPhone]             = useState('');
  const [location, setLocation]       = useState('');
  const [projectType, setProjectType] = useState('Private residence');
  const [message, setMessage]         = useState('');
  const [submitted, setSubmitted]     = useState(false);

  const FIELDS = [
    { l: 'Full name',        v: name,     setter: setName,     ph: 'Your name' },
    { l: 'Email',            v: email,    setter: setEmail,    ph: 'your@email.com' },
    { l: 'Phone',            v: phone,    setter: setPhone,    ph: '+233 24 000 0000' },
    { l: 'Project location', v: location, setter: setLocation, ph: 'City, Country' },
  ];

  return (
    <div style={{ background: V2.bg, color: V2.cream, fontFamily: V2.font }}>

      {/* Title */}
      <section style={{ padding: '80px 40px 60px', position: 'relative', overflow: 'hidden' }}>
        <StarField density={0.6} />
        <FloatingOrbs opacity={0.07} />
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'flex-end' }}>
          <MotionSection variants={fadeLeft}><Eyebrow color={accent || V2.coral}>Get in touch</Eyebrow></MotionSection>
          <MotionSection variants={fadeRight}>
            <HCaps size={132} line={0.9} weight={800} tracking="-0.035em">
              Let&rsquo;s build<br />something <span style={{ color: accent || V2.coral }}>quiet.</span>
            </HCaps>
          </MotionSection>
        </div>
      </section>

      {/* Form + meta */}
      <section style={{ padding: '40px 40px 80px', borderTop: `1px solid ${V2.line}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 80 }}>
          <MotionSection variants={fadeLeft}>
            <TiltCard strength={4} glare>
              <OutlineCard pad={40}>
                {!submitted ? (
                  <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 32 }}>
                      <HCaps size={28} weight={800} tracking="-0.015em">Send an inquiry</HCaps>
                      <span style={{ fontFamily: V2.font, fontSize: 11, color: V2.mute, letterSpacing: '0.16em', textTransform: 'uppercase' }}>01 / 03</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                      {FIELDS.map(f => (
                        <div key={f.l} style={{ borderBottom: `1px solid ${V2.cream}`, paddingBottom: 10 }}>
                          <div style={{ fontFamily: V2.font, fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: V2.mute }}>{f.l}</div>
                          <input value={f.v} onChange={e => f.setter(e.target.value)} placeholder={f.ph}
                            style={{ marginTop: 8, fontFamily: V2.font, fontSize: 16, color: V2.cream, background: 'transparent', border: 'none', outline: 'none', width: '100%', cursor: 'text' }} />
                        </div>
                      ))}
                    </div>

                    <div style={{ marginTop: 28 }}>
                      <div style={{ fontFamily: V2.font, fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: V2.mute, marginBottom: 12 }}>Project type</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {PROJECT_TYPES.map(t => (
                          <Pill key={t} active={t === projectType} accent={accent} onClick={() => setProjectType(t)}>{t}</Pill>
                        ))}
                      </div>
                    </div>

                    <div style={{ marginTop: 28, borderBottom: `1px solid ${V2.cream}`, paddingBottom: 10 }}>
                      <div style={{ fontFamily: V2.font, fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: V2.mute }}>Tell us about the project</div>
                      <textarea value={message} onChange={e => setMessage(e.target.value)}
                        placeholder="Describe your project, goals, timeline..." rows={4}
                        style={{ marginTop: 12, fontFamily: V2.font, fontSize: 15, color: V2.cream, background: 'transparent', border: 'none', outline: 'none', width: '100%', resize: 'none', lineHeight: 1.5, cursor: 'text' }} />
                    </div>

                    <div style={{ marginTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTop: `1px solid ${V2.line}` }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: V2.font, fontSize: 12, color: V2.mute }}>
                        <span style={{ width: 14, height: 14, borderRadius: 3, border: `1px solid ${V2.line}`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                          <svg width="9" height="9" viewBox="0 0 9 9"><path d="M1 5l2 2 5-5" stroke={accent || V2.coral} strokeWidth="1.4" fill="none" strokeLinecap="round" /></svg>
                        </span>
                        NDA available on request
                      </span>
                      <CTA accent={accent}>Send inquiry</CTA>
                    </div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: 'center', padding: '60px 0' }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                      style={{ fontSize: 48, marginBottom: 24 }}
                    >✓</motion.div>
                    <HCaps size={32} weight={800} tracking="-0.015em">Inquiry sent</HCaps>
                    <p style={{ marginTop: 16, fontSize: 14, color: V2.mute, lineHeight: 1.6 }}>
                      Thank you. We&rsquo;ll be in touch within one business day.
                    </p>
                    <motion.button
                      whileHover={{ borderColor: accent || V2.coral, color: accent || V2.coral }}
                      onClick={() => setSubmitted(false)}
                      style={{ marginTop: 24, background: 'none', border: `1px solid ${V2.line}`, color: V2.cream, padding: '10px 20px', borderRadius: 999, fontFamily: V2.font, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'none', transition: 'border-color 0.2s, color 0.2s' }}
                    >
                      Send another
                    </motion.button>
                  </motion.div>
                )}
              </OutlineCard>
            </TiltCard>
          </MotionSection>

          {/* Side meta */}
          <MotionSection variants={fadeRight}>
            <Eyebrow color={accent || V2.coral}>Or, faster</Eyebrow>
            <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <ContactRow label="WhatsApp"        value="+233 24 905 1184" badge="Replies ~4 min"       href="https://wa.me/233249051184" accent={accent} />
              <ContactRow label="Call the studio" value="+233 24 905 1184" badge="Mon — Fri · 09–18 GMT" href="tel:+233249051184"          accent={accent} />
              <ContactRow label="Email"           value="studio@gyacity.com"                            href="mailto:studio@gyacity.com"  accent={accent} />
            </div>
            <div style={{ marginTop: 40, padding: 24, border: `1px solid ${V2.line}` }}>
              <Eyebrow>Press &amp; PR</Eyebrow>
              <div style={{ marginTop: 14, fontFamily: V2.font, fontSize: 13.5, color: V2.mute, lineHeight: 1.6 }}>
                For press inquiries, image requests and feature pitches, please contact Daniela Korb at <span style={{ color: V2.cream }}>press@gyacity.com</span>.
              </div>
            </div>
            <div style={{ marginTop: 24, padding: 24, border: `1px solid ${V2.line}`, background: V2.bg2 }}>
              <Eyebrow>Careers</Eyebrow>
              <div style={{ marginTop: 14, fontFamily: V2.font, fontSize: 13.5, color: V2.mute, lineHeight: 1.6 }}>
                We hire architects, designers and makers with two or more years of practice. Submit a portfolio of three projects.
              </div>
              <div style={{ marginTop: 18 }}><GhostCTA>See open roles</GhostCTA></div>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* Three studios */}
      <section style={{ padding: '60px 40px 80px', borderTop: `1px solid ${V2.line}` }}>
        <MotionSection style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 40 }}>
          <HCaps size={56} weight={800} tracking="-0.02em">Three studios</HCaps>
          <span style={{ fontFamily: V2.font, fontSize: 11, color: V2.mute, letterSpacing: '0.16em', textTransform: 'uppercase' }}>By appointment only</span>
        </MotionSection>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
          variants={stagger(0.12)}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}
        >
          {OFFICES.map(o => (
            <motion.div key={o.city} variants={fadeUp}>
              <TiltCard strength={8} glare style={{ height: '100%' }}>
                <article style={{ border: `1px solid ${V2.line}`, padding: 28, background: V2.bg, height: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <HCaps size={48} line={1} weight={800} tracking="-0.025em">{o.city}</HCaps>
                    <span style={{ fontFamily: V2.font, fontSize: 11, letterSpacing: '0.16em', color: accent || V2.coral, textTransform: 'uppercase' }}>{o.tz}</span>
                  </div>
                  <div style={{ marginTop: 20, fontFamily: V2.font, fontSize: 13.5, color: V2.cream, lineHeight: 1.65 }}>
                    {o.addr.map((a, i) => <div key={i}>{a}</div>)}
                  </div>
                  <div style={{ marginTop: 20, paddingTop: 16, borderTop: `1px solid ${V2.line}` }}>
                    <Eyebrow color={V2.mute}>Principal</Eyebrow>
                    <div style={{ marginTop: 6, fontFamily: V2.font, fontSize: 14, color: V2.cream, fontWeight: 500 }}>{o.principal}</div>
                  </div>
                  <div style={{ marginTop: 20 }}>
                    <Eyebrow color={V2.mute}>Direct</Eyebrow>
                    <div style={{ marginTop: 8, fontFamily: V2.mono, fontSize: 12.5, color: V2.cream }}>{o.tel}</div>
                    <div style={{ marginTop: 4, fontFamily: V2.mono, fontSize: 12.5, color: V2.mute }}>{o.email}</div>
                  </div>
                  <div style={{ marginTop: 24 }}><GhostCTA>Open in maps</GhostCTA></div>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <SiteFooter accent={accent} onNavigate={onNavigate} />
    </div>
  );
}
