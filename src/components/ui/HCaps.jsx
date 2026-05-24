import { V2 } from '@/tokens';

export function HCaps({ as: Tag = 'h2', size = 84, line = 0.95, tracking = '-0.02em', weight = 800, color, style, children }) {
  return (
    <Tag style={{
      fontFamily: V2.font, fontWeight: weight,
      fontSize: size, lineHeight: line, letterSpacing: tracking,
      textTransform: 'uppercase', color: color || V2.cream, margin: 0,
      ...style,
    }}>
      {children}
    </Tag>
  );
}
