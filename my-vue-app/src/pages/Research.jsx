import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar.jsx";
import "./stylesheets/Research.css";
import "./stylesheets/Home.css";
import fetchAllPublications from '../functions/apiFunctions.js';
import { Link } from 'react-router-dom';
import ResearchSortCol from "./components/ResearchSortCol.jsx";
import Footer from "./components/Footer.jsx";
import { sortByLatest, searchBySubject, sortByEarliest } from "../functions/filteringFunctions.js"
const ITEMS_PER_PAGE = 10;

function Research() {
    const [allResearchPapers, setAllResearchPapers] = useState([])
    const [researchPapers, updateResearchPapers] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const totalPages = Math.ceil(researchPapers.length / ITEMS_PER_PAGE);

    useEffect(() => {
        fetchPublications();
    }, []);

    const fetchPublications = async () => {
        const allPublications = await fetchAllPublications();
        setAllResearchPapers(allPublications);
        updateResearchPapers(allPublications)
        setPageNumber(1);
    };

    const handleFilterBySubject = (subject) => {
        const filteredResearchPapers = searchBySubject(allResearchPapers, subject);
        updateResearchPapers(filteredResearchPapers);
        setPageNumber(1);
    };

    const handleSortByLatest = () => {
        const sortedResearchPapersYear = sortByLatest(researchPapers);
        updateResearchPapers(sortedResearchPapersYear);
        setPageNumber(1);
    };
    
    const handleSortByEarliest = () => {
        const sortedResearchPapersYear = sortByEarliest(researchPapers);
        updateResearchPapers(sortedResearchPapersYear);
        setPageNumber(1);
    };
    const handleReset = () => {
        updateResearchPapers(allResearchPapers);
        setPageNumber(1);
    };
    const renderPapers = () => {
        const startIndex = (pageNumber - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return researchPapers.slice(startIndex, endIndex).map((paper, index) => (
            <div key={index} className="container text-white bg-info mt-3 p-4 rounded-0" id="paper-container">
                <div className="publication-date">
                    {paper.publicationDate
                        ? `Date published: 
                        ${paper.publicationDate.year?.value ? paper.publicationDate.year?.value : ""}
                        ${paper.publicationDate.month?.value ? "- "+paper.publicationDate.month?.value : ""}
                        ${paper.publicationDate.day?.value ? "- "+paper.publicationDate.day?.value : ""}`
                        : "Publication date not available"}
                </div>
                <h4> <strong> {paper.title} </strong></h4>
                <h5> <strong> Publication type: </strong> {paper.type} </h5>
                <h5> <strong> Publication Journal: </strong> {paper.journalTitle?.value} </h5>
                <div className="divider"></div>
                <div className="link-to-research">
                    {paper.publicationUrl?.value ? (
                        <Link to={paper.publicationUrl?.value}>                   
                        <button className="btn btn-light btn-lg rounded-0 d-md-block w-md-50"> View full article</button>
                    </Link>
                    ): (             
                        <button className="btn btn-light btn-lg rounded-0 d-md-block w-md-50" disabled> Article link not available </button>
                    )}
                    
                </div>
            </div>
        ));
    };

    return (
        <div>
            <Navbar />         
                <div className="container">
                    <h1 className="text-center pt-2">Research</h1>
                    <hr />
                </div>
                <div className="research-body">
                    <div className="container">
                        <div className="col">
                            <ResearchSortCol filterBySubject={handleFilterBySubject} sortByLatest={handleSortByLatest} sortByEarliest={handleSortByEarliest}/>
                         <div className="border-dark-info border-5 mt-3">
                         <button 
                            className="btn btn-info btn-lg w-100 text-white rounded-0 " 
                            onClick={handleReset}
                        >
                            Reset Filters
                        </button>
                            </div>   
                            
                            <div className="research-list">
                                <div className="pub-title">
                                    <h2>Publications</h2>
                                </div>
                                {renderPapers()}
                            </div>
                            
                            <nav className="bg-dark p-4 mb-3 pagination-nav d-flex justify-content-center gap-4">
                                <button
                                    className={`btn btn-info btn-lg text-white ${pageNumber === 1 ? 'disabled' : ''}`}
                                    onClick={() => setPageNumber(pageNumber - 1)}
                                    disabled={pageNumber === 1}
                                >
                                    Prev
                                </button>
                                <div className="d-md-flex d-none gap-2">
                                    {[...Array(totalPages)].map((_, index) => (
                                        <button
                                            key={index}
                                            className={`btn btn-info btn-lg text-white ${pageNumber === index + 1 ? 'active' : ''}`}
                                            onClick={() => setPageNumber(index + 1)}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                                </div>

                                <button
                                    className={`btn btn-info btn-lg text-white ${pageNumber === totalPages ? 'disabled' : ''}`}
                                    onClick={() => setPageNumber(pageNumber + 1)}
                                    disabled={pageNumber === totalPages}
                                >
                                    Next
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            
            <Footer />
        </div>
    );
}

export default Research;
