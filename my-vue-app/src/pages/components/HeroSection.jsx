import "../stylesheets/Home.css"
const HeroSection = () => {
    return (
        <div style={{ backgroundColor: "#0dcaf0" }}>
            <div className="container">
                <div className="row" id="home-container">
                    <div className="col-sm-4">
                        <div className="welcome-text">
                            <h1> Welcome to Marco's Lab! </h1>
                            <p> This is the official homepage for Marco's laboratory. You will see here all the research done in Biophysics </p>
                            <div className="hero-anchor-buttons">
                                <a href="#home-page"> <button className="btn btn-light"> Learn more! </button></a>
                                <a href="#contact-us"> <button className="btn btn-light"> Contact Us! </button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div id="home-slideshow" className="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#home-slideshow" data-bs-slide-to="0" class="active" aria-current="true" aria-label="slide1"></button>
                                <button type="button" data-bs-target="#home-slideshow" data-bs-slide-to="1" aria-label="slide2"></button>
                                <button type="button" data-bs-target="#home-slideshow" data-bs-slide-to="2" aria-label="slide3"></button>
                                <button type="button" data-bs-target="#home-slideshow" data-bs-slide-to="3" aria-label="slide4"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="/marco-lab-pictures/butterfly-bg.png" className="thumbnail" alt="butterfly" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/marco-lab-pictures/butterfly-pic.png" className="thumbnail" alt="butterfly" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/marco-lab-pictures/uoa-greenhouse.svg" className="thumbnail" alt="butterfly" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/marco-lab-pictures/lab-office.png" className="thumbnail" alt="research office" />
                                </div>
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