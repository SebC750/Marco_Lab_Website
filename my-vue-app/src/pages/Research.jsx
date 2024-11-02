import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar.jsx";
import "./stylesheets/Research.css";
import "./stylesheets/Home.css";
import publications from "./datasets/Publications.json";
import { Link } from 'react-router-dom';
import ResearchSortCol from "./components/ResearchSortCol.jsx";
import Footer from "./components/Footer.jsx";

const ITEMS_PER_PAGE = 5;

function Research() {
    const [researchPapers, updateResearchPapers] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
        updateResearchPapers(publications);
    }, []);
    
    const filterBySubject = (subject) => {
        const filteredResearchPapers = publications.filter((val) =>
            val.abstract.includes(subject) || val.publication_title.includes(subject)
        );
        updateResearchPapers(filteredResearchPapers);
        setPageNumber(1);
    };

    const sortByYear = () => {
        const sortedResearchPapersYear = [...publications].sort((a, b) => {
            if (b.publication_year !== a.publication_year) {
                return b.publication_year - a.publication_year;
            }
            const dateA = new Date(a.publication_date + " " + a.publication_year);
            const dateB = new Date(b.publication_date + " " + b.publication_year);
            return dateB - dateA;
        });
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
                        <button className="btn btn-light btn-lg rounded-0">View full article</button>
                    </Link>
                </div>
            </div>
        ));
    };

    const totalPages = Math.ceil(researchPapers.length / ITEMS_PER_PAGE);

    return (
        <div>
            <Navbar />
            <div className="container">
                <h1 className="text-center pt-2">Research</h1>
                <hr />
                <div className="research-body">
                    <div className="container">
                        <div className="col">
                            <ResearchSortCol filterBySubject={filterBySubject} sortByYear={sortByYear} />
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
                                {[...Array(totalPages)].map((_, index) => (
                                    <button
                                        key={index}
                                        className={`btn btn-info btn-lg ${pageNumber === index + 1 ? 'active' : ''}`}
                                        onClick={() => setPageNumber(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
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
