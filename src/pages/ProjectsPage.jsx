import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { V2 } from '@/tokens';
import { HCaps, Eyebrow, Pill, MoreLink, Img, StarField, CTA, NavArrows, TiltCard, MotionSection, FloatingOrbs } from '@/components/ui';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { PROJECTS } from '@/data';
import { fadeUp, fadeLeft, fadeRight, stagger } from '@/animations/variants';

const FILTERS = ['All 124', 'Residential 68', 'Hospitality 24', 'Corporate 18', 'Exterior 14'];
const CAT_MAP  = { 'All 124': 'All', 'Residential 68': 'Residential', 'Hospitality 24': 'Hospitality', 'Corporate 18': 'Corporate', 'Exterior 14': 'Exterior' };

export function ProjectsPage({ accent, onNavigate }) {
  const [filter, setFilter] = useState('All 124');
  const shown = CAT_MAP[filter] === 'All' ? PROJECTS : PROJECTS.filter(p => p.cat === CAT_MAP[filter]);

  return (
    <div style={{ background: V2.bg, color: V2.cream, fontFamily: V2.font }}>

      {/* Title block */}
      <section style={{ padding: '80px 40px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'flex-end' }}>
          <MotionSection variants={fadeLeft}>
            <Eyebrow color={accent || V2.coral}>Archive</Eyebrow>
            <div style={{ marginTop: 18, fontFamily: V2.font, fontSize: 13.5, color: V2.mute, lineHeight: 1.6, maxWidth: 320 }}>
              One hundred and twenty-four commissions, filtered. Use the categories to focus on a discipline.
            </div>
          </MotionSection>
          <MotionSection variants={fadeRight}>
            <HCaps size={132} line={0.9} weight={800} tracking="-0.035em">Projects.</HCaps>
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
            {FILTERS.map(f => (
              <motion.div key={f} variants={fadeUp}>
                <Pill active={f === filter} accent={accent} onClick={() => setFilter(f)}>{f}</Pill>
              </motion.div>
            ))}
          </motion.div>
          <MotionSection variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontFamily: V2.font, fontSize: 11, color: V2.mute, letterSpacing: '0.16em', textTransform: 'uppercase' }}>Sort</span>
            <div style={{ padding: '8px 14px', borderRadius: 999, border: `1px solid ${V2.line}`, fontFamily: V2.font, fontSize: 12, fontWeight: 500, color: V2.cream, display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'none' }}>
              Most recent
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: '40px 40px 80px' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
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
                  style={{ gridColumn: isHero ? 'span 4' : 'span 2', gridRow: isHero ? 'span 2' : 'span 1' }}
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
                        <MoreLink>View</MoreLink>
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
            Showing {shown.length} of 124 — page 1 / 14
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
            Ready to start <span style={{ color: accent || V2.coral }}>your project?</span>
          </HCaps>
          <CTA big accent={accent} onClick={() => onNavigate?.('contact')}>Begin a conversation</CTA>
        </MotionSection>
      </section>

      <SiteFooter accent={accent} onNavigate={onNavigate} />
    </div>
  );
}
