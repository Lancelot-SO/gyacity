import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { V2 } from '@/tokens';

export function Cursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 28 });

  const trailX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const trailY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const onMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const onHoverStart = () => setHovering(true);
    const onHoverEnd   = () => setHovering(false);

    window.addEventListener('mousemove', onMove);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);

    const targets = document.querySelectorAll('a, button, [role="button"]');
    targets.forEach(el => { el.addEventListener('mouseenter', onHoverStart); el.addEventListener('mouseleave', onHoverEnd); });

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
      targets.forEach(el => { el.removeEventListener('mouseenter', onHoverStart); el.removeEventListener('mouseleave', onHoverEnd); });
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Trail dot */}
      <motion.div
        style={{
          position: 'fixed', pointerEvents: 'none', zIndex: 9999,
          x: trailX, y: trailY,
          translateX: '-50%', translateY: '-50%',
          width: hovering ? 48 : 32, height: hovering ? 48 : 32,
          border: `1px solid ${V2.coral}`,
          borderRadius: '50%',
          opacity: visible ? 0.6 : 0,
          transition: 'width 0.3s, height 0.3s, opacity 0.3s',
          mixBlendMode: 'difference',
        }}
      />
      {/* Precise dot */}
      <motion.div
        style={{
          position: 'fixed', pointerEvents: 'none', zIndex: 9999,
          x: springX, y: springY,
          translateX: '-50%', translateY: '-50%',
          width: 6, height: 6,
          background: V2.coral,
          borderRadius: '50%',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s',
        }}
      />
    </>
  );
}
