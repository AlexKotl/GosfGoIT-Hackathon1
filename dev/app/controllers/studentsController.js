import config from "../config/studentsAPI";
import Students from "../models/studentsModel";
import listView from "../views/students/listView"

export default class studentsController {
    constructor() {
        this.model = new Students(config);
    }

    show() {
        this.model.getAll().then(data => {
            this.view = new listView(data, 'content');
            this.view.render();
        });

    }
};

