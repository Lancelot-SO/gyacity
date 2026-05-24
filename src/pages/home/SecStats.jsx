import { V2 } from '@/tokens';
import { HCaps, MotionSection } from '@/components/ui';
import { useCounter } from '@/hooks/useCounter';
import { fadeLeft, fadeRight, fadeUp } from '@/animations/variants';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function AnimatedStat({ n, l, accent }) {
  const { ref, count } = useCounter(parseInt(n, 10), 2200);
  return (
    <div ref={ref}>
      <HCaps size={110} line={0.85} weight={500} tracking="-0.03em" color={accent || V2.cream2}>
        {count}<span style={{ color: V2.coral }}>+</span>
      </HCaps>
      <div style={{ marginTop: 16, fontSize: 13, lineHeight: 1.55, color: V2.mute, maxWidth: 240 }}>{l}</div>
    </div>
  );
}

export function SecStats({ accent }) {
  const { t } = useTranslation();

  const STATS = [
    { n: '124', l: t('stats.stat1') },
    { n: '32',  l: t('stats.stat2') },
    null,
    { n: '8',   l: t('stats.stat3'), accent: true },
  ];

  return (
    <section style={{ padding: '40px 40px 80px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, alignItems: 'flex-start', marginBottom: 56 }}>
        <MotionSection variants={fadeLeft}>
          <HCaps size={68} line={0.98} weight={800} tracking="-0.025em">
            {t('stats.title')}
          </HCaps>
        </MotionSection>
        <MotionSection variants={fadeRight}>
          <p style={{ margin: 0, marginTop: 8, fontSize: 14.5, lineHeight: 1.65, color: V2.mute, maxWidth: 420 }}>
            {t('stats.desc')}
          </p>
        </MotionSection>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 40 }}>
        {STATS.map((s, i) => s ? (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.12 }}
          >
            <AnimatedStat n={s.n} l={s.l} accent={s.accent ? accent || V2.coral : undefined} />
          </motion.div>
        ) : <div key={i} />)}
      </div>
    </section>
  );
}
