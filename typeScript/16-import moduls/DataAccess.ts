    import Model = require("./model");
    import Todo = Model.Todo;
    
    let _lastId: number = 0;
    function generateTodoId(){
        return _lastId+=1;
    }


   export interface ITodoService {
      add(todo: Todo): Todo;
      delete(todoId: number): void;
      getAll(): Todo[];
      getbyId(todoId: number): Todo;
    }

    

export class TodoService implements ITodoService {
   
  
    constructor(private todos: Todo[]) {}
  

    add(todo: Todo): Todo {
      todo.id = generateTodoId();
      this.todos.push(todo);
      return todo;
    }
    delete(todoId: number) {
      var toDelete = this.getbyId(todoId);
      var deletedindex = this.todos.indexOf(toDelete);
      this.todos.splice(deletedindex, 1);
    }
     getAll() {
      return this.todos;
    }
  
    getbyId(todoId: number): Todo {
      var filter = this.todos.filter(x => x.id == todoId);
      if (filter.length) {
        return filter[0];
      }
      return null;
    }
  }
  