import orcidAPI from '../api/api.js';
const fetchAllPublications = async () =>{
    try {
        const data = await orcidAPI.getAllPublications();
        if (data && data.group) {
            const formattedPublications = data.group.map((item) => ({
                title: item["work-summary"][0]["title"]["title"]["value"],
                type: item["work-summary"][0]["type"],
                publicationDate: item["work-summary"][0]["publication-date"],
                publicationUrl: item["work-summary"][0]["url"],
                journalTitle: item["work-summary"][0]["journal-title"],
            }));
            return formattedPublications;
        }
    } catch (err) {
         console.log("Could not retrieve papers. Error: ", err);
    } 
}

export default fetchAllPublications;