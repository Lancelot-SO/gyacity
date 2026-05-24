import { motion } from 'framer-motion';
import { V2 } from '@/tokens';

export function Img({ src, alt, ratio, dark = 0, style, children, animate = true }) {
  return (
    <div className="img-zoom img-shimmer" style={{ position: 'relative', width: '100%', aspectRatio: ratio, overflow: 'hidden', background: V2.bg2, ...style }}>
      <motion.img
        src={src}
        alt={alt || ''}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        loading="lazy"
        initial={animate ? { scale: 1.08, opacity: 0 } : undefined}
        whileInView={animate ? { scale: 1, opacity: 1 } : undefined}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.1, ease: [0.0, 0.0, 0.2, 1] }}
      />
      {dark > 0 && (
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg,rgba(10,9,8,${dark * 0.3}) 0%,rgba(10,9,8,${dark}) 100%)` }} />
      )}
      {children}
    </div>
  );
}
