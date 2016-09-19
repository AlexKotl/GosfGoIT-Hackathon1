export default class listView {
    constructor(data, target) {
        this.data = data;
        this.target = target;
    }
    
    render() {
        for (let obj of this.data) {
            let tr = document.createElement('tr');
            for (let field of ['firstName', 'lastName', 'mark1']) {
                let td = document.createElement('td');
                td.innerHTML = obj[field];
                tr.appendChild(td);
            }
            document.getElementById('content').appendChild(tr);
        }


    }
}