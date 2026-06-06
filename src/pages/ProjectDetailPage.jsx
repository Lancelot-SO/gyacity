import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { V2 } from '@/tokens';
import { HCaps, Eyebrow, Img, StarField, FloatingOrbs, CTA, GhostCTA, TiltCard, MotionSection, VideoFrame, ArrowR } from '@/components/ui';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { getProjectDetail, getAdjacentProject } from '@/data';
import { fadeUp, fadeLeft, fadeRight, stagger, EASE_OUT } from '@/animations/variants';

export function ProjectDetailPage({ accent, onNavigate, id }) {
  const { t } = useTranslation();
  const a = accent || V2.coral;
  const p = getProjectDetail(id);
  const next = getAdjacentProject(id);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  // The image is scaled up slightly so the parallax shift never exposes the
  // background behind it at the top/bottom edges.
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  if (!p) return null;

  const g = p.gallery;
  const facts = [
    { label: t('project.location'),   value: p.place },
    { label: t('project.year'),       value: p.year },
    { label: t('project.area'),       value: p.area },
    { label: t('project.discipline'), value: p.services },
    { label: t('project.category'),   value: p.cat },
  ];

  return (
    <div style={{ background: V2.bg, color: V2.cream, fontFamily: V2.font }}>

      {/* Breadcrumb */}
      <section style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '28px 40px 0' }}>
        <GhostCTA onClick={() => onNavigate?.('projects')} style={{ borderColor: V2.line }}>{t('project.back')}</GhostCTA>
        <Eyebrow color={V2.mute}>{p.no} · {p.cat}</Eyebrow>
      </section>

      {/* Hero */}
      <section ref={heroRef} style={{ padding: '24px 40px 0' }}>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <motion.div style={{ y: imgY, scale: 1.25 }}>
            <Img src={p.img} ratio="21/9" dark={0.62} animate={false} />
          </motion.div>
          <motion.div
            style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 44px 44px', y: titleY }}
          >
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.1 }}>
              <Eyebrow color={a}>{p.no} · {p.cat} · {p.year}</Eyebrow>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, ease: EASE_OUT, delay: 0.2 }}>
              <HCaps size="clamp(48px, 9vw, 168px)" line={0.9} weight={800} tracking="-0.04em" style={{ marginTop: 14 }}>{p.title}</HCaps>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.4 }}
              style={{ marginTop: 16, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: V2.cream2 }}
            >
              {p.place} · {p.type}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Facts */}
      <section style={{ marginTop: 48, padding: '32px 40px', borderTop: `1px solid ${V2.line}`, borderBottom: `1px solid ${V2.line}` }}>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={stagger(0.08)}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 32 }}
        >
          {facts.map(f => (
            <motion.div key={f.label} variants={fadeUp}>
              <Eyebrow color={V2.mute}>{f.label}</Eyebrow>
              <div style={{ marginTop: 12, fontSize: 15, color: V2.cream, lineHeight: 1.4 }}>{f.value}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Overview statement */}
      <section style={{ padding: '90px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'flex-start' }}>
          <MotionSection variants={fadeLeft}>
            <Eyebrow color={a}>{t('project.overview')}</Eyebrow>
          </MotionSection>
          <MotionSection variants={fadeRight}>
            <HCaps as="p" size="clamp(28px, 3.6vw, 52px)" line={1.12} weight={500} tracking="-0.02em" color={V2.cream} style={{ textTransform: 'none', maxWidth: 880 }}>
              {p.summary}
            </HCaps>
          </MotionSection>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ padding: '0 40px 40px' }}>
        <MotionSection variants={fadeUp} style={{ marginBottom: 24 }}>
          <Img src={g[1] || g[0]} ratio="16/9" dark={0.05} />
        </MotionSection>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
          <MotionSection variants={fadeLeft}><TiltCard strength={6} glare><Img src={g[2]} ratio="4/5" dark={0.05} /></TiltCard></MotionSection>
          <MotionSection variants={fadeRight}><TiltCard strength={6} glare><Img src={g[3]} ratio="4/5" dark={0.05} /></TiltCard></MotionSection>
        </div>

        {p.video && (
          <MotionSection variants={fadeUp} style={{ marginBottom: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
              <Eyebrow color={V2.cream}>{t('project.film')}</Eyebrow>
              <span style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: V2.mute }}>{p.title} · {p.year}</span>
            </div>
            <VideoFrame src={p.video.src} poster={p.video.poster} accent={a} label={t('project.watch')} />
          </MotionSection>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 24 }}>
          <MotionSection variants={fadeLeft}><Img src={g[4]} ratio="16/10" dark={0.05} /></MotionSection>
          <MotionSection variants={fadeRight}><Img src={g[5]} ratio="16/10" dark={0.05} /></MotionSection>
        </div>
      </section>

      {/* Next project */}
      <section style={{ padding: '70px 40px', borderTop: `1px solid ${V2.line}`, position: 'relative', overflow: 'hidden' }}>
        <StarField density={0.4} />
        <MotionSection variants={fadeUp} style={{ position: 'relative' }}>
          <Eyebrow color={V2.mute}>{t('project.next')}</Eyebrow>
          <motion.button
            onClick={() => onNavigate?.(`project/${next.id}`)}
            whileHover="hov" initial="rest"
            style={{ marginTop: 16, background: 'none', border: 'none', padding: 0, cursor: 'none', display: 'flex', alignItems: 'center', gap: 28, textAlign: 'left' }}
          >
            <motion.span variants={{ rest: { x: 0, color: V2.cream }, hov: { x: 14, color: a } }} transition={{ duration: 0.3 }}>
              <HCaps size="clamp(40px, 7vw, 116px)" line={0.9} weight={800} tracking="-0.035em" color="currentColor">{next.title}</HCaps>
            </motion.span>
            <motion.span variants={{ rest: { x: 0, opacity: 0.5 }, hov: { x: 12, opacity: 1 } }} transition={{ duration: 0.3 }} style={{ color: a, display: 'inline-flex' }}>
              <ArrowR size={40} />
            </motion.span>
          </motion.button>
          <div style={{ marginTop: 16, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: V2.mute }}>{next.place} · {next.cat}</div>
        </MotionSection>
      </section>

      {/* CTA band */}
      <section style={{ padding: '80px 40px', position: 'relative', overflow: 'hidden', borderTop: `1px solid ${V2.line}` }}>
        <StarField density={0.6} />
        <FloatingOrbs opacity={0.06} />
        <MotionSection style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 40, flexWrap: 'wrap' }}>
          <HCaps size={64} line={0.95} weight={800} tracking="-0.025em">
            {t('project.cta_title_1')} <span style={{ color: a }}>{t('project.cta_title_accent')}</span>
          </HCaps>
          <CTA big accent={a} onClick={() => onNavigate?.('contact')}>{t('project.cta_btn')}</CTA>
        </MotionSection>
      </section>

      <SiteFooter accent={a} onNavigate={onNavigate} />
    </div>
  );
}
