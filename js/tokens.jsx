/* global window, React */

const V2 = {
  bg:       '#0a0908',
  bg2:      '#141210',
  bg3:      '#1a1714',
  card:     '#131110',
  cream:    '#f4dcc0',
  cream2:   '#e8c9a0',
  text:     '#f4dcc0',
  mute:     'rgba(244,220,192,0.60)',
  dim:      'rgba(244,220,192,0.34)',
  faint:    'rgba(244,220,192,0.18)',
  line:     'rgba(244,220,192,0.18)',
  lineSoft: 'rgba(244,220,192,0.08)',
  coral:    '#d97757',
  oxblood:  '#7a2418',
  brass:    '#a8864a',
  blue:     '#2e4a5e',
  font:     '"Geist", ui-sans-serif, system-ui, sans-serif',
  mono:     '"Geist Mono", ui-monospace, monospace',
};

function HCaps({ as='h2', size=84, line=0.95, tracking='-0.02em', weight=800, color, style, children }) {
  const Tag = as;
  return (
    <Tag style={{
      fontFamily: V2.font, fontWeight: weight,
      fontSize: size, lineHeight: line, letterSpacing: tracking,
      textTransform: 'uppercase', color: color||V2.cream, margin: 0,
      ...style,
    }}>{children}</Tag>
  );
}

function Eyebrow({ children, color, style }) {
  return (
    <div style={{
      fontFamily: V2.font, fontSize: 12, fontWeight: 500,
      letterSpacing: '0.18em', textTransform: 'uppercase',
      color: color||V2.mute, ...style,
    }}>{children}</div>
  );
}

function Pill({ active, children, accent, onClick, style }) {
  const a = accent||V2.coral;
  return (
    <button onClick={onClick} style={{
      padding: '10px 18px', borderRadius: 999,
      border: `1px solid ${active ? a : V2.line}`,
      background: active ? `${a}22` : 'transparent',
      color: active ? a : V2.cream,
      fontFamily: V2.font, fontSize: 13, fontWeight: 500,
      letterSpacing: '0.01em', cursor: 'pointer',
      transition: 'all 0.2s',
      ...style,
    }}>{children}</button>
  );
}

function ArrowUR({ size=12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <path d="M3 9l6-6M4 3h5v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function ArrowR({ size=12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function ArrowL({ size=12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <path d="M10 6H2M6 2L2 6l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CTA({ children, accent, onClick, big, style }) {
  const a = accent||V2.coral;
  const [hov, setHov] = React.useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 14,
        padding: big ? '20px 28px' : '14px 22px',
        background: hov ? V2.cream2 : a, color: V2.bg, border: 'none',
        borderRadius: 999, cursor: 'pointer',
        fontFamily: V2.font, fontSize: big ? 14 : 12.5, fontWeight: 700,
        letterSpacing: '0.14em', textTransform: 'uppercase',
        transition: 'background 0.2s',
        ...style,
      }}>
      {children}<ArrowUR size={big?13:11} />
    </button>
  );
}

function GhostCTA({ children, style, onClick }) {
  const [hov, setHov] = React.useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        padding: '10px 0', background: 'transparent',
        color: hov ? V2.coral : V2.cream, border: 'none',
        borderBottom: `1px solid ${hov ? V2.coral : V2.cream}`,
        borderRadius: 0, cursor: 'pointer',
        fontFamily: V2.font, fontSize: 12.5, fontWeight: 600,
        letterSpacing: '0.16em', textTransform: 'uppercase',
        transition: 'color 0.2s, border-color 0.2s',
        ...style,
      }}>
      {children}<ArrowUR size={11} />
    </button>
  );
}

function OutlineCard({ children, style, pad=28 }) {
  return (
    <div style={{ border: `1px solid ${V2.line}`, padding: pad, background: V2.bg, ...style }}>
      {children}
    </div>
  );
}

function Img({ src, alt, ratio, dark=0, style, children }) {
  return (
    <div style={{ position:'relative', width:'100%', aspectRatio: ratio, overflow:'hidden', background: V2.bg2, ...style }}>
      <img src={src} alt={alt||''} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} loading="lazy" />
      {dark > 0 && <div style={{ position:'absolute', inset:0, background:`linear-gradient(180deg,rgba(10,9,8,${dark*0.3}) 0%,rgba(10,9,8,${dark}) 100%)` }} />}
      {children}
    </div>
  );
}

function MoreLink({ children='More details', style, color, accent }) {
  const [hov, setHov] = React.useState(false);
  return (
    <span
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        fontFamily: V2.font, fontSize: 12, fontWeight: 600,
        letterSpacing: '0.14em', textTransform: 'uppercase',
        color: hov ? (accent||V2.coral) : (color||V2.cream),
        textDecoration: 'underline', textUnderlineOffset: 5,
        textDecorationThickness: 1, cursor: 'pointer',
        transition: 'color 0.2s',
        ...style,
      }}>
      {children}<ArrowUR size={11} />
    </span>
  );
}

function NavArrows({ accent }) {
  const a = accent||V2.coral;
  return (
    <div style={{ display:'inline-flex', gap:12 }}>
      <button style={{ width:38, height:38, borderRadius:'50%', border:`1px solid ${V2.line}`, background:'transparent', color:V2.cream, cursor:'pointer', display:'inline-flex', alignItems:'center', justifyContent:'center' }}>
        <ArrowL size={13} />
      </button>
      <button style={{ width:38, height:38, borderRadius:'50%', border:'none', background:a, color:V2.bg, cursor:'pointer', display:'inline-flex', alignItems:'center', justifyContent:'center' }}>
        <ArrowR size={13} />
      </button>
    </div>
  );
}

function StarField({ density=1, style }) {
  return (
    <div style={{
      position:'absolute', inset:0, pointerEvents:'none',
      opacity: 0.45 * density,
      backgroundImage: 'radial-gradient(1px 1px at 13% 22%,rgba(244,220,192,0.5) 50%,transparent 51%),radial-gradient(1px 1px at 67% 8%,rgba(244,220,192,0.4) 50%,transparent 51%),radial-gradient(1.5px 1.5px at 88% 42%,rgba(244,220,192,0.6) 50%,transparent 51%),radial-gradient(1px 1px at 24% 68%,rgba(244,220,192,0.35) 50%,transparent 51%),radial-gradient(1px 1px at 56% 84%,rgba(244,220,192,0.5) 50%,transparent 51%),radial-gradient(1px 1px at 92% 12%,rgba(244,220,192,0.4) 50%,transparent 51%),radial-gradient(1.2px 1.2px at 8% 91%,rgba(244,220,192,0.45) 50%,transparent 51%),radial-gradient(1px 1px at 41% 32%,rgba(244,220,192,0.3) 50%,transparent 51%)',
      backgroundSize: '400px 400px',
      ...style,
    }} />
  );
}

Object.assign(window, { V2, HCaps, Eyebrow, Pill, ArrowUR, ArrowR, ArrowL, CTA, GhostCTA, OutlineCard, Img, MoreLink, NavArrows, StarField });
