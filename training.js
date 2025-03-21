// function abac(nameUser){
//     if(typeof nameUser === 'string'){
//         return 0
//     }
//         return 1
// }
// const result = abac('Max')
// console.log(result)

// const nums = [1,2,3,4,5,6,7]
// const result1 = nums.map((num) => num * 2)
// console.log(result1)
// const result2 = result1.filter((num) => num % 2 === 0)
// console.log(result2)
// console.log(result2.some((num) => num > 8))
// console.log(result2.every((num) => num > 8))
// const result3 = result2.reduce((acc, num) => acc + num, 0)
// console.log(result3)

// Дан массив чисел. Используя map и filter, получи новый массив, в котором:
// Все числа умножены на 2.
// Оставлены только числа, которые больше 10.

const numbers = [1, 2, 3, 4, 5, 6, 7]
const res = numbers.map((num) => num * 2)
  .filter((num) => num > 10)
console.log(res)

// Задание:
// Дан массив чисел. Используя filter и reduce, посчитай сумму всех четных чисел.

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8]
const res2 = numbers2.filter((num2) => num2 % 2 === 0)
  .reduce((sum, num2) => sum + num2)
console.log(res2);

// Задание:
// Дан массив чисел. Используя some, проверь, есть ли в массиве хотя бы одно отрицательное число.
const numbers3 = [1, 3, 4, -6, 7, -8]
console.log(numbers3.some((num) => num < 0))

// Дан массив чисел. Используя every, проверь, являются ли все числа положительными.

const numbers4 = [1, 3, 4, -6, 7, -8]
console.log(numbers4.every((num) => num < 0))

// Задание:
// Дан массив имен. Используя sort, отсортируй их в алфавитном порядке.

const names = ["Андрей", "Виктор", "Екатерина", "Борис"];
names.sort()
console.log(names)

// Дан массив объектов с пользователями. Используя map, создай новый массив, содержащий только имена пользователей.
const users = [
  { id: 1, name: "Андрей", age: 25 },
  { id: 2, name: "Виктория", age: 30 },
  { id: 3, name: "Екатерина", age: 22 }
];
const usersName = users.map((user) => user.name)
console.log(usersName)

//   Задание:
// Дан массив товаров с ценами. Используя reduce, вычисли среднюю стоимость товара.

const products = [
  { name: "Телефон", price: 20000 },
  { name: "Ноутбук", price: 50000 },
  { name: "Планшет", price: 30000 }
];
const sumPrice = products.reduce((sum, products) => sum + products.price, 0)
console.log(sumPrice)
const averagePrice = sumPrice / products.length
console.log(`Средняя стоимость продуктов: ${averagePrice}`)

// Задание:
// Дан массив объектов с пользователями. Используя filter, получи массив только тех пользователей, которым больше 18 лет.
const users2 = [
  { name: "Алексей", age: 18 },
  { name: "Мария", age: 20 },
  { name: "Ольга", age: 15 },
  { name: "Иван", age: 22 }
];
const userAdult = users2.filter((user) => user.age >= 18)
console.log(userAdult)

// Дан массив имен. Используя forEach, выведи каждое имя в консоль.

const names5 = ["Андрей", "Виктор", "Екатерина"];
names5.sort((a, b) => b.localeCompare(a))
  .forEach((name) => console.log(name))

// Дан массив пользователей. Найдите всех пользователей старше 18 лет, которые интересуются "спортом".

const users5 = [
  { name: "Олег", age: 22, hobbies: ["спорт", "музыка"] },
  { name: "Анна", age: 17, hobbies: ["чтение", "рисование"] },
  { name: "Игорь", age: 30, hobbies: ["спорт", "шахматы"] },
  { name: "Света", age: 25, hobbies: ["танцы", "спорт"] },
  { name: "Максим", age: 16, hobbies: ["кино", "игры"] }
];

const userSport = users5.filter((user) => user.age > 18 && user.hobbies.some((hobby) => hobby === "спорт"))
console.log(userSport)

// Дан массив товаров с ценами и количеством. Найдите общую стоимость всех товаров и создайте новый массив, где указывается цена за штуку.

const products2 = [
  { name: "Яблоки", price: 100, quantity: 2 },
  { name: "Бананы", price: 150, quantity: 1 },
  { name: "Груши", price: 200, quantity: 3 }
];

const sumProducts = products2.reduce((sum, product) => sum + (product.price * product.quantity), 0)
console.log(sumProducts)
const priceByOne = products2.map((product) => product.price / product.quantity)
console.log(priceByOne)

// Дан массив оценок студентов.

// Проверьте, все ли студенты сдали экзамен (оценка 3 и выше).
// Есть ли хотя бы один студент с отличной оценкой (5)?

const grades = [4, 5, 3, 2, 5, 4];

const allPassed = grades.every((grade) => grade >= 3)
console.log(allPassed)
const hasExcellent = grades.some((grade) => grade === 5)
console.log(hasExcellent)

// Дан массив чисел с повторяющимися значениями. Оставьте только уникальные числа.

const numbers5 = [1, 2, 3, 4, 2, 5, 1, 6, 3, 7];
const uniqueNumbers = numbers5.filter((num, index, arr) => arr.indexOf(num) === index)
console.log(uniqueNumbers)

// Дан массив товаров с категориями. Группируйте товары по категориям.

const items = [
  { name: "Футболка", category: "Одежда" },
  { name: "Джинсы", category: "Одежда" },
  { name: "Телефон", category: "Электроника" },
  { name: "Ноутбук", category: "Электроника" },
  { name: "Шапка", category: "Одежда" }
];

