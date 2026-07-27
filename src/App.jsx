import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { V2 } from '@/tokens';
import { useIsMobile } from '@/hooks/useIsMobile';
import { SiteNav } from '@/components/layout/SiteNav';
import { WhatsAppBtn } from '@/components/layout/WhatsAppBtn';
import { Loader } from '@/components/Loader';
import { Cursor } from '@/components/ui';
import { pageEnter } from '@/animations/variants';
import { PROJECTS } from '@/data';
import { HomePage } from '@/pages/home';
import { AboutPage } from '@/pages/AboutPage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { ProjectDetailPage } from '@/pages/ProjectDetailPage';
import { ContactPage } from '@/pages/ContactPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { TeamPage } from '@/pages/TeamPage';
import { MobileHome } from '@/pages/mobile/MobileHome';
import { MobileAbout } from '@/pages/mobile/MobileAbout';
import { MobileProjects } from '@/pages/mobile/MobileProjects';
import { MobileProjectDetail } from '@/pages/mobile/MobileProjectDetail';
import { MobileContact } from '@/pages/mobile/MobileContact';
import { MobileServices } from '@/pages/mobile/MobileServices';
import { MobileTeam } from '@/pages/mobile/MobileTeam';

const VALID_PAGES = ['home', 'about', 'projects', 'services', 'contact', 'team'];

// Routes are hash-based. `project/<id>` opens a project detail page; everything
// else collapses to one of the top-level pages (defaulting to home).
function parseRoute(raw) {
  const [base, id] = raw.split('/');
  if (base === 'project' && id && PROJECTS.some(p => p.id === id)) {
    return { name: 'project', id };
  }
  return { name: VALID_PAGES.includes(base) ? base : 'home', id: null };
}

function routeToHash(route) {
  return route.name === 'project' ? `project/${route.id}` : route.name;
}

function MobilePage({ route, accent, onNavigate }) {
  if (route.name === 'project') return <MobileProjectDetail id={route.id} accent={accent} onNavigate={onNavigate} />;
  if (route.name === 'about')    return <MobileAbout    accent={accent} onNavigate={onNavigate} />;
  if (route.name === 'projects') return <MobileProjects accent={accent} onNavigate={onNavigate} />;
  if (route.name === 'services') return <MobileServices accent={accent} onNavigate={onNavigate} />;
  if (route.name === 'contact')  return <MobileContact  accent={accent} onNavigate={onNavigate} />;
  if (route.name === 'team')     return <MobileTeam     accent={accent} onNavigate={onNavigate} />;
  return <MobileHome accent={accent} onNavigate={onNavigate} />;
}

const ACCENT = '#d97757';

export default function App() {
  const [route, setRoute] = useState(() => parseRoute(window.location.hash.replace('#', '')));
  const isMobile = useIsMobile();
  const [loading, setLoading] = useState(true);

  // Hold the skeleton until the app has painted and a graceful minimum has
  // elapsed, then fade it out — whichever of the two finishes last.
  useEffect(() => {
    const MIN_MS = 1500;
    const start = performance.now();
    let done = false;

    const finish = () => {
      if (done) return;
      done = true;
      const wait = Math.max(0, MIN_MS - (performance.now() - start));
      setTimeout(() => setLoading(false), wait);
    };

    if (document.readyState === 'complete') finish();
    else window.addEventListener('load', finish, { once: true });

    const fallback = setTimeout(finish, 4000); // never hang if `load` misfires
    return () => {
      clearTimeout(fallback);
      window.removeEventListener('load', finish);
    };
  }, []);

  // Internal navigation is instant — the skeleton only shows on a hard load
  // (see the boot effect above). Existing page transitions cover route changes.
  const navigate = useCallback((target) => {
    const next = parseRoute(target);
    window.location.hash = routeToHash(next);
    setRoute(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const onHash = () => setRoute(parseRoute(window.location.hash.replace('#', '')));
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // The detail page lives under the Projects section in the nav.
  const navName = route.name === 'project' ? 'projects' : route.name;
  const active = navName.charAt(0).toUpperCase() + navName.slice(1);
  const transitionKey = route.name === 'project' ? `project-${route.id}` : route.name;

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            style={{ position: 'fixed', inset: 0, zIndex: 9999 }}
          >
            <Loader mobile={isMobile} route={route} />
          </motion.div>
        )}
      </AnimatePresence>

      {!isMobile && <Cursor />}

      <div style={{ background: V2.bg, color: V2.cream, minHeight: '100vh' }}>
        <SiteNav active={active} accent={ACCENT} navigate={navigate} mobile={isMobile} />

        <AnimatePresence mode="wait">
          <motion.div
            key={transitionKey}
            variants={pageEnter}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {isMobile ? (
              <MobilePage route={route} accent={ACCENT} onNavigate={navigate} />
            ) : (
              <>
                {route.name === 'home' && <HomePage accent={ACCENT} onNavigate={navigate} />}
                {route.name === 'about' && <AboutPage accent={ACCENT} onNavigate={navigate} />}
                {route.name === 'projects' && <ProjectsPage accent={ACCENT} onNavigate={navigate} />}
                {route.name === 'project' && <ProjectDetailPage id={route.id} accent={ACCENT} onNavigate={navigate} />}
                {route.name === 'services' && <ServicesPage accent={ACCENT} onNavigate={navigate} />}
                {route.name === 'contact' && <ContactPage accent={ACCENT} onNavigate={navigate} />}
                {route.name === 'team' && <TeamPage accent={ACCENT} onNavigate={navigate} />}
              </>
            )}
          </motion.div>
        </AnimatePresence>

        <WhatsAppBtn />
      </div>
    </>
  );
}
