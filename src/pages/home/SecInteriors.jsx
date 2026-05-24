import { useState } from 'react';
import { motion } from 'framer-motion';
import { V2 } from '@/tokens';
import { HCaps, Eyebrow, Pill, GhostCTA, Img, MotionSection, MotionChild } from '@/components/ui';
import { IMGS } from '@/data';
import { fadeLeft, fadeRight, fadeUp, stagger } from '@/animations/variants';

const FILTERS = ['Houses', 'Apartments', 'Commercial spaces', 'Offices'];

export function SecInteriors({ accent, onNavigate }) {
  const [active, setActive] = useState('Apartments');
  return (
    <section style={{ padding: '60px 40px 80px', borderTop: `1px solid ${V2.line}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 64, alignItems: 'flex-start' }}>
        <MotionSection variants={fadeLeft}>
          <HCaps size={84} line={0.96} weight={800} tracking="-0.025em">
            Interiors<br />with soul and style
          </HCaps>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger(0.08)}
            style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 10 }}
          >
            {FILTERS.map(f => (
              <motion.div key={f} variants={fadeUp}>
                <Pill active={f === active} accent={accent} onClick={() => setActive(f)}>{f}</Pill>
              </motion.div>
            ))}
          </motion.div>
        </MotionSection>

        <MotionSection variants={fadeRight}>
          <Eyebrow>Where luxury meets<br />innovation</Eyebrow>
          <div style={{ marginTop: 36 }}>
            <GhostCTA onClick={() => onNavigate?.('contact')}>Consultation</GhostCTA>
          </div>
        </MotionSection>
      </div>

      <MotionSection style={{ marginTop: 40 }}>
        <Img src={IMGS.arch} ratio="16/8" dark={0.1} />
      </MotionSection>
    </section>
  );
}
