import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { V2 } from '@/tokens';
import { HCaps, Eyebrow, Pill, GhostCTA, CTA, Img, MoreLink, StarField } from '@/components/ui';
import { PROJECTS, TESTIMONIALS, IMGS } from '@/data';
import { MobileFooter } from './MobileFooter';

export function MobileHome({ accent, onNavigate }) {
  const { t } = useTranslation();
  const filters = t('interiors.filters', { returnObjects: true });
  const quotes  = t('clients.testimonials', { returnObjects: true });

  const [activeFilter, setActiveFilter] = useState(filters[1]);
  const [tIdx, setTIdx] = useState(0);

  // Portfolio takes the prominent slot; lead with the newest project (The Bar).
  const PORTFOLIO = [
    ...PROJECTS.filter(p => p.id === 'the-bar'),
    ...PROJECTS.filter(p => p.id !== 'the-bar').slice(0, 4),
  ];

  const STATS = [
    { n: '124', l: t('stats.stat1_mobile') },
    { n: '32',  l: t('stats.stat2_mobile') },
    { n: '8',   l: t('stats.stat3_mobile') },
  ];

  return (
    <div style={{ padding: '0 16px 24px' }}>
      {/* Hero */}
      <div style={{ border: `1px solid ${V2.line}`, padding: 20, marginBottom: 12 }}>
        <HCaps size={36} line={0.95} weight={800} tracking="-0.02em">
          {t('interiors.title')}
        </HCaps>
        <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {filters.map(f => (
            <Pill key={f} active={f === activeFilter} accent={accent} onClick={() => setActiveFilter(f)}>{f}</Pill>
          ))}
        </div>
        <div style={{ marginTop: 20 }}>
          <Eyebrow>{t('interiors.tagline')}</Eyebrow>
          <div style={{ marginTop: 14 }}><GhostCTA onClick={() => onNavigate('contact')}>{t('interiors.consultation')}</GhostCTA></div>
        </div>
        <div style={{ marginTop: 20 }}>
          <Img src={IMGS.arch} ratio="4/5" dark={0.05} />
        </div>
      </div>

      {/* Portfolio */}
      <div style={{ border: `1px solid ${V2.line}`, padding: 22, marginBottom: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <HCaps size={26} weight={800} tracking="-0.02em">{t('portfolio.title')}</HCaps>
          <GhostCTA onClick={() => onNavigate('projects')}>{t('portfolio.view_all')}</GhostCTA>
        </div>
        <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 18 }}>
          {PORTFOLIO.map(p => (
            <div key={p.id} onClick={() => onNavigate(`project/${p.id}`)} style={{ cursor: 'pointer' }}>
              <Img src={p.img} ratio="3/2" dark={0.06} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: 12 }}>
                <div>
                  <HCaps size={18} line={1.15} weight={700} tracking="0">{p.title}</HCaps>
                  <div style={{ marginTop: 4, fontFamily: V2.font, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: V2.mute }}>{p.cat} · {p.place}</div>
                </div>
                <MoreLink accent={accent}>{t('portfolio.view_project')}</MoreLink>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div style={{ border: `1px solid ${V2.line}`, padding: 22, marginBottom: 12 }}>
        <HCaps size={28} line={1} weight={800} tracking="-0.02em">
          {t('stats.title')}
        </HCaps>
        <p style={{ marginTop: 16, fontSize: 12.5, lineHeight: 1.6, color: V2.mute }}>
          {t('stats.desc_mobile')}
        </p>
        {STATS.map(s => (
          <div key={s.n} style={{ marginTop: 28 }}>
            <HCaps size={76} line={0.85} weight={500} tracking="-0.03em" color={V2.cream2}>
              {s.n}<span style={{ color: accent || V2.coral }}>+</span>
            </HCaps>
            <div style={{ marginTop: 8, fontSize: 11.5, lineHeight: 1.55, color: V2.mute }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* Vision CTA */}
      <div style={{ border: `1px solid ${V2.line}`, padding: 22, marginBottom: 12, position: 'relative', overflow: 'hidden' }}>
        <StarField density={0.6} />
        <div style={{ position: 'relative' }}>
          <Eyebrow color={accent || V2.coral}>{t('vision.eyebrow')}</Eyebrow>
          <HCaps size={40} line={0.95} weight={800} tracking="-0.025em" style={{ marginTop: 12 }}>
            {t('vision.title_1')} <span style={{ color: accent || V2.coral }}>{t('vision.title_accent')}</span>
          </HCaps>
          <div style={{ marginTop: 20 }}>
            <CTA accent={accent} onClick={() => onNavigate('contact')}>{t('vision.book')}</CTA>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div style={{ border: `1px solid ${V2.line}`, padding: 22, marginBottom: 12 }}>
        <HCaps size={22} weight={800} tracking="-0.02em">{t('clients.title')}</HCaps>
        <div style={{ marginTop: 20, fontFamily: V2.font, fontWeight: 800, fontSize: 64, lineHeight: 0.6, color: accent || V2.coral }}>&ldquo;</div>
        <blockquote style={{ margin: '12px 0 0', fontSize: 13.5, lineHeight: 1.6, color: V2.cream }}>
          {quotes[tIdx]}
        </blockquote>
        <div style={{ marginTop: 20 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: V2.cream }}>{TESTIMONIALS[tIdx].name}</div>
          <div style={{ fontFamily: V2.font, fontSize: 10, color: V2.mute, letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 3 }}>{TESTIMONIALS[tIdx].place}</div>
        </div>
        <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
          <button onClick={() => setTIdx(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} style={{ width: 36, height: 36, borderRadius: '50%', border: `1px solid ${V2.line}`, background: 'transparent', color: V2.cream, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M10 6H2M6 2L2 6l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button onClick={() => setTIdx(i => (i + 1) % TESTIMONIALS.length)} style={{ width: 36, height: 36, borderRadius: '50%', border: 'none', background: accent || V2.coral, color: V2.bg, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </div>

      <MobileFooter accent={accent} />
    </div>
  );
}
