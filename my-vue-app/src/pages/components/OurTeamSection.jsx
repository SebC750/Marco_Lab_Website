import "../stylesheets/Home.css"
const OurTeamSection = () => {
  return (
    <>
      <div className="card bg-info text-white">
        <div className="row g-0">
          <div className="col-12 col-md-6 order-md-first order-first">
            <img src="marco-lab-pictures/marco_lab_team.jpg" class="img-fluid w-100 h-100" alt="the research team" />
          </div>
          <div className="col-12 col-md-6">
            <div className="card-body p-5">
              <h1 className="card-title" id="title-border"> 
                 Our Team
              </h1>
              <div className="card-text">
                Our research  
              </div>
              <button className="btn btn-light rounded-0 btn-lg"> Meet the rest of the team!</button>
            </div>
          </div>
        </div>
      </div>
      {/* 
                
                */}
    </>
  )
}

export default OurTeamSection