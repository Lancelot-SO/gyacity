import logoLight from '@/assets/logo-light.png';
import logoDark from '@/assets/logo-dark.png';

// size maps to logo height in px; variant 'light' (cream text) suits dark backgrounds
export function V2Mark({ size = 14, variant = 'light', style }) {
  const height = Math.round(size * 2.4);
  const src = variant === 'dark' ? logoDark : logoLight;
  return (
    <img
      src={src}
      alt="Gyacity"
      style={{ height, width: 'auto', display: 'block', flexShrink: 0, ...style }}
    />
  );
}

// Kept for any standalone icon use — renders just the mark portion of the PNG
export function GCityMark({ size = 40, style }) {
  return (
    <img
      src={logoLight}
      alt="Gyacity mark"
      style={{ height: size, width: 'auto', display: 'block', flexShrink: 0, ...style }}
    />
  );
}
