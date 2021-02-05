namespace TodoApp.Model {
  export interface Todo {
    id: number;
    name: string;
    state: TodoState;
  }
}

namespace TodoApp.Model {
  export enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted,
  }
}

namespace DataAccess {

  import Model = TodoApp.Model;
  import Todo = Model.Todo;

  import Todo2=TodoApp.Model.Todo;

  interface ITodoService {
    add(todo: Todo): Todo;
    delete(todoId: number): void;
    getAll(): Todo[];
    getbyId(todoId: number): Todo;
  }
}

namespace Madaeny {
  export enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted,
  }
  export interface Todo {
    id: number;
    name: string;
    state: TodoState;
  }
}
