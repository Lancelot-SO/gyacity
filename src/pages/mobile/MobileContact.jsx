import { V2 } from '@/tokens';
import { HCaps, Eyebrow, ArrowUR, StarField } from '@/components/ui';
import { OFFICES } from '@/data';
import { MobileFooter } from './MobileFooter';

export function MobileContact({ accent }) {
  return (
    <div style={{ padding: '0 16px 24px' }}>
      <div style={{ border: `1px solid ${V2.line}`, padding: 24, marginBottom: 12, position: 'relative', overflow: 'hidden' }}>
        <StarField density={0.5} />
        <div style={{ position: 'relative' }}>
          <Eyebrow color={accent || V2.coral}>Get in touch</Eyebrow>
          <HCaps size={56} line={0.9} weight={800} tracking="-0.03em" style={{ marginTop: 12 }}>
            Let&rsquo;s build something <span style={{ color: accent || V2.coral }}>quiet.</span>
          </HCaps>
        </div>
      </div>

      <div style={{ border: `1px solid ${V2.line}`, padding: 24, marginBottom: 12 }}>
        <Eyebrow color={accent || V2.coral}>Quick contact</Eyebrow>
        <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { href: 'https://wa.me/233249051184', label: 'WhatsApp', value: '+233 24 905 1184', badge: 'Replies ~4 min' },
            { href: 'mailto:studio@gyacity.com',  label: 'Email',    value: 'studio@gyacity.com' },
          ].map(row => (
            <a key={row.label} href={row.href} style={{ padding: '16px 20px', border: `1px solid ${V2.line}`, background: V2.bg2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: 4 }}>
              <div>
                <Eyebrow color={V2.mute} style={{ marginBottom: 6 }}>{row.label}</Eyebrow>
                <div style={{ fontFamily: V2.mono, fontSize: 14, color: V2.cream }}>{row.value}</div>
                {row.badge && <div style={{ marginTop: 4, fontFamily: V2.font, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: accent || V2.coral }}>{row.badge}</div>}
              </div>
              <ArrowUR size={16} />
            </a>
          ))}
        </div>
      </div>

      {OFFICES.map(o => (
        <div key={o.city} style={{ border: `1px solid ${V2.line}`, padding: 24, marginBottom: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <HCaps size={36} line={1} weight={800} tracking="-0.025em">{o.city}</HCaps>
            <span style={{ fontFamily: V2.font, fontSize: 11, letterSpacing: '0.16em', color: accent || V2.coral, textTransform: 'uppercase' }}>{o.tz}</span>
          </div>
          <div style={{ marginTop: 16, fontFamily: V2.font, fontSize: 13, color: V2.cream, lineHeight: 1.65 }}>
            {o.addr.map((a, i) => <div key={i}>{a}</div>)}
          </div>
          <div style={{ marginTop: 12, fontFamily: V2.mono, fontSize: 12, color: V2.cream }}>{o.tel}</div>
          <div style={{ marginTop: 4, fontFamily: V2.mono, fontSize: 12, color: V2.mute }}>{o.email}</div>
        </div>
      ))}

      <MobileFooter accent={accent} />
    </div>
  );
}
