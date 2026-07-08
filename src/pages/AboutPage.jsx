import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { V2 } from '@/tokens';
import { HCaps, Eyebrow, CTA, GhostCTA, Img, StarField, MotionSection, FloatingOrbs } from '@/components/ui';
import { LouverPhoto } from '@/components/LouverPhoto';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { IMGS, TEAM } from '@/data';
import { useCounter } from '@/hooks/useCounter';
import { fadeUp, fadeLeft, fadeRight, stagger, scaleIn } from '@/animations/variants';

/* TEAM — shelved until photography + bios are ready.
const TEAM = [
  { name: 'Brown Gyasi Sydney', role: 'Founding Principal', city: 'Kumasi', img: IMGS.hero },
  { name: 'Ifeoma Okafor', role: 'Director, Hospitality', city: 'Lagos',  img: IMGS.arch },
  { name: 'Lukas Brandt',  role: 'Director, Europe',      city: 'Berlin', img: IMGS.kitchen },
  { name: 'Adwoa Asante',  role: 'Head of Interiors',     city: 'Accra',  img: IMGS.luxe },
];
*/

const MILESTONE_YEARS = ['2019', '2021', '2023', '2024', '2026'];
const STAT_NUMS = ['124', '32', '7', '8'];

function CounterStat({ n, l, accent, delay = 0 }) {
  const { ref, count } = useCounter(parseInt(n, 10), 2000);
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.7, delay }}
    >
      <HCaps size={120} line={0.85} weight={500} tracking="-0.03em" color={accent || V2.cream2}>
        {count}<span style={{ color: V2.coral }}>+</span>
      </HCaps>
      <div style={{ marginTop: 16, fontSize: 13.5, lineHeight: 1.55, color: V2.mute, maxWidth: 240 }}>{l}</div>
    </motion.div>
  );
}

function TeamTeaserCard({ member, accent, onNavigate }) {
  return (
    <motion.div
      variants={fadeUp}
      onClick={() => onNavigate?.('team')}
      style={{ background: V2.bg2, cursor: 'none', overflow: 'hidden', position: 'relative' }}
    >
      {/* Photo — louver reveal on hover */}
      <div style={{ width: '100%', aspectRatio: '1/1', overflow: 'hidden', position: 'relative' }}>
        <LouverPhoto src={member.photo} hoverSrc={member.photoHover} initials={member.initials} accent={accent} />
      </div>

      {/* Text content */}
      <div style={{ padding: '22px 26px 28px', position: 'relative', zIndex: 4 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <span style={{
            fontFamily: V2.font, fontSize: 9.5, fontWeight: 700,
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: accent || V2.coral,
            border: `1px solid ${accent || V2.coral}`,
            padding: '3px 8px',
          }}>{member.index}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: accent || V2.coral, flexShrink: 0 }} />
            <span style={{
              fontFamily: V2.font, fontSize: 9.5,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: accent || V2.coral,
            }}>{member.city}</span>
          </div>
        </div>
        <HCaps size={20} line={1.18} weight={700} tracking="-0.01em">
          {member.name}
        </HCaps>
        <div style={{
          marginTop: 7, fontFamily: V2.font, fontSize: 10.5,
          color: V2.mute, letterSpacing: '0.13em', textTransform: 'uppercase',
        }}>{member.role}</div>
      </div>
    </motion.div>
  );
}

