import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { V2 } from '@/tokens';
import { HCaps, Eyebrow, GhostCTA, Img, MoreLink, TiltCard, MotionSection } from '@/components/ui';
import { PROJECTS } from '@/data';

// Merged showcase: the prominent large-card treatment of the old Services grid,
// paged like a carousel through the whole project archive — each card links to
// its detail page.
const ITEMS = PROJECTS.map(p => ({ id: p.id, name: p.title, place: p.place, no: p.no, year: p.year, img: p.img }));
const PER_VIEW = 2;
const PAGES = Math.ceil(ITEMS.length / PER_VIEW);
const pad2 = n => String(n).padStart(2, '0');

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
  const a = accent || V2.coral;
  const [page, setPage] = useState(0);
  const start = page * PER_VIEW;
  const visible = ITEMS.slice(start, start + PER_VIEW);

  return (
    <section style={{ padding: '80px 40px', borderTop: `1px solid ${V2.line}` }}>
      {/* Header */}
      <MotionSection style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28, gap: 40, flexWrap: 'wrap' }}>
        <div>
          <Eyebrow color={a}>{t('portfolio.eyebrow')}</Eyebrow>
          <HCaps size={64} line={0.95} weight={800} tracking="-0.025em" style={{ marginTop: 14 }}>{t('portfolio.title')}</HCaps>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span style={{ fontFamily: V2.mono, fontSize: 12, letterSpacing: '0.16em', color: V2.mute }}>
            {pad2(page + 1)}<span style={{ color: V2.dim }}> / {pad2(PAGES)}</span>
          </span>
          <GhostCTA onClick={() => onNavigate?.('projects')}>{t('portfolio.view_all')}</GhostCTA>
          <div style={{ display: 'inline-flex', gap: 10 }}>
            <NavBtn onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0} accent={a}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M10 6H2M6 2L2 6l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </NavBtn>
            <NavBtn onClick={() => setPage(p => Math.min(PAGES - 1, p + 1))} disabled={page >= PAGES - 1} accent={a} filled>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </NavBtn>
          </div>
        </div>
      </MotionSection>

      {/* Progress */}
      <div style={{ position: 'relative', height: 1, background: V2.line, marginBottom: 28, overflow: 'hidden' }}>
        <motion.div
          animate={{ width: `${((page + 1) / PAGES) * 100}%` }}
          transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
          style={{ position: 'absolute', left: 0, top: 0, bottom: 0, background: a }}
        />
      </div>

      {/* Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${PER_VIEW}, 1fr)`, gap: 24 }}>
        <AnimatePresence mode="popLayout">
          {visible.map(p => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={() => onNavigate?.(`project/${p.id}`)}
              whileHover="hov"
              style={{ cursor: 'none', color: V2.cream }}
            >
              <TiltCard strength={8} glare style={{ background: V2.bg }}>
                <motion.div variants={{ hov: { y: -6 } }} transition={{ duration: 0.3 }}>
                  <Img src={p.img} ratio="16/10" dark={0.1}>
                    <div style={{ position: 'absolute', top: 18, left: 18, fontFamily: V2.mono, fontSize: 12, letterSpacing: '0.1em', color: V2.cream }}>{p.no}</div>
                    <div style={{ position: 'absolute', top: 18, right: 18, fontFamily: V2.font, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: V2.cream2 }}>{p.year}</div>
                  </Img>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '20px 4px 4px' }}>
                    <div>
                      <motion.div variants={{ hov: { color: a } }} transition={{ duration: 0.2 }} style={{ color: V2.cream }}>
                        <HCaps size={28} line={1.1} weight={700} tracking="-0.01em" color="currentColor">{p.name}</HCaps>
                      </motion.div>
                      <div style={{ marginTop: 8, fontFamily: V2.font, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: V2.mute }}>{p.place}</div>
                    </div>
                    <MoreLink accent={a}>{t('portfolio.view_project')}</MoreLink>
                  </div>
                </motion.div>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
