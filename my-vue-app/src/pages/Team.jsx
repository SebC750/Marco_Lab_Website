import Navbar from "./Navbar.jsx";
//import "./stylesheets/Team.css";
import descriptions from "./datasets/Descriptions.json";
import Dropdown from "./components/Dropdown.jsx";

function Team() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="team-title">
                    <h1> Meet the Team </h1>
                </div>
                <div className="all-team-showcase">
                    <div className="row-container">
                        <h2> Lideres del Equipo </h2>
                        <div className="divider"></div>
                        {descriptions ? (
                            <div className="row">
                                <Dropdown memberList={descriptions[0].lideres} grade={"lideres"} />
                            </div>
                        ) : null}
                    </div>
                    <div className="row-container">
                        <h2> Doctorados </h2>
                        <div className="divider"></div>
                        {descriptions ? (
                            <div className="row">
                                <div className="row">
                                    <Dropdown memberList={descriptions[0].doctorados} grade={"doctorados"} />
                                </div>
                            </div>
                        ) : null}
                    </div>
                    <div className="row-container">
                        <h2> Estudiantes de Maestria </h2>
                        <div className="divider"></div>
                        {descriptions ? (
                            <div className="row">
                                <Dropdown memberList={descriptions[0].maestria} grade={"maestria"} />
                            </div>
                        ) : null}
                    </div>
                    <div className="row-container">
                        <h2> Pre-grados </h2>
                        <div className="divider"></div>
                        {descriptions ? (
                            <div className="row">
                                <Dropdown memberList={descriptions[0].pregrados} grade={"pregrados"} />
                            </div>
                        ) : null}
                    </div>
                    <div className="row-container">
                        <h2> Alumni </h2>
                        <div className="divider"></div>
                        {descriptions ? (
                            <div className="row">
                               
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
