import Navbar from "./Navbar.jsx"
import "./stylesheets/Team.css"
function Team() {
    return (
        <div>
            <Navbar></Navbar>
            <div class="team-title"> <h1> Meet the Team </h1> </div>
            <div class="all-team-showcase">
                <div class="row-container">
                    <h2> Team Leaders </h2>
                    <div class="divider"> </div>
                    <div class="row">
                        <div class="col-md-auto">
                            <div class="member-picture"> <img src="../images/marco-lab-pictures/marcojpg.jpg" alt="picture of Marco Giraldo" height="500px" width="500px" /> <h3> Dr. Marco Antonio Giraldo Cadavid </h3> </div>
                        </div>
                        <div class="col-md-auto">
                            <div class="member-picture"> <img src="../images/marco-lab-pictures/GermanRicaurte.jpg" alt="picture of German Ricaurte" height="500px" width="500px" /> <h3> Dr. German Ricaurte </h3> </div>
                        </div>
                    </div>





                </div>
                <div class="row-container">
                    <h2> Undergraduate Students </h2>
                    <div class="divider"> </div>

                    <div class="row">
                        <div class="col-md-auto">
                            <div class="member-picture"> <img src="../images/marco-lab-pictures/LauraMoreno.png" height="500px" width="500px" />
                                <h3> Laura Moreno </h3> </div>
                        </div>
                        <div class="col-md-auto">
                            <div class="member-picture"> <img src="../images/marco-lab-pictures/JoshuaTaborda.png" height="500px" width="500px" />
                                <h3> Joshua Taborda </h3> </div>
                        </div>
                        <div class="col-md-auto">
                            <div class="member-picture"> <img src="../images/marco-lab-pictures/PaulaRubiano.png" height="500px" width="500px" />
                                <h3> Paula Rubiano </h3> </div>
                        </div>
                        <div class="col-md-auto">
                            <div class="member-picture"> <img src="../images/marco-lab-pictures/JPSanchez.png" height="500px" width="500px" />
                                <h3> Juan Pablo Sanchez </h3></div>
                        </div>
                    </div>



                </div>
                <div class="row-container">
                    <h2> Masters Students </h2>
                    <div class="divider"> </div>

                    <div class="row">
                        <div class="col">
                            <div class="member-picture" align="center"> <img src="../images/marco-lab-pictures/MarianaJaramillo.png" height="500px" width="500px" />
                                <h3> Marianna Jaramillo </h3> </div>

                        </div>

                    </div>
                </div>
                <div class="row-container">
                    <h2> PhD Students </h2>
                    <div class="divider"> </div>
                    <div class="row">
                        <div class="col-md-auto">
                            <div class="member-picture"> <img src="../images/marco-lab-pictures/ana-valencia.png" height="500px" width="500px" />
                                <h3> Ana Valencia </h3> </div>
                        </div>
                        <div class="col-md-auto">
                            <div class="member-picture"> <img src="../images/marco-lab-pictures/JulianaSosa.png" height="500px" width="500px" />
                                <h3> Juliana Sosa </h3> </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Team