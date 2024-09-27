import Navbar from "./Navbar.jsx"
import "./stylesheets/Team.css"
import descriptions from "./datasets/Descriptions.json"

export const Dropdown = ({ grade }) => {
    const descriptions = grade.map((val, index) => {

        return(
        <div class="col-md-auto" key={index}>
            <div class="member-picture"> <img src={val.foto_perfil} alt={`picture of ${val.nombre}`} height="500px" width="500px" /> <h3> {val.nombre} </h3> </div>
            <div className="accordion" id={`description-accordion-${val.nombre}`}>
                <div className="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#desc-section-${val.nombre}`} aria-expanded="true" aria-controls={`desc-section-${val.nombre}`}>
                            Mas informacion
                        </button>
                    </h2>
                    <div id={`desc-section-${val.nombre}`} class="accordion-collapse collapse show" data-bs-parent={`#description-accordion-${val.nombre}`}>
                        <div class="accordion-body">
                            <p>{val.posicion ? val.posicion : 'Posición no especificada'}</p>
                            <p>{val.descripcion ? val.descripcion : 'Descripción no disponible'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    })

    return ( <div className="row">
        {descriptions}
    </div>)
}
function Team() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div class="team-title"> <h1> Meet the Team </h1> </div>
                <div class="all-team-showcase">
                    <div class="row-container">
                        <h2> Lideres del Equipo </h2>
                        <div class="divider"> </div>
                        {descriptions ? (
                            <div className="row">
                                <Dropdown grade={descriptions[0].lideres} />
                            </div>
                        ) : null}
                    </div>
                    <div class="row-container">

                        <h2> Doctorados </h2>
                        <div class="divider"> </div>
                        {descriptions ? (
                            <div className="row">
                                <div className="row">
                                    <Dropdown grade={descriptions[0].doctorados} />
                                </div>
                            </div>
                        ) : null}
                    </div>

                    <div class="row-container">
                        <h2> Estudiantes de Maestria </h2>
                        <div class="divider"> </div>
                        {descriptions ? (
                            <div className="row">
                                <Dropdown grade={descriptions[0].maestria} />
                            </div>
                        ) : null}

                    </div>

                    <div class="row-container">
                        <h2> Pre-grados </h2>
                        <div class="divider"> </div>
                        {descriptions ? (
                            <div className="row">
                                <Dropdown grade={descriptions[0].pregrados} />
                            </div>
                        ) : null}
                    </div>
                    <div class="row-container">
                        <h2> Alumni</h2>
                        <div class="divider"> </div>
                        {descriptions ? (
                            <div className="row">
                                <Dropdown grade={descriptions[0].alumni} />
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Team