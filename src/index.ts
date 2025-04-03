import { Todo } from "./types"
import { TodoWithMetadata } from "./types";
import {User} from  "./types"
import { Project } from "./types";



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

function addTodo(titleinput: string, metadata?: string | object) {
    const newTodo: Todo = {
        id: idCounter,
        title: titleinput,
        completed: false,
        metadata: metadata
    }

    idCounter++;

    todos.push(newTodo)
    // return newTodo;
}


addTodo("Studiare Typescript", "metadata come stringa")
addTodo("Fare il progetto finale", { nome: "metadata come oggetto" })

addTodo("Studiare Typescript")
console.log(todos)


function assignTodoToUser(todoId: number, userId: number) {
    const todo = todos.find(todo => todo.id === todoId)

    if (todo) {
        todo.userId = userId
        return `Il Todo con ID ${todoId} è stato assegnato all'utente con ID ${userId}`
    }
}

addTodo("Studiare Typescript")
addTodo("Fare il progetto finale")

console.log(assignTodoToUser(2, 15))
console.log(assignTodoToUser(3, 27))


function getUserTodos(userId: number) {
    return todos.filter(todo => todo.userId === userId);
}


console.log(getUserTodos(15))
console.log(getUserTodos(27))
console.log(getUserTodos(100))

function error(message: string): never {
    throw new Error(message)
}

try {
    error("Errore")
} catch (e) {
    console.error("Gestione del errore", e)
}


function parseInput(input: unknown): string {
    if (typeof input === "string") {
        return input
    } else if (typeof input === "number") {
        return input.toString()
    } else {
        error("Tipo di input non valido, deve essere una stringa o un numero")
    }
}

try {
    console.log(parseInput("Ciao"))
    console.log(parseInput(123))
} catch (err) {
    console.error("Errore:", err);
}

function updateTodo(todoId: number, updates: Partial<Todo>) {
    const todo = todos.find(t => t.id === todoId)
    if (todo) {
        Object.assign(todo, updates);
        return todo
    }


}

const updatedTodo = updateTodo(4, { completed: false, title: "UpdateTodo" })
console.log(updatedTodo)


function getTodoSummary(todo: Todo): [string, boolean] {
    return [todo.title, todo.completed];
}

const todo = todos[2]
const summary = getTodoSummary(todo)

console.log(summary)

let projectIdCounter = 1 
let userIdCounter = 1    
let todoIdCounter = 1    

function createProject(name: string, usersData: { name: string; todos: string[] }[]): Project {
    const users: User[] = usersData.map(userData => {
       
        const todos: Todo[] = userData.todos.map(title => ({
            id: todoIdCounter++,
            title: title,
            completed: false
        }))

    
        return {
            id: userIdCounter++,  
            name: userData.name,
            todos: todos
        }
    })

  
    const allTodos: Todo[] = users.flatMap(user => user.todos)

   
    const project: Project = {
        id: projectIdCounter++,  
        name: name,
        users: users,
        todos: allTodos
    };

    return project
}


const usersData = [
    { name: 'Nicholas', todos: ['Correre', 'Studiare'] },
    { name: 'Maria', todos: ['Fare sport', 'Leggere'] },
]

const newProject = createProject('Progetto Semplice', usersData)


console.log(newProject)
