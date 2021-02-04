interface Todo {
  name: string;
  state: TodoState;
}
enum TodoState {
  New,
  Active,
  Complete,
  Delete,
}

// var todo = {
//   name: "Bank",
//   get state() {
//     return this._state;
//   },
//   set state(newState) {

//     if(newState==TodoState.Complete)
//     {
//       var canBeComplete =
//       this.state==TodoState.Active || this.state==TodoState.Delete;
//       if(!canBeComplete)
//       {
//         throw "Todo must be active or Deleted in ....";
//       }
//     }

//     this._state = newState;
//   },
// };
// todo.state = TodoState.New;
// console.log(todo.state);

class SmartTodo {
  name: string;
  _state: TodoState;
  constructor(name: string) {
    this.name = name;
  }

  get state() {
    return this._state;
  }
  set state(newState) {
    if (newState == TodoState.Complete) {
      var canBeComplete =
        this.state == TodoState.Active || this.state == TodoState.Delete;
      if (!canBeComplete) {
        throw "Todo must be active or Deleted in ....";
      }
    }

    this._state = newState;
  }
}

var todo = new SmartTodo("Bank");
todo.state=TodoState.Complete;
var st = todo.state;