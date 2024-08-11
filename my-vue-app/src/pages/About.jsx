import Navbar from "./Navbar.jsx" 
import "./stylesheets/About.css"
function About(){
    return (
        <div> 
            <Navbar> </Navbar>
            <div className="about-title">
               <h1> About Us! </h1>
            </div>
            <h1> FAQ </h1>
        </div>
    )
}
export default About