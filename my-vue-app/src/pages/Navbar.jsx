import "./stylesheets/Navbar.css"
import {Link} from "react-router-dom"
function Navbar(){

    return (
        <div> 
          <header>
          <div class="navbar">
            
            <div class="navbar-logo">
            <Link to="/" style={{textDecoration: "none", color: "black"}}> <h1> Marco's Lab </h1> </Link>
            </div>
            <div class="navbar-body">
                <a className="btn btn-info btn-lg text-white" href="/"> Home </a>
                <a className="btn btn-info btn-lg text-white" href="/Research"> Research </a>
                <a className="btn btn-info btn-lg text-white" href="/Team"> Team </a>
                <a className="btn btn-info btn-lg text-white" href="/About"> About </a>
            
            </div>
            
            </div>
            </header>
        </div>
    )
}
export default Navbar