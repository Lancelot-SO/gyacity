import { V2 } from '@/tokens';
import { ArrowL, ArrowR } from './Icons';

export function NavArrows({ accent, onPrev, onNext }) {
  const a = accent || V2.coral;
  return (
    <div style={{ display: 'inline-flex', gap: 12 }}>
      <button onClick={onPrev} style={{ width: 38, height: 38, borderRadius: '50%', border: `1px solid ${V2.line}`, background: 'transparent', color: V2.cream, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        <ArrowL size={13} />
      </button>
      <button onClick={onNext} style={{ width: 38, height: 38, borderRadius: '50%', border: 'none', background: a, color: V2.bg, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        <ArrowR size={13} />
      </button>
    </div>
  );
}
