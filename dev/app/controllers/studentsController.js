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
        }
        
        this.model.getAll().then(showStudents).then(() => {
            document.getElementById("list")
                .addEventListener('click', this.showEditForm.bind(this), this);
        });
    }

    showEditForm(el) {
        //console.log(el)
        const showForm = data => {
            let view = new editView(data, 'content');
            view.render();

            // attach events
            let inputs = document.getElementsByClassName("editable");
            for (let i=0; i<inputs.length; i++) {
                inputs[i].addEventListener("keyup", this.updateStudentState.bind(this), this);
            }

            this.studentState = {};
            this.currentStudent = data.id;
        }

        this.model.getById(el.path[1].dataset.id).then(showForm);
    }

    updateStudentState(event) {
        this.studentState[event.target.name] = event.target.value;
        
        this.model.updateStudent(this.currentStudent, this.studentState).then(data => {
            console.log(data);
        });

    }


};

