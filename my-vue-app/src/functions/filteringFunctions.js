export function sortByLatest(publications) {
    try {
        const sortedPublicationsList = [...publications].sort((a, b) => {
            if (b.publicationDate.year?.value !== a.publicationDate.year?.value) {
                return (b.publicationDate.year?.value || 1970) - (a.publicationDate.year?.value || 1970);
            }
            const dateA = new Date(
                `${a.publicationDate.year?.value || 1970}-${a.publicationDate.month?.value || 1}-${a.publicationDate.day?.value || 1}`
            );
            const dateB = new Date(
                `${b.publicationDate.year?.value || 1970}-${b.publicationDate.month?.value || 1}-${b.publicationDate.day?.value || 1}`
            );
            return dateB - dateA;
        });
        return sortedPublicationsList;
    } catch (err) {
        console.error("Unable to sort by latest date. Error: ", err);
    }
}

export function sortByEarliest(publications) {
    try {
        const sortedPublicationsList = [...publications].sort((a, b) => {
            if (a.publicationDate.year?.value !== b.publicationDate.year?.value) {
                return (a.publicationDate.year?.value || 1970) - (b.publicationDate.year?.value || 1970);
            }
            const dateA = new Date(
                `${a.publicationDate.year?.value || 1970}-${a.publicationDate.month?.value || 1}-${a.publicationDate.day?.value || 1}`
            );
            const dateB = new Date(
                `${b.publicationDate.year?.value || 1970}-${b.publicationDate.month?.value || 1}-${b.publicationDate.day?.value || 1}`
            );
            return dateA - dateB;
        });
        return sortedPublicationsList;
    } catch (err) {
        console.error("Unable to sort by earliest date. Error: ", err);
    }
}

export function searchBySubject(publications, subject){
     try{
        const researchListBySubject = publications.filter((val) =>
            val.title?.includes(subject)
        );
        console.log(researchListBySubject)
        return researchListBySubject;
     }catch(err){

     }
}