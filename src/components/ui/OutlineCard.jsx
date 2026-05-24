import { V2 } from '@/tokens';

export function OutlineCard({ children, style, pad = 28 }) {
  return (
    <div style={{ border: `1px solid ${V2.line}`, padding: pad, background: V2.bg, ...style }}>
      {children}
    </div>
  );
}
