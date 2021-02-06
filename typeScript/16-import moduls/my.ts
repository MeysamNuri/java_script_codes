import {Todo as TodoTask, TodoState} from './model';
import {TodoService} from './DataAccess';

let service = new TodoService([]);

var task: TodoTask = {
    id:5,
    name:'Task 1',
    state:TodoState.New
}

var task2: TodoTask = {
    id:6,
    name:'Task 6',
    state:TodoState.Complete
}

service.add(task);
service.add(task2);

let todos = service.getAll();

todos.forEach(todo => {
console.log(`${todo.name} [${TodoState[todo.state]}]`);

});


