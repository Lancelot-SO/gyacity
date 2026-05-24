/* global window, React, V2, V2Mark, ArrowUR */

function SiteNav({ active, accent, navigate, mobile }) {
  const a = accent || V2.coral;
  const links = ['Home', 'About', 'Projects', 'Contact'];
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [lang, setLang] = React.useState('EN');

  const go = (page) => {
    navigate(page.toLowerCase());
    setMenuOpen(false);
  };

  if (mobile) {
    return (
      <>
        <div style={{
          position: 'sticky', top: 0, zIndex: 100,
          background: 'rgba(10,9,8,0.92)',
          backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${V2.line}`,
          padding: '16px 22px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <button onClick={() => go('home')} style={{ background:'none', border:'none', padding:0, cursor:'pointer' }}>
            <V2Mark size={13} />
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            background:'none', border:'none', padding:0, cursor:'pointer',
            display:'inline-flex', alignItems:'center', gap:8,
            fontFamily: V2.font, fontSize:12, letterSpacing:'0.14em',
            textTransform:'uppercase', color: V2.cream,
          }}>
            {menuOpen ? 'Close' : 'Menu'}
            <span style={{ display:'inline-flex', flexDirection:'column', gap:3 }}>
              <span style={{ width:16, height:1, background:V2.cream }} />
              <span style={{ width:menuOpen?16:12, height:1, background:V2.cream, alignSelf:'flex-end', transition:'width 0.2s' }} />
            </span>
          </button>
        </div>

        {menuOpen && (
          <div style={{
            position: 'fixed', inset: 0, zIndex: 99,
            background: V2.bg,
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            padding: '80px 40px',
          }}>
            <button onClick={() => setMenuOpen(false)} style={{
              position:'absolute', top:24, right:22,
              background:'none', border:'none', color:V2.cream,
              fontFamily:V2.font, fontSize:12, letterSpacing:'0.14em',
              textTransform:'uppercase', cursor:'pointer',
            }}>Close ×</button>
            <nav style={{ display:'flex', flexDirection:'column', gap:8 }}>
              {links.map(l => (
                <button key={l} onClick={() => go(l)}
                  style={{
                    background:'none', border:'none', padding:'16px 0',
                    borderBottom: `1px solid ${V2.line}`,
                    fontFamily: V2.font, fontWeight:800,
                    fontSize: 48, letterSpacing:'-0.02em',
                    textTransform:'uppercase',
                    color: l === active ? a : V2.cream,
                    cursor:'pointer', textAlign:'left',
                  }}>{l}</button>
              ))}
            </nav>
            <div style={{ marginTop:40, display:'flex', gap:8 }}>
              {['EN','DE','FR'].map(l => (
                <button key={l} onClick={() => setLang(l)} style={{
                  padding:'6px 12px', borderRadius:6,
                  background: l===lang ? V2.cream : 'transparent',
                  color: l===lang ? V2.bg : V2.mute,
                  fontFamily:V2.font, fontSize:12, fontWeight:700,
                  letterSpacing:'0.12em', border:'none', cursor:'pointer',
                }}>{l}</button>
              ))}
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(10,9,8,0.90)',
      backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
      borderBottom: `1px solid ${V2.line}`,
      padding: '20px 40px',
      display: 'grid', gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center', gap: 40,
    }}>
      <button onClick={() => go('home')} style={{ background:'none', border:'none', padding:0, cursor:'pointer', justifySelf:'start' }}>
        <V2Mark size={18} />
      </button>

      <nav style={{ display:'flex', gap:32 }}>
        {links.map(l => (
          <button key={l} onClick={() => go(l)} style={{
            background: 'none', border: 'none', padding: '4px 0',
            fontFamily: V2.font, fontSize: 12, fontWeight: 600,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: l === active ? a : V2.cream,
            cursor: 'pointer', position: 'relative',
            transition: 'color 0.2s',
          }}>
            {l}
            <span style={{
              position:'absolute', left:0, right:0, bottom:-4,
              height:1, background:a,
              opacity: l === active ? 1 : 0,
              transition: 'opacity 0.2s',
            }} />
          </button>
        ))}
      </nav>

      <div style={{ display:'flex', justifyContent:'flex-end', alignItems:'center', gap:14 }}>
        <span style={{ fontFamily:V2.font, fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase', color:V2.mute }}>
          +233 24 905 1184
        </span>
        <span style={{ width:1, height:14, background:V2.line }} />
        <div style={{ display:'flex', gap:3 }}>
          {['EN','DE','FR'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{
              padding:'4px 7px', borderRadius:5,
              background: l===lang ? V2.cream : 'transparent',
              color: l===lang ? V2.bg : V2.mute,
              fontFamily:V2.font, fontSize:11, fontWeight: l===lang?700:500,
              letterSpacing:'0.12em', textTransform:'uppercase',
              border:'none', cursor:'pointer',
            }}>{l}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

function WhatsAppBtn() {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ position:'fixed', bottom:32, right:32, zIndex:200 }}>
      {open && (
        <div style={{
          position:'absolute', bottom:64, right:0,
          background: V2.bg2, border:`1px solid ${V2.line}`,
          borderRadius:12, padding:20, width:260,
          fontFamily: V2.font,
          animation: 'fadeUp 0.25s ease both',
        }}>
          <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}`}</style>
          <div style={{ fontSize:13, fontWeight:700, color:V2.cream, marginBottom:8 }}>Chat with us</div>
          <div style={{ fontSize:12, color:V2.mute, lineHeight:1.5, marginBottom:14 }}>
            Message us on WhatsApp — we typically reply within 4 minutes.
          </div>
          <a href="https://wa.me/233249051184" target="_blank" rel="noopener noreferrer"
            style={{
              display:'inline-flex', alignItems:'center', gap:8,
              padding:'10px 18px', background:'#25D366', color:'#fff',
              borderRadius:999, fontSize:12, fontWeight:700,
              letterSpacing:'0.1em', textTransform:'uppercase',
            }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Open WhatsApp
          </a>
        </div>
      )}
      <button onClick={() => setOpen(!open)} style={{
        width:56, height:56, borderRadius:'50%',
        background:'#25D366', border:'none', cursor:'pointer',
        display:'flex', alignItems:'center', justifyContent:'center',
        boxShadow:'0 4px 24px rgba(37,211,102,0.4)',
        transition:'transform 0.2s, box-shadow 0.2s',
      }}
        onMouseEnter={e=>{e.currentTarget.style.transform='scale(1.08)';e.currentTarget.style.boxShadow='0 6px 32px rgba(37,211,102,0.5)'}}
        onMouseLeave={e=>{e.currentTarget.style.transform='scale(1)';e.currentTarget.style.boxShadow='0 4px 24px rgba(37,211,102,0.4)'}}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </button>
    </div>
  );
}

Object.assign(window, { SiteNav, WhatsAppBtn });
