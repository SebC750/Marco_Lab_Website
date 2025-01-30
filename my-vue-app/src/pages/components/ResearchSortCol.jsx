import { useState } from "react"

const ResearchSortCol = ({ filterBySubject, sortByLatest, sortByEarliest }) => {
    const [searchInput, setSearchInput] = useState("")
    const handleSearchInput = (e) => {
        setSearchInput(e)
    }
    const handleFilterBySubject = () => {
        filterBySubject(searchInput)
        setSearchInput("")
    }
    return (
        <>
            <div className="row d-flex align-items-stretch">
                <div className="col w-100 h-100">
                    <div className="research-list">
                        <div className="pub-title">
                            <h3> Sort By </h3>
                        </div>
                        <div className="filter-container">
                            <button className="btn btn-info d-inline-flex justify-content-start align-items-center gap-2 w-100 rounded-0 mb-3" id="buttons" onClick={() => sortByLatest()}>                               
                                <h5> <i className="bi bi-clock fs-2"> </i> Latest </h5>
                            </button>
                            <button className="btn btn-info d-inline-flex justify-content-start align-items-center gap-2 w-100 rounded-0 mb-3" id="buttons" onClick={() => sortByEarliest()}>                               
                                <h5> <i className="bi bi-clock fs-2"> </i> Earliest </h5>
                            </button>
                            <button className="btn btn-info d-inline-flex justify-content-start align-items-center w-100 rounded-0" id="search-bar-toggle" data-bs-toggle="collapse" data-bs-target="#search-bar" aria-expanded="false" aria-controls="search-bar">                                
                                <h5> <i className="bi bi-newspaper fs-2"></i> Subject </h5>
                            </button>
                            <div className="collapse" id="search-bar">
                                <label htmlFor="subject-input"> Subject </label>
                                <input className="form-control" name="subject-input" type="text" value={searchInput} onChange={(e) => handleSearchInput(e.target.value)} />
                                <button className="btn btn-info d-block w-100" onClick={handleFilterBySubject}> Search </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col h-100 w-100">
                    <div className="research-list">
                        <div className="pub-title"> <h3> More research </h3></div>
                        <div className="filter-container">
                            <a href="https://scholar.google.com/citations?user=SpLyrvoAAAAJ&hl=es">
                                <button id="buttons" className="btn btn-info d-inline-flex flex-sm-row flex-column align-items-center gap-2 w-100 text-white mb-3 rounded-0">
                                    <img src="Google_Scholar_logo.svg" alt="RG logo" width="50px" height="50px" />
                                    <h5> Google Scholar </h5>
                                </button>
                            </a>
                            <a href="https://orcid.org/0000-0003-3437-6308" >
                                <button id="buttons" className="btn btn-info d-inline-flex flex-sm-row flex-column align-items-center gap-2 w-100 text-white mb-3 rounded-0" >
                                    <img src="orcid_logo.svg" alt="RG logo" width="50px" height="50px" />
                                    <h5> ORCID </h5>
                                </button>
                            </a>
                            <a href="https://www.researchgate.net/profile/Marco-Giraldo">
                            <button id="buttons" className="btn btn-info d-inline-flex flex-sm-row flex-column align-items-center gap-2 w-100 text-white rounded-0" >
                                    <img src="researchgate.svg" alt="RG logo" width="40px" height="40px" />
                                    <h5> ResearchGate </h5>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResearchSortCol