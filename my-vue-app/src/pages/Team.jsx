import Navbar from "./Navbar.jsx";
import "./stylesheets/Team.css";
import descriptions from "./datasets/Descriptions.json";

function Team() {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="team-title">
                    <h1> Meet the Team </h1>
                    <div className="dropdown">
                             <button className="btn btn-info dropdown-toggle" aria-expanded="false" data-bs-toggle="collapse" data-bs-target="#grade-selection">
                                Nivel de educacion
                             </button>
                             <ul className="dropdown-menu" id="grade-selection">
                                <li className="dropdown-item"> <a href="#Pregrado"> Pregrado </a> </li>
                                <li className="dropdown-item"> <a href="#Maestria"> Maestria </a> </li>
                                <li className="dropdown-item"> <a href="#Doctorados"> Doctorado </a> </li>
                                <li className="dropdown-item"> <a href="#Lideres"> Lideres </a> </li>
                                <li className="dropdown-item"> <a href="#Alumni"> Alumni </a> </li>
                             </ul>
                    </div>
                </div>
                
                {descriptions ? (
                    <>
                        {Object.keys(descriptions[0]).map(group => (
                            <div key={group} className="bg-info mb-3 p-4">
                                <div className="grade-title text-white" id={`${group}`}> <h3> {group} </h3> </div>
                                <div className="row d-flex align-items-stretch">
                                    {descriptions[0][group].map((val, index) => (
                                        <div key={index} className="col-3 d-flex">
                                            <div className="card w-100 team-card mb-3">
                                                <img 
                                                    src={val.foto_perfil} 
                                                    className="card-img-top" 
                                                    height="500px" 
                                                    id="profile-picture" 
                                                    alt="Profile picture"
                                                />
                                                <div className="card-body h-auto">
                                                    <h3 className="card-title"> {val.nombre} </h3>
                                                    <h4 className="card-title"> {val.posicion} </h4>
                                                    <p className="card-text">{val.descripcion}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </>
                ) : null}
            </div>
        </>
    );
}

export default Team;
