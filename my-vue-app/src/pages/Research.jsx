import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar.jsx";
import "./stylesheets/Research.css";
import "./stylesheets/Home.css";
import publications from "./Publications.json";
import {Link} from 'react-router-dom'
function Research() {
    const [researchPapers, updateResearchPapers] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        updateResearchPapers(publications);
        console.log(publications);
    }, []);
    const sortByYear = () =>{
        const sortedResearchPapersYear = [...publications].sort((a, b) => {
            
            return b.publication_year - a.publication_year; 
        });
        console.log(sortedResearchPapersYear)
        updateResearchPapers(sortedResearchPapersYear);
    }
    const renderPapers = () => {
        const startIndex = (pageNumber - 1) * 9;
        const endIndex = startIndex + 9;
        return researchPapers.slice(startIndex, endIndex).map((paper, index) => (
            <div key={index} className="research-container">
                <div className="publication-date">
                    <h5>{paper.publication_date} {paper.publication_year}</h5>
                </div>
                <h4>{paper.publication_title}</h4>
                <div className="divider"></div>
                <h5>Abstract</h5>
                <p>{paper.abstract}</p>
                <div className="research-redirect-buttons">
                    <div className="research-redirect-button">
                        <button> <Link to={paper.publication_url} style={{textDecoration: "none", color: "white"}}> View full article</Link></button>
                    </div>
                    
                </div>
            </div>
        ));
    };

    return (
        <div>
            <Navbar />
            <div className="research-title">
                <h1>Research</h1>
                <p>Here is a collection of all research conducted by the team.</p>
            </div>
            <div className="research-body">
                <div className="container">
                    <div className="row" id="research-row">
                        <div className="col-sm-3" id="sort-column">
                            <div className="research-list">
                                <div className="pub-title">
                                    <h3>Sort By</h3>
                                </div>
                                <div className="filter-container">
                                    <div className="research-redirect-button">
                                        <button className="button-items">
                                            <img src="../images/marco-lab-pictures/Calendar.svg" width="50px" height="50px" alt="calendar" onClick={() => sortByYear()}/> Date
                                        </button>
                                    </div>
                                    <div className="research-redirect-button">
                                        <button className="button-items">
                                            <img src="../images/marco-lab-pictures/Microscope.svg" width="50px" height="50px" alt="microscope" /> Subject
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="research-links">
                                <h3>More research available at:</h3>
                                <div className="research-link"> <button> <Link to="https://scholar.google.com/citations?user=SpLyrvoAAAAJ&hl=es" style={{ textDecoration: "none", color: "white" }}> <img src="../images/marco-lab-pictures/Google_Scholar_logo.svg" alt="RG logo" width="30%" height="30%" />Google Scholar </Link> </button> </div>
                                <div className="research-link"><button> <Link to="https://www.researchgate.net/profile/Marco-Giraldo" style={{ textDecoration: "none", color: "white" }}><img src="../images/marco-lab-pictures/ResearchGate_icon_SVG.svg" alt="RG logo" width="30%" height="30%"/> ResearchGate </Link></button></div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="research-list">
                                <div className="pub-title">
                                    <h2>Publications</h2>
                                </div>
                                {renderPapers()}
                            </div>
                            <div className="page-numbers">
                                {pageNumber == 1 ? (
                                       <div className="page-number" style={{opacity: "50%"}}>
                                        Prev
                                        </div>
                                ):<div className="page-number" onClick={() => setPageNumber(pageNumber-1)}> Prev </div>}
                                
                                <div className="page-number" onClick={() => setPageNumber(1)}>1</div>
                                <div className="page-number" onClick={() => setPageNumber(2)}>2</div>
                                <div className="page-number" onClick={() => setPageNumber(3)}>3</div>
                                <div className="page-number" onClick={() => setPageNumber(4)}>4</div>
                                {pageNumber == 4 ? (
                                        <div className="page-number" style={{opacity: "50%"}}>
                                            Next
                                        </div>
                                ): <div className="page-number" onClick={() => setPageNumber(pageNumber+1)}> Next </div>}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Research;
