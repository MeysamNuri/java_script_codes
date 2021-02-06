System.register(["./model", "./DataAccess"], function (exports_1, context_1) {
    "use strict";
    var model_1, DataAccess_1, service, task, task2, todos;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (model_1_1) {
                model_1 = model_1_1;
            },
            function (DataAccess_1_1) {
                DataAccess_1 = DataAccess_1_1;
            }
        ],
        execute: function () {
            service = new DataAccess_1.TodoService([]);
            task = {
                id: 5,
                name: 'Task 1',
                state: model_1.TodoState.New
            };
            task2 = {
                id: 6,
                name: 'Task 6',
                state: model_1.TodoState.Complete
            };
            service.add(task);
            service.add(task2);
            todos = service.getAll();
            todos.forEach(function (todo) {
                console.log(todo.name + " [" + model_1.TodoState[todo.state] + "]");
            });
        }
    };
});
