// Метод indexOf() используется для поиска первого вхождения элемента в массиве или строке. Он возвращает индекс найденного элемента или -1, если элемент не найден.

// Поиск элемента в массиве

const numbers = [1,2,3,4,5,6]

console.log(numbers.indexOf(4))
console.log(numbers.indexOf(7))

// Поиск символа или подстроки в строке

let text = "Hello, world!"
console.log(text.indexOf("world"))
console.log(text.indexOf("f"))
console.log(text.indexOf("d"))

// Метод find() используется для поиска первого элемента в массиве, который удовлетворяет переданному условию. Если элемент найден, он возвращается. Если нет — возвращается undefined.

// Найти первое отрицательное число в массиве

function firstNegative(arr){
    return arr.find((num) => num < 0)
}
console.log(firstNegative([4,5,6,7,-8]))
console.log(firstNegative([4,5,6,7,8]))

// Найти студента с оценкой выше 90
let students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 88 }
];

function findTopStudent(students){
    return students.find((student) => student.score > 90)
}
console.log(findTopStudent(students))

// Найти пользователя по ID

let users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" }
];

function findUserById(users, id){
    return users.find((user) => user.id === id)
}
console.log(findUserById(users, 2))
console.log(findUserById(users, 5))

// Найти задачу, которая не завершена

let tasks = [
    { title: "Task 1", completed: true },
    { title: "Task 2", completed: false },
    { title: "Task 3", completed: false }
];

function findTaskNotCompleted(tasks){
    return tasks.find((task) => !task.completed)
}
console.log(findTaskNotCompleted(tasks))