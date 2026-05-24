import { motion } from 'framer-motion';
import { useTilt } from '@/hooks/useTilt';

export function TiltCard({ children, style, strength = 12, className, glare = true }) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(strength);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        position: 'relative',
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
        ...style,
      }}
      className={className}
    >
      {children}

      {glare && (
        <motion.div
          style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)',
            pointerEvents: 'none', borderRadius: 'inherit',
            opacity: 0,
          }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.div>
  );
}
