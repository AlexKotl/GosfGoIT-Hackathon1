import {one, two} from './model/nums';
import studentsController from './controllers/studentsController';

let students = new studentsController();
var app = {
    students: students
}
app.students.showList();

//document.write(`Сумма импортов: ${one + two}`);