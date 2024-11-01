import "../stylesheets/Home.css"
const OurTeamSection = () => {
  return (
    <>
      <div className="card bg-info text-white">
        <div className="row">
          <div className="col">
            <img src="marco-lab-pictures/marco_lab_team.jpg" class="img-fluid w-100 h-100" alt="the research team" />
          </div>
          <div className="col">
            <div className="card-body p-5">
              <h1 className="card-title"> 
                 Our Team
              </h1>
              <div className="card-text">
                Our research  
              </div>
              <button className="btn btn-info btn-lg"></button>
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