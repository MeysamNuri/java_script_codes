"use strict";
exports.__esModule = true;
var _lastId = 0;
function generateTodoId() {
    return _lastId += 1;
}
var TodoService = /** @class */ (function () {
    function TodoService(todos) {
        this.todos = todos;
    }
    TodoService.prototype.add = function (todo) {
        todo.id = generateTodoId();
        this.todos.push(todo);
        return todo;
    };
    TodoService.prototype["delete"] = function (todoId) {
        var toDelete = this.getbyId(todoId);
        var deletedindex = this.todos.indexOf(toDelete);
        this.todos.splice(deletedindex, 1);
    };
    TodoService.prototype.getAll = function () {
        return this.todos;
    };
    TodoService.prototype.getbyId = function (todoId) {
        var filter = this.todos.filter(function (x) { return x.id == todoId; });
        if (filter.length) {
            return filter[0];
        }
        return null;
    };
    return TodoService;
}());
