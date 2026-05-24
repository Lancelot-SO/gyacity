import { V2 } from '@/tokens';
import { HCaps, Eyebrow, CTA, Img, StarField } from '@/components/ui';
import { IMGS } from '@/data';
import { MobileFooter } from './MobileFooter';

const NUMBERS = [
  { n: '124', l: 'Commissions delivered.' },
  { n: '32',  l: 'Team members.' },
  { n: '12',  l: 'Years in practice.' },
  { n: '8',   l: 'Countries served.' },
];

export function MobileAbout({ accent, onNavigate }) {
  return (
    <div style={{ padding: '0 16px 24px' }}>
      <div style={{ border: `1px solid ${V2.line}`, padding: 24, marginBottom: 12 }}>
        <Eyebrow color={accent || V2.coral}>The studio</Eyebrow>
        <HCaps size={56} line={0.92} weight={800} tracking="-0.03em" style={{ marginTop: 16 }}>
          We build <span style={{ color: accent || V2.coral }}>quiet,</span> considered places
        </HCaps>
        <div style={{ marginTop: 20 }}>
          <Img src={IMGS.kitchen} ratio="4/3" dark={0.08} />
        </div>
      </div>

      <div style={{ border: `1px solid ${V2.line}`, padding: 24, marginBottom: 12 }}>
        <HCaps size={28} weight={800} tracking="-0.02em" style={{ marginBottom: 32 }}>By the numbers</HCaps>
        {NUMBERS.map(s => (
          <div key={s.n} style={{ marginBottom: 28 }}>
            <HCaps size={80} line={0.85} weight={500} tracking="-0.03em" color={V2.cream2}>
              {s.n}<span style={{ color: accent || V2.coral }}>+</span>
            </HCaps>
            <div style={{ marginTop: 8, fontSize: 12, color: V2.mute }}>{s.l}</div>
          </div>
        ))}
      </div>

      <div style={{ border: `1px solid ${V2.line}`, padding: 24, marginBottom: 12, position: 'relative', overflow: 'hidden' }}>
        <StarField density={0.6} />
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <HCaps size={40} line={0.95} weight={800} tracking="-0.025em">
            Begin a <span style={{ color: accent || V2.coral }}>conversation</span>
          </HCaps>
          <CTA accent={accent} onClick={() => onNavigate('contact')}>Book consultation</CTA>
        </div>
      </div>

      <MobileFooter accent={accent} />
    </div>
  );
}
