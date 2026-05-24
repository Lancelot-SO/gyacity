import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { V2 } from '@/tokens';
import { HCaps, Eyebrow, CTA, GhostCTA, MotionSection } from '@/components/ui';
import { OFFICES } from '@/data';
import { fadeUp, fadeLeft, stagger } from '@/animations/variants';

export function SecContactBand({ accent, onNavigate }) {
  const { t } = useTranslation();

  return (
    <section style={{ padding: '40px 40px 60px', borderTop: `1px solid ${V2.line}` }}>
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
        variants={stagger(0.1)}
        style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40, alignItems: 'flex-start' }}
      >
        <motion.div variants={fadeLeft}>
          <HCaps size={80} line={0.95} weight={800} tracking="-0.025em">{t('contact_band.title')}</HCaps>
        </motion.div>
        {OFFICES.map(o => (
          <motion.div key={o.city} variants={fadeUp}>
            <Eyebrow color={accent || V2.coral}>{o.city}</Eyebrow>
            <div style={{ marginTop: 18, fontFamily: V2.font, fontSize: 13.5, color: V2.cream, lineHeight: 1.6 }}>
              {o.addr.map((a, i) => <div key={i}>{a}</div>)}
            </div>
            <div style={{ marginTop: 16, fontFamily: V2.mono, fontSize: 12, color: V2.mute, letterSpacing: '0.04em' }}>{o.tel}</div>
          </motion.div>
        ))}
      </motion.div>
      <MotionSection variants={fadeUp} style={{ marginTop: 36, display: 'flex', gap: 16 }}>
        <CTA accent={accent} onClick={() => onNavigate?.('contact')}>{t('contact_band.send')}</CTA>
        <GhostCTA onClick={() => onNavigate?.('contact')}>{t('contact_band.book')}</GhostCTA>
      </MotionSection>
    </section>
  );
}
