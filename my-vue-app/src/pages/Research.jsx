import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar.jsx";
import "./stylesheets/Research.css";
import "./stylesheets/Home.css";
import publications from "./datasets/Publications.json";
import { Link } from 'react-router-dom'
import ResearchSortCol from "./components/ResearchSortCol.jsx"
function Research() {
    const [researchPapers, updateResearchPapers] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    var frequencyListArr = {};
    useEffect(() => {
        updateResearchPapers(publications);
        console.log(publications);
        frequencyListArr = getFrequencyOfWords(publications)
        console.log(frequencyListArr)
    }, []);
    const getFrequencyOfWords = (publication) => {
        const wordFrequency = {};
        {
            publication.map((val) => {
                const cleanedText = val.abstract.replace(/[^\w\s]/g, '').toLowerCase();
                const wordsArray = cleanedText.split(/\s+/);
                wordsArray.forEach((word) => {
                    if (wordFrequency[word]) {
                        wordFrequency[word] += 1;
                    } else {
                        wordFrequency[word] = 1;
                    }
                });
                console.log(wordFrequency)
            })
        }
        return wordFrequency;
    }
    const filterBySubject = (subject) => {
        setSearchInput('')
        const filteredResearchPapers = publications.filter((val) => val.abstract.includes(subject) || val.publication_title.includes(subject))
        updateResearchPapers(filteredResearchPapers)
    }
    const sortByYear = () => {
        const sortedResearchPapersYear = [...publications].sort((a, b) => {
            if (b.publication_year !== a.publication_year) {
                return b.publication_year - a.publication_year;
            }

            const dateA = new Date(a.publication_date + " " + a.publication_year);
            const dateB = new Date(b.publication_date + " " + b.publication_year);
            return dateB - dateA;

        });
        console.log("Sorted by year: ", sortedResearchPapersYear)
        updateResearchPapers(sortedResearchPapersYear);
    }
    const renderPapers = () => {
        const startIndex = (pageNumber - 1) * 9;
        const endIndex = startIndex + 9;
        return researchPapers.slice(startIndex, endIndex).map((paper, index) => (
            <div key={index} className="container text-white bg-info mt-3 p-4" id="paper-container">
                <div className="publication-date">
                    <h5>{paper.publication_date} {paper.publication_year}</h5>
                </div>
                <h4>{paper.publication_title}</h4>
                <div className="divider"></div>
                <h5>Abstract</h5>
                <p>{paper.abstract}</p>
                <div className="link-to-research">
                    
                <Link to={paper.publication_url}> <button className="btn btn-light btn-lg"> View full article</button> </Link>
                    
                </div>
            </div>
        ));
    };
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="research-title">
                    <h1>Research</h1>
                    <p>Here is a collection of all research conducted by the team.</p>
                </div>
                <div className="research-body">
                    <div className="container">
                        <div className="row" id="research-row">
                            <div className="col-sm-3" id="sort-column">
                               <ResearchSortCol 
                               filterBySubject={filterBySubject}
                               sortByYear={sortByYear}
                               />
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
                                        <div className="page-number" style={{ opacity: "50%" }}>
                                            Prev
                                        </div>
                                    ) : <div className="page-number" onClick={() => setPageNumber(pageNumber - 1)}> Prev </div>}

                                    <div className="page-number" onClick={() => setPageNumber(1)}>1</div>
                                    <div className="page-number" onClick={() => setPageNumber(2)}>2</div>
                                    <div className="page-number" onClick={() => setPageNumber(3)}>3</div>
                                    <div className="page-number" onClick={() => setPageNumber(4)}>4</div>
                                    {pageNumber == 4 ? (
                                        <div className="page-number" style={{ opacity: "50%" }}>
                                            Next
                                        </div>
                                    ) : <div className="page-number" onClick={() => setPageNumber(pageNumber + 1)}> Next </div>}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Research;
