import "./stylesheets/Navbar.css"
import {Link} from "react-router-dom"
function Navbar(){
    return (
        <div> 
          <nav>
            <div class="navbar-logo">
            <Link to="/" style={{textDecoration: "none",color: "white"}}> <h1> Marco's Lab </h1> </Link>
            </div>
            <div class="navbar-body">
                <div class="navbar-link">  <Link to="/" style={{textDecoration: "none", color: "white"}}> <button> Home </button></Link>  </div>
                <div class="navbar-link">  <Link to="/research" style={{textDecoration: "none", color: "white"}}> <button> Research </button></Link>  </div>
                <div class="navbar-link"> <Link to="/team" style={{textDecoration: "none", color: "white"}}> <button> Team </button></Link> </div>
                <div class="navbar-link">  <Link to="/about" style={{textDecoration: "none", color: "white"}}> <button> About </button> </Link> </div>
            </div>
          </nav>
        </div>
    )
}
export default Navbar