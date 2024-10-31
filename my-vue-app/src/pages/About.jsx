import Navbar from "./Navbar.jsx";
import "./stylesheets/About.css";
import { useState } from 'react';

function About() {


    return (
        <div>
            <Navbar />
            <div className="container">

                <div className="about-title">
                    <h1> About Us! </h1>
                </div>
                <h1> FAQ </h1>
                <div class="accordion" id="faq">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="false" aria-controls="faq1">
                                Our Mission
                            </button>
                        </h2>
                        <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#faq">
                            <div class="accordion-body">
                                <p>Our mission is to provide high-quality services that improve the lives of our clients and communities.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                                Our Vision
                            </button>
                        </h2>
                        <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faq">
                            <div class="accordion-body">
                                <p>Our vision is to be a global leader in our field, known for innovation and dedication to our clients.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                                Our Values
                            </button>
                        </h2>
                        <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faq">
                            <div class="accordion-body">
                                <p>We value integrity, commitment, and continuous improvement in everything we do.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}
export default About