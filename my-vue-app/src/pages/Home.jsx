import "./stylesheets/Home.css"
import Navbar from "./Navbar.jsx"
import { Link } from "react-router-dom"
function Home() {

  const goToNextSlide = () =>{

  }
  return (
    <>
      <div>
        <Navbar></Navbar>
        <div class="container">




          <div class="description-content">
            <h1 style={{ fontSize: 48 }}> Welcome </h1>
            <p style={{ fontSize: 36 }}> Welcome to the official page for Marco's research team </p>
          </div>
          <div class="image-showcase">
            <div id="image-slideshow">
              
            </div>
          </div>

          <div class="team-showcase">
            <h1> Researchers </h1>
            <div class="leader-description">
              <div class="leader-name">
                <h3 > Professor Marco Antonio Giraldo </h3>
              </div>


            </div>
            <div class="team-description">
              <h3> Research Contributors </h3>
              <div class="team-images">

              </div>
            </div>
            <Link to="/team"> <button class="link-to-team"> Meet the rest of the team!  </button> </Link>
          </div>
          <div class="contact-section">
            <div class="contact-title">
              <h1> Contact Us! </h1>
              <div style={{ borderStyle: "solid", borderWidth: 3, borderColor: "white" }}> </div>
            </div>
            <div class="contact-numbers">

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
