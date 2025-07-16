// Animation de texte qui apparaît du haut avec un effet de spring
export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50, // Décale le texte vers le haut
      opacity: 0, // Le rend invisible
    },
    show: {
      y: 0,  // Position normale
      opacity: 1, // Devient visible
      transition: {
        type: "spring", // Animation type "ressort"
        duration: 1.25, // Durée de l'animation
        delay: delay, // Délai avant le début
      },
    },
  };
};

// Animation de fade 
export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      // Décalage selon la direction choisie
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0, // Invisible 
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1, // Visible
      transition: {
        type: type, // Type d'animation (spring, tween, etc.)
        delay: delay,
        duration: duration, // Durée totale
        ease: "easeOut", // Accélère puis ralenti
      },
    },
  };
};

// Zoom avec fondu
export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween", // Animation douce
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

// Slide depuis une direction hors de l'écran vers sa position normale
export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

// Animation d'apparition en enchaînant les enfants (stagger)
export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren, // Délai entre chaque enfant
        delayChildren: delayChildren || 0, // Délai avant le 1er enfant
      },
    },
  };
};