// Метод forEach используется для перебора элементов массива. Он выполняет переданную функцию для каждого элемента массива.

const numbers = [1,2,3,4,5]

numbers.forEach((num) => {
    console.log(num * 2)
})

const fruits = ["apple", "banana", "lemone", "juice"]

fruits.forEach((fruit, index) => {
    console.log(`${index + 1}: ${fruit.toLowerCase()}`)
})

const users = [
    { name: "Анна", age: 25 },
    { name: "Борис", age: 30 },
    { name: "Василий", age: 35 },
    { name: "Олег", age: 41}
];

users.forEach((user, index) => user.age += 2);
users.forEach((user, index) => {
    console.log(`${index + 1}: ${user.name}, возраст: ${user.age}`);

});

// Подсчет суммы элементов

const prises = [10,150,20,30, 70];
let total = 0;

prises.forEach((prise) => total += prise)
console.log(total);

// const prises = [10,150,20,30,70]
// let total = 0;

// for(let i = 0; i < prises.length; i++){
//     total += prises[i];
// }
// console.log(total)