export function AboutPage({ accent, onNavigate }) {
  const { t } = useTranslation();
  const beliefs   = t('about.beliefs',    { returnObjects: true });
  const milestones = t('about.milestones', { returnObjects: true });
  const stats      = t('about.stats',      { returnObjects: true });

  return (
    <div style={{ background: V2.bg, color: V2.cream, fontFamily: V2.font }}>

      {/* Manifesto */}
      <section style={{ padding: '80px 40px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'flex-end' }}>
          <MotionSection variants={fadeLeft}><Eyebrow color={accent || V2.coral}>{t('about.eyebrow')}</Eyebrow></MotionSection>
          <MotionSection variants={fadeRight}>
            <HCaps size={120} line={0.92} weight={800} tracking="-0.035em">
              {t('about.title_1')} <span style={{ color: accent || V2.coral }}>{t('about.title_accent')}</span><br />{t('about.title_2')}
            </HCaps>
          </MotionSection>
        </div>
      </section>

      {/* Hero image */}
      <MotionSection variants={scaleIn} style={{ padding: '0 40px 80px' }}>
        <Img src="https://images.unsplash.com/photo-1699239116624-85268dce7377?w=1600&q=85&auto=format&fit=crop" ratio="16/7" dark={0.08} />
      </MotionSection>

      {/* Philosophy */}
      <section style={{ padding: '0 40px 100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80 }}>
          <MotionSection variants={fadeLeft}><Eyebrow>{t('about.belief_eyebrow')}</Eyebrow></MotionSection>
          <MotionSection variants={fadeRight}>
            <HCaps size={42} line={1.2} weight={500} tracking="-0.01em" style={{ textTransform: 'none' }}>
              {t('about.belief_text')}
            </HCaps>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={stagger(0.12)}
              style={{ marginTop: 56, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, color: V2.mute, fontSize: 14.5, lineHeight: 1.65 }}
            >
              {beliefs.map(b => (
                <motion.div key={b.label} variants={fadeUp}>
                  <Eyebrow color={accent || V2.coral}>{b.label}</Eyebrow>
                  <p style={{ margin: '14px 0 0' }}>{b.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </MotionSection>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '60px 40px 100px', borderTop: `1px solid ${V2.line}` }}>
        <MotionSection variants={fadeUp} style={{ marginBottom: 56 }}>
          <HCaps size={56} weight={800} tracking="-0.02em">{t('about.stats_title')}</HCaps>
        </MotionSection>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 40 }}>
          {STAT_NUMS.map((n, i) => (
            <CounterStat
              key={n} n={n} l={stats[i]}
              accent={i === 3 ? accent || V2.coral : undefined}
              delay={i * 0.12}
            />
          ))}
        </div>
      </section>

      {/* Founder Quote — placeholder until Team section is ready.
          To restore: remove this block and uncomment the Team block + TEAM array above. */}
      <section style={{ padding: '80px 40px', borderTop: `1px solid ${V2.line}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.4fr', gap: 80, alignItems: 'flex-start' }}>
          <MotionSection variants={fadeLeft}>
            <Eyebrow color={accent || V2.coral}>Founding Principal</Eyebrow>
          </MotionSection>
          <MotionSection variants={fadeRight}>
            <HCaps size={42} line={1.25} weight={500} tracking="-0.02em" style={{ textTransform: 'none' }}>
              "Every space carries the memory of the people who built it — our job is to make sure that memory is worth keeping."
            </HCaps>
            <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 36, height: 1, background: accent || V2.coral, flexShrink: 0 }} />
              <span style={{ fontSize: 11.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: V2.mute }}>Brown Gyasi Sydney — Berlin</span>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* TEAM — shelved until photography + bios are ready.
      <section style={{ padding: '60px 40px 100px', borderTop: `1px solid ${V2.line}` }}>
        <MotionSection style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 40 }}>
          <HCaps size={56} weight={800} tracking="-0.02em">{t('about.team_title')}</HCaps>
          <GhostCTA>{t('about.team_see_all')}</GhostCTA>
        </MotionSection>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
          variants={stagger(0.1)}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}
        >
          {TEAM.map(p => (
            <motion.div key={p.name} variants={fadeUp}>
              <TiltCard strength={10} glare>
                <article>
                  <Img src={p.img} ratio="3/4" dark={0.1} />
                  <div style={{ paddingTop: 16 }}>
                    <HCaps size={20} line={1.15} weight={700} tracking="-0.005em">{p.name}</HCaps>
                    <div style={{ marginTop: 6, fontFamily: V2.font, fontSize: 12, color: V2.mute, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{p.role}</div>
                    <div style={{ marginTop: 4, fontFamily: V2.font, fontSize: 11, color: accent || V2.coral, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{p.city}</div>
                  </div>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </section>
      */}

      {/* Executive team teaser */}
      <section style={{ padding: '60px 40px 80px', borderTop: `1px solid ${V2.line}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 40 }}>
          <MotionSection variants={fadeLeft}>
            <HCaps size={56} weight={800} tracking="-0.02em">{t('about.team_title')}</HCaps>
          </MotionSection>
          <MotionSection variants={fadeRight}>
            <GhostCTA onClick={() => onNavigate?.('team')}>{t('about.team_cta')}</GhostCTA>
          </MotionSection>
        </div>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
          variants={stagger(0.1)}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: V2.line }}
        >
          {TEAM.map(member => (
            <TeamTeaserCard
              key={member.index}
              member={member}
              accent={accent}
              onNavigate={onNavigate}
            />
          ))}
        </motion.div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '60px 40px 100px', borderTop: `1px solid ${V2.line}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.4fr', gap: 80, alignItems: 'flex-start' }}>
          <MotionSection variants={fadeLeft}>
            <Eyebrow color={accent || V2.coral}>{t('about.timeline_eyebrow')}</Eyebrow>
            <HCaps size={48} line={0.96} weight={800} tracking="-0.025em" style={{ marginTop: 24 }}>
              {t('about.timeline_title_1')}<br />{t('about.timeline_title_2')}
            </HCaps>
          </MotionSection>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger(0.12)}
          >
            {milestones.map((m, i) => (
              <motion.div key={MILESTONE_YEARS[i]} variants={fadeRight} style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: 32, padding: '24px 0', borderTop: `1px solid ${V2.line}`, borderBottom: i === milestones.length - 1 ? `1px solid ${V2.line}` : 'none', alignItems: 'flex-start' }}>
                <HCaps size={28} line={1} weight={500} tracking="-0.01em" color={accent || V2.coral}>{MILESTONE_YEARS[i]}</HCaps>
                <div>
                  <HCaps size={22} line={1.2} weight={700} tracking="-0.005em">{m.t}</HCaps>
                  <div style={{ marginTop: 8, fontSize: 13.5, color: V2.mute, lineHeight: 1.6, maxWidth: 540 }}>{m.d}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA strip */}
      <section style={{ padding: '80px 40px', position: 'relative', overflow: 'hidden', borderTop: `1px solid ${V2.line}` }}>
        <StarField density={0.7} />
        <FloatingOrbs opacity={0.06} />
        <MotionSection style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 40, flexWrap: 'wrap' }}>
          <HCaps size={64} line={0.95} weight={800} tracking="-0.025em">
            {t('about.cta_title_1')} <span style={{ color: accent || V2.coral }}>{t('about.cta_title_accent')}</span>
          </HCaps>
          <CTA big accent={accent} onClick={() => onNavigate?.('contact')}>{t('about.cta_btn')}</CTA>
        </MotionSection>
      </section>

      <SiteFooter accent={accent} onNavigate={onNavigate} />
    </div>
  );
}
