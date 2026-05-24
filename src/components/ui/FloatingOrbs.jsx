import { motion } from 'framer-motion';
import { V2 } from '@/tokens';

const ORBS = [
  { x: '8%',  y: '20%', size: 300, color: V2.coral,  dur: 14, delay: 0   },
  { x: '80%', y: '60%', size: 400, color: V2.brass,  dur: 18, delay: 3   },
  { x: '50%', y: '80%', size: 250, color: V2.oxblood, dur: 12, delay: 6  },
  { x: '90%', y: '10%', size: 200, color: V2.blue,   dur: 16, delay: 1.5 },
];

export function FloatingOrbs({ opacity = 0.08 }) {
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: orb.x, top: orb.y,
            width: orb.size, height: orb.size,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            opacity, filter: 'blur(60px)',
            translateX: '-50%', translateY: '-50%',
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
            scale: [1, 1.15, 0.92, 1],
          }}
          transition={{
            duration: orb.dur,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
