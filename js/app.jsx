/* global window, React, ReactDOM, V2, HCaps, Eyebrow, Pill, ArrowUR, CTA, GhostCTA, Img, MoreLink, StarField, V2Mark, SiteNav, WhatsAppBtn, HomePage, AboutPage, ProjectsPage, ContactPage, PROJECTS, TESTIMONIALS, IMGS, OFFICES */

const ACCENT = '#d97757';

function useIsMobile() {
  const [mobile, setMobile] = React.useState(() => window.innerWidth < 768);
  React.useEffect(() => {
    const fn = () => setMobile(window.innerWidth < 768);
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);
  return mobile;
}

function App() {
  const [page, setPage] = React.useState(() => {
    const h = window.location.hash.replace('#','');
    return ['home','about','projects','contact'].includes(h) ? h : 'home';
  });
  const [key, setKey] = React.useState(0);
  const isMobile = useIsMobile();

  const navigate = React.useCallback((p) => {
    const valid = ['home','about','projects','contact'].includes(p) ? p : 'home';
    window.location.hash = valid;
    setPage(valid);
    setKey(k => k+1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  React.useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.replace('#','');
      const valid = ['home','about','projects','contact'].includes(h) ? h : 'home';
      setPage(valid);
      setKey(k => k+1);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const active = page.charAt(0).toUpperCase() + page.slice(1);

  // Mobile layout
  if (isMobile) {
    return (
      <div style={{ background: V2.bg, color: V2.cream, minHeight: '100vh' }}>
        <SiteNav active={active} accent={ACCENT} navigate={navigate} mobile />
        <div key={key} className="page-wrap">
          <MobilePage page={page} accent={ACCENT} onNavigate={navigate} />
        </div>
        <WhatsAppBtn />
      </div>
    );
  }

  return (
    <div style={{ background: V2.bg, color: V2.cream, minHeight: '100vh' }}>
      <SiteNav active={active} accent={ACCENT} navigate={navigate} />
      <div key={key} className="page-wrap">
        {page === 'home'     && <HomePage     accent={ACCENT} onNavigate={navigate} />}
        {page === 'about'    && <AboutPage    accent={ACCENT} onNavigate={navigate} />}
        {page === 'projects' && <ProjectsPage accent={ACCENT} onNavigate={navigate} />}
        {page === 'contact'  && <ContactPage  accent={ACCENT} onNavigate={navigate} />}
      </div>
      <WhatsAppBtn />
    </div>
  );
}

// ── MOBILE PAGES ─────────────────────────────
function MobilePage({ page, accent, onNavigate }) {
  if (page === 'about')    return <MobileAbout    accent={accent} onNavigate={onNavigate} />;
  if (page === 'projects') return <MobileProjects accent={accent} onNavigate={onNavigate} />;
  if (page === 'contact')  return <MobileContact  accent={accent} onNavigate={onNavigate} />;
  return <MobileHome accent={accent} onNavigate={onNavigate} />;
}

function MobileHome({ accent, onNavigate }) {
  const [activeFilter, setActiveFilter] = React.useState('Apartments');
  const filters = ['Houses','Apartments','Commercial spaces','Offices'];
  const [tIdx, setTIdx] = React.useState(0);
  return (
    <div style={{ padding:'0 16px 24px' }}>
      {/* Hero */}
      <div style={{ border:`1px solid ${V2.line}`, padding:20, marginBottom:12 }}>
        <HCaps size={36} line={0.95} weight={800} tracking="-0.02em">
          Interiors<br />with soul<br />and style
        </HCaps>
        <div style={{ marginTop:16, display:'flex', flexWrap:'wrap', gap:8 }}>
          {filters.map(f => (
            <Pill key={f} active={f===activeFilter} accent={accent} onClick={()=>setActiveFilter(f)}>{f}</Pill>
          ))}
        </div>
        <div style={{ marginTop:20 }}>
          <Eyebrow>Where luxury meets innovation</Eyebrow>
          <div style={{ marginTop:14 }}><GhostCTA onClick={()=>onNavigate('contact')}>Consultation</GhostCTA></div>
        </div>
        <div style={{ marginTop:20 }}>
          <Img src={IMGS.arch} ratio="4/5" dark={0.05} />
        </div>
      </div>

      {/* Stats */}
      <div style={{ border:`1px solid ${V2.line}`, padding:22, marginBottom:12 }}>
        <HCaps size={28} line={1} weight={800} tracking="-0.02em">
          People trust us<br />with their homes
        </HCaps>
        <p style={{ marginTop:16, fontSize:12.5, lineHeight:1.6, color:V2.mute }}>
          Gyacity is a team of highly qualified interior designers with twelve years of experience.
        </p>
        {[{n:'124',l:'Completed projects worldwide.'},{n:'32',l:'Skilled professionals on our team.'},{n:'8',l:'Countries our clients come from.'}].map(s=>(
          <div key={s.n} style={{ marginTop:28 }}>
            <HCaps size={76} line={0.85} weight={500} tracking="-0.03em" color={V2.cream2}>
              {s.n}<span style={{color:accent||V2.coral}}>+</span>
            </HCaps>
            <div style={{ marginTop:8, fontSize:11.5, lineHeight:1.55, color:V2.mute }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* Services */}
      <div style={{ border:`1px solid ${V2.line}`, padding:22, marginBottom:12 }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
          <HCaps size={26} weight={800} tracking="-0.02em">Services</HCaps>
          <GhostCTA onClick={()=>onNavigate('contact')}>Consult</GhostCTA>
        </div>
        <div style={{ marginTop:20, display:'flex', flexDirection:'column', gap:18 }}>
          {[{name:'Private house design',img:PROJECTS[0].img},{name:'Apartment design',img:PROJECTS[1].img},{name:'Commercial spaces',img:PROJECTS[5].img}].map(s=>(
            <div key={s.name}>
              <Img src={s.img} ratio="3/2" dark={0.05} />
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', paddingTop:12 }}>
                <HCaps size={16} line={1.15} weight={700} tracking="0">{s.name}</HCaps>
                <MoreLink>More</MoreLink>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vision CTA */}
      <div style={{ border:`1px solid ${V2.line}`, padding:22, marginBottom:12, position:'relative', overflow:'hidden' }}>
        <StarField density={0.6} />
        <div style={{ position:'relative' }}>
          <Eyebrow color={accent||V2.coral}>Inspire</Eyebrow>
          <HCaps size={40} line={0.95} weight={800} tracking="-0.025em" style={{ marginTop:12 }}>
            Let&rsquo;s bring your vision to <span style={{color:accent||V2.coral}}>life</span>
          </HCaps>
          <div style={{ marginTop:20 }}>
            <CTA accent={accent} onClick={()=>onNavigate('contact')}>Book Consultation</CTA>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div style={{ border:`1px solid ${V2.line}`, padding:22, marginBottom:12 }}>
        <HCaps size={22} weight={800} tracking="-0.02em">Clients<br />about our work</HCaps>
        <div style={{ marginTop:20, fontFamily:V2.font, fontWeight:800, fontSize:64, lineHeight:0.6, color:accent||V2.coral }}>&ldquo;</div>
        <blockquote style={{ margin:'12px 0 0', fontSize:13.5, lineHeight:1.6, color:V2.cream }}>
          {TESTIMONIALS[tIdx].quote}
        </blockquote>
        <div style={{ marginTop:20 }}>
          <div style={{ fontSize:12, fontWeight:600, color:V2.cream }}>{TESTIMONIALS[tIdx].name}</div>
          <div style={{ fontFamily:V2.font, fontSize:10, color:V2.mute, letterSpacing:'0.12em', textTransform:'uppercase', marginTop:3 }}>{TESTIMONIALS[tIdx].place}</div>
        </div>
        <div style={{ marginTop:16, display:'flex', gap:8 }}>
          <button onClick={()=>setTIdx(i=>(i-1+TESTIMONIALS.length)%TESTIMONIALS.length)} style={{width:36,height:36,borderRadius:'50%',border:`1px solid ${V2.line}`,background:'transparent',color:V2.cream,cursor:'pointer',display:'inline-flex',alignItems:'center',justifyContent:'center'}}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M10 6H2M6 2L2 6l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button onClick={()=>setTIdx(i=>(i+1)%TESTIMONIALS.length)} style={{width:36,height:36,borderRadius:'50%',border:'none',background:accent||V2.coral,color:V2.bg,cursor:'pointer',display:'inline-flex',alignItems:'center',justifyContent:'center'}}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>

      {/* Footer mobile */}
      <div style={{ border:`1px solid ${V2.line}`, padding:20, textAlign:'center', position:'relative', overflow:'hidden' }}>
        <StarField density={0.5} />
        <HCaps as="div" size={56} line={0.9} weight={800} tracking="-0.04em" style={{ position:'relative' }}>
          Gyacity<span style={{color:accent||V2.coral}}>©</span>
        </HCaps>
        <div style={{ position:'relative', marginTop:16, fontFamily:V2.font, fontSize:10, letterSpacing:'0.14em', textTransform:'uppercase', color:V2.mute }}>Accra · Lagos · Berlin</div>
        <div style={{ position:'relative', marginTop:6, fontFamily:V2.font, fontSize:10, letterSpacing:'0.14em', textTransform:'uppercase', color:V2.dim }}>© MMXXVI Gyacity Ltd.</div>
      </div>
    </div>
  );
}

function MobileAbout({ accent, onNavigate }) {
  return (
    <div style={{ padding:'0 16px 24px' }}>
      <div style={{ border:`1px solid ${V2.line}`, padding:24, marginBottom:12 }}>
        <Eyebrow color={accent||V2.coral}>The studio</Eyebrow>
        <HCaps size={56} line={0.92} weight={800} tracking="-0.03em" style={{ marginTop:16 }}>
          We build <span style={{color:accent||V2.coral}}>quiet,</span> considered places
        </HCaps>
        <div style={{ marginTop:20 }}>
          <Img src={IMGS.kitchen} ratio="4/3" dark={0.08} />
        </div>
      </div>

      <div style={{ border:`1px solid ${V2.line}`, padding:24, marginBottom:12 }}>
        <HCaps size={28} weight={800} tracking="-0.02em" style={{ marginBottom:32 }}>By the numbers</HCaps>
        {[{n:'124',l:'Commissions delivered.'},{n:'32',l:'Team members.'},{n:'12',l:'Years in practice.'},{n:'8',l:'Countries served.'}].map(s=>(
          <div key={s.n} style={{ marginBottom:28 }}>
            <HCaps size={80} line={0.85} weight={500} tracking="-0.03em" color={V2.cream2}>
              {s.n}<span style={{color:accent||V2.coral}}>+</span>
            </HCaps>
            <div style={{ marginTop:8, fontSize:12, color:V2.mute }}>{s.l}</div>
          </div>
        ))}
      </div>

      <div style={{ border:`1px solid ${V2.line}`, padding:24, marginBottom:12, position:'relative', overflow:'hidden' }}>
        <StarField density={0.6} />
        <div style={{ position:'relative', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:16 }}>
          <HCaps size={40} line={0.95} weight={800} tracking="-0.025em">
            Begin a <span style={{color:accent||V2.coral}}>conversation</span>
          </HCaps>
          <CTA accent={accent} onClick={()=>onNavigate('contact')}>Book consultation</CTA>
        </div>
      </div>
      <MobileFooter accent={accent} />
    </div>
  );
}

function MobileProjects({ accent, onNavigate }) {
  const [filter, setFilter] = React.useState('All');
  const cats = ['All','Residential','Hospitality','Corporate','Exterior'];
  const shown = filter==='All' ? PROJECTS : PROJECTS.filter(p=>p.cat===filter);
  return (
    <div style={{ padding:'0 16px 24px' }}>
      <div style={{ border:`1px solid ${V2.line}`, padding:24, marginBottom:12 }}>
        <Eyebrow color={accent||V2.coral}>Archive</Eyebrow>
        <HCaps size={56} line={0.9} weight={800} tracking="-0.03em" style={{ marginTop:12 }}>Projects.</HCaps>
      </div>
      <div style={{ border:`1px solid ${V2.line}`, padding:16, marginBottom:12, display:'flex', flexWrap:'wrap', gap:8 }}>
        {cats.map(c=>(
          <Pill key={c} active={c===filter} accent={accent} onClick={()=>setFilter(c)}>{c}</Pill>
        ))}
      </div>
      {shown.map(p=>(
        <div key={p.id} style={{ border:`1px solid ${V2.line}`, padding:20, marginBottom:12 }}>
          <div style={{ display:'flex', justifyContent:'space-between', marginBottom:12 }}>
            <Eyebrow color={V2.cream}>{p.no} · {p.title}</Eyebrow>
            <span style={{ fontFamily:V2.font, fontSize:10, color:V2.mute, letterSpacing:'0.14em', textTransform:'uppercase' }}>{p.year}</span>
          </div>
          <Img src={p.img} ratio="4/3" dark={0.06} />
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', paddingTop:12 }}>
            <div>
              <HCaps size={20} line={1.1} weight={700} tracking="-0.005em">{p.title}</HCaps>
              <div style={{ marginTop:4, fontFamily:V2.font, fontSize:10, color:V2.mute, letterSpacing:'0.12em', textTransform:'uppercase' }}>{p.cat} · {p.place}</div>
            </div>
            <MoreLink>View</MoreLink>
          </div>
        </div>
      ))}
      <MobileFooter accent={accent} />
    </div>
  );
}

function MobileContact({ accent, onNavigate }) {
  return (
    <div style={{ padding:'0 16px 24px' }}>
      <div style={{ border:`1px solid ${V2.line}`, padding:24, marginBottom:12, position:'relative', overflow:'hidden' }}>
        <StarField density={0.5}/>
        <div style={{ position:'relative' }}>
          <Eyebrow color={accent||V2.coral}>Get in touch</Eyebrow>
          <HCaps size={56} line={0.9} weight={800} tracking="-0.03em" style={{ marginTop:12 }}>
            Let&rsquo;s build something <span style={{color:accent||V2.coral}}>quiet.</span>
          </HCaps>
        </div>
      </div>

      <div style={{ border:`1px solid ${V2.line}`, padding:24, marginBottom:12 }}>
        <Eyebrow color={accent||V2.coral}>Quick contact</Eyebrow>
        <div style={{ marginTop:18, display:'flex', flexDirection:'column', gap:12 }}>
          <a href="https://wa.me/233249051184" style={{ padding:'16px 20px', border:`1px solid ${V2.line}`, background:V2.bg2, display:'flex', justifyContent:'space-between', alignItems:'center', borderRadius:4 }}>
            <div>
              <Eyebrow color={V2.mute} style={{ marginBottom:6 }}>WhatsApp</Eyebrow>
              <div style={{ fontFamily:V2.mono, fontSize:14, color:V2.cream }}>+233 24 905 1184</div>
              <div style={{ marginTop:4, fontFamily:V2.font, fontSize:10, letterSpacing:'0.14em', textTransform:'uppercase', color:accent||V2.coral }}>Replies ~4 min</div>
            </div>
            <ArrowUR size={16} />
          </a>
          <a href="mailto:studio@gyacity.com" style={{ padding:'16px 20px', border:`1px solid ${V2.line}`, background:V2.bg2, display:'flex', justifyContent:'space-between', alignItems:'center', borderRadius:4 }}>
            <div>
              <Eyebrow color={V2.mute} style={{ marginBottom:6 }}>Email</Eyebrow>
              <div style={{ fontFamily:V2.mono, fontSize:14, color:V2.cream }}>studio@gyacity.com</div>
            </div>
            <ArrowUR size={16} />
          </a>
        </div>
      </div>

      {OFFICES.map(o=>(
        <div key={o.city} style={{ border:`1px solid ${V2.line}`, padding:24, marginBottom:12 }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
            <HCaps size={36} line={1} weight={800} tracking="-0.025em">{o.city}</HCaps>
            <span style={{ fontFamily:V2.font, fontSize:11, letterSpacing:'0.16em', color:accent||V2.coral, textTransform:'uppercase' }}>{o.tz}</span>
          </div>
          <div style={{ marginTop:16, fontFamily:V2.font, fontSize:13, color:V2.cream, lineHeight:1.65 }}>
            {o.addr.map((a,i)=><div key={i}>{a}</div>)}
          </div>
          <div style={{ marginTop:12, fontFamily:V2.mono, fontSize:12, color:V2.cream }}>{o.tel}</div>
          <div style={{ marginTop:4, fontFamily:V2.mono, fontSize:12, color:V2.mute }}>{o.email}</div>
        </div>
      ))}
      <MobileFooter accent={accent} />
    </div>
  );
}

function MobileFooter({ accent }) {
  return (
    <div style={{ border:`1px solid ${V2.line}`, padding:20, textAlign:'center', position:'relative', overflow:'hidden' }}>
      <StarField density={0.4} />
      <HCaps as="div" size={48} line={0.9} weight={800} tracking="-0.04em" style={{ position:'relative' }}>
        Gyacity<span style={{color:accent||V2.coral}}>©</span>
      </HCaps>
      <div style={{ position:'relative', marginTop:14, fontFamily:V2.font, fontSize:10, letterSpacing:'0.14em', textTransform:'uppercase', color:V2.mute }}>Accra · Lagos · Berlin</div>
      <div style={{ position:'relative', marginTop:6, fontFamily:V2.font, fontSize:10, letterSpacing:'0.14em', textTransform:'uppercase', color:V2.dim }}>© MMXXVI Gyacity Ltd.</div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
