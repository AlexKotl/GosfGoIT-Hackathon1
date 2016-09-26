import config from "../config/studentsAPI";
import Students from "../models/studentsModel";
import listView from "../views/students/listView"
import editView from "../views/students/editView"

export default class studentsController {
    constructor() {
        this.model = new Students(config);
    }

    showList() {
        const wrap = '';

        const showStudents = data => {
            this.view = new listView(data, 'content');
            this.view.render();
        }
        
        this.model.getAll().then(showStudents).then(() => {
            document.getElementById("content")
                .addEventListener('click', this.showEditForm.bind(this), this);
        });
    }

    showEditForm(el) {
        console.log(el)
        const showForm = data => {
            let view = new editView(data, 'content');
            view.render();

            document.getElementById('showIndex').addEventListener('onShowIndex', this.showList.bind(this), this);
        }

        this.model.getById(el.target.dataset.id).then(showForm);
    }
};

