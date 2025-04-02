import { Todo } from "./types"

const todos: Todo[] = [
    {
        id: 1,
        title: "TypeScript",
        completed: true
    }
];

let idCounter = todos.length + 1;

function addTodo( titleinput: string ) {
    const newTodo: Todo = {
        id: idCounter,
        title: titleinput,
        completed: false
    }

    idCounter++;

    todos.push(newTodo)
   // return newTodo;
}


// console.log(addTodo("Studiare Typescript"));
// console.log(addTodo("Fare il progetto finale"));

addTodo("Studiare Typescript")
console.log(todos)



