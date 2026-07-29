import { V2 } from '@/tokens';

export function Pill({ active, children, accent, onClick, style, type = 'button' }) {
  const a = accent || V2.coral;
  return (
    <button type={type} onClick={onClick} style={{
      padding: '10px 18px', borderRadius: 999,
      border: `1px solid ${active ? a : V2.line}`,
      background: active ? `${a}22` : 'transparent',
      color: active ? a : V2.cream,
      fontFamily: V2.font, fontSize: 13, fontWeight: 500,
      letterSpacing: '0.01em', cursor: 'pointer',
      transition: 'all 0.2s',
      ...style,
    }}>
      {children}
    </button>
  );
}
