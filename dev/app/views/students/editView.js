export default class editView {
    constructor(data, target) {
        this.data = data
        this.target = target
    }
    
    render() {
        document.getElementById(this.target).innerHTML = `
            <tr>
                <td>ID:</td>
                <td>${this.data.id} <small>Cannot be edited</small></td>
            </tr>
            <tr>
                <td>First Name:</td>
                <td><input type="text" value="${this.data.firstName}" class="mdl-textfield__input"></td>
            </tr>
            <tr>
                <td>Last Name:</td>
                <td><input type="text" value="${this.data.lastName}" class="mdl-textfield__input"></td>
            </tr>
            <tr>
                <td>Phone:</td>
                <td><input type="text" value="${this.data.tel}" class="mdl-textfield__input"></td>
            </tr>
            <tr>
                <td colspan="2">
                <button id="showIndex" class="mdl-button mdl-js-button mdl-button--primary">
                    Cancel
                </button>
                    <input type="submit" value="Save" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"> 
                </td>
            </tr>
        `;

        // attach events
        document.getElementById("showIndex").addEventListener("click", function(e) {
            let event = new Event('onShowIndex');
            e.target.dispatchEvent(event);
        });
    }
}