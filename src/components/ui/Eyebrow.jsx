import { V2 } from '@/tokens';

export function Eyebrow({ children, color, style }) {
  return (
    <div style={{
      fontFamily: V2.font, fontSize: 12, fontWeight: 500,
      letterSpacing: '0.18em', textTransform: 'uppercase',
      color: color || V2.mute, ...style,
    }}>
      {children}
    </div>
  );
}
