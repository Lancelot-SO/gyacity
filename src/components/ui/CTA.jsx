import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { V2 } from '@/tokens';
import { ArrowUR } from './Icons';

export function CTA({ children, accent, onClick, big, style }) {
  const a = accent || V2.coral;
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 25 });
  const springY = useSpring(y, { stiffness: 300, damping: 25 });

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width  / 2)) * 0.35);
    y.set((e.clientY - (rect.top  + rect.height / 2)) * 0.35);
  };

  const onMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 14,
        padding: big ? '20px 28px' : '14px 22px',
        background: a, color: V2.bg, border: 'none',
        borderRadius: 999, cursor: 'none',
        fontFamily: V2.font, fontSize: big ? 14 : 12.5, fontWeight: 700,
        letterSpacing: '0.14em', textTransform: 'uppercase',
        x: springX, y: springY,
        ...style,
      }}
      whileHover={{ background: V2.cream2, scale: 1.04, boxShadow: `0 8px 40px ${a}55` }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
    >
      {children}
      <motion.span whileHover={{ x: 3, y: -3 }} transition={{ duration: 0.2 }}>
        <ArrowUR size={big ? 13 : 11} />
      </motion.span>
    </motion.button>
  );
}
