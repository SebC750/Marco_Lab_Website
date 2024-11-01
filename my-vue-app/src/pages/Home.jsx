import "./stylesheets/Home.css"
import Navbar from "./Navbar.jsx"
import "./stylesheets/Navbar.css"
import HeroSection from "./components/HeroSection.jsx"
import OurResearchSection from "./components/OurResearchSection.jsx"
import OurTeamSection from "./components/OurTeamSection.jsx"
import Footer from "./components/Footer.jsx"
function Home() {

  return (
    <>
      <Navbar></Navbar>
      <section>
        <HeroSection />
      </section>
      <section>
        <OurResearchSection />
      </section>
      <section>
        <OurTeamSection />
      </section>
      <Footer/>
        
      

    </>
  )
}

export default Home
