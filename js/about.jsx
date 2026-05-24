/* global window, React, V2, HCaps, Eyebrow, CTA, GhostCTA, OutlineCard, Img, StarField, SiteFooter, PROJECTS, IMGS */

function AboutPage({ accent, onNavigate }) {
  const team = [
    { name:'Akwasi Mensah',  role:'Founding Principal',    city:'Accra',  img:PROJECTS[0].img },
    { name:'Ifeoma Okafor',  role:'Director, Hospitality', city:'Lagos',  img:PROJECTS[1].img },
    { name:'Lukas Brandt',   role:'Director, Europe',      city:'Berlin', img:PROJECTS[2].img },
    { name:'Adwoa Asante',   role:'Head of Interiors',     city:'Accra',  img:PROJECTS[3].img },
  ];
  const milestones = [
    { y:'2014', t:'Studio founded',          d:'Akwasi Mensah opens the studio in a single-room atelier on Volta Street, Cantonments.' },
    { y:'2017', t:'First hospitality commission', d:'Hôtel Saharienne, Lagos — 42 keys, our breakthrough into hospitality work.' },
    { y:'2019', t:'Berlin office',           d:'A second studio opens in Mitte to serve European clients and developers.' },
    { y:'2022', t:'Salone del Mobile',       d:'Maison Onyx featured in the Ghanaian pavilion. International press follows.' },
    { y:'2025', t:'100th commission',        d:'A century of finished buildings across three continents. Onwards.' },
  ];

  return (
    <div style={{ background:V2.bg, color:V2.cream, fontFamily:V2.font }}>
      {/* Manifesto */}
      <section style={{ padding:'80px 40px 40px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:80, alignItems:'flex-end' }}>
          <Eyebrow color={accent||V2.coral}>The studio</Eyebrow>
          <HCaps size={120} line={0.92} weight={800} tracking="-0.035em">
            We build <span style={{ color:accent||V2.coral }}>quiet,</span><br />
            considered places
          </HCaps>
        </div>
      </section>

      {/* Hero image */}
      <div style={{ padding:'0 40px 80px' }}>
        <Img src={IMGS.kitchen} ratio="16/7" dark={0.08} />
      </div>

      {/* Philosophy */}
      <section style={{ padding:'0 40px 100px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1.6fr', gap:80 }}>
          <Eyebrow>We believe in</Eyebrow>
          <div>
            <HCaps size={42} line={1.2} weight={500} tracking="-0.01em" style={{ textTransform:'none' }}>
              Creating <em style={{ color:accent||V2.coral }}>with</em> you, not for you. Every space is a reflection of shared vision and open dialogue &mdash; bringing depth, harmony and character to the final design.
            </HCaps>
            <div style={{ marginTop:56, display:'grid', gridTemplateColumns:'1fr 1fr', gap:56, color:V2.mute, fontSize:14.5, lineHeight:1.65 }}>
              {[
                { label:'Restraint', text:'We work with subtraction. Fewer materials, deeper consideration of each. The best detail is often the one you don\'t notice.' },
                { label:'Place',     text:'Architecture belongs to a climate, a culture, a particular fall of light. We design with site — not despite it.' },
                { label:'Craft',     text:'Our in-house atelier holds the line from sketch to install. Furniture, doors, joinery — made within the practice.' },
                { label:'Patience',  text:'We accept a limited number of commissions each season. The work takes the time it takes.' },
              ].map(b => (
                <div key={b.label}>
                  <Eyebrow color={accent||V2.coral}>{b.label}</Eyebrow>
                  <p style={{ margin:'14px 0 0' }}>{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding:'60px 40px 100px', borderTop:`1px solid ${V2.line}` }}>
        <HCaps size={56} weight={800} tracking="-0.02em" style={{ marginBottom:56 }}>
          By the numbers
        </HCaps>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:40 }}>
          {[
            { n:'124', l:'Commissions delivered since 2014.', accent:false },
            { n:'32',  l:'Architects, designers and makers across three studios.', accent:false },
            { n:'12',  l:'Years in practice. Same principles, refined each year.', accent:false },
            { n:'8',   l:'Countries our clients call home.', accent:true },
          ].map(s => (
            <div key={s.l}>
              <HCaps size={120} line={0.85} weight={500} tracking="-0.03em" color={s.accent ? accent||V2.coral : V2.cream2}>
                {s.n}<span style={{ color:accent||V2.coral }}>+</span>
              </HCaps>
              <div style={{ marginTop:16, fontSize:13.5, lineHeight:1.55, color:V2.mute, maxWidth:240 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={{ padding:'60px 40px 100px', borderTop:`1px solid ${V2.line}` }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:40 }}>
          <HCaps size={56} weight={800} tracking="-0.02em">The team</HCaps>
          <GhostCTA>See all 32 people</GhostCTA>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:24 }}>
          {team.map(p => (
            <article key={p.name}>
              <Img src={p.img} ratio="3/4" dark={0.1} />
              <div style={{ paddingTop:16 }}>
                <HCaps size={20} line={1.15} weight={700} tracking="-0.005em">{p.name}</HCaps>
                <div style={{ marginTop:6, fontFamily:V2.font, fontSize:12, color:V2.mute, letterSpacing:'0.12em', textTransform:'uppercase' }}>{p.role}</div>
                <div style={{ marginTop:4, fontFamily:V2.font, fontSize:11, color:accent||V2.coral, letterSpacing:'0.14em', textTransform:'uppercase' }}>{p.city}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding:'60px 40px 100px', borderTop:`1px solid ${V2.line}` }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 2.4fr', gap:80, alignItems:'flex-start' }}>
          <div>
            <Eyebrow color={accent||V2.coral}>Timeline</Eyebrow>
            <HCaps size={48} line={0.96} weight={800} tracking="-0.025em" style={{ marginTop:24 }}>
              Twelve years,<br />one practice
            </HCaps>
          </div>
          <div>
            {milestones.map((m,i) => (
              <div key={m.y} style={{ display:'grid', gridTemplateColumns:'100px 1fr', gap:32, padding:'24px 0', borderTop:`1px solid ${V2.line}`, borderBottom: i===milestones.length-1 ? `1px solid ${V2.line}` : 'none', alignItems:'flex-start' }}>
                <HCaps size={28} line={1} weight={500} tracking="-0.01em" color={accent||V2.coral}>{m.y}</HCaps>
                <div>
                  <HCaps size={22} line={1.2} weight={700} tracking="-0.005em">{m.t}</HCaps>
                  <div style={{ marginTop:8, fontSize:13.5, color:V2.mute, lineHeight:1.6, maxWidth:540 }}>{m.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section style={{ padding:'80px 40px', position:'relative', overflow:'hidden', borderTop:`1px solid ${V2.line}` }}>
        <StarField density={0.7} />
        <div style={{ position:'relative', display:'flex', justifyContent:'space-between', alignItems:'center', gap:40, flexWrap:'wrap' }}>
          <HCaps size={64} line={0.95} weight={800} tracking="-0.025em">
            Begin a <span style={{ color:accent||V2.coral }}>conversation</span>
          </HCaps>
          <CTA big accent={accent} onClick={() => onNavigate && onNavigate('contact')}>Book a consultation</CTA>
        </div>
      </section>

      <SiteFooter accent={accent} onNavigate={onNavigate} />
    </div>
  );
}

Object.assign(window, { AboutPage });
