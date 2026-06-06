import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { V2 } from '@/tokens';

export function VideoFrame({ src, poster, ratio = '16/9', accent, label, style }) {
  const a = accent || V2.coral;
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);

  const play = () => ref.current?.play();

  return (
    <div className="img-shimmer" style={{ position: 'relative', width: '100%', aspectRatio: ratio, overflow: 'hidden', background: V2.bg2, ...style }}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        controls={playing}
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />

      {!playing && (
        <motion.button
          onClick={play}
          whileHover="hov"
          initial="rest"
          style={{
            position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 18,
            background: 'linear-gradient(180deg, rgba(10,9,8,0.12) 0%, rgba(10,9,8,0.55) 100%)',
            border: 'none', cursor: 'none', color: V2.cream,
          }}
        >
          <motion.span
            variants={{ rest: { scale: 1 }, hov: { scale: 1.08 } }}
            transition={{ duration: 0.25 }}
            style={{
              width: 76, height: 76, borderRadius: '50%', background: a, color: V2.bg,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: `0 14px 50px ${a}66`,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M7 4.5l11 6.5-11 6.5z" fill="currentColor" />
            </svg>
          </motion.span>
          {label && (
            <span style={{ fontFamily: V2.font, fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              {label}
            </span>
          )}
        </motion.button>
      )}
    </div>
  );
}
