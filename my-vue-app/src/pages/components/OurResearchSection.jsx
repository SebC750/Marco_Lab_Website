import "../stylesheets/Home.css"
const OurResearchSection = () => {
  return (
    <>
      <div className="card">
        <div className="row g-0 ">
          <div className="col-12 col-md-6 order-last order-md-first">
            <div className="card-body p-5">
              <h1 className="card-title" id="title-border">
                     Our Research
              </h1>
              <div className="card-text">
              </div>
              <a role="button" href="/Research" className="btn btn-info text-white rounded-0 btn-lg"> Learn more </a>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <img src="marco-lab-pictures/optics_pic.png" className="img-fluid w-100 h-100" alt="optics picture" />
          </div>
        </div>
      </div>
    </>

  )
}

export default OurResearchSection