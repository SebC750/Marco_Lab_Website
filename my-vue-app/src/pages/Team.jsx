import Navbar from "./Navbar.jsx";
import "./stylesheets/Team.css";
import descriptions from "./datasets/Descriptions.json";
import Footer from "./components/Footer.jsx"
function Team() {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="team-title">
                    <h1> Meet the Team </h1>
                    <div className="dropdown">
                        <button className="btn btn-info dropdown-toggle btn-lg rounded-0" aria-expanded="false" data-bs-toggle="collapse" data-bs-target="#grade-selection">
                            Nivel de educacion
                        </button>
                        <ul className="dropdown-menu rounded-0" id="grade-selection">
                            <li className="dropdown-item"> <a href="#Pregrado"> Pregrado </a> </li>
                            <li className="dropdown-item"> <a href="#Maestria"> Maestria </a> </li>
                            <li className="dropdown-item"> <a href="#Doctorados"> Doctorado </a> </li>
                            <li className="dropdown-item"> <a href="#Lideres"> Lideres </a> </li>
                            <li className="dropdown-item"> <a href="#Alumni"> Alumni </a> </li>
                        </ul>
                    </div>
                </div>
            </div>
            {descriptions ? (
                <>
                    {Object.keys(descriptions[0]).map(group => (
                        <div key={group} className="bg-info p-4 w-100 mb-3">
                            <div className="grade-title text-white" id={`${group}`}> <h3> {group} </h3> </div>
                            <div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 d-flex align-items-stretch">
                                {descriptions[0][group].map((val, index) => (
                                    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex">
                                        <div className="card w-100 h-100 team-card mb-3">
                                            <img
                                                src={val.foto_perfil}
                                                className="card-img-top img-fluid h-100"
                                                id="profile-picture"
                                                alt="Profile picture"
                                            />
                                            <div className="card-body h-auto">
                                                <h3 className="card-title"> {val.nombre} </h3>
                                                <hr/>
                                                {val.posicion ? (<h4 className="card-title"> {val.posicion} </h4>) : <h4 className="card-title"> No disponible</h4>}
                                                {val.descripcion ? (<p className="card-text">{val.descripcion}</p>) : <p className="card-text"> No disponible</p>}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </>
            ) : null}
            <Footer />
        </>
    );
}

export default Team;
