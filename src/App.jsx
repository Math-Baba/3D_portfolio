import { BrowserRouter } from "react-router-dom"
import { lazy, Suspense } from "react"
import { Hero, StarsCanvas, DynamicIslandNavbar } from './components';

// Placeholder pour Suspense (ne pas utiliser le Loader 3D ici : il utilise useProgress/drei et doit être dans un Canvas)
const SectionFallback = () => <div className="min-h-[50vh]" />;

// Lazy loading des sections (sans toucher aux composants 3D)
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const TechSphere = lazy(() => import('./components/TechSphere'));
const Works = lazy(() => import('./components/Works'));
const Galerie = lazy(() => import('./components/Galerie'));
const ContactDetails = lazy(() => import('./components/ContactDetails'));

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <DynamicIslandNavbar />
          <Hero />
        </div>
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<div className="min-h-[50vh]" />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<div className="min-h-[600px]" />}>
          <TechSphere/>
        </Suspense>
        <Suspense fallback={<div className="min-h-[50vh]" />}>
          <Works />
        </Suspense>
        <Suspense fallback={<div className="min-h-[50vh]" />}>
          <Galerie />
        </Suspense>
        <div className="relative z-0">
          <Suspense fallback={<div className="min-h-[50vh]" />}>
            <ContactDetails />
          </Suspense>
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
