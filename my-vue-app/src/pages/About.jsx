import Navbar from "./Navbar.jsx";
import "./stylesheets/About.css";
import Footer from "./components/Footer.jsx"
import faqAnswers from "./datasets/FAQAnswers.json"
function About() {


    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="about-title">
                    <h1> About Us! </h1>
                </div>
                <hr />
                <h1> FAQ </h1>
                <div className="accordion accordion-flush mb-3" id="faq">
                    {faqAnswers.map((val, index) => (
                        <div key={index} className="accordion-item">
                            <h1 id="header" className="accordion-header">
                                <button className="accordion-button collapsed bg-info text-white" type="button" data-bs-toggle="collapse" data-bs-target={`#faq${index}`} aria-expanded="false" aria-controls={`faq${index}`}>
                                    {val.question}
                                </button>
                            </h1>
                            <div id={`faq${index}`} className="accordion-collapse collapse" data-bs-parent="#faq">
                                <div className="accordion-body">
                                    <p> {val.answer} </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default About