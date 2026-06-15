import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { V2 } from '@/tokens';
import { HCaps, Eyebrow, GhostCTA, MotionSection } from '@/components/ui';
import { ArrowR } from '@/components/ui';
import { fadeLeft, fadeUp, stagger } from '@/animations/variants';

export function SecServicesStrip({ accent, onNavigate }) {
  const { t } = useTranslation();
  const a = accent || V2.coral;
  const services = t('services_page.services', { returnObjects: true });

  return (
    <section style={{ padding: '80px 40px', borderTop: `1px solid ${V2.line}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.7fr', gap: 80, alignItems: 'flex-start' }}>

        {/* Left — heading block */}
        <MotionSection variants={fadeLeft} style={{ position: 'sticky', top: 120 }}>
          <Eyebrow color={a}>{t('services_home.eyebrow')}</Eyebrow>
          <HCaps size={72} line={0.9} weight={800} tracking="-0.03em" style={{ marginTop: 20 }}>
            {t('services_home.title')}
          </HCaps>
          <p style={{ marginTop: 24, fontSize: 14, lineHeight: 1.7, color: V2.mute, maxWidth: 300 }}>
            {t('services_home.sub')}
          </p>
          <div style={{ marginTop: 32 }}>
            <GhostCTA onClick={() => onNavigate?.('services')}>{t('services_home.view_all')}</GhostCTA>
          </div>
        </MotionSection>

        {/* Right — service rows */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger(0.07)}
          style={{ borderTop: `1px solid ${V2.line}` }}
        >
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              variants={fadeUp}
              onClick={() => onNavigate?.('services')}
              style={{
                display: 'grid',
                gridTemplateColumns: '52px 1fr 28px',
                gap: 20,
                padding: '22px 0',
                borderBottom: `1px solid ${V2.line}`,
                alignItems: 'center',
                cursor: 'none',
              }}
            >
              <span style={{
                fontFamily: V2.mono, fontSize: 11, letterSpacing: '0.14em',
                color: a, paddingTop: 2,
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <HCaps size={20} line={1.1} weight={700} tracking="-0.01em">{s.name}</HCaps>
                <p style={{ marginTop: 5, fontSize: 12.5, color: V2.mute, lineHeight: 1.5 }}>{s.short}</p>
              </div>
              <span style={{ color: V2.dim, display: 'inline-flex' }}>
                <ArrowR size={14} />
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
