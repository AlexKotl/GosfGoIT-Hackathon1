
export default class Students {


    constructor(c) {
        this.config = c; 
    }

    getAll() {
        
        console.log("Getting...");
        let promise = fetch("http://" + this.config.url + ":" + this.config.port  + "/api/students")
            .then(function(response) {
                return response.json();
            }).then(function(data) {
                return data;
            }).catch(alert);

        return promise;

    }

}