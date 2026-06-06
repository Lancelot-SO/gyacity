import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { V2 } from '@/tokens';
import { HCaps, Eyebrow, GhostCTA, Img, TiltCard, MotionSection } from '@/components/ui';
import { PROJECTS } from '@/data';

// Cards are driven straight from the project archive so labels, images and the
// detail-page link always stay in sync.
const ITEMS = PROJECTS.map(p => ({ id: p.id, name: p.title, place: p.place, img: p.img }));
const PER_VIEW = 3;

function NavBtn({ onClick, disabled, children, accent, filled }) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? undefined : { scale: 1.08 }}
      whileTap={disabled ? undefined : { scale: 0.94 }}
      style={{ width: 38, height: 38, borderRadius: '50%', border: filled ? 'none' : `1px solid ${V2.line}`, background: filled ? accent || V2.coral : 'transparent', color: filled ? V2.bg : V2.cream, cursor: disabled ? 'default' : 'none', opacity: disabled ? 0.35 : 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
    >
      {children}
    </motion.button>
  );
}

export function SecPortfolio({ accent, onNavigate }) {
  const { t } = useTranslation();
  const [start, setStart] = useState(0);
  const maxStart = Math.max(0, ITEMS.length - PER_VIEW);
  const visible = ITEMS.slice(start, start + PER_VIEW);

  return (
    <section style={{ padding: '60px 0 80px', borderTop: `1px solid ${V2.line}` }}>
      <MotionSection style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '0 40px', marginBottom: 32 }}>
        <HCaps size={56} weight={800} tracking="-0.02em">{t('portfolio.title')}</HCaps>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <GhostCTA onClick={() => onNavigate?.('projects')}>{t('portfolio.view_all')}</GhostCTA>
          <div style={{ display: 'inline-flex', gap: 10 }}>
            <NavBtn onClick={() => setStart(s => Math.max(0, s - 1))} disabled={start === 0} accent={accent}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M10 6H2M6 2L2 6l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </NavBtn>
            <NavBtn onClick={() => setStart(s => Math.min(maxStart, s + 1))} disabled={start >= maxStart} accent={accent} filled>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </NavBtn>
          </div>
        </div>
      </MotionSection>

      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${PER_VIEW}, 1fr)`, gap: 20, padding: '0 40px' }}>
        <AnimatePresence mode="popLayout">
          {visible.map(p => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={() => onNavigate?.(`project/${p.id}`)}
              whileHover="hov"
              style={{ cursor: 'none', color: V2.cream }}
            >
              <TiltCard strength={6} glare>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
                  <motion.div variants={{ hov: { color: accent || V2.coral } }} transition={{ duration: 0.2 }} style={{ color: V2.cream }}>
                    <Eyebrow color="currentColor">{p.name}</Eyebrow>
                  </motion.div>
                  <span style={{ fontFamily: V2.font, fontSize: 11, color: V2.mute, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{p.place}</span>
                </div>
                <Img src={p.img} ratio="4/3" dark={0.05} />
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
