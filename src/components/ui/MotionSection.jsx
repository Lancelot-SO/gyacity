import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/animations/variants';

export function MotionSection({ children, className, style, variants = fadeUp, delay = 0, staggered = false, once = true, margin = '-80px' }) {
  const container = staggered ? stagger() : undefined;

  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      variants={container || variants}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  );
}

export function MotionChild({ children, variants = fadeUp, style, className }) {
  return (
    <motion.div variants={variants} style={style} className={className}>
      {children}
    </motion.div>
  );
}
