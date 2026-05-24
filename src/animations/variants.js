export const EASE_OUT   = [0.0, 0.0, 0.2, 1];
export const EASE_INOUT = [0.4, 0, 0.2, 1];
export const EASE_BACK  = [0.34, 1.56, 0.64, 1];

export const fadeUp = {
  hidden:  { opacity: 0, y: 60, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.9, ease: EASE_OUT } },
};

export const fadeDown = {
  hidden:  { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0,   transition: { duration: 0.7, ease: EASE_OUT } },
};

export const fadeLeft = {
  hidden:  { opacity: 0, x: -60, filter: 'blur(4px)' },
  visible: { opacity: 1, x: 0,   filter: 'blur(0px)', transition: { duration: 0.9, ease: EASE_OUT } },
};

export const fadeRight = {
  hidden:  { opacity: 0, x: 60,  filter: 'blur(4px)' },
  visible: { opacity: 1, x: 0,   filter: 'blur(0px)', transition: { duration: 0.9, ease: EASE_OUT } },
};

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1,    transition: { duration: 0.7, ease: EASE_BACK } },
};

export const clipRevealUp = {
  hidden:  { clipPath: 'inset(100% 0 0 0)' },
  visible: { clipPath: 'inset(0% 0 0 0)',   transition: { duration: 1.0, ease: EASE_OUT } },
};

export const stagger = (delay = 0.1) => ({
  hidden:  {},
  visible: { transition: { staggerChildren: delay } },
});

export const pageEnter = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.55, ease: EASE_OUT } },
  exit:    { opacity: 0, y: -16, transition: { duration: 0.35, ease: EASE_INOUT } },
};
