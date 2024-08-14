import Navbar from "./Navbar.jsx"
import "./stylesheets/About.css"
import { useState } from 'react'
function About() {
    const [dropdownText, updateDropdownText] = useState('')

    const openDropdownText = (question) => {
        updateDropdownText(question)

    }
    const closeDropdownText = () => {
        updateDropdownText('')
    }
    return (
        <div>
            <Navbar> </Navbar>
            <div className="about-title">
                <h1> About Us! </h1>
            </div>
            <h1> FAQ </h1>
            <div class="dropdown-container">
                <div class="dropdown">
                    <h2> Who we are</h2>
                    {dropdownText == '' ? (
                    <button class="dropdown-toggle-button" onClick={() => openDropdownText('who-we-are')}>
                        
                            <div class="dropdown-text">
                                <span>&#9660;</span>
                            </div>

                       

                    </button>
                  ) : <button class="dropdown-toggle-button" onClick={() => closeDropdownText()}><span>&#9650;</span> </button>}
                </div>
                {dropdownText == 'who-we-are'? (
                    <div className="dropdown-text">
                        <p> We are a research team dedicated to the study of Biophysics. </p>
                    </div>
                ) : null}

            </div>

            <div class="dropdown-container">
                <div class="dropdown">
                    <h2> What we do</h2>
                    {dropdownText == '' ? (
                    <button class="dropdown-toggle-button" onClick={() => openDropdownText('what-we-do')}>
                        
                            <div class="dropdown-text">
                                <span>&#9660;</span>
                            </div>

                       

                    </button>
                  ) : <button class="dropdown-toggle-button" onClick={() => closeDropdownText()}><span>&#9650;</span> </button>}
                </div>
                {dropdownText == 'what-we-do'? (
                    <div className="dropdown-text">
                        <p> We are a research team dedicated to the study of Biophysics. </p>
                    </div>
                ) : null}

            </div>

            <div class="dropdown-container">
                <div class="dropdown">
                    <h2> Fields</h2>
                    {dropdownText == '' ? (
                    <button class="dropdown-toggle-button" onClick={() => openDropdownText('fields')}>
                        
                            <div class="dropdown-text">
                                <span>&#9660;</span>
                            </div>

                       

                    </button>
                  ) : <button class="dropdown-toggle-button" onClick={() => closeDropdownText()}><span>&#9650;</span> </button>}
                </div>
                {dropdownText == 'fields' ? (
                    <div className="dropdown-text">
                        <p> We are a research team dedicated to the study of Biophysics. </p>
                    </div>
                ) : null}

            </div>

        </div>
    )
}
export default About