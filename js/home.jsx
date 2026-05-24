/* global window, React, V2, HCaps, Eyebrow, Pill, ArrowR, ArrowUR, CTA, GhostCTA, OutlineCard, Img, MoreLink, NavArrows, StarField, V2Mark, GCityMark, PROJECTS, TESTIMONIALS, IMGS, OFFICES */

// ── HERO ────────────────────────────────────
function SecHero({ accent }) {
  return (
    <section>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', alignItems:'flex-start', padding:'40px 40px 36px' }}>
        <HCaps size={36} line={1} weight={700} tracking="-0.01em">
          Interior<br />Design Studio
        </HCaps>
        <div />
        <div style={{ textAlign:'right', display:'flex', flexDirection:'column', gap:4, fontFamily:V2.font, fontSize:13, color:V2.cream }}>
          <span>Interior Design</span>
          <span style={{ color:V2.mute }}>Architecture & Build</span>
        </div>
      </div>

      <div style={{ padding:'0 40px' }}>
        <Img src={IMGS.hero} ratio="16/10" dark={0.05} />
      </div>

      <div style={{ padding:'60px 40px 64px' }}>
        <HCaps size={62} line={1.05} weight={700} tracking="-0.015em" style={{ maxWidth:1080 }}>
          The main goal of the studio<br />
          is to showcase our agency&rsquo;s<br />
          impressive and innovative work<br />
          <span style={{ color: accent||V2.coral }}>and attract new clients.</span>
        </HCaps>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24, padding:'0 40px 80px' }}>
        <OutlineCard pad={36} style={{ minHeight:240 }}>
          <Eyebrow color={accent||V2.coral}>Task.</Eyebrow>
          <div style={{ marginTop:60, fontSize:14.5, lineHeight:1.55, color:V2.mute, maxWidth:380 }}>
            Create an attractive website that conveys the aesthetics and style of the interior design agency and attracts new clients for consultations on the design of their space.
          </div>
        </OutlineCard>
        <OutlineCard pad={36} style={{ minHeight:240 }}>
          <Eyebrow color={accent||V2.coral}>Solution.</Eyebrow>
          <div style={{ marginTop:60, fontSize:14.5, lineHeight:1.55, color:V2.mute, maxWidth:380 }}>
            After analysing the agency&rsquo;s niche, competitors, and target audience, we created a minimalistic and intuitive website that allows visitors to learn more about the company and take the desired action.
          </div>
        </OutlineCard>
      </div>
    </section>
  );
}

// ── INTERIORS / FILTER ───────────────────────
function SecInteriors({ accent, onNavigate }) {
  const [active, setActive] = React.useState('Apartments');
  const filters = ['Houses','Apartments','Commercial spaces','Offices'];
  return (
    <section style={{ padding:'60px 40px 80px', borderTop:`1px solid ${V2.line}` }}>
      <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr', gap:64, alignItems:'flex-start' }}>
        <div>
          <HCaps size={84} line={0.96} weight={800} tracking="-0.025em">
            Interiors<br />with soul and style
          </HCaps>
          <div style={{ marginTop:28, display:'flex', flexWrap:'wrap', gap:10 }}>
            {filters.map(f => (
              <Pill key={f} active={f===active} accent={accent} onClick={()=>setActive(f)}>{f}</Pill>
            ))}
          </div>
        </div>
        <div style={{ paddingTop:18 }}>
          <Eyebrow>Where luxury meets<br />innovation</Eyebrow>
          <div style={{ marginTop:36 }}>
            <GhostCTA onClick={() => onNavigate && onNavigate('contact')}>Consultation</GhostCTA>
          </div>
        </div>
      </div>
      <div style={{ marginTop:40 }}>
        <Img src={IMGS.arch} ratio="16/8" dark={0.1} />
      </div>
    </section>
  );
}

// ── STATS ────────────────────────────────────
function Stat({ n, l, accent }) {
  return (
    <div>
      <HCaps size={110} line={0.85} weight={500} tracking="-0.03em" color={accent ? accent : V2.cream2}>
        {n}<span style={{ color: accent||V2.coral }}>+</span>
      </HCaps>
      <div style={{ marginTop:16, fontSize:13, lineHeight:1.55, color:V2.mute, maxWidth:240 }}>{l}</div>
    </div>
  );
}

