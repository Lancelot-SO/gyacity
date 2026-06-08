import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { V2 } from '@/tokens';
import { HCaps, Eyebrow, GhostCTA, Img, MotionSection } from '@/components/ui';
import { HOME_IMGS } from '@/data';
import { fadeLeft, fadeRight, fadeUp, stagger } from '@/animations/variants';

export function SecInteriors({ accent, onNavigate }) {
  const { t } = useTranslation();
  const disciplines = t('interiors.disciplines', { returnObjects: true });

  return (
    <section style={{ padding: '60px 40px 80px', borderTop: `1px solid ${V2.line}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 64, alignItems: 'flex-end' }}>
        <MotionSection variants={fadeLeft}>
          <HCaps size={84} line={0.96} weight={800} tracking="-0.025em">
            {t('interiors.title')}
          </HCaps>
        </MotionSection>

        <MotionSection variants={fadeRight}>
          <Eyebrow>{t('interiors.tagline')}</Eyebrow>
          <div style={{ marginTop: 24 }}>
            <GhostCTA onClick={() => onNavigate?.('contact')}>{t('interiors.consultation')}</GhostCTA>
          </div>
        </MotionSection>
      </div>

      <MotionSection style={{ marginTop: 40 }}>
        <Img src={HOME_IMGS.arch} ratio="16/8" dark={0.1} />
      </MotionSection>

      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
        variants={stagger(0.1)}
        style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}
      >
        {disciplines.map((d, i) => (
          <motion.div key={d.name} variants={fadeUp} style={{ borderTop: `1px solid ${V2.line}`, paddingTop: 20 }}>
            <span style={{ fontFamily: V2.mono, fontSize: 12, letterSpacing: '0.14em', color: accent || V2.coral }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <HCaps size={24} line={1.1} weight={700} tracking="-0.01em" style={{ marginTop: 14 }}>{d.name}</HCaps>
            <p style={{ marginTop: 12, fontFamily: V2.font, fontSize: 14, lineHeight: 1.6, color: V2.mute, maxWidth: 320 }}>
              {d.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
