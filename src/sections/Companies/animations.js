export const containerAnimation = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

export const fadeUpAnimation = {
  hidden: {
    opacity: 0,
    y: 45,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const panelAnimation = {
  hidden: {
    opacity: 0,
    x: -50,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    x: 0,
    scale: 1,

    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const skillAnimation = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const skillHoverAnimation = {
  y: -7,

  transition: {
    duration: 0.28,
  },
};