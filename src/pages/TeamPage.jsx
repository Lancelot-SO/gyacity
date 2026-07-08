import { motion } from 'framer-motion';
import { V2 } from '@/tokens';
import { HCaps, Eyebrow, CTA, StarField, MotionSection, FloatingOrbs, ArrowUR } from '@/components/ui';
import { LouverPhoto } from '@/components/LouverPhoto';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { TEAM } from '@/data';
import { fadeUp, fadeLeft, fadeRight, stagger, EASE_OUT } from '@/animations/variants';

/* ── Contact button ─────────────────────────────────────────────────────────── */

function ContactBtn({ href, children, target }) {
  return (
    <motion.a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 7,
        padding: '9px 16px',
        border: `1px solid ${V2.line}`,
        fontFamily: V2.font, fontSize: 10.5,
        letterSpacing: '0.15em', textTransform: 'uppercase',
        color: V2.cream, textDecoration: 'none', cursor: 'none',
      }}
      whileHover={{ borderColor: V2.coral, color: V2.coral }}
      transition={{ duration: 0.18 }}
    >
      {children}
      <ArrowUR size={9} />
    </motion.a>
  );
}

/* ── Diamond list marker ─────────────────────────────────────────────────────── */

function Diamond({ color }) {
  return (
    <span style={{
      display: 'inline-block', width: 5, height: 5,
      border: `1px solid ${color || V2.dim}`,
      transform: 'rotate(45deg)', flexShrink: 0,
    }} />
  );
}

/* ── Principal section ──────────────────────────────────────────────────────── */

