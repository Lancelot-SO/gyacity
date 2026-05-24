import { useState } from 'react';
import { V2 } from '@/tokens';
import { ArrowUR } from './Icons';

export function MoreLink({ children = 'More details', style, color, accent }) {
  const [hov, setHov] = useState(false);
  return (
    <span
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        fontFamily: V2.font, fontSize: 12, fontWeight: 600,
        letterSpacing: '0.14em', textTransform: 'uppercase',
        color: hov ? (accent || V2.coral) : (color || V2.cream),
        textDecoration: 'underline', textUnderlineOffset: 5,
        textDecorationThickness: 1, cursor: 'pointer',
        transition: 'color 0.2s',
        ...style,
      }}
    >
      {children}
      <ArrowUR size={11} />
    </span>
  );
}
