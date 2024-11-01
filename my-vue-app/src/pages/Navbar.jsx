import "./stylesheets/Navbar.css"
import { Link } from "react-router-dom"
function Navbar() {

    return (
        <div>
            <header>
                <div className="navbar">

                    <div className="navbar-logo">
                        <Link to="/" style={{ textDecoration: "none", color: "black" }}> <h1> Marco's Lab </h1> </Link>
                    </div>
                    <div className="navbar-body">
                        <a className="btn btn-info btn-lg text-white" href="/"> <h5> Home </h5> </a>
                        <a className="btn btn-info btn-lg text-white" href="/Research"> <h5> Research </h5> </a>
                        <a className="btn btn-info btn-lg text-white" href="/Team"> <h5> Team </h5> </a>
                        <a className="btn btn-info btn-lg text-white" href="/About"> <h5> About </h5> </a>

                    </div>

                </div>
            </header>
        </div>
    )
}
export default Navbar