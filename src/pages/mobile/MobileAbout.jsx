import { useTranslation } from 'react-i18next';
import { V2 } from '@/tokens';
import { HCaps, Eyebrow, CTA, Img, StarField } from '@/components/ui';
import { IMGS } from '@/data';
import { MobileFooter } from './MobileFooter';

const STAT_NUMS = ['124', '32', '7', '8'];

export function MobileAbout({ accent, onNavigate }) {
  const { t } = useTranslation();
  const stats = t('about.stats_mobile', { returnObjects: true });

  return (
    <div style={{ padding: '0 16px 24px' }}>
      <div style={{ border: `1px solid ${V2.line}`, padding: 24, marginBottom: 12 }}>
        <Eyebrow color={accent || V2.coral}>{t('about.eyebrow')}</Eyebrow>
        <HCaps size={56} line={0.92} weight={800} tracking="-0.03em" style={{ marginTop: 16 }}>
          {t('about.title_1')} <span style={{ color: accent || V2.coral }}>{t('about.title_accent')}</span> {t('about.title_2')}
        </HCaps>
        <div style={{ marginTop: 20 }}>
          <Img src="https://images.unsplash.com/photo-1699239116624-85268dce7377?w=1200&q=85&auto=format&fit=crop" ratio="4/3" dark={0.08} />
        </div>
      </div>

      <div style={{ border: `1px solid ${V2.line}`, padding: 24, marginBottom: 12 }}>
        <HCaps size={28} weight={800} tracking="-0.02em" style={{ marginBottom: 32 }}>{t('about.stats_title')}</HCaps>
        {STAT_NUMS.map((n, i) => (
          <div key={n} style={{ marginBottom: 28 }}>
            <HCaps size={80} line={0.85} weight={500} tracking="-0.03em" color={V2.cream2}>
              {n}<span style={{ color: accent || V2.coral }}>+</span>
            </HCaps>
            <div style={{ marginTop: 8, fontSize: 12, color: V2.mute }}>{stats[i]}</div>
          </div>
        ))}
      </div>

      <div style={{ border: `1px solid ${V2.line}`, padding: 24, marginBottom: 12, position: 'relative', overflow: 'hidden' }}>
        <StarField density={0.6} />
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <HCaps size={40} line={0.95} weight={800} tracking="-0.025em">
            {t('about.cta_title_1')} <span style={{ color: accent || V2.coral }}>{t('about.cta_title_accent')}</span>
          </HCaps>
          <CTA accent={accent} onClick={() => onNavigate('contact')}>{t('about.cta_btn_mobile')}</CTA>
        </div>
      </div>

      <MobileFooter accent={accent} />
    </div>
  );
}
