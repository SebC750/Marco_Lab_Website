import "./stylesheets/Navbar.css"
function Navbar() {

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md">
                    <div className="container-fluid">
                        <a className="navbar-brand fs-1" href="#">Marco's Lab</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-mobile-menu" aria-controls="navbar-mobile-menu" aria-expanded="false">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbar-mobile-menu">
                            <ul className="navbar-nav m-0 gap-md-3">
                                <li className="nav-item bg-info">
                                    <a className="btn btn-info btn-lg text-white w-100 rounded-0" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item bg-info">
                                    <a className="btn btn-info btn-lg text-white w-100 rounded-0" href="/Research">Research</a>
                                </li>
                                <li className="nav-item bg-info">
                                    <a className="btn btn-info btn-lg text-white w-100 rounded-0" href="/Team">Team</a>
                                </li>
                                <li className="nav-item bg-info">
                                    <a className="btn btn-info btn-lg text-white w-100 rounded-0" href="/About">About</a>
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