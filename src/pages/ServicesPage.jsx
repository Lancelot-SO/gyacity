import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { V2 } from '@/tokens';
import { HCaps, Eyebrow, Img, CTA, StarField, FloatingOrbs, MotionSection } from '@/components/ui';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SERVICE_IMGS } from '@/data';
import { fadeUp, fadeLeft, fadeRight, stagger, EASE_OUT } from '@/animations/variants';

const IMGS_BY_INDEX = [
  SERVICE_IMGS.interiors,
  SERVICE_IMGS.architecture,
  SERVICE_IMGS.build,
  SERVICE_IMGS.lighting,
  SERVICE_IMGS.ffande,
  SERVICE_IMGS.joinery,
  SERVICE_IMGS.landscaping,
];

function ServiceRow({ service, img, index, accent }) {
  const a = accent || V2.coral;
  const even = index % 2 === 0;

  return (
    <section style={{ borderTop: `1px solid ${V2.line}`, padding: '72px 40px', position: 'relative', overflow: 'hidden' }}>
      {/* Large watermark number */}
      <div style={{
        position: 'absolute',
        right: even ? -16 : 'auto',
        left: even ? 'auto' : -16,
        top: '50%', transform: 'translateY(-50%)',
        fontFamily: V2.font, fontWeight: 800,
        fontSize: 'clamp(160px, 22vw, 300px)',
        lineHeight: 1, letterSpacing: '-0.06em',
        color: V2.cream, opacity: 0.025,
        pointerEvents: 'none', userSelect: 'none',
      }}>
        {String(index + 1).padStart(2, '0')}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: even ? '1.1fr 0.9fr' : '0.9fr 1.1fr',
        gap: 56,
        alignItems: 'center',
        position: 'relative',
      }}>
        {even ? (
          <>
            <MotionSection variants={fadeLeft}>
              <Img src={img} ratio="4/3" dark={0.1} />
            </MotionSection>
            <ServiceText service={service} index={index} accent={a} variants={fadeRight} />
          </>
        ) : (
          <>
            <ServiceText service={service} index={index} accent={a} variants={fadeLeft} />
            <MotionSection variants={fadeRight}>
              <Img src={img} ratio="4/3" dark={0.1} />
            </MotionSection>
          </>
        )}
      </div>
    </section>
  );
}

function ServiceText({ service, index, accent, variants }) {
  const a = accent || V2.coral;
  return (
    <MotionSection variants={variants}>
      <span style={{
        fontFamily: V2.mono, fontSize: 11, letterSpacing: '0.16em',
        color: a, display: 'block', marginBottom: 18,
      }}>
        {String(index + 1).padStart(2, '0')} / {service.short}
      </span>
      <HCaps size="clamp(32px, 4vw, 56px)" line={0.96} weight={800} tracking="-0.025em">
        {service.name}
      </HCaps>
      <p style={{
        marginTop: 22, fontSize: 15, lineHeight: 1.75,
        color: V2.mute, maxWidth: 460,
      }}>
        {service.desc}
      </p>
      <ul style={{ marginTop: 24, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {service.bullets.map(b => (
          <li key={b} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 13, color: V2.cream2 }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: a, flexShrink: 0 }} />
            {b}
          </li>
        ))}
      </ul>
    </MotionSection>
  );
}

export function ServicesPage({ accent, onNavigate }) {
  const { t } = useTranslation();
  const a = accent || V2.coral;
  const services = t('services_page.services', { returnObjects: true });
  const steps    = t('services_page.steps',    { returnObjects: true });
  const STEP_NUMS = ['01', '02', '03', '04'];

  return (
    <div style={{ background: V2.bg, color: V2.cream, fontFamily: V2.font }}>

      {/* Hero */}
      <section style={{ padding: '80px 40px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'flex-end' }}>
          <MotionSection variants={fadeLeft}>
            <Eyebrow color={a}>{t('services_page.eyebrow')}</Eyebrow>
            <HCaps size="clamp(72px, 12vw, 160px)" line={0.88} weight={800} tracking="-0.04em" style={{ marginTop: 20 }}>
              {t('services_page.title')}
            </HCaps>
          </MotionSection>
          <MotionSection variants={fadeRight}>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: V2.mute, maxWidth: 480 }}>
              {t('services_page.tagline')}
            </p>
          </MotionSection>
        </div>
      </section>

      {/* Marquee strip */}
      <div style={{
        borderTop: `1px solid ${V2.line}`,
        borderBottom: `1px solid ${V2.line}`,
        overflow: 'hidden', padding: '14px 0',
        background: V2.bg2,
      }}>
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          style={{ display: 'flex', whiteSpace: 'nowrap', width: 'max-content' }}
        >
          {[...services, ...services].map((s, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
              <span style={{
                padding: '0 36px',
                fontFamily: V2.font, fontSize: 12, fontWeight: 600,
                letterSpacing: '0.2em', textTransform: 'uppercase', color: V2.mute,
              }}>
                {s.name}
              </span>
              <span style={{
                width: 4, height: 4, borderRadius: '50%',
                background: a, flexShrink: 0,
              }} />
            </span>
          ))}
        </motion.div>
      </div>

      {/* Service sections */}
      {services.map((service, i) => (
        <ServiceRow
          key={service.name}
          service={service}
          img={IMGS_BY_INDEX[i]}
          index={i}
          accent={a}
        />
      ))}

      {/* Process */}
      <section style={{ padding: '80px 40px 100px', borderTop: `1px solid ${V2.line}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.4fr', gap: 80, alignItems: 'flex-start' }}>
          <MotionSection variants={fadeLeft}>
            <Eyebrow color={a}>{t('services_page.process_eyebrow')}</Eyebrow>
            <HCaps size={48} line={0.96} weight={800} tracking="-0.025em" style={{ marginTop: 24 }}>
              {t('services_page.process_title')}
            </HCaps>
          </MotionSection>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger(0.12)}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}
          >
            {steps.map((step, i) => (
              <motion.div key={step.t} variants={fadeUp} style={{ borderTop: `1px solid ${V2.line}`, paddingTop: 22 }}>
                <HCaps size={40} line={0.9} weight={800} tracking="-0.02em" color={a}>
                  {STEP_NUMS[i]}
                </HCaps>
                <HCaps size={18} line={1.2} weight={700} tracking="-0.005em" style={{ marginTop: 16 }}>
                  {step.t}
                </HCaps>
                <p style={{ marginTop: 12, fontSize: 13, lineHeight: 1.65, color: V2.mute }}>
                  {step.d}
                </p>
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
            {t('services_page.cta_title_1')} <span style={{ color: a }}>{t('services_page.cta_title_accent')}</span>
          </HCaps>
          <CTA big accent={a} onClick={() => onNavigate?.('contact')}>{t('services_page.cta_btn')}</CTA>
        </MotionSection>
      </section>

      <SiteFooter accent={a} onNavigate={onNavigate} />
    </div>
  );
}
