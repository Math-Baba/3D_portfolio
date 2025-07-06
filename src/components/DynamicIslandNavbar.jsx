import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { code } from "../assets";
import { navLinks } from "../constants";

// Composant bouton pour la Navbar
function NavbarButton({ children, className = "", ...props }) {
  return (
    <button
      type="button"
      className={`bg-accent text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-accent/80 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default function DynamicIslandNavbar() {
  // Etat pour afficher ou masquer le menu sur mobile
  const [showNav, setShowNav] = useState(false);

  // Etat pour cacher la navbar quand on scroll vers le bas
  const [hidden, setHidden] = useState(false);

  // Etat pour stocker le titre de la section active
  const [active, setActive] = useState("");

  // Ref pour garder la position de scroll précédente
  const lastScrollY = useRef(typeof window !== "undefined" ? window.scrollY : 0);

  // Pour savoir si on est sur un écran mobile
  const isMobile = typeof window !== "undefined" ? window.innerWidth < 640 : false;

  // Effet pour détécter lorsqu'on scroll vers le bas
  // Si oui, alors on ferme le menu 
  useEffect(() => {
    const handleScroll = () => {
      const latest = window.scrollY;
      if (latest > lastScrollY.current && latest > 150) {
        setHidden(true);
        setShowNav(false);
      } else {
        // Si non alors on affiche le menu
        setHidden(false);
      }
      // Mis à jour de la dernière position de scroll
      lastScrollY.current = latest;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effet pour détecter la section active
  useEffect(() => {
    const sections = navLinks.map((link) => document.getElementById(link.id));
    const observer = new IntersectionObserver(
      (entries) => {
        // Pour chaque entrée observée par le IntersectionObserver
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const visibleId = entry.target.id;
            const activeLink = navLinks.find((link) => link.id === visibleId);
            if (activeLink) setActive(activeLink.title); // On met à jour le titre
          }
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1, // On change de titre quand 100% de la section est visible
      }
    );

    // On observe toutes les sections existantes
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    // On arrête l'observation 
    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <motion.nav
      className="fixed inset-0 top-4 w-[95%] sm:w-[90%] mx-auto bg-tertiary font-medium text-slate-50 flex max-sm:justify-between gap-4 px-3 max-w-7xl items-center rounded-full font-mono h-14 p-5 overflow-hidden z-50"
      variants={{
        long: { maxWidth: 950 },
        short: { maxWidth: 280 },
        hideNav: {
          height: 56,
          borderRadius: 50,
          alignItems: "center",
          transition: { delay: 0, duration: 0.3 },
        },
        showNav: {
          height: 250,
          borderRadius: 22,
          alignItems: "start",
          transition: { delay: 0 },
        },
      }}
      initial="short"
      animate={[
        hidden ? "short" : "long",
        showNav && isMobile ? "showNav" : "hideNav",
      ]}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 80,
        damping: 14,
      }}
    >
      {/* Bouton qui toggle le menu */}
      <button
        onClick={() => {
          setHidden(false);
          setShowNav((prev) => !prev);
        }}
        className="min-w-[40px] min-h-[40px] rounded-full gap-2 bg-slate-50 flex items-center justify-center focus:outline-none"
        aria-label="Toggle menu"
      >
        <img src={code} alt="logo" width={24} height={24} />
      </button>

      {/* Liste des liens de navigation */}
      <motion.ul
        className={`w-full sm:pr-10 ${
          showNav
            ? "[--display-from:none] [--display-to:flex]"
            : "max-sm:[--display-from:none] sm:[--display-to:flex]"
        } [--opacity-from:0.1] [--opacity-to:1] flex-col sm:flex-row items-center justify-end gap-10 max-sm:gap-5 max-sm:pt-10`}
        variants={{
          hidden: {
            display: "var(--display-from, none)",
            opacity: "var(--opacity-from, 1)",
            transition: { duration: 0.1, delay: 0 },
          },
          visible: {
            display: "var(--display-to, none)",
            opacity: "var(--opacity-to, 1)",
            transition: { duration: 0.6, delay: 0.2 },
          },
        }}
        initial="hidden"
        animate={[
          hidden && !showNav ? "hidden" : "visible",
          showNav ? "visible" : "",
        ]}
      >
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`${
              active === link.title ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => {
              setActive(link.title);
              if (isMobile) setShowNav(false); // auto-hide on click (mobile only)
            }}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </motion.ul>

      {/* Bouton affichant le titre actif : visible uniquement si le menu est fermé */}
      {!showNav &&(
        <motion.div
          className="w-full [--display-from:none][--display-to:inline-block]"
          variants={{
            hidden: {
              display: "var(--display-from, none)",
              transition: { delay: 0, duration: 0.3 },
            },
            visible: {
              display: "var(--display-to)",
              transition: { delay: 0.2, duration: 0.3 },
            },
          }}
          initial="hidden"
          animate={hidden ? "visible" : "hidden"}
        >
          <NavbarButton className="w-full">
            {active || navLinks[0].title}
          </NavbarButton>
        </motion.div>
      )}

      {/* Chevron visible sur mobile */}
      <NavbarButton
        className="rounded-full min-w-[40px] sm:hidden flex items-center justify-center px-0 py-0 h-10 w-10"
        onClick={() => {
          setHidden(false);
          setShowNav((prev) => !prev);
        }}
        aria-label="Toggle navigation"
      >
        {showNav ? <ChevronUp /> : <ChevronDown />}
      </NavbarButton>
    </motion.nav>
  );
}