const groupItems = items.reduce((acc, item) => {
  acc[item.category] = acc[item.category] || [];
  acc[item.category].push(item.name);
  return acc
}, {})

console.log(groupItems)

// Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.
const numsA = [1, 4, 5, 16, 36, 45]
const numsB = numsA.filter((num) => num % 2 === 0)
  .reduce((acc, num) => acc + Math.sqrt(num), 0)
console.log(numsB)

// Написать функцию, которая принимает два числа и возращает результат их умножения

function multiply(a, b) {
  return a * b
}

console.log(multiply(5, 4))

// Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17 лет" 
// (только здесь данные, которые были переданы в функцию)

function userInfo(firstName, lastName, age) {
  console.log(`Привет ${firstName} ${lastName} с возрастом ${age} лет`)
}
userInfo("Max", "Kirichko", 29)

// Написать функцию, которая принимает пол человека ('M','F') в виде строки, результат функции возвращает строку "Ваш пол мужской" (или женский) 
// или же "Ваш пол не опеределен"

function userMale(male) {
  if (male === 'M') {
    console.log('Ваш пол мужской')
  }
  else if (male === 'F') {
    console.log('Ваш пол женский')
  }
  else {
    console.log('Ваш пол не определен')
  }
}

userMale('5')

// Сделайте функцию, которая принимает параметром число от 1 до 7, 
// а возвращает день недели на русском языке.

function dayOfWeek(num) {
  const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
  return num >= 1 && num <= 7 ? days[num - 1] : "Некорректный ввод";
}
console.log(dayOfWeek(1))
console.log(dayOfWeek(9))

// Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости от времени суток 
// (Доброе утро\день\вечер\ночи Иван)

function greetUser(name) {
  const hour = new Date().getHours();
  let greeting;
  if (hour >= 5 && hour <= 12) {
    greeting = 'Доброе утро!'
  }
  else if (hour >= 13 && hour <= 18) {
    greeting = 'Добрый день!'
  }
  else if (hour >= 19 && hour <= 24) {
    greeting = 'Добрый день!'
  }
  else {
    greeting = 'Доброй ночи!'
  }
  return `${greeting} ${name}`

}

console.log(greetUser("Иван"))

// Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние возраста 
// (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый). Например. 33 - зрелый

function getCategory(age) {
  if (age >= 1 && age <= 17) {
    return 'ребенок'
  }
  else if (age >= 18 && age <= 30) {
    return 'молодой'
  }
  else if (age >= 31 && age <= 55) {
    return 'зрелый'
  }
  else {
    return 'старый'
  }
}

function printAge() {
  for (let i = 1; i <= 100; i++) {
    console.log(`${i} - ${getCategory(i)}`)

  }
}

printAge()

// Создай новую функцию, в которую передаешь имя и возраст человека и получаешь сообщение (Иван имеет возраст 44 и он зрелый). 
// А также вызови внутри своей функции, функцию из прошлого задания

function infUser(name, age) {
  return `${name} имеет возраст ${age} и он ${getCategory(age)}`
}

console.log(infUser('Max', 3))

// Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну, если все элементы четные, 
// если бы хотя бы один элемент не четный, то false.

function isEven(array) {
  return array.every((num) => num % 2 === 0)
}
const nums3 = [2, 4, 6, 8]
console.log(isEven(nums3))

// Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну, 
// если хотя бы один элемент нечетный, если все четные, то false.

function isNotEven(array) {
  return array.some((num) => num % 2 !== 0)
}
const nums4 = [1, 2, 4, 6, 8]
console.log(isNotEven(nums4))

// Сделай функцию, которая принимает массив любых целых чисел, которая возращает новый массив, 
// где все элементы кратны пяти. ([1,2,5,12,15,21] вернет [5,15])

function isFive(array) {
  return array.filter((num) => num % 5 === 0)
}

const nums5 = [1, 2, 5, 12, 15, 21];
console.log(isFive(nums5))

// Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] и функция возращает среднее арифметическое, 
// (округлить результат до десятых)

function average(array) {
  return (array.reduce((acc, num) => (acc + num), 0) / array.length).toFixed(1)
}
const nums6 = [1.5, 2.8, 3.4, 4.8, 5, 6, 7, 8, 17, 142]
console.log(average(nums6))

// Написать функцию, которая принимает массив чисел, например [1,2,3,4,5], и переносит первый элемент массива в конец 
// (например можно засунуть первый элемент в конец, затем удалить первый элемент), попробуй несколькими способами сделать, если догадаешься

function moveFirstToLast(array){
  if(array.length === 0) return array;
  array.push(array.shift());
  return array;
}
let nums7 =  [1,2,3,4,5]
console.log(moveFirstToLast(nums7))

// Написать функцию, которая принимает массив сотрудников, каждый сотрудник имеет имя и возраст ([{name: 'Иван', age: 23},...]) и возвращает массим, 
// где каждый элемент представляет из себя строку "Имя: Иван, возвраст: 23"

function formatEmployees(employees){
  return employees.map((employee) => `Имя: ${employee.name}, возраст: ${employee.age}`)
}

const employees = [
  { name: 'Иван', age: 23 },
  { name: 'Мария', age: 30 },
  { name: 'Алексей', age: 27 }
]

console.log(formatEmployees(employees))

// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  let sum = Object.values(salaries).reduce((acc, salary) => acc+salary, 0)

  console.log(sum)

  // Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

  

  function multiplyNumeric(obj){
    for(let key in obj){
      if (typeof obj[key] === 'number'){
        obj[key] *= 2;
      }
    }
    return obj
  }
  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  // multiplyNumeric(menu)
  console.log(multiplyNumeric(menu))

