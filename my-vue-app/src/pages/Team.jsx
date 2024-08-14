import Navbar from "./Navbar.jsx"
import "./stylesheets/Team.css"
import descriptions from "./datasets/Descriptions.json"

function Team() {
    
   
    return (
        <div>
            <Navbar></Navbar>
            <div class="team-title"> <h1> Meet the Team </h1> </div>
            <div class="all-team-showcase">
                <div class="row-container">
                    <h2> Lideres del Equipo </h2>
                    <div class="divider"> </div>
                    {descriptions ? (
                        <div className="row">
                            {descriptions[0].lideres.map((val, index) => {
                                return (
                                    <div class="col-md-auto" key={index}>
                                        <div class="member-picture"> <img src={val.foto_perfil} alt={`picture of ${val.nombre}`} height="500px" width="500px" /> <h3> {val.nombre} </h3> </div>
                                        <p> {val.posicion} </p>
                                        <p> {val.descripcion}</p>
                                    </div>
                                )
                            })}
                        </div>
                    ) : null}
                </div>
                <div class="row-container">

                    <h2> Doctorados </h2>
                    <div class="divider"> </div>
                    {descriptions ? (
                        <div className="row">

                            {descriptions[0].doctorados.map((val, index) => {

                                return (


                                    <div class="col-md-auto" key={index}>
                                        <div class="member-picture"> <img src={val.foto_perfil} alt={`picture of ${val.nombre}`} height="500px" width="500px" /> <h3> {val.nombre} </h3> </div>
                                        <p> {val.posicion} </p>
                                        <p> {val.descripcion}</p>
                                    </div>
                                )
                            })}
                        </div>
                    ) : null}
                </div>

                <div class="row-container">
                    <h2> Estudiantes de Maestria </h2>
                    <div class="divider"> </div>
                    {descriptions ? (
                        <div className="row">
                            {descriptions[0].maestria.map((val, index) => {
                                return (
                                    <div class="col-md-auto" key={index}>
                                        <div class="member-picture"> <img src={val.foto_perfil} alt={`picture of ${val.nombre}`} height="500px" width="500px" /> <h3> {val.nombre} </h3> </div>
                                        <p> {val.posicion} </p>
                                        <p> {val.descripcion}</p>
                                    </div>
                                )
                            })}
                        </div>
                    ) : null}

                </div>

                <div class="row-container">
                    <h2> Pre-grados </h2>
                    <div class="divider"> </div>

                    {descriptions ? (
                        <div className="row">
                            {descriptions[0].pregrados.map((val, index) => {
                                return (
                                    <div class="col-md-auto" key={index}>
                                        <div class="member-picture"> <img src={val.foto_perfil} alt={`picture of ${val.nombre}`} height="500px" width="500px" /> <h3> {val.nombre} </h3> </div>
                                        <p> {val.posicion} </p>
                                        <p> {val.descripcion}</p>
                                    </div>
                                )
                            })}
                        </div>
                    ) : null}
                </div>
                <div class="row-container">
                    <h2> Alumni</h2>
                    <div class="divider"> </div>
                    {descriptions ? (
                        <div className="row">

                            {descriptions[0].alumni.map((val, index) => {

                                return (


                                    <div class="col-md-auto" key={index}>
                                        <div class="member-picture"> <img src={val.foto_perfil} alt={`picture of ${val.nombre}`} height="500px" width="500px" /> <h3> {val.nombre} </h3> </div>
                                        <p> {val.posicion} </p>
                                        <p> {val.descripcion}</p>
                                    </div>
                                )
                            })}
                        </div>
                    ) : null}
                </div>


            </div>
        </div>
    )
}
export default Team