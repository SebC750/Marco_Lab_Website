import Navbar from "./Navbar.jsx";
//import "./stylesheets/Team.css";
import descriptions from "./datasets/Descriptions.json";

function Team() {
    return (
        <>
            <Navbar />
            <div className="container bg-danger">
                <div className="team-title">
                    <h1> Meet the Team </h1>
                </div>
                {/* <Dropdown memberList={descriptions[0].lideres} grade={"lideres"} /> */}
                {descriptions ? (
                    <>
                        {Object.keys(descriptions[0]).map(group => (
                            <>
                                <div className="bg-primary">
                                    <h3> {group} </h3>
                                    <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-2 row-cols-sm-1">
                                        {descriptions[0][group].map((val, index) => (
                                            <>             
                                                <div className="card ms-2 p-0 mb-3" id="team-cards">
                                                    <img src={val.foto_perfil} class="card-img-top" height="300px" id="profile-picture" alt="..."/>
                                                        <div class="card-body h-auto">
                                                            <h3 className="card-title"> {val.nombre} </h3>
                                                            <h4 className="card-title"> {val.posicion} </h4>
                                                            <p className="card-text">{val.descripcion}</p>
                                                        </div>
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </>
                        ))}


                    </>
                ) : null}
            </div>
        </>

    );
}

export default Team;
