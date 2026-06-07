import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { V2 } from '@/tokens';
import { HCaps, Eyebrow, Pill, Img, MoreLink } from '@/components/ui';
import { PROJECTS } from '@/data';
import { MobileFooter } from './MobileFooter';

const CAT_LABEL_KEYS = {
  All:         'projects.cat_all',
  Residential: 'projects.cat_residential',
  Hospitality: 'projects.cat_hospitality',
  Corporate:   'projects.cat_corporate',
  Exterior:    'projects.cat_exterior',
};

// Only surface categories that actually have projects.
const CAT_KEYS = ['All', ...Array.from(new Set(PROJECTS.map(p => p.cat)))];

export function MobileProjects({ accent, onNavigate }) {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('All');
  const shown = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.cat === filter);

  return (
    <div style={{ padding: '0 16px 24px' }}>
      <div style={{ border: `1px solid ${V2.line}`, padding: 24, marginBottom: 12 }}>
        <Eyebrow color={accent || V2.coral}>{t('projects.eyebrow')}</Eyebrow>
        <HCaps size={56} line={0.9} weight={800} tracking="-0.03em" style={{ marginTop: 12 }}>{t('projects.title')}</HCaps>
      </div>

      <div style={{ border: `1px solid ${V2.line}`, padding: 16, marginBottom: 12, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {CAT_KEYS.map(key => (
          <Pill key={key} active={key === filter} accent={accent} onClick={() => setFilter(key)}>{t(CAT_LABEL_KEYS[key])}</Pill>
        ))}
      </div>

      {shown.map(p => (
        <div key={p.id} onClick={() => onNavigate?.(`project/${p.id}`)} style={{ border: `1px solid ${V2.line}`, padding: 20, marginBottom: 12, cursor: 'pointer' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
            <Eyebrow color={V2.cream}>{p.no} · {p.title}</Eyebrow>
            <span style={{ fontFamily: V2.font, fontSize: 10, color: V2.mute, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{p.year}</span>
          </div>
          <Img src={p.img} ratio="4/3" dark={0.06} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: 12 }}>
            <div>
              <HCaps size={20} line={1.1} weight={700} tracking="-0.005em">{p.title}</HCaps>
              <div style={{ marginTop: 4, fontFamily: V2.font, fontSize: 10, color: V2.mute, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{p.cat} · {p.place}</div>
            </div>
            <MoreLink>{t('projects.view')}</MoreLink>
          </div>
        </div>
      ))}

      <MobileFooter accent={accent} />
    </div>
  );
}
