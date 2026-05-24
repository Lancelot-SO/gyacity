import { V2 } from '@/tokens';
import { HCaps, StarField } from '@/components/ui';

export function MobileFooter({ accent }) {
  return (
    <div style={{ border: `1px solid ${V2.line}`, padding: 20, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <StarField density={0.4} />
      <HCaps as="div" size={48} line={0.9} weight={800} tracking="-0.04em" style={{ position: 'relative' }}>
        Gyacity<span style={{ color: accent || V2.coral }}>©</span>
      </HCaps>
      <div style={{ position: 'relative', marginTop: 14, fontFamily: V2.font, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: V2.mute }}>Accra · Lagos · Berlin</div>
      <div style={{ position: 'relative', marginTop: 6, fontFamily: V2.font, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: V2.dim }}>© MMXXVI Gyacity Ltd.</div>
    </div>
  );
}
