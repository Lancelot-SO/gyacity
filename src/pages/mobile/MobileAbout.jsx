import { useTranslation } from 'react-i18next';
import { V2 } from '@/tokens';
import { HCaps, Eyebrow, CTA, GhostCTA, Img, StarField, FloatingOrbs } from '@/components/ui';
import { LouverPhoto } from '@/components/LouverPhoto';
import { IMGS, TEAM } from '@/data';
import { MobileFooter } from './MobileFooter';

const MILESTONE_YEARS = ['2019', '2021', '2023', '2024', '2026'];
const STAT_NUMS = ['124', '32', '7', '8'];

export function MobileAbout({ accent, onNavigate }) {
  const { t } = useTranslation();
  const beliefs = t('about.beliefs', { returnObjects: true });
  const milestones = t('about.milestones', { returnObjects: true });
  const stats = t('about.stats_mobile', { returnObjects: true });

  return (
    <div style={{ padding: '0 16px 24px' }}>
      {/* Manifesto */}
      <div style={{ border: `1px solid ${V2.line}`, padding: 24, marginBottom: 12 }}>
        <Eyebrow color={accent || V2.coral}>{t('about.eyebrow')}</Eyebrow>
        <HCaps size={44} line={0.95} weight={800} tracking="-0.03em" style={{ marginTop: 16 }}>
          {t('about.title_1')} <span style={{ color: accent || V2.coral }}>{t('about.title_accent')}</span> {t('about.title_2')}
        </HCaps>
        <div style={{ marginTop: 20 }}>
          <Img src="https://images.unsplash.com/photo-1699239116624-85268dce7377?w=1200&q=85&auto=format&fit=crop" ratio="4/3" dark={0.08} />
        </div>
      </div>

      {/* Philosophy */}
      <div style={{ border: `1px solid ${V2.line}`, padding: 24, marginBottom: 12 }}>
        <Eyebrow color={accent || V2.coral}>{t('about.belief_eyebrow')}</Eyebrow>
        <HCaps size={22} line={1.25} weight={500} tracking="-0.01em" style={{ marginTop: 16, marginBottom: 28, textTransform: 'none' }}>
          {t('about.belief_text')}
        </HCaps>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {beliefs.map((b, idx) => (
            <div key={b.label} style={{ borderTop: idx > 0 ? `1px solid ${V2.line}` : 'none', paddingTop: idx > 0 ? 20 : 0 }}>
              <Eyebrow color={accent || V2.coral}>{b.label}</Eyebrow>
              <p style={{ margin: '8px 0 0', fontSize: 13, color: V2.mute, lineHeight: 1.55 }}>{b.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div style={{ border: `1px solid ${V2.line}`, padding: 24, marginBottom: 12 }}>
        <HCaps size={28} weight={800} tracking="-0.02em" style={{ marginBottom: 32 }}>{t('about.stats_title')}</HCaps>
        {STAT_NUMS.map((n, i) => (
          <div key={n} style={{ marginBottom: i === STAT_NUMS.length - 1 ? 0 : 28 }}>
            <HCaps size={80} line={0.85} weight={500} tracking="-0.03em" color={V2.cream2}>
              {n}<span style={{ color: accent || V2.coral }}>+</span>
            </HCaps>
            <div style={{ marginTop: 8, fontSize: 12, color: V2.mute }}>{stats[i]}</div>
          </div>
        ))}
      </div>

      {/* Founder Quote */}
      <div style={{ border: `1px solid ${V2.line}`, padding: 24, marginBottom: 12 }}>
        <Eyebrow color={accent || V2.coral}>Founding Principal</Eyebrow>
        <HCaps size={24} line={1.3} weight={500} tracking="-0.02em" style={{ marginTop: 16, textTransform: 'none' }}>
          "Every space carries the memory of the people who built it — our job is to make sure that memory is worth keeping."
        </HCaps>
        <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 20, height: 1, background: accent || V2.coral }} />
          <span style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: V2.mute }}>
            Brown Gyasi Sydney — Berlin
          </span>
        </div>
      </div>

      {/* Executive Team Teaser */}
      <div style={{ border: `1px solid ${V2.line}`, padding: 24, marginBottom: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24 }}>
          <HCaps size={28} weight={800} tracking="-0.02em">{t('about.team_title')}</HCaps>
          <GhostCTA style={{ fontSize: 11 }} onClick={() => onNavigate?.('team')}>{t('about.team_cta')}</GhostCTA>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {TEAM.map(member => (
            <div 
              key={member.index}
              onClick={() => onNavigate?.('team')}
              style={{ background: V2.bg2, border: `1px solid ${V2.line}`, overflow: 'hidden', position: 'relative' }}
            >
              {/* Photo — louver reveal on mobile tap */}
              <div style={{ width: '100%', aspectRatio: '1/1', overflow: 'hidden', position: 'relative' }}>
                <LouverPhoto src={member.photo} hoverSrc={member.photoHover} initials={member.initials} accent={accent} toggleOnClick={true} />
              </div>
              <div style={{ padding: '16px 20px 20px', position: 'relative', zIndex: 4 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                  <span style={{
                    fontFamily: V2.font, fontSize: 8.5, fontWeight: 700,
                    letterSpacing: '0.22em', textTransform: 'uppercase',
                    color: accent || V2.coral,
                    border: `1px solid ${accent || V2.coral}`,
                    padding: '2px 6px',
                  }}>{member.index}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <div style={{ width: 3, height: 3, borderRadius: '50%', background: accent || V2.coral }} />
                    <span style={{
                      fontFamily: V2.font, fontSize: 8.5,
                      letterSpacing: '0.16em', textTransform: 'uppercase',
                      color: accent || V2.coral,
                    }}>{member.city}</span>
                  </div>
                </div>
                <HCaps size={18} line={1.2} weight={700} tracking="-0.01em">
                  {member.name}
                </HCaps>
                <div style={{
                  marginTop: 4, fontFamily: V2.font, fontSize: 9.5,
                  color: V2.mute, letterSpacing: '0.12em', textTransform: 'uppercase',
                }}>{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div style={{ border: `1px solid ${V2.line}`, padding: 24, marginBottom: 12 }}>
        <Eyebrow color={accent || V2.coral}>{t('about.timeline_eyebrow')}</Eyebrow>
        <HCaps size={28} line={0.96} weight={800} tracking="-0.025em" style={{ marginTop: 16, marginBottom: 24 }}>
          {t('about.timeline_title_1')} {t('about.timeline_title_2')}
        </HCaps>
        <div>
          {milestones.map((m, i) => (
            <div key={MILESTONE_YEARS[i]} style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: 16, padding: '16px 0', borderTop: `1px solid ${V2.line}` }}>
              <HCaps size={18} line={1} weight={500} tracking="-0.01em" color={accent || V2.coral}>{MILESTONE_YEARS[i]}</HCaps>
              <div>
                <HCaps size={15} line={1.2} weight={700} tracking="-0.005em">{m.t}</HCaps>
                <div style={{ marginTop: 6, fontSize: 12, color: V2.mute, lineHeight: 1.55 }}>{m.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Strip */}
      <div style={{ border: `1px solid ${V2.line}`, padding: 24, marginBottom: 12, position: 'relative', overflow: 'hidden' }}>
        <StarField density={0.6} />
        <FloatingOrbs opacity={0.06} />
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <HCaps size={36} line={0.95} weight={800} tracking="-0.025em">
            {t('about.cta_title_1')} <span style={{ color: accent || V2.coral }}>{t('about.cta_title_accent')}</span>
          </HCaps>
          <CTA accent={accent} onClick={() => onNavigate('contact')}>{t('about.cta_btn_mobile')}</CTA>
        </div>
      </div>

      <MobileFooter accent={accent} />
    </div>
  );
}
