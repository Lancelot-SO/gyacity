import { motion } from 'framer-motion';
import { V2 } from '@/tokens';
import { HCaps, Eyebrow, CTA, StarField, ArrowUR } from '@/components/ui';
import { LouverPhoto } from '@/components/LouverPhoto';
import { TEAM } from '@/data';
import { MobileFooter } from './MobileFooter';

function MobileContactBtn({ href, children, target }) {
  return (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '8px 14px',
        border: `1px solid ${V2.line}`,
        fontFamily: V2.font, fontSize: 10,
        letterSpacing: '0.14em', textTransform: 'uppercase',
        color: V2.cream, textDecoration: 'none',
      }}
    >
      {children}
      <ArrowUR size={8} />
    </a>
  );
}

export function MobileTeam({ accent, onNavigate }) {
  const a = accent || V2.coral;

  return (
    <div style={{ padding: '0 16px 24px' }}>

      {/* Masthead */}
      <div style={{ border: `1px solid ${V2.line}`, padding: 24, marginBottom: 12, position: 'relative', overflow: 'hidden' }}>
        <StarField density={0.5} />
        <div style={{ position: 'relative' }}>
          <Eyebrow color={a}>Executive Leadership</Eyebrow>
          <HCaps size={56} line={0.9} weight={800} tracking="-0.03em" style={{ marginTop: 16 }}>
            The<br /><span style={{ color: a }}>Principals</span>
            <span style={{ fontSize: 16, fontWeight: 500, letterSpacing: 0, verticalAlign: 'top', marginLeft: 6, color: V2.mute }}>03</span>
          </HCaps>
          <p style={{ marginTop: 18, fontFamily: V2.font, fontSize: 13, color: V2.mute, lineHeight: 1.65 }}>
            Three principals. Three studios. Kumasi · Lagos · Berlin.
          </p>
        </div>
      </div>

      {/* Principal cards */}
      {TEAM.map((member, i) => (
        <motion.div
          key={member.index}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          style={{ border: `1px solid ${V2.line}`, marginBottom: 12, overflow: 'hidden' }}
        >
          {/* Photo — louver reveal on tap */}
          <div style={{ width: '100%', aspectRatio: '3/2', overflow: 'hidden', position: 'relative' }}>
            <LouverPhoto src={member.photo} hoverSrc={member.photoHover} initials={member.initials} accent={accent} toggleOnClick />
          </div>

          <div style={{ padding: 24 }}>
            {/* Index chip + since */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <span style={{
                fontFamily: V2.font, fontSize: 9.5, fontWeight: 700,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: a, border: `1px solid ${a}`, padding: '3px 8px',
              }}>{member.index}</span>
              <span style={{
                fontFamily: V2.font, fontSize: 9.5,
                letterSpacing: '0.18em', textTransform: 'uppercase', color: V2.dim,
              }}>Est. {member.since}</span>
            </div>

            {/* Name + role + city */}
            <HCaps size={38} line={0.92} weight={800} tracking="-0.025em">
              {member.nameLine1}<br />{member.nameLine2}
            </HCaps>
            <Eyebrow color={a} style={{ marginTop: 12 }}>{member.role}</Eyebrow>
            <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: V2.mute, flexShrink: 0 }} />
              <span style={{ fontFamily: V2.font, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: V2.mute }}>
                {member.city}
              </span>
            </div>

            {/* Separator */}
            <div style={{ height: 1, background: V2.line, margin: '20px 0' }} />

            {/* Bio */}
            <p style={{ fontFamily: V2.font, fontSize: 13, color: V2.mute, lineHeight: 1.7, margin: 0 }}>
              {member.bio}
            </p>

            {/* Disciplines */}
            <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 0 }}>
              {member.focus.map(f => (
                <div key={f} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '7px 0', borderBottom: `1px solid ${V2.lineSoft}`,
                }}>
                  <span style={{
                    display: 'inline-block', width: 4, height: 4,
                    border: `1px solid ${V2.dim}`, transform: 'rotate(45deg)', flexShrink: 0,
                  }} />
                  <span style={{ fontFamily: V2.font, fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: V2.mute }}>
                    {f}
                  </span>
                </div>
              ))}
            </div>

            {/* Separator */}
            <div style={{ height: 1, background: V2.line, margin: '20px 0' }} />

            {/* Contact */}
            <Eyebrow color={V2.mute}>Direct contact</Eyebrow>
            <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <MobileContactBtn href={`mailto:${member.email}`}>Email</MobileContactBtn>
              {member.whatsapp && (
                <MobileContactBtn href={member.whatsapp} target="_blank">WhatsApp</MobileContactBtn>
              )}
            </div>
            <div style={{
              marginTop: 12,
              fontFamily: V2.mono, fontSize: 11.5, color: V2.dim, letterSpacing: '0.04em',
            }}>
              <a href={`tel:${member.tel.replace(/\s/g, '')}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                {member.tel}
              </a>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Founding quote */}
      <div style={{ border: `1px solid ${V2.line}`, padding: 24, marginBottom: 12 }}>
        <Eyebrow color={a}>Founding Principal</Eyebrow>
        <HCaps size={20} line={1.32} weight={500} tracking="-0.012em" style={{ marginTop: 16, textTransform: 'none' }}>
          "{TEAM[0].quote}"
        </HCaps>
        <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 28, height: 1, background: a, flexShrink: 0 }} />
          <span style={{ fontFamily: V2.font, fontSize: 9.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: V2.mute }}>
            Sydney Gyasi Nimako
          </span>
        </div>
      </div>

      {/* CTA */}
      <div style={{ border: `1px solid ${V2.line}`, padding: 24, marginBottom: 12, position: 'relative', overflow: 'hidden' }}>
        <StarField density={0.6} />
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <HCaps size={36} line={0.95} weight={800} tracking="-0.025em">
            Work with<br /><span style={{ color: a }}>the studio</span>
          </HCaps>
          <CTA accent={accent} onClick={() => onNavigate?.('contact')}>Begin a conversation</CTA>
        </div>
      </div>

      <MobileFooter accent={accent} />
    </div>
  );
}
