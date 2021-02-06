System.register([], function (exports_1, context_1) {
    "use strict";
    var TodoState;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (TodoState) {
                TodoState[TodoState["New"] = 1] = "New";
                TodoState[TodoState["Active"] = 2] = "Active";
                TodoState[TodoState["Complete"] = 3] = "Complete";
                TodoState[TodoState["Deleted"] = 4] = "Deleted";
            })(TodoState || (TodoState = {}));
            exports_1("TodoState", TodoState);
        }
    };
});
