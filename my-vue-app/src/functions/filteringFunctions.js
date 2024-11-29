export function sortByLatest(publications){
     try{
        const sortedPublicationsList = [...publications].sort((a, b) => {
            if (b.publication_year !== a.publication_year) {
                return b.publication_year - a.publication_year;
            }
            const dateA = new Date(a.publication_date + " " + a.publication_year);
            const dateB = new Date(b.publication_date + " " + b.publication_year);
            return dateB - dateA;
        });
        return sortedPublicationsList;
     }catch(e){

     }
}

export function searchBySubject(publications, subject){
     try{
        const researchListBySubject = publications.filter((val) =>
            val.abstract.includes(subject) || val.publication_title.includes(subject)
        );
        return researchListBySubject;
     }catch(e){

     }
}