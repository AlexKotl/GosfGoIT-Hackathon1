export default class editView {
    constructor(data, target) {
        this.data = data
        this.target = target
    }
    
    render() {
        document.getElementById(this.target).innerHTML = `
            <table id="edit" class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
                <tr>
                    <td>ID:</td>
                    <td>${this.data.id} <small>Cannot be edited</small></td>
                </tr>
                <tr>
                    <td>First Name:</td>
                    <td><input type="text" name="firstName" value="${this.data.firstName}" class="mdl-textfield__input editable"></td>
                </tr>
                <tr>
                    <td>Last Name:</td>
                    <td><input type="text" name="lastName" value="${this.data.lastName}" class="mdl-textfield__input editable"></td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td><input type="text" name="tel" value="${this.data.tel}" class="mdl-textfield__input editable"></td>
                </tr>
                <tr>
                    <td colspan="2">
                        This form is using modern autosave feature.
                    </td>
                </tr>
            </table>
        `;

    }
}