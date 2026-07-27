import { V2 } from '@/tokens';

// Route-aware skeleton loading screens. Each page gets its own skeleton that
// traces that page's real above-the-fold structure (paddings, grid columns,
// title/image silhouettes) so the loader dissolves seamlessly into the content.
// Every grey block carries a slow left→right shimmer (see `.skel` in index.css).

const line = `1px solid ${V2.line}`;

function Bar({ w, h = 14, r = 3, style }) {
  return <div className="skel" style={{ width: w, height: h, borderRadius: r, ...style }} />;
}
function Block({ ratio, h, style }) {
  return <div className="skel" style={{ width: '100%', aspectRatio: ratio, height: h, borderRadius: 4, ...style }} />;
}
// Vertical stack of body-copy bars.
function Lines({ n = 3, last = '64%', h = 12, gap = 10, w = '100%' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap }}>
      {Array.from({ length: n }).map((_, i) => (
        <Bar key={i} w={i === n - 1 ? last : w} h={h} />
      ))}
    </div>
  );
}

/* ═══════════════════════ Top navigation ═══════════════════════ */
function NavSkeleton({ mobile }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: `0 ${mobile ? 16 : 40}px`, height: 88, borderBottom: line }}>
      <Bar w={mobile ? 92 : 116} h={24} />
      {mobile ? (
        <Bar w={26} h={18} />
      ) : (
        <>
          <div style={{ display: 'flex', gap: 28 }}>
            {[52, 48, 66, 60, 58].map((w, i) => <Bar key={i} w={w} h={11} />)}
          </div>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            <Bar w={104} h={12} />
            <Bar w={62} h={22} />
          </div>
        </>
      )}
    </div>
  );
}

/* ═══════════════════════ DESKTOP skeletons ═══════════════════════ */

// home / SecHero: studio title + service lines, hero image, headline, 2 cards
function DHome() {
  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', alignItems: 'flex-start', padding: '40px 40px 36px' }}>
        <Bar w={320} h={30} r={4} />
        <div />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
          <Bar w={150} h={13} />
          <Bar w={116} h={13} />
        </div>
      </div>
      <div style={{ padding: '0 40px' }}><Block ratio="16 / 10" /></div>
      <div style={{ padding: '60px 40px 64px' }}>
        <div style={{ maxWidth: 1080, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Bar w="92%" h={50} r={4} />
          <Bar w="46%" h={50} r={4} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, padding: '0 40px 80px' }}>
        {[0, 1].map(i => (
          <div key={i} style={{ border: line, borderRadius: 4, minHeight: 240, padding: 36 }}>
            <Bar w={96} h={11} />
            <div style={{ marginTop: 60, maxWidth: 380 }}><Lines n={3} last="64%" h={13} /></div>
          </div>
        ))}
      </div>
    </>
  );
}

