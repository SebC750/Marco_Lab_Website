import "../stylesheets/Home.css"
import { Link } from "react-router-dom"
const OurResearchSection = () => {
  return (
    <>
      <div className="card" id="research-section">
        <div className="row">
          <div className="col">
            <div className="card-body p-5">
              <h1 className="card-title">
                     Our research
              </h1>
              <div className="card-text">
              </div>
            </div>
          </div>
          <div className="col">
            <img src="marco-lab-pictures/optics_pic.png" className="img-fluid w-100 h-100" alt="optics picture" />
          </div>
        </div>
      </div>
    </>

  )
}

export default OurResearchSection