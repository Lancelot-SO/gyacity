import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { V2 } from '@/tokens';
import { HCaps, Eyebrow, OutlineCard, Img, FloatingOrbs } from '@/components/ui';
import { HOME_IMGS } from '@/data';
import { EASE_OUT } from '@/animations/variants';

export function SecHero({ accent }) {
  const { t } = useTranslation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const cards = [
    { tag: t('hero.task_tag'),     text: t('hero.task_text') },
    { tag: t('hero.solution_tag'), text: t('hero.solution_text') },
  ];

  return (
    <section ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', alignItems: 'flex-start', padding: '40px 40px 36px' }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
        >
          <HCaps size={36} line={1} weight={700} tracking="-0.01em">
            {t('hero.studio_title')}
          </HCaps>
        </motion.div>
        <div />
        <motion.div
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.15 }}
          style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: 4, fontFamily: V2.font, fontSize: 13, color: V2.cream }}
        >
          <span>{t('hero.service1')}</span>
          <span style={{ color: V2.mute }}>{t('hero.service2')}</span>
        </motion.div>
      </div>

      <div style={{ padding: '0 40px', overflow: 'hidden' }}>
        <motion.div style={{ y: imgY }}>
          <Img src={HOME_IMGS.hero} ratio="16/10" dark={0.08} />
        </motion.div>
      </div>

      <motion.div style={{ padding: '60px 40px 64px', y: textY }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE_OUT, delay: 0.3 }}
        >
          <HCaps size={62} line={1.05} weight={700} tracking="-0.015em" style={{ maxWidth: 1080 }}>
            {t('hero.headline')}<br />
            <span style={{ color: accent || V2.coral }}>{t('hero.headline_accent')}</span>
          </HCaps>
        </motion.div>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, padding: '0 40px 80px' }}>
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.5 + i * 0.15 }}
          >
            <OutlineCard pad={36} style={{ minHeight: 240 }}>
              <Eyebrow color={accent || V2.coral}>{card.tag}</Eyebrow>
              <div style={{ marginTop: 60, fontSize: 14.5, lineHeight: 1.55, color: V2.mute, maxWidth: 380 }}>{card.text}</div>
            </OutlineCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
