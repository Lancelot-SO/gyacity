import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { V2 } from '@/tokens';
import { useIsMobile } from '@/hooks/useIsMobile';
import { SiteNav } from '@/components/layout/SiteNav';
import { WhatsAppBtn } from '@/components/layout/WhatsAppBtn';
import { Cursor } from '@/components/ui';
import { pageEnter } from '@/animations/variants';
import { HomePage } from '@/pages/home';
import { AboutPage } from '@/pages/AboutPage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { ContactPage } from '@/pages/ContactPage';
import { MobileHome } from '@/pages/mobile/MobileHome';
import { MobileAbout } from '@/pages/mobile/MobileAbout';
import { MobileProjects } from '@/pages/mobile/MobileProjects';
import { MobileContact } from '@/pages/mobile/MobileContact';

const VALID_PAGES = ['home', 'about', 'projects', 'contact'];

function toValidPage(raw) {
  return VALID_PAGES.includes(raw) ? raw : 'home';
}

function MobilePage({ page, accent, onNavigate }) {
  if (page === 'about') return <MobileAbout accent={accent} onNavigate={onNavigate} />;
  if (page === 'projects') return <MobileProjects accent={accent} onNavigate={onNavigate} />;
  if (page === 'contact') return <MobileContact accent={accent} onNavigate={onNavigate} />;
  return <MobileHome accent={accent} onNavigate={onNavigate} />;
}

const ACCENT = '#d97757';

export default function App() {
  const [page, setPage] = useState(() => toValidPage(window.location.hash.replace('#', '')));
  const isMobile = useIsMobile();

  const navigate = useCallback((p) => {
    const valid = toValidPage(p);
    window.location.hash = valid;
    setPage(valid);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const onHash = () => setPage(toValidPage(window.location.hash.replace('#', '')));
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const active = page.charAt(0).toUpperCase() + page.slice(1);

  return (
    <>
      {!isMobile && <Cursor />}

      <div style={{ background: V2.bg, color: V2.cream, minHeight: '100vh' }}>
        <SiteNav active={active} accent={ACCENT} navigate={navigate} mobile={isMobile} />

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            variants={pageEnter}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {isMobile ? (
              <MobilePage page={page} accent={ACCENT} onNavigate={navigate} />
            ) : (
              <>
                {page === 'home' && <HomePage accent={ACCENT} onNavigate={navigate} />}
                {page === 'about' && <AboutPage accent={ACCENT} onNavigate={navigate} />}
                {page === 'projects' && <ProjectsPage accent={ACCENT} onNavigate={navigate} />}
                {page === 'contact' && <ContactPage accent={ACCENT} onNavigate={navigate} />}
              </>
            )}
          </motion.div>
        </AnimatePresence>

        <WhatsAppBtn />
      </div>
    </>
  );
}
