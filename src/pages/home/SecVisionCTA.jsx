import { useState } from 'react';
import { motion } from 'framer-motion';
import { V2 } from '@/tokens';
import { HCaps, Eyebrow, StarField, FloatingOrbs, MotionSection } from '@/components/ui';
import { fadeLeft, fadeRight, fadeUp } from '@/animations/variants';

function FormFieldLine({ label, value, onChange, placeholder }) {
  return (
    <motion.div
      whileFocusWithin={{ borderColor: V2.coral }}
      style={{ borderBottom: `1px solid ${V2.cream}`, paddingBottom: 8, transition: 'border-color 0.3s' }}
    >
      <div style={{ fontFamily: V2.font, fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: V2.mute }}>{label}</div>
      <input
        value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        style={{ marginTop: 8, fontFamily: V2.font, fontSize: 16, color: V2.cream, background: 'transparent', border: 'none', outline: 'none', width: '100%', cursor: 'none' }}
      />
    </motion.div>
  );
}

export function SecVisionCTA({ accent }) {
  const [name, setName]   = useState('');
  const [phone, setPhone] = useState('');

  return (
    <section style={{ padding: '80px 40px 64px', position: 'relative', overflow: 'hidden' }}>
      <StarField density={0.7} />
      <FloatingOrbs opacity={0.06} />

      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '0.5fr 2fr 1.4fr', gap: 60, alignItems: 'flex-start' }}>
        <MotionSection variants={fadeUp} delay={0.1}>
          <Eyebrow color={accent || V2.coral}>Inspire</Eyebrow>
        </MotionSection>

        <MotionSection variants={fadeLeft}>
          <HCaps size={88} line={0.95} weight={800} tracking="-0.028em">
            Let&rsquo;s bring your vision to <span style={{ color: accent || V2.coral }}>life</span>
          </HCaps>
        </MotionSection>

        <MotionSection variants={fadeRight}>
          <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: V2.mute, maxWidth: 280 }}>
            Our experts will be happy to help you create a harmonious space that suits your needs and style.
          </p>
          <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 18 }}>
            <FormFieldLine label="Your name" value={name} onChange={setName} placeholder="Adwoa Mensah" />
            <FormFieldLine label="Your phone" value={phone} onChange={setPhone} placeholder="+233 24 905 1184" />
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
              <motion.button
                whileHover={{ background: accent || V2.coral, borderColor: accent || V2.coral, color: V2.bg, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                style={{ width: 56, height: 56, borderRadius: '50%', background: 'transparent', border: `1px solid ${V2.cream}`, color: V2.cream, cursor: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s, border-color 0.2s, color 0.2s' }}
              >
                <svg width="18" height="18" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </motion.button>
            </div>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