function PrincipalSection({ member, accent, rowIndex }) {
  const a = accent || V2.coral;
  const flipped = rowIndex % 2 === 1; // Ifeoma: text left, image right

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: EASE_OUT }}
      style={{ borderTop: `1px solid ${V2.line}` }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>

        {/* Image column */}
        <div style={{
          order: flipped ? 2 : 1,
          position: 'relative',
          minHeight: 580,
          borderRight: !flipped ? `1px solid ${V2.line}` : 'none',
          borderLeft: flipped ? `1px solid ${V2.line}` : 'none',
        }}>
          <LouverPhoto src={member.photo} hoverSrc={member.photoHover} initials={member.initials} accent={a} />
        </div>

        {/* Text column */}
        <div style={{
          order: flipped ? 1 : 2,
          padding: '64px 52px',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          borderRight: flipped ? `1px solid ${V2.line}` : 'none',
        }}>

          {/* Top header: index chip + since */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 36 }}>
            <span style={{
              display: 'inline-block',
              fontFamily: V2.font, fontSize: 10, fontWeight: 700,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: a, border: `1px solid ${a}`,
              padding: '4px 10px',
            }}>{member.index}</span>
            <span style={{
              fontFamily: V2.font, fontSize: 10,
              letterSpacing: '0.2em', textTransform: 'uppercase', color: V2.dim,
            }}>Est. {member.since}</span>
          </div>

          {/* Name */}
          <div>
            <HCaps size={72} line={0.88} weight={800} tracking="-0.035em">
              {member.nameLine1}<br />{member.nameLine2}
            </HCaps>
            <div style={{ marginTop: 18 }}>
              <Eyebrow color={a}>{member.role}</Eyebrow>
            </div>

            {/* City */}
            <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: V2.mute, flexShrink: 0 }} />
              <span style={{
                fontFamily: V2.font, fontSize: 10.5,
                letterSpacing: '0.18em', textTransform: 'uppercase', color: V2.mute,
              }}>{member.city}</span>
            </div>
          </div>

          {/* Separator */}
          <div style={{ height: 1, background: V2.line, margin: '32px 0' }} />

          {/* Bio */}
          <p style={{
            fontFamily: V2.font, fontSize: 13.5,
            color: V2.mute, lineHeight: 1.74, margin: 0,
          }}>{member.bio}</p>

          {/* Disciplines */}
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={stagger(0.08)}
            style={{ display: 'flex', flexDirection: 'column', marginTop: 28 }}
          >
            {member.focus.map(f => (
              <motion.div
                key={f}
                variants={fadeUp}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '8px 0',
                  borderBottom: `1px solid ${V2.lineSoft}`,
                }}
              >
                <Diamond color={V2.dim} />
                <span style={{
                  fontFamily: V2.font, fontSize: 10.5,
                  letterSpacing: '0.16em', textTransform: 'uppercase', color: V2.mute,
                }}>{f}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Separator */}
          <div style={{ height: 1, background: V2.line, margin: '32px 0' }} />

          {/* Contact block */}
          <div>
            <Eyebrow color={V2.mute}>Direct contact</Eyebrow>
            <div style={{ marginTop: 14, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <ContactBtn href={`mailto:${member.email}`}>
                Email directly
              </ContactBtn>
              {member.whatsapp && (
                <ContactBtn href={member.whatsapp} target="_blank">
                  WhatsApp
                </ContactBtn>
              )}
            </div>
            <div style={{
              marginTop: 14,
              fontFamily: V2.mono, fontSize: 12.5, color: V2.dim,
              letterSpacing: '0.04em',
            }}>
              <a
                href={`tel:${member.tel.replace(/\s/g, '')}`}
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                {member.tel}
              </a>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

/* ── Page ───────────────────────────────────────────────────────────────────── */

export function TeamPage({ accent, onNavigate }) {
  const a = accent || V2.coral;

  return (
    <div style={{ background: V2.bg, color: V2.cream, fontFamily: V2.font }}>

      {/* ── Masthead ──────────────────────────────────────────────────────── */}
      <section style={{ padding: '80px 40px 72px', position: 'relative', overflow: 'hidden' }}>
        <StarField density={0.55} />
        <FloatingOrbs opacity={0.06} />

        <div style={{
          position: 'absolute', right: -24, top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: V2.font, fontWeight: 900,
          fontSize: 'clamp(220px, 30vw, 420px)',
          letterSpacing: '-0.07em', lineHeight: 1,
          color: V2.cream, opacity: 0.026,
          pointerEvents: 'none', userSelect: 'none',
        }}>03</div>

        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1.55fr', gap: 80, alignItems: 'flex-end' }}>

          <MotionSection variants={fadeLeft}>
            <Eyebrow color={a}>Executive Leadership</Eyebrow>
            <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { city: 'Kumasi', len: 36 },
                { city: 'Lagos',  len: 24 },
                { city: 'Berlin', len: 18 },
              ].map(({ city, len }, i) => (
                <div key={city} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: len }}
                    transition={{ duration: 0.9, delay: 0.4 + i * 0.1, ease: EASE_OUT }}
                    style={{ height: 1, background: a, flexShrink: 0 }}
                  />
                  <span style={{
                    fontFamily: V2.font, fontSize: 11,
                    letterSpacing: '0.22em', textTransform: 'uppercase', color: V2.mute,
                  }}>{city}</span>
                </div>
              ))}
            </div>
          </MotionSection>

          <MotionSection variants={fadeRight}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <HCaps size="clamp(72px, 9.5vw, 130px)" line={0.88} weight={800} tracking="-0.04em">
                The<br /><span style={{ color: a }}>Principals</span>
              </HCaps>
              <span style={{
                position: 'absolute', top: 10, right: -52,
                fontFamily: V2.font, fontSize: 17, fontWeight: 500,
                letterSpacing: '-0.01em', color: V2.mute, lineHeight: 1,
              }}>03</span>
            </div>
            <p style={{
              marginTop: 28, fontFamily: V2.font, fontSize: 14,
              color: V2.mute, lineHeight: 1.68, maxWidth: 400,
            }}>
              Three principals. Three studios. Architecture, interiors and construction — led from Kumasi, Lagos and Berlin.
            </p>
          </MotionSection>
        </div>
      </section>

      {/* ── Principal sections ─────────────────────────────────────────────── */}
      <section style={{ borderTop: `1px solid ${V2.line}` }}>
        {TEAM.map((member, i) => (
          <PrincipalSection key={member.index} member={member} accent={accent} rowIndex={i} />
        ))}
      </section>

      {/* ── Founding quote ──────────────────────────────────────────────────── */}
      <section style={{ padding: '96px 40px', borderTop: `1px solid ${V2.line}`, position: 'relative', overflow: 'hidden' }}>
        <FloatingOrbs opacity={0.05} />
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 2.4fr', gap: 80 }}>
          <MotionSection variants={fadeLeft}>
            <Eyebrow color={a}>Founding Principal</Eyebrow>
          </MotionSection>
          <MotionSection variants={fadeRight}>
            <HCaps size={40} line={1.27} weight={500} tracking="-0.02em" style={{ textTransform: 'none' }}>
              "{TEAM[0].quote}"
            </HCaps>
            <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 36, height: 1, background: a, flexShrink: 0 }} />
              <span style={{ fontFamily: V2.font, fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: V2.mute }}>
                Brown Gyasi Sydney — Kumasi, 2019
              </span>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* ── CTA strip ──────────────────────────────────────────────────────── */}
      <section style={{ padding: '80px 40px', position: 'relative', overflow: 'hidden', borderTop: `1px solid ${V2.line}` }}>
        <StarField density={0.7} />
        <FloatingOrbs opacity={0.06} />
        <MotionSection style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 40, flexWrap: 'wrap' }}>
          <HCaps size={64} line={0.94} weight={800} tracking="-0.026em">
            Work with<br /><span style={{ color: a }}>the studio</span>
          </HCaps>
          <CTA big accent={accent} onClick={() => onNavigate?.('contact')}>Begin a conversation</CTA>
        </MotionSection>
      </section>

      <SiteFooter accent={accent} onNavigate={onNavigate} />
    </div>
  );
}
