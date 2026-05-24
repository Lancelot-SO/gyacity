import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { V2 } from '@/tokens';
import { HCaps, GhostCTA, Img, MoreLink, TiltCard, MotionSection } from '@/components/ui';
import { PROJECTS } from '@/data';
import { fadeUp, stagger } from '@/animations/variants';

const IMGS = [PROJECTS[0].img, PROJECTS[1].img, PROJECTS[5].img, PROJECTS[2].img];

export function SecServices({ accent, onNavigate }) {
  const { t } = useTranslation();
  const names = t('services.items', { returnObjects: true });

  const ITEMS = names.map((name, i) => ({ name, img: IMGS[i] }));

  return (
    <section style={{ padding: '60px 40px 80px', borderTop: `1px solid ${V2.line}` }}>
      <MotionSection style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 36 }}>
        <HCaps size={56} weight={800} tracking="-0.02em">{t('services.title')}</HCaps>
        <GhostCTA onClick={() => onNavigate?.('contact')}>{t('services.book')}</GhostCTA>
      </MotionSection>

      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
        variants={stagger(0.12)}
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}
      >
        {ITEMS.map(s => (
          <motion.div key={s.name} variants={fadeUp}>
            <TiltCard strength={8} style={{ background: V2.bg, cursor: 'none' }}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <Img src={s.img} ratio="16/10" dark={0.08} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '20px 4px 4px' }}>
                  <HCaps size={22} line={1.15} weight={700} tracking="0">{s.name}</HCaps>
                  <MoreLink>{t('services.more')}</MoreLink>
                </div>
              </motion.div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
