interface IIdGenerator{
  nextId: number;
}

class TodoService implements ITodoService,IIdGenerator {
  private static _lastId: number = 0;

  constructor(private todos: Todo[]) {}

   get nextId() {
    return TodoService.getNextId();
  }

  static getNextId() {
    return (TodoService._lastId += 1);
  }

  add(todo: Todo): Todo {
    todo.id = this.nextId;
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
