import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export function useCounter(target, duration = 2000) {
  const ref     = useRef(null);
  const inView  = useInView(ref, { once: true, margin: '-100px' });
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const steps = 60;
    const step  = duration / steps;
    let i = 0;

    const id = setInterval(() => {
      i++;
      const progress = i / steps;
      const ease = 1 - Math.pow(1 - progress, 3); // cubic ease-out
      setCount(Math.round(ease * target));
      if (i >= steps) clearInterval(id);
    }, step);

    return () => clearInterval(id);
  }, [inView, target, duration]);

  return { ref, count };
}
