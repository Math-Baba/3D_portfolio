import { BrowserRouter } from "react-router-dom"
import {About, Experience, Hero, Tech, Works, StarsCanvas, DynamicIslandNavbar } from './components';
import ContactDetails from "./components/ContactDetails";


const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          {/* <Navbar /> */}
          <DynamicIslandNavbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <ContactDetails />
          <StarsCanvas /> 
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
