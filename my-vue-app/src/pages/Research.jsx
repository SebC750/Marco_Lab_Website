import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar.jsx";
import "./stylesheets/Research.css";
import "./stylesheets/Home.css";
import publications from "./datasets/Publications.json";
import { Link } from 'react-router-dom'
function Research() {
    const [researchPapers, updateResearchPapers] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [topKeywords, updateTopKeywords] = useState()
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false)
    const [searchInput, setSearchInput] = useState('')
    var frequencyListArr = {};
    useEffect(() => {
        updateResearchPapers(publications);
        console.log(publications);
        frequencyListArr = getFrequencyOfWords(publications)
        console.log(frequencyListArr)
    }, []);
    const handleSearchInput = (e) => {
        setSearchInput(e.target.value)
        console.log(searchInput)
    }
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
                        <button> <Link to={paper.publication_url} style={{ textDecoration: "none", color: "white" }}> View full article</Link></button>
                    </div>

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
                            <div className="research-list">
                                <div className="pub-title">
                                    <h3>Sort By</h3>
                                </div>
                                <div className="filter-container">
                                    <div className="research-redirect-button">
                                        <button className="button-items" onClick={() => sortByYear()}>
                                            <img src="/marco-lab-pictures/Calendar.svg" width="50px" height="50px" alt="calendar" /> Date
                                        </button>
                                    </div>


                                    {isSearchBarOpen ? (
                                        <div>
                                            <div className="research-redirect-button">
                                                <button className="button-items" onClick={() => setIsSearchBarOpen(false)}>

                                                    <img src="../images/marco-lab-pictures/Microscope.svg" width="50px" height="50px" alt="microscope" /> Subject <span>&#9650;</span>
                                                </button>
                                                <div className="search-bar">
                                                    <p> Search for keyword</p>
                                                    <input type="text" value={searchInput} onChange={handleSearchInput} />
                                                    <button className="btn btn-primary" onClick={() => filterBySubject(searchInput)}> <img src="../images/marco-lab-pictures/Search_Icon.svg" width="20px" height="20px" alt="search" />Search </button>
                                                </div>
                                            </div>
                                        </div>
                                    ) : <div className="research-redirect-button">
                                        <button className="button-items" onClick={() => setIsSearchBarOpen(true)}>

                                            <img src="/marco-lab-pictures/Microscope.svg" width="50px" height="50px" alt="microscope" /> Subject <span>&#9660;</span>
                                        </button>
                                    </div>}
                                </div>
                            </div>
                            <div className="research-links">
                                <h3>More research available at:</h3>
                                <div className="research-link"> <button> <Link to="https://scholar.google.com/citations?user=SpLyrvoAAAAJ&hl=es" style={{ textDecoration: "none", color: "white" }}> <img src="/marco-lab-pictures/Google_Scholar_logo.svg" alt="RG logo" width="30%" height="30%" />Google Scholar </Link> </button> </div>
                                <div className="research-link"><button> <Link to="https://www.researchgate.net/profile/Marco-Giraldo" style={{ textDecoration: "none", color: "white" }}><img src="/marco-lab-pictures/ResearchGate_icon_SVG.svg" alt="RG logo" width="30%" height="30%" /> ResearchGate </Link></button></div>
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
