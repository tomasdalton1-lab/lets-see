import { Variants } from 'framer-motion';

export const customEasing = [0.4, 0, 0.2, 1] as const;
export const customEasing2 = [0.2, 0, 0, 1] as const;

export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    filter: 'blur(4px)'
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      ease: customEasing2
    }
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: customEasing
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
      duration: 1.2,
      ease: customEasing as any
    }
  }
};

export const phaseItem: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    filter: 'blur(3px)'
  },
  visible: (i: number = 0) => ({
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      ease: customEasing2 as any,
      delay: i * 0.2
    }
  })
};

export const iconHover = {
  scale: 1.1,
  rotate: 3,
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6)"
};

export const textHover = {
  y: -2,
  transition: {
    duration: 0.3,
    ease: customEasing2
  }
};

export const underlineHover = {
  scaleX: 1,
  opacity: 1,
  transition: {
    duration: 0.6,
    ease: customEasing2
  }
};

export const descriptionHover = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.4,
    ease: 'easeOut'
  }
};

export const lineHover = {
  width: '100%',
  opacity: 1,
  transition: {
    duration: 0.6,
    ease: customEasing2,
    delay: 0.2
  }
};
