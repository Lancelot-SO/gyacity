import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { V2 } from '@/tokens';
import { HCaps, Eyebrow, Img, CTA, StarField } from '@/components/ui';
import { SERVICE_IMGS } from '@/data';
import { MobileFooter } from './MobileFooter';

const IMGS_BY_INDEX = [
  SERVICE_IMGS.interiors,
  SERVICE_IMGS.architecture,
  SERVICE_IMGS.build,
  SERVICE_IMGS.lighting,
  SERVICE_IMGS.ffande,
  SERVICE_IMGS.joinery,
];

export function MobileServices({ accent, onNavigate }) {
  const { t } = useTranslation();
  const a = accent || V2.coral;
  const services = t('services_page.services', { returnObjects: true });
  const steps    = t('services_page.steps',    { returnObjects: true });
  const STEP_NUMS = ['01', '02', '03', '04'];

  return (
    <div style={{ padding: '0 16px 24px' }}>

      {/* Hero card */}
      <div style={{ border: `1px solid ${V2.line}`, padding: 24, marginBottom: 12 }}>
        <Eyebrow color={a}>{t('services_page.eyebrow')}</Eyebrow>
        <HCaps size={52} line={0.9} weight={800} tracking="-0.03em" style={{ marginTop: 14 }}>
          {t('services_page.title')}
        </HCaps>
        <p style={{ marginTop: 14, fontSize: 13, lineHeight: 1.65, color: V2.mute }}>
          {t('services_page.tagline')}
        </p>
      </div>

      {/* Service cards */}
      {services.map((service, i) => (
        <div key={service.name} style={{ border: `1px solid ${V2.line}`, marginBottom: 10, overflow: 'hidden' }}>
          <Img src={IMGS_BY_INDEX[i]} ratio="16/9" dark={0.12} />
          <div style={{ padding: 20 }}>
            <span style={{ fontFamily: V2.mono, fontSize: 10, letterSpacing: '0.16em', color: a }}>
              {String(i + 1).padStart(2, '0')} — {service.short}
            </span>
            <HCaps size={24} line={1.1} weight={700} tracking="-0.01em" style={{ marginTop: 10 }}>
              {service.name}
            </HCaps>
            <p style={{ marginTop: 10, fontSize: 12.5, lineHeight: 1.65, color: V2.mute }}>
              {service.desc}
            </p>
            <ul style={{ marginTop: 14, padding: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {service.bullets.map(b => (
                <li key={b} style={{
                  fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: V2.cream, border: `1px solid ${V2.line}`,
                  padding: '4px 10px', borderRadius: 3,
                }}>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* Process */}
      <div style={{ border: `1px solid ${V2.line}`, padding: 24, marginBottom: 12, marginTop: 4 }}>
        <Eyebrow color={a}>{t('services_page.process_eyebrow')}</Eyebrow>
        <HCaps size={28} weight={800} tracking="-0.02em" style={{ marginTop: 12, marginBottom: 24 }}>
          {t('services_page.process_title')}
        </HCaps>
        {steps.map((step, i) => (
          <div key={step.t} style={{ borderTop: `1px solid ${V2.line}`, paddingTop: 16, paddingBottom: 16 }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <HCaps size={32} line={0.9} weight={800} color={a} style={{ flexShrink: 0, minWidth: 44 }}>
                {STEP_NUMS[i]}
              </HCaps>
              <div>
                <HCaps size={16} weight={700} tracking="-0.005em">{step.t}</HCaps>
                <p style={{ marginTop: 6, fontSize: 12, lineHeight: 1.6, color: V2.mute }}>{step.d}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ border: `1px solid ${V2.line}`, padding: 24, marginBottom: 12, position: 'relative', overflow: 'hidden' }}>
        <StarField density={0.5} />
        <div style={{ position: 'relative' }}>
          <HCaps size={36} line={0.95} weight={800} tracking="-0.025em">
            {t('services_page.cta_title_1')} <span style={{ color: a }}>{t('services_page.cta_title_accent')}</span>
          </HCaps>
          <div style={{ marginTop: 20 }}>
            <CTA accent={a} onClick={() => onNavigate?.('contact')}>{t('services_page.cta_btn')}</CTA>
          </div>
        </div>
      </div>

      <MobileFooter accent={a} />
    </div>
  );
}
