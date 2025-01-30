
let instance = null;
class OrcIDAPI{
     constructor(apiLink){
        if(!instance){
          this.apiLink = apiLink;
          this.header = "application/json"
          instance = this;
        }
        return instance;
     }
     async getAllPublications(){
          try{
               const response = await fetch(this.apiLink, {
                    headers: {
                         "Content-Type": this.header,
                    }
               })
               .then(data => data.json())
               .catch(e => console.error(e))
               return response;
          }catch(e){
               console.error("Could not retrieve data. ERROR: ", e)
          }         
     }
     async getPublicationById(pubId){
          try{
               const response = await fetch(this.apiLink+`/${pubId}`,
                    {
                         headers: {
                              "Content-Type" : this.header,
                         }
                    }
               )
               .then(data => data.json())
               .then(result => result["bulk"][0]["work"])
               .catch(e => console.error(e));
               if (response && response["short-description"]) {
                    response.description = response["short-description"];
                  }
               return response; 
          }catch(e){
               console.error("Could not retrieve data. ERROR: ", e)
          }      
     }
    
}

const orcidAPI = new OrcIDAPI("https://pub.orcid.org/v3.0/0000-0003-3437-6308/works");

export default orcidAPI;