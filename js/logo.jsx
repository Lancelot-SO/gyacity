/* global window, React, V2 */

function GCityMark({ size=40, strokeColor, accentColor, style }) {
  const sc = strokeColor || V2.cream;
  const ac = accentColor || V2.brass;
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
      style={{ display:'block', flexShrink:0, ...style }}>
      <g fill="none" stroke={sc} strokeWidth="14" strokeLinecap="square">
        <path d="M 168 65 A 78 78 0 1 0 178 110 L 112 110" />
      </g>
      <g fill={ac}>
        <path d="M 55 168 L 55 116 L 88 116 L 88 168 Z" />
        <path d="M 90 168 L 90 64 L 122 64 L 122 168 Z" />
        <rect x="104" y="42" width="4" height="22" />
        <path d="M 124 168 L 124 126 L 152 126 L 152 168 Z" />
      </g>
      <g fill="#0a0908">
        <rect x="62" y="124" width="4" height="6" /><rect x="72" y="124" width="4" height="6" />
        <rect x="62" y="136" width="4" height="6" /><rect x="72" y="136" width="4" height="6" />
        <rect x="62" y="148" width="4" height="6" /><rect x="72" y="148" width="4" height="6" />
        {[0,1,2,3].map(c=>[0,1,2,3,4,5].map(r=>(
          <rect key={`${c}-${r}`} x={96+c*7} y={78+r*14} width="3" height="6" />
        )))}
        <rect x="131" y="134" width="3" height="6" /><rect x="139" y="134" width="3" height="6" />
        <rect x="131" y="146" width="3" height="6" /><rect x="139" y="146" width="3" height="6" />
        <rect x="131" y="158" width="3" height="6" /><rect x="139" y="158" width="3" height="6" />
      </g>
    </svg>
  );
}

function V2Mark({ size=14, color, style }) {
  const c = color || V2.cream;
  const iconSize = size * 2.4;
  return (
    <span style={{ display:'inline-flex', alignItems:'center', gap: size*0.8, color: c, ...style }}>
      <GCityMark size={iconSize} strokeColor={c} accentColor={V2.brass} />
      <span style={{ fontFamily: V2.font, fontWeight:800, fontSize:size, letterSpacing:'0.12em', textTransform:'uppercase', lineHeight:1 }}>
        Gyacity<span style={{ fontSize:size*0.7, opacity:0.7, marginLeft:3, fontWeight:500 }}>©</span>
      </span>
    </span>
  );
}

Object.assign(window, { GCityMark, V2Mark });
