System.register([], function (exports_1, context_1) {
    "use strict";
    var _lastId, TodoService;
    var __moduleName = context_1 && context_1.id;
    function generateTodoId() {
        return _lastId += 1;
    }
    return {
        setters: [],
        execute: function () {
            _lastId = 0;
            TodoService = /** @class */ (function () {
                function TodoService(todos) {
                    this.todos = todos;
                }
                TodoService.prototype.add = function (todo) {
                    todo.id = generateTodoId();
                    this.todos.push(todo);
                    return todo;
                };
                TodoService.prototype.delete = function (todoId) {
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
            exports_1("TodoService", TodoService);
        }
    };
});
