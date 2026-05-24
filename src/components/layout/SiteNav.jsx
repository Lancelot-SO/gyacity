import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { V2 } from '@/tokens';
import { V2Mark } from '@/components/Logo';
import { ArrowUR } from '@/components/ui';

const LINK_KEYS = ['home', 'about', 'projects', 'contact'];

export function SiteNav({ active, accent, navigate, mobile }) {
  const { t, i18n } = useTranslation();
  const a = accent || V2.coral;
  const [menuOpen, setMenuOpen] = useState(false);
  const currentLang = i18n.language.toUpperCase();

  const LINKS = LINK_KEYS.map(key => ({ key, label: t(`nav.${key}`) }));

  const go = (key) => {
    navigate(key);
    setMenuOpen(false);
  };

  const switchLang = (code) => i18n.changeLanguage(code.toLowerCase());

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
          <button onClick={() => go('home')} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
            <V2Mark size={13} />
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            background: 'none', border: 'none', padding: 0, cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontFamily: V2.font, fontSize: 12, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: V2.cream,
          }}>
            {menuOpen ? t('nav.close') : t('nav.menu')}
            <span style={{ display: 'inline-flex', flexDirection: 'column', gap: 3 }}>
              <span style={{ width: 16, height: 1, background: V2.cream }} />
              <span style={{ width: menuOpen ? 16 : 12, height: 1, background: V2.cream, alignSelf: 'flex-end', transition: 'width 0.2s' }} />
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
              position: 'absolute', top: 24, right: 22,
              background: 'none', border: 'none', color: V2.cream,
              fontFamily: V2.font, fontSize: 12, letterSpacing: '0.14em',
              textTransform: 'uppercase', cursor: 'pointer',
            }}>{t('nav.close')} ×</button>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {LINKS.map(l => (
                <button key={l.key} onClick={() => go(l.key)} style={{
                  background: 'none', border: 'none', padding: '16px 0',
                  borderBottom: `1px solid ${V2.line}`,
                  fontFamily: V2.font, fontWeight: 800,
                  fontSize: 48, letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  color: l.key === active.toLowerCase() ? a : V2.cream,
                  cursor: 'pointer', textAlign: 'left',
                }}>{l.label}</button>
              ))}
            </nav>
            <div style={{ marginTop: 40, display: 'flex', gap: 8 }}>
              {['EN', 'DE', 'FR'].map(l => (
                <button key={l} onClick={() => switchLang(l)} style={{
                  padding: '6px 12px', borderRadius: 6,
                  background: l === currentLang ? V2.cream : 'transparent',
                  color: l === currentLang ? V2.bg : V2.mute,
                  fontFamily: V2.font, fontSize: 12, fontWeight: 700,
                  letterSpacing: '0.12em', border: 'none', cursor: 'pointer',
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
      <button onClick={() => go('home')} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', justifySelf: 'start' }}>
        <V2Mark size={18} />
      </button>

      <nav style={{ display: 'flex', gap: 32 }}>
        {LINKS.map(l => (
          <button key={l.key} onClick={() => go(l.key)} style={{
            background: 'none', border: 'none', padding: '4px 0',
            fontFamily: V2.font, fontSize: 12, fontWeight: 600,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: l.key === active.toLowerCase() ? a : V2.cream,
            cursor: 'pointer', position: 'relative',
            transition: 'color 0.2s',
          }}>
            {l.label}
            <span style={{
              position: 'absolute', left: 0, right: 0, bottom: -4,
              height: 1, background: a,
              opacity: l.key === active.toLowerCase() ? 1 : 0,
              transition: 'opacity 0.2s',
            }} />
          </button>
        ))}
      </nav>

      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 14 }}>
        <span style={{ fontFamily: V2.font, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: V2.mute }}>
          +233 24 905 1184
        </span>
        <span style={{ width: 1, height: 14, background: V2.line }} />
        <div style={{ display: 'flex', gap: 3 }}>
          {['EN', 'DE', 'FR'].map(l => (
            <button key={l} onClick={() => switchLang(l)} style={{
              padding: '4px 7px', borderRadius: 5,
              background: l === currentLang ? V2.cream : 'transparent',
              color: l === currentLang ? V2.bg : V2.mute,
              fontFamily: V2.font, fontSize: 11, fontWeight: l === currentLang ? 700 : 500,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              border: 'none', cursor: 'pointer',
            }}>{l}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
