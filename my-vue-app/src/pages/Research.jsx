import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar.jsx";
import "./stylesheets/Research.css";
import "./stylesheets/Home.css";
import publications from "./datasets/Publications.json";
import orcidAPI from '../api/api.js';
import { Link } from 'react-router-dom';
import ResearchSortCol from "./components/ResearchSortCol.jsx";
import Footer from "./components/Footer.jsx";
import {sortByLatest, searchBySubject} from "../functions/filteringFunctions.js"
const ITEMS_PER_PAGE = 10;

function Research() {
    const [researchPapers, updateResearchPapers] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const totalPages = Math.ceil(researchPapers.length / ITEMS_PER_PAGE);

    useEffect(() => {
        window.scrollTo(0, 0);
        updateResearchPapers(publications);
    }, []);

    const handleFilterBySubject = (subject) => {
        const filteredResearchPapers = searchBySubject(publications, subject);
        updateResearchPapers(filteredResearchPapers);
        setPageNumber(1);
    };

    const handleSortByLatest = () => {
        const sortedResearchPapersYear = sortByLatest(publications);
        updateResearchPapers(sortedResearchPapersYear);
        setPageNumber(1);
    };

    const renderPapers = () => {
        const startIndex = (pageNumber - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return researchPapers.slice(startIndex, endIndex).map((paper, index) => (
            <div key={index} className="container text-white bg-info mt-3 p-4 rounded-0" id="paper-container">
                <div className="publication-date">
                    <h5>{paper.publication_date} {paper.publication_year}</h5>
                </div>
                <h4>{paper.publication_title}</h4>
                <div className="divider"></div>
                <h5>Abstract</h5>
                <p>{paper.abstract}</p>
                <div className="link-to-research">
                    <Link to={paper.publication_url}>
                        <button className="btn btn-light btn-lg rounded-0 d-md-block w-md-50 w-100">View full article</button>
                    </Link>
                </div>
            </div>
        ));
    };

    return (
        <div>
            <Navbar />
            <div className="">
                <div className="container">
                    <h1 className="text-center pt-2">Research</h1>
                    <hr />
                </div>           
                <div className="research-body">
                    <div className="container">
                        <div className="col">
                            <ResearchSortCol filterBySubject={handleFilterBySubject} sortByLatest={handleSortByLatest} />
                            <div className="research-list">
                                <div className="pub-title">
                                    <h2>Publications</h2>
                                </div>
                                {renderPapers()}
                            </div>
                            <nav className="bg-dark p-4 mb-3 pagination-nav d-flex justify-content-center gap-4">
                                <button
                                    className={`btn btn-info btn-lg ${pageNumber === 1 ? 'disabled' : ''}`}
                                    onClick={() => setPageNumber(pageNumber - 1)}
                                    disabled={pageNumber === 1}
                                >
                                    Prev
                                </button>
                                <div className="d-md-flex d-none gap-2">
                                    {[...Array(totalPages)].map((_, index) => (
                                        <button
                                            key={index}
                                            className={`btn btn-info btn-lg ${pageNumber === index + 1 ? 'active' : ''}`}
                                            onClick={() => setPageNumber(index + 1)}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                                </div>

                                <button
                                    className={`btn btn-info btn-lg ${pageNumber === totalPages ? 'disabled' : ''}`}
                                    onClick={() => setPageNumber(pageNumber + 1)}
                                    disabled={pageNumber === totalPages}
                                >
                                    Next
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Research;
