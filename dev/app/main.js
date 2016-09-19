import {one, two} from './model/nums';
import studentsController from './controllers/studentsController';

let controller = new studentsController();
controller.show();

//document.write(`Сумма импортов: ${one + two}`);