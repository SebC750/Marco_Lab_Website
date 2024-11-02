import "../stylesheets/Home.css"
import { Link } from "react-router-dom";
const OurTeamSection = () => {
  return (
    <>
      <div className="card bg-info text-white">
        <div className="row g-0">
          <div className="col-12 col-xl-6 order-xl-first order-last">
            <img src="marco-lab-pictures/marco_lab_team.jpg" loading="lazy" class="img-fluid w-100 h-100" alt="the research team" />
          </div>
          <div className="col-12 col-xl-6">
            <div className="card-body d-flex flex-column justify-content-between p-3 p-sm-5">
              <h1 className="card-title" id="title-border">
                Our Team
              </h1>
              <div className="card-text mb-3">
                The optics research team at Marco’s lab brings together a dynamic group of undergraduates, graduate students, PhD candidates, and research leaders dedicated to advancing optical science.
                United by a shared passion for discovery, we explore topics ranging from fundamental light-matter interactions to cutting-edge imaging techniques and how they affect the properties of butterflies.
                Under the guidance of experienced researchers like Professor Marco Antonio Giraldo, students and postdoctoral fellows gain hands-on experience in testing optical effects on entities and their surrounding environment, fostering a collaborative environment where ideas are nurtured and scientific growth thrives.
                Our team’s combined expertise drives our mission to push the boundaries of optics research and make impactful contributions to the field.
              </div>
              <Link to="/team" className="btn btn-light rounded-0 btn-lg"> Meet the rest of the team!</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurTeamSection