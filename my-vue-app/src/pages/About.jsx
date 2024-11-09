import Navbar from "./Navbar.jsx";
import "./stylesheets/About.css";
import Footer from "./components/Footer.jsx"
import faqAnswers from "./datasets/FAQAnswers.json"
import {useEffect} from "react"
function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="p-2 text-center">
                    <h1> About Us </h1>
                </div>
                <hr />
                <h2> FAQ </h2>
                <div className="accordion accordion-flush mb-3" id="faq">
                    {faqAnswers.map((val, index) => (
                        <div key={index} className="accordion-item">
                            <h3 id="header" className="accordion-header">
                                <button className="accordion-button collapsed bg-info text-white" type="button" data-bs-toggle="collapse" data-bs-target={`#faq${index}`} aria-expanded="false" aria-controls={`faq${index}`}>
                                    {val.question}
                                </button>
                            </h3>
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