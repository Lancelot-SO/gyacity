import { useState } from 'react';
import { V2 } from '@/tokens';
import { HCaps, Eyebrow, Pill, Img, MoreLink } from '@/components/ui';
import { PROJECTS } from '@/data';
import { MobileFooter } from './MobileFooter';

const CATS = ['All', 'Residential', 'Hospitality', 'Corporate', 'Exterior'];

export function MobileProjects({ accent }) {
  const [filter, setFilter] = useState('All');
  const shown = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.cat === filter);

  return (
    <div style={{ padding: '0 16px 24px' }}>
      <div style={{ border: `1px solid ${V2.line}`, padding: 24, marginBottom: 12 }}>
        <Eyebrow color={accent || V2.coral}>Archive</Eyebrow>
        <HCaps size={56} line={0.9} weight={800} tracking="-0.03em" style={{ marginTop: 12 }}>Projects.</HCaps>
      </div>

      <div style={{ border: `1px solid ${V2.line}`, padding: 16, marginBottom: 12, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {CATS.map(c => (
          <Pill key={c} active={c === filter} accent={accent} onClick={() => setFilter(c)}>{c}</Pill>
        ))}
      </div>

      {shown.map(p => (
        <div key={p.id} style={{ border: `1px solid ${V2.line}`, padding: 20, marginBottom: 12 }}>
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
            <MoreLink>View</MoreLink>
          </div>
        </div>
      ))}

      <MobileFooter accent={accent} />
    </div>
  );
}
