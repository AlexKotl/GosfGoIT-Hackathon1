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

            let td = document.createElement('td');

            let a = document.createElement("a");
            a.innerHTML = "Edit";
            a.setAttribute("data-id", obj.id);

            td.appendChild(a);
            tr.appendChild(td);

            document.getElementById('content').appendChild(tr);

            // attach events
            a.addEventListener("click", function(e) {
                //alert('Element: ' + e.target.dataset.id);
                //console.log(app);
                console.log('event from view');
                let event = new Event('onEditStudent');
                e.target.dispatchEvent(event)
            });

        }



    }
}