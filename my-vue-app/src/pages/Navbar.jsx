import "./stylesheets/Navbar.css"
import {Link} from "react-router-dom"
function Navbar() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md">
                    <div className="container-fluid">
                        <Link className="navbar-brand ps-4 fs-1" to="/">Marco's Lab</Link>
                        <button className="navbar-toggler" aria-label="Navbar mobile menu toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-mobile-menu" aria-controls="navbar-mobile-menu" aria-expanded="false">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbar-mobile-menu">
                            <ul className="navbar-nav m-0 gap-md-3">
                                <li className="nav-item bg-info">
                                    <Link className="btn btn-info btn-lg text-white w-100 rounded-0" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item bg-info">
                                    <Link className="btn btn-info btn-lg text-white w-100 rounded-0" to="/research">Research</Link>
                                </li>
                                <li className="nav-item bg-info">
                                    <Link className="btn btn-info btn-lg text-white w-100 rounded-0" to="/team">Team</Link>
                                </li>
                                <li className="nav-item bg-info">
                                    <Link className="btn btn-info btn-lg text-white w-100 rounded-0" to="/about">About</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Navbar