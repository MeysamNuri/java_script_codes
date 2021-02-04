var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 0] = "New";
    TodoState[TodoState["Active"] = 1] = "Active";
    TodoState[TodoState["Complete"] = 2] = "Complete";
    TodoState[TodoState["Delete"] = 3] = "Delete";
})(TodoState || (TodoState = {}));
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
var SmartTodo = /** @class */ (function () {
    function SmartTodo(name) {
        this.name = name;
    }
    Object.defineProperty(SmartTodo.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (newState) {
            if (newState == TodoState.Complete) {
                var canBeComplete = this.state == TodoState.Active || this.state == TodoState.Delete;
                if (!canBeComplete) {
                    throw "Todo must be active or Deleted in ....";
                }
            }
            this._state = newState;
        },
        enumerable: true,
        configurable: true
    });
    return SmartTodo;
}());
var todo = new SmartTodo("Bank");
