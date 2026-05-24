import { motion } from 'framer-motion';
import { V2 } from '@/tokens';
import { ArrowUR } from './Icons';

export function GhostCTA({ children, style, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        padding: '10px 0', background: 'transparent',
        border: 'none', borderRadius: 0,
        borderBottom: `1px solid ${V2.cream}`,
        fontFamily: V2.font, fontSize: 12.5, fontWeight: 600,
        letterSpacing: '0.16em', textTransform: 'uppercase',
        color: V2.cream, cursor: 'none',
        ...style,
      }}
      whileHover={{ color: V2.coral, borderColor: V2.coral }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
    >
      {children}
      <motion.span whileHover={{ x: 3, y: -3 }} transition={{ duration: 0.2 }}>
        <ArrowUR size={11} />
      </motion.span>
    </motion.button>
  );
}
