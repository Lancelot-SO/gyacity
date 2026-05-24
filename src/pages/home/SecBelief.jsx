import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { V2 } from '@/tokens';
import { HCaps, Eyebrow, Img, MotionSection } from '@/components/ui';
import { IMGS } from '@/data';
import { fadeUp } from '@/animations/variants';

export function SecBelief() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section ref={ref} style={{ padding: '40px 40px 80px' }}>
      <MotionSection variants={fadeUp} style={{ maxWidth: 680, marginBottom: 28 }}>
        <Eyebrow color={V2.cream}>We believe in</Eyebrow>
        <HCaps size={28} line={1.25} weight={500} tracking="-0.005em" style={{ marginTop: 14, textTransform: 'none', fontFamily: V2.font }}>
          Creating with you, not for you. Every space is a reflection of shared vision and open dialogue &mdash; bringing depth, harmony and character to the final design.
        </HCaps>
      </MotionSection>

      <div style={{ overflow: 'hidden' }}>
        <motion.div style={{ y }}>
          <Img src={IMGS.kitchen} ratio="16/8" dark={0.08} />
        </motion.div>
      </div>
    </section>
  );
}
