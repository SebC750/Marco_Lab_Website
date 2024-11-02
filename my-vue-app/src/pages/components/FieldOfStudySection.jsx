import fieldsOfStudy from "../datasets/fieldsofstudy.json"
import "../stylesheets/Home.css"

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
                                            <img src={val.card_picture} className="card-img-top" id="field-cards" alt="Field of Study"/>
                                            <div className="card-body d-flex flex-column p-5">
                                                <div className="card-title">
                                                    <h2> {val.field} </h2>
                                                </div>
                                                <div className="card-text mb-3">
                                                    {val.brief_description}
                                                </div>
                                                <div className="mt-auto">
                                                    <button className="btn btn-light d-block w-100 btn-lg rounded-0">
                                                        <i className="bi bi-file-earmark-text"></i>
                                                        <a href={val.article_link} className="text-dark"> Read more</a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                    <h3 className="p-4 d-flex justify-content-center" id="explore-more-anchor"> <a href="/Research"> Explore more research </a> <i class="bi bi-arrow-right"></i> </h3>
                </div>
            </div>
        </div>
    )
}

export default FieldOfStudySection
