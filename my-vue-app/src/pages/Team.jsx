import Navbar from "./Navbar.jsx";
import "./stylesheets/Team.css";
import descriptions from "./datasets/Descriptions.json";
import Footer from "./components/Footer.jsx"
import { useEffect } from "react"
function Team() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="team-title">
                    <h1 className="text-center"> Meet the Team </h1>
                    <div className="dropdown">
                        <button className="btn btn-info dropdown-toggle btn-lg rounded-0 text-white" aria-expanded="false" data-bs-toggle="collapse" data-bs-target="#grade-selection">
                            Nivel de educacion
                        </button>
                        <ul className="dropdown-menu rounded-0 p-0 w-100 m-0" id="grade-selection">
                            {Object.keys(descriptions[0]).map(group => (
                                <>
                                    <li className="grade-list-item p-2"> <a href={`#${group}`}> {group} </a>  </li>
                                </>
                            ))}
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            {descriptions ? (
                <>
                    {Object.keys(descriptions[0]).map(group => (
                        <div key={group} className="bg-info p-4 w-100 mb-3">
                            <div className="grade-title text-white" id={`${group}`}> <h3> {group} </h3> </div>
                            <div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
                                {descriptions[0][group].map((val) => (
                                    <div key={val.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex">
                                        <div className="card w-100 h-100 team-card mb-3 shadow shadow-md">
                                            <img
                                                src={`${val.foto_perfil ? val.foto_perfil : "/marco-lab-pictures/default_profile_picture.svg"}`}
                                                className="card-img-top"
                                                height="400px"
                                                id="profile-picture"
                                                alt="Profile picture"
                                            />
                                            <div className="card-body d-flex flex-column justify-content-between">
                                                <h3 className="card-title"> {val.nombre} </h3>
                                                <div className="d-flex flex-column gap-2">
                                                    <img src={val.affiliation_organization_logo} className="img-fluid" alt="Researcher's personal biophysics webpage" />
                                                    {val.enlace_sitio_web ? (<a role="button" href={val.enlace_sitio_web} className="btn btn-info d-block text-white rounded-0 ">
                                                        Visit personal webpage
                                                    </a>) : <a role="button" href={val.enlace_sitio_web} className="btn btn-info disabled d-block text-white rounded-0 ">
                                                        Webpage not available
                                                    </a>}
                                                    <button type="button" className="btn btn-info btn-lg d-block w-100 rounded-0 text-white" data-bs-toggle="collapse" data-bs-target={`#profile-desc-${val.id}`} aria-expanded="false" aria-controls={`profile-desc-${val.id}`}>
                                                        Ver mas
                                                    </button>
                                                    {val.descripcion ? (<p className="card-text collapse z-3 border border-info bg-white p-2 mh-25 profile-desc overflow-auto" id={`profile-desc-${val.id}`}>{val.descripcion}</p>) : <p className="card-text collapse profile-desc border border-info z-3 bg-white p-2" id={`profile-desc-${val.id}`}> No disponible</p>}
                                                </div>
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
