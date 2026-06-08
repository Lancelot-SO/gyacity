import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { V2 } from '@/tokens';
import { HCaps, Eyebrow, Pill, GhostCTA, Img, MotionSection, MotionChild } from '@/components/ui';
import { HOME_IMGS } from '@/data';
import { fadeLeft, fadeRight, fadeUp, stagger } from '@/animations/variants';

export function SecInteriors({ accent, onNavigate }) {
  const { t } = useTranslation();
  const filters = t('interiors.filters', { returnObjects: true });
  const [active, setActive] = useState(filters[1]);

  return (
    <section style={{ padding: '60px 40px 80px', borderTop: `1px solid ${V2.line}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 64, alignItems: 'flex-start' }}>
        <MotionSection variants={fadeLeft}>
          <HCaps size={84} line={0.96} weight={800} tracking="-0.025em">
            {t('interiors.title')}
          </HCaps>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger(0.08)}
            style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 10 }}
          >
            {filters.map(f => (
              <motion.div key={f} variants={fadeUp}>
                <Pill active={f === active} accent={accent} onClick={() => setActive(f)}>{f}</Pill>
              </motion.div>
            ))}
          </motion.div>
        </MotionSection>

        <MotionSection variants={fadeRight}>
          <Eyebrow>{t('interiors.tagline')}</Eyebrow>
          <div style={{ marginTop: 36 }}>
            <GhostCTA onClick={() => onNavigate?.('contact')}>{t('interiors.consultation')}</GhostCTA>
          </div>
        </MotionSection>
      </div>

      <MotionSection style={{ marginTop: 40 }}>
        <Img src={HOME_IMGS.arch} ratio="16/8" dark={0.1} />
      </MotionSection>
    </section>
  );
}
