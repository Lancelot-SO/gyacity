import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { V2 } from '@/tokens';
import { HCaps, OutlineCard, TiltCard, MotionSection } from '@/components/ui';
import { TESTIMONIALS } from '@/data';
import { fadeUp } from '@/animations/variants';

function NavBtn({ onClick, children, filled, accent }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      style={{ width: 38, height: 38, borderRadius: '50%', border: filled ? 'none' : `1px solid ${V2.line}`, background: filled ? accent || V2.coral : 'transparent', color: filled ? V2.bg : V2.cream, cursor: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
    >
      {children}
    </motion.button>
  );
}

export function SecClients({ accent }) {
  const [idx, setIdx] = useState(0);
  const shown = [TESTIMONIALS[idx], TESTIMONIALS[(idx + 1) % TESTIMONIALS.length]];

  return (
    <section style={{ padding: '40px 40px 80px' }}>
      <MotionSection style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 36 }}>
        <HCaps size={56} weight={800} tracking="-0.02em" style={{ maxWidth: 560 }}>
          Clients about<br />our work
        </HCaps>
        <div style={{ display: 'inline-flex', gap: 10 }}>
          <NavBtn onClick={() => setIdx(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} accent={accent}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M10 6H2M6 2L2 6l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </NavBtn>
          <NavBtn onClick={() => setIdx(i => (i + 1) % TESTIMONIALS.length)} accent={accent} filled>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </NavBtn>
        </div>
      </MotionSection>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <AnimatePresence mode="wait">
          {shown.map((t, i) => (
            <motion.div
              key={`${idx}-${i}`}
              initial={{ opacity: 0, y: 20, rotateX: 8 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              style={{ perspective: 1200 }}
            >
              <TiltCard strength={6} style={{ height: '100%' }}>
                <OutlineCard pad={32} style={{ height: '100%' }}>
                  <div style={{ display: 'flex', gap: 24 }}>
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 4, repeat: Infinity, delay: i * 1.5 }}
                      style={{ fontFamily: V2.font, fontWeight: 800, fontSize: 90, lineHeight: 0.7, color: accent || V2.coral, flexShrink: 0 }}
                    >
                      &ldquo;
                    </motion.div>
                    <div>
                      <blockquote style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: V2.cream, maxWidth: 460 }}>{t.quote}</blockquote>
                      <div style={{ marginTop: 24 }}>
                        <div style={{ fontFamily: V2.font, fontSize: 13, fontWeight: 600, color: V2.cream }}>{t.name}</div>
                        <div style={{ fontFamily: V2.font, fontSize: 11, color: V2.mute, letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 4 }}>{t.place}</div>
                      </div>
                    </div>
                  </div>
                </OutlineCard>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
