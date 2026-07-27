import { useState } from 'react';
import { V2 } from '@/tokens';
import artfricaLogo from '@/assets/artfrica-mask.png';

// Acknowledgment sign-off: "A design by Artfrica Studios".
// The multicolour logo is masked down to a single palette tone (cream, → coral
// on hover) so it reads as part of Gyacity's own type system rather than a
// foreign brand drop-in. Framed by thin hairlines, mono eyebrow above.
export function StudioCredit() {
  const [hover, setHover] = useState(false);
  const tone = hover ? (V2.coral) : V2.cream;

  return (
    <a
      href="https://artfricastudio.com"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        textDecoration: 'none',
      }}
    >
      <span style={{ width: 34, height: 1, background: V2.line }} />
      <span style={{
        fontFamily: V2.mono,
        fontSize: 9,
        letterSpacing: '0.28em',
        textTransform: 'uppercase',
        color: hover ? V2.mute : V2.dim,
        transition: 'color 0.3s ease',
      }}>
        A design by
      </span>
      <span
        aria-label="Artfrica Studios"
        role="img"
        style={{
          width: 84,
          height: 27,
          backgroundColor: tone,
          opacity: hover ? 1 : 0.7,
          transition: 'background-color 0.3s ease, opacity 0.3s ease',
          WebkitMaskImage: `url(${artfricaLogo})`,
          maskImage: `url(${artfricaLogo})`,
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
        }}
      />
      <span style={{ width: 34, height: 1, background: V2.line }} />
    </a>
  );
}
