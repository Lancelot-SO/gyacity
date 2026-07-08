import { useState } from 'react';
import { V2 } from '@/tokens';

/* ── Architectural louver reveal ──────────────────────────────────────────────
   On hover, the portrait's vertical slats flip open left-to-right in a stagger,
   revealing the member's second photo beneath. A thin coral seam rides the
   leading edge as it sweeps across.

   Each louver flips in its OWN local perspective (perspective() lives in the
   per-slat transform, not on the container) so every slat rotates symmetrically
   — no shared vanishing point, so no skewed strips on the outer edges.

   Renders as an absolute fill — the parent must be `position: relative` with a
   defined size (or aspect-ratio). Falls back to an initials placeholder when no
   photo is supplied. */

const SLATS    = 7;
const PERSP     = 800;   // per-slat perspective distance (px)
const BASE_MS   = 520;   // per-slat flip duration
const STAGGER   = 55;    // delay between adjacent slats
const TOTAL_MS  = BASE_MS + (SLATS - 1) * STAGGER;
const EASE      = 'cubic-bezier(0.76, 0, 0.24, 1)';

export function LouverPhoto({ src, hoverSrc, initials, accent, toggleOnClick = false }) {
  const a = accent || V2.coral;
  const [open, setOpen] = useState(false);
  const canFlip = Boolean(src && hoverSrc);

  const handlers = !canFlip
    ? {}
    : toggleOnClick
      ? { onClick: () => setOpen(o => !o) }
      : { onMouseEnter: () => setOpen(true), onMouseLeave: () => setOpen(false) };

  /* ── Fallback placeholder (no photo) ── */
  if (!src) {
    const C = 22;
    return (
      <div style={{
        position: 'absolute', inset: 0, background: V2.bg2,
        display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
      }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.045 }} preserveAspectRatio="none">
          <defs>
            <pattern id={`g-${initials}`} width="32" height="32" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="32" stroke={V2.cream} strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#g-${initials})`} />
        </svg>
        {[
          { top: 24, left: 24, borderTop: `1px solid ${a}`, borderLeft: `1px solid ${a}` },
          { top: 24, right: 24, borderTop: `1px solid ${a}`, borderRight: `1px solid ${a}` },
          { bottom: 24, left: 24, borderBottom: `1px solid ${a}`, borderLeft: `1px solid ${a}` },
          { bottom: 24, right: 24, borderBottom: `1px solid ${a}`, borderRight: `1px solid ${a}` },
        ].map((s, i) => (
          <div key={i} style={{ position: 'absolute', width: C, height: C, ...s }} />
        ))}
        <div style={{ fontFamily: V2.font, fontWeight: 800, fontSize: 108, letterSpacing: '-0.05em', lineHeight: 1, color: V2.cream, opacity: 0.05, userSelect: 'none', pointerEvents: 'none' }}>{initials}</div>
      </div>
    );
  }

  return (
    <div
      {...handlers}
      style={{
        position: 'absolute', inset: 0, overflow: 'hidden', background: V2.bg2,
        cursor: toggleOnClick && canFlip ? 'pointer' : 'inherit',
      }}
    >
      {/* Second photo — revealed beneath the slats */}
      {hoverSrc && (
        <img
          src={hoverSrc}
          alt=""
          loading="lazy"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', display: 'block', zIndex: 0,
            transform: open ? 'scale(1)' : 'scale(1.06)',
            transition: 'transform 1.3s ease',
          }}
        />
      )}

      {/* Primary photo — sliced into flipping vertical louvers */}
      {Array.from({ length: SLATS }).map((_, i) => {
        const delay = open ? i * STAGGER : (SLATS - 1 - i) * STAGGER;
        return (
          <div
            key={i}
            style={{
              position: 'absolute', top: 0, bottom: 0,
              left: `${(i * 100) / SLATS}%`, width: `${100 / SLATS}%`,
              overflow: 'hidden', zIndex: 2,
            }}
          >
            <div style={{
              position: 'absolute', inset: 0,
              transformOrigin: '50% 50%',
              backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
              transform: `perspective(${PERSP}px) rotateY(${open ? -90 : 0}deg)`,
              opacity: open ? 0 : 1,
              transition: `transform ${BASE_MS}ms ${EASE} ${delay}ms, opacity ${BASE_MS}ms ${EASE} ${delay}ms`,
            }}>
              <img
                src={src}
                alt=""
                loading="lazy"
                style={{
                  position: 'absolute', top: 0, left: `${-i * 100}%`,
                  width: `${SLATS * 100}%`, height: '100%',
                  objectFit: 'cover', objectPosition: 'center', display: 'block',
                  maxWidth: 'none',
                }}
              />
              {/* Per-slat shading so the louvers read as separate blades mid-flip */}
              <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.16) 100%)',
                opacity: open ? 1 : 0,
                transition: `opacity ${BASE_MS}ms ${EASE} ${delay}ms`,
              }} />
            </div>
          </div>
        );
      })}

      {/* Coral seam riding the leading edge of the sweep */}
      <div style={{
        position: 'absolute', top: 0, bottom: 0, width: 2, marginLeft: -1,
        left: open ? '100%' : '0%',
        background: a, boxShadow: `0 0 16px 1px ${a}`,
        opacity: open ? 1 : 0,
        transition: `left ${TOTAL_MS}ms linear, opacity 0.28s ease`,
        zIndex: 6, pointerEvents: 'none',
      }} />

      {/* Bottom vignette for legibility of any overlaid text */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none',
        background: 'linear-gradient(to top, rgba(10,9,8,0.45) 0%, transparent 50%)',
      }} />
    </div>
  );
}
