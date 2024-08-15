import "./stylesheets/Home.css"
import Navbar from "./Navbar.jsx"
import "./stylesheets/Navbar.css"
import { Link } from "react-router-dom"

function Home() {

  const goToNextSlide = () => {

  }
  return (
    <>
      <div>

        <Navbar></Navbar>
        <div>
          <div className="welcome-text">
            <h1> Welcome to Marco's Lab! </h1>
            <p> This is the official homepage for Marco's laboratory. You will see here all the research done in Biophysics </p>
          </div>

          <div className="home-anchors">
            <div className="anchor-buttons">
              <a href="#home-page"> <button> Learn more! </button></a>
            </div>
            <div className="anchor-buttons">
              <a href="#contact-us"> <button> Contact Us! </button></a>
            </div>

          </div>

          <div id="home-slideshow" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="5000">
                <img src="/marco-lab-pictures/butterfly-bg.png" className="d-block w-100" height="800px" alt="butterfly" />
              </div>
              <div className="carousel-item" data-bs-interval="5000">
                <img src="/marco-lab-pictures/butterfly-pic.png" className="d-block w-100" height="800px" alt="butterfly" />
              </div>
              <div className="carousel-item" data-bs-interval="5000">
                <img src="/marco-lab-pictures/uoa-greenhouse.svg" className="d-block w-100" height="800px" alt="butterfly" />
              </div>
              <div className="carousel-item" data-bs-interval="5000">
                <img src="/marco-lab-pictures/lab-office.png" className="d-block w-100 " height="800px" alt="research office" />
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#home-slideshow" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#home-slideshow" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

          </div>

          <div id="home-page">
          </div>

          <div class="research-container">
            <div class="container-image">
              <img src="/marco-lab-pictures/research-pic1.png" class="d-block w-100" alt="research pic 1" />

            </div>

            <div class="research-description-container" style={{ marginTop: 10 }}>
              <div class="research-description">
                <div class="container-border" style={{ textAlign: "center" }}>  <h2> Our Research </h2> </div>
                <div class="container-border" style={{ marginTop: 10 }}>
                  <p>

                    At Marco's Lab, our research in optics delves into the fascinating world of light and its interactions with matter. We explore cutting-edge advancements in photonics, laser technology, and optical materials to develop innovative solutions for a range of applications. From enhancing communication systems with ultra-fast optical networks to pioneering breakthroughs in medical imaging and diagnostics, our team is dedicated to pushing the boundaries of what is possible with light. By harnessing the power of optics, we aim to create technologies that improve lives, drive scientific discovery, and shape the future of multiple industries.</p>
                </div>
              </div>
              <div class="redirect-button" style={{ marginTop: 10 }}>
                <Link to="/research"> <button> Learn more about our research! </button></Link>
              </div>
            </div>

          </div>

          <div class="team-showcase">


            <div class="team-container">

              <div class="container-border"> <h1> Featured Team Leaders </h1> </div>

              <div class="leader-section">


                <div class="leader-description">
                  <div className="container-border">
                    <h3 > Professor Marco Antonio Giraldo </h3>


                    <div class="container-border-desc" >

                      <p> Professor Marco Antonio Giraldo is a PhD at the University of Antioquia. As the leading researcher in this division, he works tirelessly to investigate the effects of optics on Butterflies and instruct his students with his findings.  </p>
                      <div className="researcher-image">
                        <img src="/marco-lab-pictures/marcojpg.jpg" alt="picture of Marco Giraldo" class="d-block w-300 h-500" />
                      </div>

                    </div>
                    <div class="personal-webpages">
                      <div class="webpage-link">

                        <Link to="https://scholar.google.com/citations?user=SpLyrvoAAAAJ&hl=es" style={{ textDecoration: "none", color: "white" }}>  <button> <img src="/marco-lab-pictures/Google_Scholar_logo.svg" alt="RG logo" width="10%" height="10%" /> Google Scholar </button> </Link>

                      </div>
                      <img src="/marco-lab-pictures/logo-uofantioquia-png.png" alt="picture of university of antioquia" class="uoa-logo" style={{ marginLeft: 30 }} width="30%" />
                    </div>
                  </div>






                </div>


              </div>
              <div class="divider"> </div>
              <div class="leader-section">


                <div class="leader-description">
                  <div class="container-border">
                    <h3 > German Ricaurte </h3>

                    <div class="container-border-desc" >
                      <p> insert description </p>
                      <div class="researcher-image">
                        <img src="/marco-lab-pictures/GermanRicaurte.jpg" alt="picture of German Ricaurte" class="d-block w-300 h-500" />

                      </div>
                    </div>
                    <div class="personal-webpages">
                      <div class="webpage-link" style={{ width: "100%" }}>
                        <Link to="https://www.researchgate.net/profile/German-Ricaurte" style={{ textDecoration: "none", color: "white" }}>  <button> <img src="/marco-lab-pictures/ResearchGate_icon_SVG.svg" alt="RG logo" width="10%" height="10%" /> ResearchGate </button> </Link>
                      </div>
                      <img src="/marco-lab-pictures/logo-uofantioquia-png.png" alt="picture of university of antioquia" style={{ marginLeft: 30 }} width="50%" />
                    </div>

                  </div>




                </div>


              </div>
              <div class="redirect-button">
                <Link to="/team"> <button> Meet the rest of the team! </button></Link>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="contact-section" id="contact-us">
        <div class="contact-title">
          <h2> Contact Us! </h2>
          <div class="divider"> </div>
        </div>
        <div class="contact-numbers">
          <h3> Marco Antonio Giraldo Cadavid </h3>
          <ul>
            <li class="contact-list-item"> Email: mantonio.giraldo@udea.edu.co </li>
          </ul>
        </div>
        <div class="contact-title">
          <h2> Address </h2>
          <div class="divider"> </div>
          <h3> University of Antioquia Faculty of Exact and Natural Sciences</h3>
          <div class="address-description">

            <p > Cl. Barranquilla #53188 #53- a, Aranjuez, Medellín, Aranjuez, Medellín, Antioquia, Colombia </p>
            <img src="/marco-lab-pictures/uoa-address.png" class="d-block w-50" height="100%" alt="university natural sciences building address" />
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
