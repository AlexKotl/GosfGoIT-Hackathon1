import config from "../config/studentsAPI";
import Students from "../models/studentsModel";
import listView from "../views/students/listView"
import editView from "../views/students/editView"

export default class studentsController {
    constructor() {
        this.model = new Students(config);
    }

    showList() {
        const showStudents = data => {
            this.view = new listView(data, 'content');
            this.view.render();

            let ahrefs = document.getElementsByTagName("a");

            for (var i=0; i<ahrefs.length; i++) {
                ahrefs[i].addEventListener('onEditStudent', this.showEditForm.bind(this), this)
            };
        }
        
        this.model.getAll().then(showStudents);
    }

    showEditForm(el) {
        const showForm = data => {
            let view = new editView(data, 'content');
            view.render();

            document.getElementById('showIndex').addEventListener('onShowIndex', this.showList.bind(this), this);
        }

        this.model.getById(el.target.getAttribute('data-id')).then(showForm);
    }
};

