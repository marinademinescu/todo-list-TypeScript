"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todos = [
    {
        id: 1,
        title: "TypeScript",
        completed: true
    }
];
let idCounter = todos.length + 1;
function addTodo(title) {
    const newTodo = {
        id: idCounter,
        title: title,
        completed: false
    };
    idCounter++;
    todos.push(newTodo);
    return newTodo;
}
console.log(addTodo("Studiare Typescript"));
console.log(addTodo("Fare il progetto finale"));
console.log(todos);
//# sourceMappingURL=index.js.map