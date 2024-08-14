import Navbar from "./Navbar.jsx";
import "./stylesheets/About.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';

function About() {
    const [dropdownText, updateDropdownText] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState('');

    const openDropdownText = (question) => {
        updateDropdownText(question);
        setIsDropdownOpen(question);
    };

    const closeDropdownText = () => {
        updateDropdownText('');
        setIsDropdownOpen('');
    };

    return (
        <div>
            <Navbar />
            <div className="about-title">
                <h1> About Us! </h1>
            </div>
            <h1> FAQ </h1>


            <div className={`dropdown-container ${isDropdownOpen === 'who-we-are' ? 'open' : ''}`}>
                <div className="dropdown">
                    <h2> Who we are</h2>
                    <button className="dropdown-toggle-button" onClick={() => isDropdownOpen === 'who-we-are' ? closeDropdownText() : openDropdownText('who-we-are')}>
                        <span>{isDropdownOpen === 'who-we-are' ? '▲' : '▼'}</span>
                    </button>
                </div>
                {dropdownText === 'who-we-are' && (
                    <div className="dropdown-text">
                        <p> We are a passionate team of researchers dedicated to advancing the field of biophysics...</p>
                    </div>
                )}
            </div>


            <div className={`dropdown-container ${isDropdownOpen === 'what-we-do' ? 'open' : ''}`}>
                <div className="dropdown">
                    <h2> What we study </h2>
                    <button className="dropdown-toggle-button" onClick={() => isDropdownOpen === 'what-we-do' ? closeDropdownText() : openDropdownText('what-we-do')}>
                        <span>{isDropdownOpen === 'what-we-do' ? '▲' : '▼'}</span>
                    </button>
                </div>
                {dropdownText === 'what-we-do' && (
                    <div className="dropdown-text">
                        <p> In our lab, we dedicate our research to the following subjects: </p>
                        <ul>
                            <li><Link to="https://www.cell.com/current-biology/fulltext/S0960-9822(06)01347-9">Biophysics of surfaces and membrane models</Link></li>
                            <li><Link to="https://en.wikipedia.org/wiki/Biophotonics#:~:text=Biophotonics%20is%20an%20interdisciplinary%20field,and%20molecules%20in%20living%20organisms.">Biophotonics</Link></li>
                            <li><Link to="https://www.technologynetworks.com/neuroscience/articles/electrophysiology-fundamentals-membrane-potential-and-electrophysiological-techniques-359363#:~:text=Electrophysiology%20is%20the%20measurement%20of,hundreds%20or%20thousands%20of%20cells.">Electrophysiology of cells</Link></li>
                        </ul>
                    </div>
                )}
            </div>


            <div className={`dropdown-container ${isDropdownOpen === 'fields' ? 'open' : ''}`}>
                <div className="dropdown">
                    <h2> Fields</h2>
                    <button className="dropdown-toggle-button" onClick={() => isDropdownOpen === 'fields' ? closeDropdownText() : openDropdownText('fields')}>
                        <span>{isDropdownOpen === 'fields' ? '▲' : '▼'}</span>
                    </button>
                </div>
                {dropdownText === 'fields' && (
                    <div className="dropdown-text">
                        <p> We are a research team dedicated to the study of Biophysics. </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default About;