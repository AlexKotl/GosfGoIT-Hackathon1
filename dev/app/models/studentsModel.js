
export default class Students {
    
    constructor(c) {
        this.config = c;
        this.url = this.config.requestUrl();
    }

    getAll() {
        return fetch(this.url)
            .then(r => r.json())
            .catch(alert);

    }

    getById(id) {
        return fetch(this.url + id)
            .then(r => r.json())
            .catch(alert)
    }

}