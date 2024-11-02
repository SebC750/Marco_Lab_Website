import "../stylesheets/Home.css"
const OurResearchSection = () => {
  return (
    <>
      <div className="card" id="research-section">
        <div className="row g-0 ">
          <div className="col-12 col-md-6 order-last order-md-first">
            <div className="card-body p-5">
              <h1 className="card-title" id="title-border">
                     Our Research
              </h1>
              <div className="card-text mb-3">
                 At Marco's lab, we are dedicated to advancing scientific knowledge in optics and biophysics with a focus on the effects of optical elements on butterfly wings and their unique scale structures. 
                 Our research spans various domains of optics, including light-matter interactions, spectrophotometry, and high-resolution imaging techniques.
                  Specifically, we investigate how different optical conditions and elements influence the microstructures of butterfly wings, uncovering insights into how light interacts with and affects these intricate scale patterns. 
                  Our biophysics studies delve into the dynamics of biomolecules and cellular mechanics related to wing structure, aiming to reveal the mechanisms underlying the vibrant coloration and resilience of butterfly wings. 
                  Through an integrated approach of computational modeling and experimental methodologies, we translate these optical and biophysical principles into real-world applications. 
                  Our team is committed to pushing the boundaries of optical science and contributing valuable insights to both biological and materials science.
              </div>
              <a role="button" href="/Research" className="btn btn-info text-white rounded-0 btn-lg"> Learn more </a>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <img src="marco-lab-pictures/research_section_Fig1_HTML.webp" className="img-fluid w-100 h-100" alt="optics picture" />
          </div>
        </div>
      </div>
    </>

  )
}

export default OurResearchSection