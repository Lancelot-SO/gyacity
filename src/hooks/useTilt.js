import { useRef, useCallback } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

export function useTilt(strength = 14) {
  const ref = useRef(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(rawX, { stiffness: 180, damping: 22 });
  const rotateY = useSpring(rawY, { stiffness: 180, damping: 22 });

  const onMouseMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = ((e.clientX - left) / width  - 0.5) * strength * 2;
    const y = ((e.clientY - top)  / height - 0.5) * strength * 2;
    rawY.set(x);
    rawX.set(-y);
  }, [rawX, rawY, strength]);

  const onMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return { ref, rotateX, rotateY, onMouseMove, onMouseLeave };
}
