import fieldsOfStudy from "../datasets/fieldsofstudy.json"
import "../stylesheets/Home.css"
import { Link } from "react-router-dom"
const FieldOfStudySection = () => {
    return (
        <div className="card p-0 p-md-5">
            <div className="card-body">
                <div className="card-title d-flex justify-content-center" id="title-border">
                    <h1> Fields of study </h1>
                </div>
                <div className="container">
                    <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4">
                        {fieldsOfStudy && (
                            <>
                                {fieldsOfStudy.map((val, index) => (
                                    <div className="col" key={index}>
                                        <div className="card h-100 text-white bg-info d-flex flex-column" id="card-container">
                                            <img src={val.card_picture} loading="lazy" className="card-img-top" id="field-cards" alt="Field of Study" />
                                            <div className="card-body d-flex flex-column p-5">
                                                <div className="card-title">
                                                    <h3> {val.field} </h3>
                                                </div>
                                                <div className="card-text mb-3">
                                                    {val.brief_description}
                                                </div>
                                                <div className="mt-auto">
                                                    <a href={val.article_link} role="button" className="btn btn-light d-flex justify-content-center align-items-center d-block w-100 btn-lg rounded-0 fs-6 gap-4">
                                                        <i className="bi bi-file-earmark-text fs-3"></i>
                                                        Click to read a sample article</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                    <h3 className="p-4 d-flex justify-content-center" id="explore-more-anchor"> <Link to="/research"> Explore more research </Link> <i class="bi bi-arrow-right"></i> </h3>
                </div>
            </div>
        </div>
    )
}

export default FieldOfStudySection
