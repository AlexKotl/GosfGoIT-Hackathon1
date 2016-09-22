
export default class Students {


    constructor(c) {
        this.config = c; 
    }

    getAll() {
        
        console.log("Getting...");
        let promise = fetch(this.config.requestUrl()  + "/api/students")
            .then(function(response) {
                return response.json();
            }).then(function(data) {
                return data;
            }).catch(alert);

        return promise;

    }

    getById(id) {
        return fetch(this.config.requestUrl() + "/api/students/" + id)
            .then(r => r.json())
            .catch(alert)
    }

}