import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { V2 } from '@/tokens';
import { HCaps, Eyebrow, GhostCTA, Img, TiltCard, MotionSection } from '@/components/ui';
import { PROJECTS, IMGS } from '@/data';
import { fadeUp } from '@/animations/variants';

const ITEMS = [
  { name: 'Maison Onyx',      place: 'East Legon, Accra',       img: PROJECTS[0].img },
  { name: 'Hôtel Saharienne', place: 'Victoria Island, Lagos',  img: PROJECTS[1].img },
  { name: 'Luxe Living',      place: 'Lisbon, Portugal',        img: IMGS.luxe },
  { name: 'Soft Minimalism',  place: 'Milan, Italy',            img: IMGS.min },
  { name: 'Dust & Light',     place: 'Palm, Indonesia',         img: IMGS.dust },
];

function NavBtn({ onClick, children, accent, filled }) {
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

export function SecPortfolio({ accent, onNavigate }) {
  const { t } = useTranslation();
  const [start, setStart] = useState(0);
  const visible = ITEMS.slice(start, start + 3);

  return (
    <section style={{ padding: '60px 0 80px', borderTop: `1px solid ${V2.line}` }}>
      <MotionSection style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '0 40px', marginBottom: 32 }}>
        <HCaps size={56} weight={800} tracking="-0.02em">{t('portfolio.title')}</HCaps>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <GhostCTA onClick={() => onNavigate?.('projects')}>{t('portfolio.view_all')}</GhostCTA>
          <div style={{ display: 'inline-flex', gap: 10 }}>
            <NavBtn onClick={() => setStart(s => Math.max(0, s - 1))} accent={accent}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M10 6H2M6 2L2 6l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </NavBtn>
            <NavBtn onClick={() => setStart(s => Math.min(ITEMS.length - 2, s + 1))} accent={accent} filled>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </NavBtn>
          </div>
        </div>
      </MotionSection>

      <div style={{ display: 'flex', gap: 20, padding: '0 40px', overflow: 'hidden' }}>
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.div
              key={p.name}
              layout
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ flexShrink: 0, width: i === 0 ? 540 : 380 }}
            >
              <TiltCard strength={6} glare>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
                  <Eyebrow color={V2.cream}>{p.name}</Eyebrow>
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