function SecStats({ accent }) {
  return (
    <section style={{ padding:'40px 40px 80px' }}>
      <div style={{ display:'grid', gridTemplateColumns:'1.1fr 1fr', gap:80, alignItems:'flex-start', marginBottom:56 }}>
        <HCaps size={68} line={0.98} weight={800} tracking="-0.025em">
          People trust us<br />with their<br />homes
        </HCaps>
        <p style={{ margin:0, marginTop:8, fontSize:14.5, lineHeight:1.65, color:V2.mute, maxWidth:420 }}>
          Gyacity is a team of highly qualified architects and interior designers with twelve years of practice. We understand that every space is unique — just like the people who live in it. That&rsquo;s why your vision, lifestyle and personal style are always at the heart of our work.
        </p>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap:40 }}>
        <Stat n="124" l="Completed projects — from private apartments to commercial spaces across different countries." />
        <Stat n="32"  l="Skilled professionals in our team, each bringing expertise in design, architecture and visualisation." />
        <div />
        <Stat n="8"   l="Countries our clients come from — we confidently work on international projects." accent={accent||V2.coral} />
      </div>
    </section>
  );
}

// ── SERVICES ─────────────────────────────────
function SecServices({ accent, onNavigate }) {
  const items = [
    { tag:'i',  name:'Private house design',    img: PROJECTS[0].img },
    { tag:'ii', name:'Apartment design',         img: PROJECTS[1].img },
    { tag:'iii',name:'Commercial spaces',        img: PROJECTS[5].img },
    { tag:'iv', name:'Office design',            img: PROJECTS[2].img },
  ];
  return (
    <section style={{ padding:'60px 40px 80px', borderTop:`1px solid ${V2.line}` }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:36 }}>
        <HCaps size={56} weight={800} tracking="-0.02em">Services</HCaps>
        <GhostCTA onClick={() => onNavigate && onNavigate('contact')}>Book Consultation</GhostCTA>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }}>
        {items.map(s => (
          <article key={s.name} style={{ background:V2.bg, cursor:'pointer' }}>
            <Img src={s.img} ratio="16/10" dark={0.08} />
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', padding:'20px 4px 4px' }}>
              <HCaps size={22} line={1.15} weight={700} tracking="0">{s.name}</HCaps>
              <MoreLink>More details</MoreLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ── PORTFOLIO ────────────────────────────────
function SecPortfolio({ accent, onNavigate }) {
  const [start, setStart] = React.useState(0);
  const items = [
    { name:'Maison Onyx',      place:'East Legon, Accra',   img: PROJECTS[0].img },
    { name:'Hôtel Saharienne', place:'Victoria Island, Lagos', img: PROJECTS[1].img },
    { name:'Luxe Living',      place:'Lisbon, Portugal',    img: IMGS.luxe },
    { name:'Soft Minimalism',  place:'Milan, Italy',        img: IMGS.min },
    { name:'Dust & Light',     place:'Palm, Indonesia',     img: IMGS.dust },
  ];
  const prev = () => setStart(s => Math.max(0, s-1));
  const next = () => setStart(s => Math.min(items.length-2, s+1));

  return (
    <section style={{ padding:'60px 0 80px', borderTop:`1px solid ${V2.line}` }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', padding:'0 40px', marginBottom:32 }}>
        <HCaps size={56} weight={800} tracking="-0.02em">Portfolio</HCaps>
        <div style={{ display:'flex', alignItems:'center', gap:16 }}>
          <GhostCTA onClick={() => onNavigate && onNavigate('projects')}>View all</GhostCTA>
          <div style={{ display:'inline-flex', gap:10 }}>
            <button onClick={prev} style={{ width:38, height:38, borderRadius:'50%', border:`1px solid ${V2.line}`, background:'transparent', color:V2.cream, cursor:'pointer', display:'inline-flex', alignItems:'center', justifyContent:'center' }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M10 6H2M6 2L2 6l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button onClick={next} style={{ width:38, height:38, borderRadius:'50%', border:'none', background:accent||V2.coral, color:V2.bg, cursor:'pointer', display:'inline-flex', alignItems:'center', justifyContent:'center' }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </div>
      <div style={{ display:'flex', gap:20, padding:'0 40px', overflow:'hidden' }}>
        {items.slice(start, start+3).map((p,i) => (
          <article key={p.name} style={{ flexShrink:0, width: i===0 ? 540 : 380 }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:14 }}>
              <Eyebrow color={V2.cream}>{p.name}</Eyebrow>
              <span style={{ fontFamily:V2.font, fontSize:11, color:V2.mute, letterSpacing:'0.12em', textTransform:'uppercase' }}>{p.place}</span>
            </div>
            <Img src={p.img} ratio="4/3" dark={0.05} />
          </article>
        ))}
      </div>
    </section>
  );
}

// ── VISION CTA ───────────────────────────────
function SecVisionCTA({ accent }) {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  return (
    <section style={{ padding:'80px 40px 64px', position:'relative', overflow:'hidden' }}>
      <StarField density={0.7} />
      <div style={{ position:'relative', display:'grid', gridTemplateColumns:'0.5fr 2fr 1.4fr', gap:60, alignItems:'flex-start' }}>
        <Eyebrow color={accent||V2.coral}>Inspire</Eyebrow>
        <HCaps size={88} line={0.95} weight={800} tracking="-0.028em">
          Let&rsquo;s bring your vision to <span style={{ color: accent||V2.coral }}>life</span>
        </HCaps>
        <div>
          <p style={{ margin:0, fontSize:13.5, lineHeight:1.6, color:V2.mute, maxWidth:280 }}>
            Our experts will be happy to help you create a harmonious space that suits your needs and style.
          </p>
          <div style={{ marginTop:40, display:'flex', flexDirection:'column', gap:18 }}>
            <FormFieldLine label="Your name" value={name} onChange={setName} placeholder="Adwoa Mensah" />
            <FormFieldLine label="Your phone" value={phone} onChange={setPhone} placeholder="+233 24 905 1184" />
            <div style={{ display:'flex', justifyContent:'flex-end', marginTop:10 }}>
              <button style={{ width:56, height:56, borderRadius:'50%', background:'transparent', border:`1px solid ${V2.cream}`, color:V2.cream, cursor:'pointer', display:'inline-flex', alignItems:'center', justifyContent:'center', transition:'all 0.2s' }}
                onMouseEnter={e=>{e.currentTarget.style.background=accent||V2.coral;e.currentTarget.style.borderColor=accent||V2.coral;e.currentTarget.style.color=V2.bg}}
                onMouseLeave={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.borderColor=V2.cream;e.currentTarget.style.color=V2.cream}}>
                <svg width="18" height="18" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormFieldLine({ label, value, onChange, placeholder }) {
  return (
    <div style={{ borderBottom:`1px solid ${V2.cream}`, paddingBottom:8 }}>
      <div style={{ fontFamily:V2.font, fontSize:11, fontWeight:600, letterSpacing:'0.16em', textTransform:'uppercase', color:V2.mute }}>{label}</div>
      <input
        value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder}
        style={{ marginTop:8, fontFamily:V2.font, fontSize:16, color:V2.cream, background:'transparent', border:'none', outline:'none', width:'100%' }}
      />
    </div>
  );
}

// ── TESTIMONIALS ─────────────────────────────
function SecClients({ accent }) {
  const [idx, setIdx] = React.useState(0);
  const items = TESTIMONIALS;
  const shown = [items[idx], items[(idx+1) % items.length]];
  return (
    <section style={{ padding:'40px 40px 80px' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:36 }}>
        <HCaps size={56} weight={800} tracking="-0.02em" style={{ maxWidth:560 }}>
          Clients about<br />our work
        </HCaps>
        <div style={{ display:'inline-flex', gap:10 }}>
          <button onClick={()=>setIdx(i=>(i-1+items.length)%items.length)} style={{ width:38, height:38, borderRadius:'50%', border:`1px solid ${V2.line}`, background:'transparent', color:V2.cream, cursor:'pointer', display:'inline-flex', alignItems:'center', justifyContent:'center' }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M10 6H2M6 2L2 6l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button onClick={()=>setIdx(i=>(i+1)%items.length)} style={{ width:38, height:38, borderRadius:'50%', border:'none', background:accent||V2.coral, color:V2.bg, cursor:'pointer', display:'inline-flex', alignItems:'center', justifyContent:'center' }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }}>
        {shown.map((t,i) => (
          <OutlineCard key={i} pad={32}>
            <div style={{ display:'flex', gap:24 }}>
              <div style={{ fontFamily:V2.font, fontWeight:800, fontSize:90, lineHeight:0.7, color:accent||V2.coral, flexShrink:0 }}>&ldquo;</div>
              <div>
                <blockquote style={{ margin:0, fontSize:14, lineHeight:1.6, color:V2.cream, maxWidth:460 }}>{t.quote}</blockquote>
                <div style={{ marginTop:24 }}>
                  <div style={{ fontFamily:V2.font, fontSize:13, fontWeight:600, color:V2.cream }}>{t.name}</div>
                  <div style={{ fontFamily:V2.font, fontSize:11, color:V2.mute, letterSpacing:'0.12em', textTransform:'uppercase', marginTop:4 }}>{t.place}</div>
                </div>
              </div>
            </div>
          </OutlineCard>
        ))}
      </div>
    </section>
  );
}

// ── BELIEF ───────────────────────────────────
function SecBelief() {
  return (
    <section style={{ padding:'40px 40px 80px' }}>
      <div style={{ maxWidth:680, marginBottom:28 }}>
        <Eyebrow color={V2.cream}>We believe in</Eyebrow>
        <HCaps size={28} line={1.25} weight={500} tracking="-0.005em" style={{ marginTop:14, textTransform:'none', fontFamily:V2.font }}>
          Creating with you, not for you. Every space is a reflection of shared vision and open dialogue &mdash; bringing depth, harmony and character to the final design.
        </HCaps>
      </div>
      <Img src={IMGS.kitchen} ratio="16/8" dark={0.08} />
    </section>
  );
}

// ── CONTACT BAND ─────────────────────────────
function SecContactBand({ accent, onNavigate }) {
  return (
    <section style={{ padding:'40px 40px 60px', borderTop:`1px solid ${V2.line}` }}>
      <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr 1fr', gap:40, alignItems:'flex-start' }}>
        <HCaps size={80} line={0.95} weight={800} tracking="-0.025em">
          Get in touch
        </HCaps>
        {OFFICES.map(o => (
          <div key={o.city}>
            <Eyebrow color={accent||V2.coral}>{o.city}</Eyebrow>
            <div style={{ marginTop:18, fontFamily:V2.font, fontSize:13.5, color:V2.cream, lineHeight:1.6 }}>
              {o.addr.map((a,i) => <div key={i}>{a}</div>)}
            </div>
            <div style={{ marginTop:16, fontFamily:V2.mono, fontSize:12, color:V2.mute, letterSpacing:'0.04em' }}>{o.tel}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop:36, display:'flex', gap:16 }}>
        <CTA accent={accent} onClick={() => onNavigate && onNavigate('contact')}>Send Inquiry</CTA>
        <GhostCTA onClick={() => onNavigate && onNavigate('contact')}>Book Consultation</GhostCTA>
      </div>
    </section>
  );
}

// ── FOOTER ───────────────────────────────────
function SiteFooter({ accent, onNavigate }) {
  const navGroups = [
    { t:'Studio',   items:['About','Approach','Journal','Press'] },
    { t:'Services', items:['Houses','Apartments','Commercial','Offices'] },
    { t:'Social',   items:['Instagram','TikTok','Pinterest','LinkedIn'], arrow:true },
  ];
  return (
    <footer style={{ background:V2.bg, padding:'60px 40px 32px', borderTop:`1px solid ${V2.line}`, position:'relative', overflow:'hidden' }}>
      <StarField density={0.5} />
      <div style={{ position:'relative', display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap:40, marginBottom:80 }}>
        <div>
          <V2Mark size={16} />
          <div style={{ marginTop:18, fontFamily:V2.font, fontSize:13, color:V2.mute, lineHeight:1.6, maxWidth:240 }}>
            Architecture, interiors and exterior environments. Accra · Lagos · Berlin. Est. 2014.
          </div>
        </div>
        {navGroups.map(g => (
          <div key={g.t}>
            <Eyebrow color={V2.mute}>{g.t}</Eyebrow>
            <div style={{ marginTop:18, display:'flex', flexDirection:'column', gap:10 }}>
              {g.items.map(i => (
                <a key={i} href="#" style={{ color:V2.cream, fontSize:14, fontFamily:V2.font, display:'inline-flex', alignItems:'center', gap:8 }}>
                  {i}{g.arrow && <ArrowUR size={11}/>}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ position:'relative', textAlign:'center', borderTop:`1px solid ${V2.line}`, paddingTop:48 }}>
        <HCaps as="div" size={240} line={0.85} weight={800} tracking="-0.045em">
          Gyacity<span style={{ color: accent||V2.coral }}>©</span>
        </HCaps>
      </div>
      <div style={{ position:'relative', display:'flex', justifyContent:'space-between', marginTop:40, fontFamily:V2.font, fontSize:11, letterSpacing:'0.16em', textTransform:'uppercase', color:V2.dim }}>
        <span>© MMXXVI Gyacity Ltd.</span>
        <span>Crafted in Accra, Lagos &amp; Berlin</span>
        <span>Privacy · Imprint</span>
      </div>
    </footer>
  );
}

// ── ASSEMBLED HOME PAGE ───────────────────────
function HomePage({ accent, onNavigate }) {
  return (
    <div style={{ background:V2.bg, color:V2.cream, fontFamily:V2.font }}>
      <SecHero accent={accent} />
      <SecInteriors accent={accent} onNavigate={onNavigate} />
      <SecStats accent={accent} />
      <SecServices accent={accent} onNavigate={onNavigate} />
      <SecPortfolio accent={accent} onNavigate={onNavigate} />
      <SecVisionCTA accent={accent} />
      <SecClients accent={accent} />
      <SecBelief />
      <SecContactBand accent={accent} onNavigate={onNavigate} />
      <SiteFooter accent={accent} onNavigate={onNavigate} />
    </div>
  );
}

Object.assign(window, { HomePage, SiteFooter });
