import Navbar from "./Navbar.jsx"
import "./stylesheets/Research.css"
import "./stylesheets/Home.css"
function Research() {
    return (
        <div>
            <Navbar></Navbar>
            <div class="research-title">
                <h1> Research </h1>
                <p> Here is a collection of all research conducted by the team. </p>

            </div>
            <div class="research-body">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="research-list">
                                <div class="pub-title">
                                    <h3> Sort By</h3>
                                </div>
                                
                                <div class="filter-container">
                                  <div class="research-redirect-button"> <button class="button-items"> <img src="../images/marco-lab-pictures/Calendar.svg" width="50px" height="50px"/> Date </button> </div>
                                  <div class="research-redirect-button"> <button class="button-items"> <img src="../images/marco-lab-pictures/Microscope.svg" width="50px" height="50px"/> Subject </button> </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="research-list">
                                <div class="pub-title"> <h2> Publications </h2> </div>
                                <div class="research-container">
                                    <div class="publication-date"> <h5> FEBRUARY 08, 2024 </h5> </div>
                                    <h4> Three new toxins from the south American spider Pamphobeteus verdolaga inhibit calcium and potassium channel currents of murine cardiomyocytes</h4>
                                    <div class="divider"></div>
                                    <h5> Abstract </h5>
                                    <p>

                                        The spider species Pamphobeteus verdolaga was recently discovered in the Aburra’s Valley, Colombia. A bioinformatics analysis of the venom gland’s transcriptome identified numerous peptides with potential effects on ion channels. Of those, three were then synthetized through Fmoc solid-phase methods (referred to as vrdg peptides). Since vrdg172 and vrdg183 possess two disulfide bridges, we hypothesize that they block ion channels, compared with vrdg66, which is a linear peptide. In this study, we evaluated the effects of vrdg66, vrdg172 and vrdg183 on Ca2+ (ICaL) and K+ (IK) currents in mouse cardiomyocytes using the whole-cell configuration of the patch-clamp technique. When used at a concentration of 1 μM, vrdg66 showed a minor inhibitory effect on the peak amplitude of ICaL (−16.3±10.5%; n=6) and IK (−24.4±4.4%; n=5), compared with the control current. At the same concentration, vrdg172 similarly blocked ICaL (−38.8±15.6%; n=4) and IK (−43.9±5.8%; n=3). Interestingly, vrdg183 demonstrated a weak inhibitory effect on the peak IK (−6.2±24.6%; n=3) and a sizeable inhibitory effect on ICaL (−66.7±6.5%; n=4). In a further characterization of vrdg183, the blocking effect on ICaL was confirmed in isoproterenol-stimulated cardiomyocytes. Finally, a concentration-effect curve (10, 100, 300, 1000 and 10000 nM; n=4 for each experimental point) allowed us to calculate an IC50 for vrdg183 of 858.28 nM. The activation and inactivation kinetics were not affected by any of the concentrations tested. In summary, we report novel spider toxins that inhibit mammalian voltage-gated ion channels, likely acting as pore blockers. The vrdg183 toxin exhibits a selective inhibitory effect on ICaL over IK, with moderate affinity (Grant 111577757673, Minciencias, Colombia).
                                    </p>
                                    <div class="research-redirect-buttons">
                                        <div class="research-redirect-button" >
                                            <button> View full article </button>
                                        </div>
                                        <div class="research-redirect-button">
                                            <button> Download PDF </button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Research