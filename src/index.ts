import { Todo } from "./types"

const todos: Todo[] = [
    {
        id: 1,
        title: "TypeScript",
        completed: true
    },

    {
        id: 2,
        title: "Studiare Typescript",
        completed: false,
    },
    {
        id: 3,
        title: "Fare il progetto finale",
        completed: false,
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
        todo.userId = userId
        return `Il Todo con ID ${todoId} è stato assegnato all'utente con ID ${userId}`
    }
}

addTodo("Studiare Typescript")
addTodo("Fare il progetto finale")

console.log(assignTodoToUser(2, 15))
console.log(assignTodoToUser(3, 27))


function getUserTodos(userId: number ) {
    return todos.filter(todo => todo.userId === userId);
}


console.log(getUserTodos(15))
console.log(getUserTodos(27))
console.log(getUserTodos(100))
