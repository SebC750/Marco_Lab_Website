import Navbar from "./Navbar.jsx"
import "./stylesheets/Team.css"
import descriptions from "./datasets/Descriptions.json"
import Dropdown from "./components/Dropdown.jsx"
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
                                <Dropdown memberList={descriptions[0].lideres} grade={"lideres"}/>
                            </div>
                        ) : null}
                    </div>
                    <div class="row-container">

                        <h2> Doctorados </h2>
                        <div class="divider"> </div>
                        {descriptions ? (
                            <div className="row">
                                <div className="row">
                                    
                                </div>
                            </div>
                        ) : null}
                    </div>

                    <div class="row-container">
                        <h2> Estudiantes de Maestria </h2>
                        <div class="divider"> </div>
                        {descriptions ? (
                            <div className="row">
                                
                            </div>
                        ) : null}

                    </div>

                    <div class="row-container">
                        <h2> Pre-grados </h2>
                        <div class="divider"> </div>
                        {descriptions ? (
                            <div className="row">
                                
                            </div>
                        ) : null}
                    </div>
                    <div class="row-container">
                        <h2> Alumni</h2>
                        <div class="divider"> </div>
                        {descriptions ? (
                            <div className="row">
                                
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Team