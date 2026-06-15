import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { V2 } from '@/tokens';
import { HCaps, Eyebrow, Img, GhostCTA, VideoFrame, ArrowR } from '@/components/ui';
import { getProjectDetail, getAdjacentProject } from '@/data';
import { MobileFooter } from './MobileFooter';

export function MobileProjectDetail({ accent, onNavigate, id }) {
  const { t } = useTranslation();
  const a = accent || V2.coral;
  const p = getProjectDetail(id);
  const next = getAdjacentProject(id);

  if (!p) return null;

  const g = p.gallery;
  const facts = [
    { label: t('project.location'),   value: p.place },
    { label: t('project.year'),       value: p.year },
    { label: t('project.area'),       value: p.area },
    { label: t('project.discipline'), value: p.services },
  ];

  return (
    <div style={{ padding: '0 16px 24px' }}>
      <div style={{ padding: '16px 0' }}>
        <GhostCTA onClick={() => onNavigate?.('projects')}>{t('project.back')}</GhostCTA>
      </div>

      {/* Hero */}
      <div style={{ position: 'relative', overflow: 'hidden', marginBottom: 12 }}>
        <Img src={p.img} ratio="4/5" dark={0.55} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 20 }}>
          <Eyebrow color={a}>{p.no} · {p.cat} · {p.year}</Eyebrow>
          <HCaps size={44} line={0.92} weight={800} tracking="-0.035em" style={{ marginTop: 8 }}>{p.title}</HCaps>
          <div style={{ marginTop: 8, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: V2.cream2 }}>{p.place}</div>
        </div>
      </div>

      {/* Facts */}
      <div style={{ border: `1px solid ${V2.line}`, padding: 20, marginBottom: 12, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
        {facts.map(f => (
          <div key={f.label}>
            <Eyebrow color={V2.mute} style={{ fontSize: 10 }}>{f.label}</Eyebrow>
            <div style={{ marginTop: 6, fontSize: 13, color: V2.cream }}>{f.value}</div>
          </div>
        ))}
      </div>

      {/* Overview */}
      <div style={{ padding: '24px 4px 28px' }}>
        <Eyebrow color={a}>{t('project.overview')}</Eyebrow>
        <p style={{ marginTop: 12, fontSize: 18, lineHeight: 1.4, color: V2.cream, fontWeight: 500, letterSpacing: '-0.01em' }}>{p.summary}</p>
      </div>

      {/* Gallery */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {g.map((src, i) => (
          <Fragment key={i}>
            <Img src={src} ratio={i % 2 === 0 ? '4/3' : '4/5'} dark={0.05} />
            {i === 0 && p.video && <VideoFrame src={p.video.src} poster={p.video.poster} accent={a} label={t('project.watch')} />}
            {i === 0 && p.videos?.length > 0 && p.videos.map((src, vi) => (
              <VideoFrame key={vi} src={src} accent={a} label={vi === 0 ? t('project.watch') : undefined} style={{ marginTop: 12 }} />
            ))}
          </Fragment>
        ))}
      </div>

      {/* Next project */}
      <button
        onClick={() => onNavigate?.(`project/${next.id}`)}
        style={{ width: '100%', textAlign: 'left', background: 'none', border: `1px solid ${V2.line}`, padding: 20, marginTop: 16, cursor: 'pointer', color: V2.cream }}
      >
        <Eyebrow color={V2.mute}>{t('project.next')}</Eyebrow>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 10 }}>
          <HCaps size={30} line={0.95} weight={800} tracking="-0.03em">{next.title}</HCaps>
          <span style={{ color: a, display: 'inline-flex' }}><ArrowR size={22} /></span>
        </div>
        <div style={{ marginTop: 6, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: V2.mute }}>{next.place} · {next.cat}</div>
      </button>

      <MobileFooter accent={a} />
    </div>
  );
}
