import { motion } from 'framer-motion';
import { V2 } from '@/tokens';
import { HCaps, Eyebrow, StarField, ArrowUR, MotionSection } from '@/components/ui';
import { V2Mark } from '@/components/Logo';
import { fadeUp, stagger, clipRevealUp } from '@/animations/variants';

const NAV_GROUPS = [
  { t: 'Studio',   items: ['About', 'Approach', 'Journal', 'Press'] },
  { t: 'Services', items: ['Houses', 'Apartments', 'Commercial', 'Offices'] },
  { t: 'Social',   items: ['Instagram', 'TikTok', 'Pinterest', 'LinkedIn'], arrow: true },
];

export function SiteFooter({ accent }) {
  return (
    <footer style={{ background: V2.bg, padding: '60px 40px 32px', borderTop: `1px solid ${V2.line}`, position: 'relative', overflow: 'hidden' }}>
      <StarField density={0.5} />

      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={stagger(0.08)}
        style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 40, marginBottom: 80 }}
      >
        <motion.div variants={fadeUp}>
          <V2Mark size={16} />
          <div style={{ marginTop: 18, fontFamily: V2.font, fontSize: 13, color: V2.mute, lineHeight: 1.6, maxWidth: 240 }}>
            Architecture, interiors and exterior environments. Accra · Lagos · Berlin. Est. 2014.
          </div>
        </motion.div>

        {NAV_GROUPS.map(g => (
          <motion.div key={g.t} variants={fadeUp}>
            <Eyebrow color={V2.mute}>{g.t}</Eyebrow>
            <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {g.items.map(item => (
                <motion.a
                  key={item} href="#"
                  style={{ color: V2.cream, fontSize: 14, fontFamily: V2.font, display: 'inline-flex', alignItems: 'center', gap: 8 }}
                  whileHover={{ x: 4, color: V2.coral }}
                  transition={{ duration: 0.2 }}
                >
                  {item}{g.arrow && <ArrowUR size={11} />}
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Giant wordmark reveal */}
      <div style={{ position: 'relative', textAlign: 'center', borderTop: `1px solid ${V2.line}`, paddingTop: 48, overflow: 'hidden' }}>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.0, 0.0, 0.2, 1] }}
        >
          <HCaps as="div" size={240} line={0.85} weight={800} tracking="-0.045em">
            Gyacity<span style={{ color: accent || V2.coral }}>©</span>
          </HCaps>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', marginTop: 40, fontFamily: V2.font, fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: V2.dim }}
      >
        <span>© MMXXVI Gyacity Ltd.</span>
        <span>Crafted in Accra, Lagos &amp; Berlin</span>
        <span>Privacy · Imprint</span>
      </motion.div>
    </footer>
  );
}
