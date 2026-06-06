import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { V2 } from '@/tokens';
import { HCaps, Eyebrow, Pill, MoreLink, Img, StarField, CTA, NavArrows, TiltCard, MotionSection, FloatingOrbs } from '@/components/ui';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { PROJECTS } from '@/data';
import { fadeUp, fadeLeft, fadeRight, stagger } from '@/animations/variants';

const FILTER_DEFS = [
  { key: 'All',          labelKey: 'projects.filter_all' },
  { key: 'Residential',  labelKey: 'projects.filter_residential' },
  { key: 'Hospitality',  labelKey: 'projects.filter_hospitality' },
  { key: 'Corporate',    labelKey: 'projects.filter_corporate' },
  { key: 'Exterior',     labelKey: 'projects.filter_exterior' },
];

export function ProjectsPage({ accent, onNavigate }) {
  const { t } = useTranslation();
  const [filterKey, setFilterKey] = useState('All');
  const shown = filterKey === 'All' ? PROJECTS : PROJECTS.filter(p => p.cat === filterKey);

  return (
    <div style={{ background: V2.bg, color: V2.cream, fontFamily: V2.font }}>

      {/* Title block */}
      <section style={{ padding: '80px 40px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'flex-end' }}>
          <MotionSection variants={fadeLeft}>
            <Eyebrow color={accent || V2.coral}>{t('projects.eyebrow')}</Eyebrow>
            <div style={{ marginTop: 18, fontFamily: V2.font, fontSize: 13.5, color: V2.mute, lineHeight: 1.6, maxWidth: 320 }}>
              {t('projects.desc')}
            </div>
          </MotionSection>
          <MotionSection variants={fadeRight}>
            <HCaps size={132} line={0.9} weight={800} tracking="-0.035em">{t('projects.title')}</HCaps>
          </MotionSection>
        </div>
      </section>

      {/* Filter bar */}
      <section style={{ padding: '32px 40px', borderTop: `1px solid ${V2.line}`, borderBottom: `1px solid ${V2.line}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger(0.07)}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}
          >
            {FILTER_DEFS.map(f => (
              <motion.div key={f.key} variants={fadeUp}>
                <Pill active={f.key === filterKey} accent={accent} onClick={() => setFilterKey(f.key)}>{t(f.labelKey)}</Pill>
              </motion.div>
            ))}
          </motion.div>
          <MotionSection variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontFamily: V2.font, fontSize: 11, color: V2.mute, letterSpacing: '0.16em', textTransform: 'uppercase' }}>{t('projects.sort')}</span>
            <div style={{ padding: '8px 14px', borderRadius: 999, border: `1px solid ${V2.line}`, fontFamily: V2.font, fontSize: 12, fontWeight: 500, color: V2.cream, display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'none' }}>
              {t('projects.most_recent')}
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: '40px 40px 80px' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={filterKey}
            initial="hidden" animate="visible"
            variants={stagger(0.07)}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gridAutoRows: 'minmax(0,auto)', gap: 24 }}
          >
            {shown.map((p, i) => {
              const isHero = i === 0;
              return (
                <motion.div
                  key={p.id}
                  variants={fadeUp}
                  onClick={() => onNavigate?.(`project/${p.id}`)}
                  style={{ gridColumn: isHero ? 'span 4' : 'span 2', gridRow: isHero ? 'span 2' : 'span 1', cursor: 'none' }}
                >
                  <TiltCard strength={isHero ? 6 : 10} glare style={{ background: V2.bg, height: '100%' }}>
                    <article>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
                        <Eyebrow color={V2.cream}>{p.no} · {p.title}</Eyebrow>
                        <span style={{ fontFamily: V2.font, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: V2.mute }}>{p.year}</span>
                      </div>
                      <Img src={p.img} ratio={isHero ? '4/5' : '4/3'} dark={0.06} />
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: 14 }}>
                        <div>
                          <HCaps size={isHero ? 36 : 22} line={1.1} weight={700} tracking="-0.005em">{p.title}</HCaps>
                          <div style={{ marginTop: 6, fontFamily: V2.font, fontSize: 11, color: V2.mute, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{p.cat} · {p.place}</div>
                        </div>
                        <MoreLink>{t('projects.view')}</MoreLink>
                      </div>
                    </article>
                  </TiltCard>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        <MotionSection variants={fadeUp} style={{ marginTop: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: `1px solid ${V2.line}`, paddingTop: 24 }}>
          <span style={{ fontFamily: V2.font, fontSize: 11, color: V2.mute, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            {t('projects.showing', { count: shown.length })}
          </span>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            {['1', '2', '3', '…', '14'].map((n, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
                style={{ fontFamily: V2.font, fontSize: 12, fontWeight: 500, width: 32, height: 32, borderRadius: '50%', background: i === 0 ? V2.cream : 'transparent', color: i === 0 ? V2.bg : V2.cream, border: i === 0 ? 'none' : `1px solid ${V2.line}`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: i === 0 ? 'default' : 'none' }}
              >{n}</motion.span>
            ))}
            <NavArrows accent={accent} />
          </div>
        </MotionSection>
      </section>

      {/* CTA band */}
      <section style={{ padding: '80px 40px', position: 'relative', overflow: 'hidden', borderTop: `1px solid ${V2.line}` }}>
        <StarField density={0.6} />
        <FloatingOrbs opacity={0.06} />
        <MotionSection style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 40, flexWrap: 'wrap' }}>
          <HCaps size={64} line={0.95} weight={800} tracking="-0.025em">
            {t('projects.cta_title_1')} <span style={{ color: accent || V2.coral }}>{t('projects.cta_title_accent')}</span>
          </HCaps>
          <CTA big accent={accent} onClick={() => onNavigate?.('contact')}>{t('projects.cta_btn')}</CTA>
        </MotionSection>
      </section>

      <SiteFooter accent={accent} onNavigate={onNavigate} />
    </div>
  );
}
