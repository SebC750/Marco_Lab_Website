import "../stylesheets/Home.css"
import carouselImages from "../datasets/CarouselImages.json"

const HeroSection = () => {
    return (
        <div className="bg-info">
            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-lg-2" id="home-container">
                    <div className="col-12">
                        <div className="welcome-text d-flex flex-column align-items-center">
                            <h1 className="fw-semibold text-center"> Bringing new ideas to light. </h1>
                            <p className="text-center"> This is the official homepage for the optics research team at the University of Antioquia.</p>
                            <div className="d-flex gap-4 align-items-center">
                                <a href="#research-section"> <button className="btn btn-light rounded-0 btn-lg"> Learn more! </button></a>
                                <a href="#contact-us"> <button className="btn btn-light rounded-0 btn-lg"> Contact Us! </button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div id="home-slideshow" className="carousel slide p-0" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                {carouselImages.map((val,index) => (
                                    <>
                                    <button type="button" data-bs-target="#home-slideshow" data-bs-slide-to={index} className={`${val.active === true ? "active" : ""}`} aria-current={`${val.active === true ? "true" : "false"}`} aria-label={`slide${index}`}></button>
                                    </>
                                ))}                 
                            </div>
                            <div className="carousel-inner">
                                {carouselImages.map((val, index) => (
                                    <>
                                    <div key={index} className={`carousel-item ${val.active === true ? "active" : ""}`}>
                                        <img src={val.src} alt={val.alt} className="thumbnail"/>
                                    </div>
                                    </>
                                ))}                              
                                <button className="carousel-control-prev" type="button" data-bs-target="#home-slideshow" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#home-slideshow" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection