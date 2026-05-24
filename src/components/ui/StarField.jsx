import { motion } from 'framer-motion';

const STARS = [
  { x:'13%', y:'22%', s:1.2, dur:3.2, delay:0 },
  { x:'67%', y:'8%',  s:1.0, dur:4.1, delay:1.1 },
  { x:'88%', y:'42%', s:1.5, dur:2.8, delay:0.6 },
  { x:'24%', y:'68%', s:1.0, dur:5.0, delay:1.8 },
  { x:'56%', y:'84%', s:1.2, dur:3.6, delay:0.3 },
  { x:'92%', y:'12%', s:1.0, dur:4.4, delay:2.2 },
  { x:'8%',  y:'91%', s:1.3, dur:3.0, delay:0.9 },
  { x:'41%', y:'32%', s:1.0, dur:4.8, delay:1.5 },
  { x:'35%', y:'55%', s:0.8, dur:3.3, delay:2.7 },
  { x:'72%', y:'76%', s:1.1, dur:4.0, delay:0.4 },
  { x:'18%', y:'45%', s:1.0, dur:5.2, delay:1.2 },
  { x:'60%', y:'25%', s:0.9, dur:3.8, delay:3.0 },
];

export function StarField({ density = 1, style }) {
  const shown = STARS.slice(0, Math.round(STARS.length * Math.min(density, 1)));
  return (
    <div style={{ position:'absolute', inset:0, pointerEvents:'none', ...style }}>
      {shown.map((star, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: star.x, top: star.y,
            width: star.s * 2, height: star.s * 2,
            borderRadius: '50%',
            background: 'rgba(244,220,192,0.7)',
            translateX: '-50%', translateY: '-50%',
          }}
          animate={{
            opacity: [0.2, 0.9, 0.2],
            scale:   [1, 1.4, 1],
            x:       [0, (i % 3 - 1) * 5, 0],
            y:       [0, (i % 2 === 0 ? 1 : -1) * 5, 0],
          }}
          transition={{
            duration: star.dur,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
