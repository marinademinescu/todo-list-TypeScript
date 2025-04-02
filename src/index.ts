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


function assignTodoToUser(todoId: number, userId: number) {
    const todo = todos.find(todo => todo.id === todoId)

    if(todo){
        todo.userId
        return `Il Todo con ID ${todoId} è stato assegnato all'utente con ID ${userId}`
    }
}

addTodo("Studiare Typescript")
addTodo("Fare il progetto finale")

console.log(assignTodoToUser(1, 15))
console.log(assignTodoToUser(2, 27))


