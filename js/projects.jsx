/* global window, React, V2, HCaps, Eyebrow, Pill, MoreLink, NavArrows, Img, StarField, CTA, SiteFooter, PROJECTS, IMGS */

function ProjectsPage({ accent, onNavigate }) {
  const [filter, setFilter] = React.useState('All 124');
  const filters = ['All 124','Residential 68','Hospitality 24','Corporate 18','Exterior 14'];

  const ARCHIVE = PROJECTS;

  const catMap = { 'All 124':'All','Residential 68':'Residential','Hospitality 24':'Hospitality','Corporate 18':'Corporate','Exterior 14':'Exterior' };
  const shown = filter === 'All 124' ? ARCHIVE : ARCHIVE.filter(p => p.cat === catMap[filter]);

  return (
    <div style={{ background:V2.bg, color:V2.cream, fontFamily:V2.font }}>
      {/* Title block */}
      <section style={{ padding:'80px 40px 40px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1.6fr', gap:80, alignItems:'flex-end' }}>
          <div>
            <Eyebrow color={accent||V2.coral}>Archive</Eyebrow>
            <div style={{ marginTop:18, fontFamily:V2.font, fontSize:13.5, color:V2.mute, lineHeight:1.6, maxWidth:320 }}>
              One hundred and twenty-four commissions, filtered. Use the categories to focus on a discipline.
            </div>
          </div>
          <HCaps size={132} line={0.9} weight={800} tracking="-0.035em">
            Projects.
          </HCaps>
        </div>
      </section>

      {/* Filter bar */}
      <section style={{ padding:'32px 40px', borderTop:`1px solid ${V2.line}`, borderBottom:`1px solid ${V2.line}` }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:16 }}>
          <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
            {filters.map(f => (
              <Pill key={f} active={f===filter} accent={accent} onClick={()=>setFilter(f)}>{f}</Pill>
            ))}
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:10 }}>
            <span style={{ fontFamily:V2.font, fontSize:11, color:V2.mute, letterSpacing:'0.16em', textTransform:'uppercase' }}>Sort</span>
            <div style={{ padding:'8px 14px', borderRadius:999, border:`1px solid ${V2.line}`, fontFamily:V2.font, fontSize:12, fontWeight:500, color:V2.cream, display:'inline-flex', alignItems:'center', gap:8, cursor:'pointer' }}>
              Most recent
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding:'40px 40px 80px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(6,1fr)', gridAutoRows:'minmax(0,auto)', gap:24 }}>
          {shown.map((p,i) => {
            const isHero = i===0;
            return (
              <article key={p.id} style={{ gridColumn: isHero ? 'span 4' : 'span 2', gridRow: isHero ? 'span 2' : 'span 1', background:V2.bg }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:12 }}>
                  <Eyebrow color={V2.cream}>{p.no} · {p.title}</Eyebrow>
                  <span style={{ fontFamily:V2.font, fontSize:10, letterSpacing:'0.14em', textTransform:'uppercase', color:V2.mute }}>{p.year}</span>
                </div>
                <Img src={p.img} ratio={isHero ? '4/5' : '4/3'} dark={0.06} />
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', paddingTop:14 }}>
                  <div>
                    <HCaps size={isHero?36:22} line={1.1} weight={700} tracking="-0.005em">{p.title}</HCaps>
                    <div style={{ marginTop:6, fontFamily:V2.font, fontSize:11, color:V2.mute, letterSpacing:'0.14em', textTransform:'uppercase' }}>{p.cat} · {p.place}</div>
                  </div>
                  <MoreLink>View</MoreLink>
                </div>
              </article>
            );
          })}
        </div>

        {/* Pagination */}
        <div style={{ marginTop:56, display:'flex', justifyContent:'space-between', alignItems:'center', borderTop:`1px solid ${V2.line}`, paddingTop:24 }}>
          <span style={{ fontFamily:V2.font, fontSize:11, color:V2.mute, letterSpacing:'0.14em', textTransform:'uppercase' }}>
            Showing {shown.length} of 124 — page 1 / 14
          </span>
          <div style={{ display:'flex', gap:10, alignItems:'center' }}>
            {['1','2','3','…','14'].map((n,i) => (
              <span key={i} style={{ fontFamily:V2.font, fontSize:12, fontWeight:500, width:32, height:32, borderRadius:'50%', background:i===0?V2.cream:'transparent', color:i===0?V2.bg:V2.cream, border:i===0?'none':`1px solid ${V2.line}`, display:'inline-flex', alignItems:'center', justifyContent:'center', cursor:i===0?'default':'pointer' }}>{n}</span>
            ))}
            <NavArrows accent={accent} />
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section style={{ padding:'80px 40px', position:'relative', overflow:'hidden', borderTop:`1px solid ${V2.line}` }}>
        <StarField density={0.6} />
        <div style={{ position:'relative', display:'flex', justifyContent:'space-between', alignItems:'center', gap:40, flexWrap:'wrap' }}>
          <HCaps size={64} line={0.95} weight={800} tracking="-0.025em">
            Ready to start <span style={{ color:accent||V2.coral }}>your project?</span>
          </HCaps>
          <CTA big accent={accent} onClick={() => onNavigate && onNavigate('contact')}>Begin a conversation</CTA>
        </div>
      </section>

      <SiteFooter accent={accent} onNavigate={onNavigate} />
    </div>
  );
}

Object.assign(window, { ProjectsPage });