// about / AboutPage: manifesto (eyebrow | huge 2-line title), hero image 16/7
function DAbout() {
  return (
    <>
      <div style={{ padding: '80px 40px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'flex-end' }}>
          <Bar w={130} h={11} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Bar w="88%" h={68} r={5} />
            <Bar w="60%" h={68} r={5} />
          </div>
        </div>
      </div>
      <div style={{ padding: '0 40px 80px' }}><Block ratio="16 / 7" /></div>
    </>
  );
}

// projects / ProjectsPage: title (eyebrow+desc | huge title), filter bar, grid
function DProjects() {
  return (
    <>
      <div style={{ padding: '80px 40px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'flex-end' }}>
          <div>
            <Bar w={120} h={11} />
            <div style={{ marginTop: 18, maxWidth: 320 }}><Lines n={3} last="70%" h={12} /></div>
          </div>
          <Bar w="70%" h={100} r={6} />
        </div>
      </div>
      <div style={{ padding: '32px 40px', borderTop: line, borderBottom: line, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: 10 }}>
          {[74, 108, 118, 104, 96].map((w, i) => <Bar key={i} w={w} h={34} r={999} />)}
        </div>
        <Bar w={150} h={34} r={999} />
      </div>
      <div style={{ padding: '40px 40px 80px', display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 24 }}>
        <Block ratio="21 / 9" style={{ gridColumn: 'span 6' }} />
        {[0, 1, 2].map(i => <Block key={i} ratio="4 / 3" style={{ gridColumn: 'span 2' }} />)}
      </div>
    </>
  );
}

// project detail / ProjectDetailPage: breadcrumb, hero 21/9 w/ overlay title, facts
function DProjectDetail() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '28px 40px 0' }}>
        <Bar w={120} h={30} r={2} />
        <Bar w={130} h={11} />
      </div>
      <div style={{ padding: '24px 40px 0' }}>
        <div className="skel" style={{ position: 'relative', width: '100%', aspectRatio: '21 / 9', borderRadius: 4 }}>
          <div style={{ position: 'absolute', left: 44, bottom: 44, right: 44, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Bar w={160} h={11} style={{ background: 'rgba(244,220,192,0.12)' }} />
            <Bar w="52%" h={72} r={5} style={{ background: 'rgba(244,220,192,0.14)' }} />
            <Bar w={240} h={12} style={{ background: 'rgba(244,220,192,0.12)' }} />
          </div>
        </div>
      </div>
      <div style={{ marginTop: 48, padding: '32px 40px', borderTop: line, borderBottom: line, display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 32 }}>
        {[0, 1, 2, 3, 4].map(i => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Bar w="60%" h={10} />
            <Bar w="85%" h={15} />
          </div>
        ))}
      </div>
    </>
  );
}

// services / ServicesPage: hero (eyebrow+title | paragraph), marquee, first row
function DServices() {
  return (
    <>
      <div style={{ padding: '80px 40px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'flex-end' }}>
          <div>
            <Bar w={130} h={11} style={{ marginBottom: 20 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <Bar w="90%" h={90} r={6} />
              <Bar w="55%" h={90} r={6} />
            </div>
          </div>
          <div style={{ maxWidth: 480 }}><Lines n={3} last="72%" h={15} gap={12} /></div>
        </div>
      </div>
      <div style={{ borderTop: line, borderBottom: line, padding: '14px 0', background: V2.bg2, display: 'flex', gap: 60, paddingLeft: 40, overflow: 'hidden' }}>
        {[120, 90, 150, 110, 130, 100].map((w, i) => <Bar key={i} w={w} h={12} style={{ flexShrink: 0 }} />)}
      </div>
      <div style={{ borderTop: line, padding: '72px 40px', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 56, alignItems: 'center' }}>
        <Block ratio="4 / 3" />
        <div>
          <Bar w={150} h={11} style={{ marginBottom: 18 }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
            <Bar w="80%" h={46} r={5} />
          </div>
          <Lines n={3} last="60%" h={13} />
        </div>
      </div>
    </>
  );
}

// contact / ContactPage: title (eyebrow | huge 2-line), form card + meta column
function DContact() {
  return (
    <>
      <div style={{ padding: '80px 40px 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'flex-end' }}>
          <Bar w={130} h={11} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Bar w="70%" h={100} r={6} />
            <Bar w="52%" h={100} r={6} />
          </div>
        </div>
      </div>
      <div style={{ padding: '40px 40px 80px', borderTop: line, display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 80 }}>
        {/* Form card */}
        <div style={{ border: line, borderRadius: 4, padding: 40 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 32 }}>
            <Bar w={220} h={26} r={4} />
            <Bar w={54} h={11} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {[0, 1, 2, 3].map(i => (
              <div key={i} style={{ borderBottom: `1px solid ${V2.cream}`, paddingBottom: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <Bar w="50%" h={9} />
                <Bar w="80%" h={16} />
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {[80, 96, 70, 110].map((w, i) => <Bar key={i} w={w} h={30} r={999} />)}
          </div>
          <div style={{ marginTop: 28, borderBottom: `1px solid ${V2.cream}`, paddingBottom: 10, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Bar w="50%" h={9} />
            <Bar w="100%" h={40} />
          </div>
        </div>
        {/* Meta column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{ border: line, padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <Bar w="40%" h={9} />
              <Bar w="70%" h={14} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// team / TeamPage: masthead (eyebrow+cities | title), first principal (image | text)
function DTeam() {
  return (
    <>
      <div style={{ padding: '80px 40px 72px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.55fr', gap: 80, alignItems: 'flex-end' }}>
          <div>
            <Bar w={160} h={11} style={{ marginBottom: 32 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[100, 80, 66].map((w, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <Bar w={w * 0.4} h={1} r={0} />
                  <Bar w={w} h={11} />
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Bar w="80%" h={90} r={6} />
            <Bar w="50%" h={90} r={6} />
          </div>
        </div>
      </div>
      <div style={{ borderTop: line, display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div className="skel" style={{ minHeight: 580, borderRight: line, borderRadius: 0 }} />
        <div style={{ padding: '64px 52px', display: 'flex', flexDirection: 'column' }}>
          <Bar w="70%" h={58} r={5} />
          <Bar w="45%" h={58} r={5} style={{ marginTop: 12 }} />
          <Bar w={140} h={11} style={{ marginTop: 22 }} />
          <Bar w={90} h={10} style={{ marginTop: 14 }} />
          <div style={{ height: 1, background: V2.line, margin: '32px 0' }} />
          <Lines n={4} last="55%" h={12} />
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════ MOBILE skeletons ═══════════════════════ */

// Standard mobile masthead card: eyebrow + big title (n lines).
function MHead({ titleLines = ['80%', '55%'] }) {
  return (
    <div style={{ border: line, padding: 24, marginBottom: 12 }}>
      <Bar w={120} h={10} style={{ marginBottom: 16 }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {titleLines.map((w, i) => <Bar key={i} w={w} h={30} r={4} />)}
      </div>
    </div>
  );
}

function MHome() {
  return (
    <div style={{ border: line, padding: 20 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Bar w="80%" h={28} r={4} />
        <Bar w="55%" h={28} r={4} />
      </div>
      <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 16 }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{ borderTop: line, paddingTop: 12 }}>
            <Bar w={22} h={10} />
            <Bar w="60%" h={16} style={{ marginTop: 8 }} />
            <Bar w="100%" h={11} style={{ marginTop: 8 }} />
            <Bar w="82%" h={11} style={{ marginTop: 6 }} />
          </div>
        ))}
      </div>
      <div style={{ marginTop: 20 }}>
        <Bar w={140} h={11} />
        <Bar w={180} h={40} style={{ marginTop: 14 }} r={2} />
      </div>
      <div style={{ marginTop: 20, marginLeft: -20, marginRight: -20, marginBottom: -20 }}>
        <div className="skel" style={{ width: 'calc(100% + 40px)', height: 130, borderRadius: 0 }} />
      </div>
    </div>
  );
}

function MAbout() {
  return (
    <div style={{ border: line, padding: 24, marginBottom: 12 }}>
      <Bar w={120} h={10} style={{ marginBottom: 16 }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
        <Bar w="90%" h={34} r={4} />
        <Bar w="65%" h={34} r={4} />
      </div>
      <Block ratio="4 / 3" />
    </div>
  );
}

function MProjects() {
  return (
    <>
      <MHead titleLines={['70%']} />
      <div style={{ border: line, padding: 16, marginBottom: 12, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {[70, 96, 104, 88, 92].map((w, i) => <Bar key={i} w={w} h={30} r={999} />)}
      </div>
      <div style={{ border: line, padding: 20, marginBottom: 12 }}>
        <Bar w="70%" h={12} style={{ marginBottom: 14 }} />
        <Block ratio="4 / 3" />
      </div>
    </>
  );
}

function MProjectDetail() {
  return (
    <>
      <div style={{ padding: '16px 0' }}>
        <div className="skel" style={{ position: 'relative', width: '100%', aspectRatio: '4 / 5', borderRadius: 4 }}>
          <div style={{ position: 'absolute', left: 20, bottom: 20, right: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Bar w={150} h={10} style={{ background: 'rgba(244,220,192,0.12)' }} />
            <Bar w="70%" h={40} r={4} style={{ background: 'rgba(244,220,192,0.14)' }} />
          </div>
        </div>
      </div>
      <div style={{ border: line, padding: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
        {[0, 1, 2, 3].map(i => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Bar w="50%" h={9} />
            <Bar w="80%" h={14} />
          </div>
        ))}
      </div>
    </>
  );
}

function MServices() {
  return (
    <>
      <MHead titleLines={['80%', '50%']} />
      <div style={{ border: line, marginBottom: 10, overflow: 'hidden' }}>
        <Block ratio="16 / 9" style={{ borderRadius: 0 }} />
        <div style={{ padding: 20 }}>
          <Bar w="60%" h={10} style={{ marginBottom: 10 }} />
          <Bar w="70%" h={22} r={4} style={{ marginBottom: 12 }} />
          <Lines n={2} last="80%" h={12} />
        </div>
      </div>
    </>
  );
}

function MContact() {
  return (
    <>
      <MHead titleLines={['80%', '55%']} />
      <div style={{ border: line, padding: 24, marginBottom: 12 }}>
        <Bar w={120} h={10} style={{ marginBottom: 16 }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{ border: line, padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <Bar w={80} h={9} />
                <Bar w={140} h={13} />
              </div>
              <Bar w={30} h={30} r={999} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function MTeam() {
  return (
    <>
      <MHead titleLines={['80%', '55%']} />
      <div style={{ border: line, marginBottom: 12, overflow: 'hidden' }}>
        <Block ratio="4 / 3" style={{ borderRadius: 0 }} />
        <div style={{ padding: 20 }}>
          <Bar w={40} h={20} r={2} style={{ marginBottom: 14 }} />
          <Bar w="70%" h={34} r={4} />
          <Bar w={150} h={11} style={{ marginTop: 12 }} />
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════ Router ═══════════════════════ */

const DESKTOP = { home: DHome, about: DAbout, projects: DProjects, project: DProjectDetail, services: DServices, contact: DContact, team: DTeam };
const MOBILE  = { home: MHome, about: MAbout, projects: MProjects, project: MProjectDetail, services: MServices, contact: MContact, team: MTeam };

export function Loader({ route, mobile }) {
  const name = route?.name || 'home';
  const Body = (mobile ? MOBILE : DESKTOP)[name] || (mobile ? MHome : DHome);
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, background: V2.bg, overflow: 'hidden' }}>
      <NavSkeleton mobile={mobile} />
      {mobile ? <div style={{ padding: '0 16px 24px' }}><Body /></div> : <Body />}
    </div>
  );
}
