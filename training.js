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

const numbers = [1,2,3,4,5,6,7]
const res = numbers.map((num) => num * 2)
.filter((num) => num > 10)
console.log(res)

// Задание:
// Дан массив чисел. Используя filter и reduce, посчитай сумму всех четных чисел.

const numbers2 = [1,2,3,4,5,6,7,8]
const res2 = numbers2.filter((num2) => num2 % 2 === 0)
.reduce((sum, num2) => sum + num2)
console.log(res2);

// Задание:
// Дан массив чисел. Используя some, проверь, есть ли в массиве хотя бы одно отрицательное число.
const numbers3 = [1,3,4,-6,7,-8]
console.log(numbers3.some((num) => num < 0))

// Дан массив чисел. Используя every, проверь, являются ли все числа положительными.

const numbers4 = [1,3,4,-6,7,-8]
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
names5.sort((a,b) => b.localeCompare(a))
.forEach((name) => console.log(name))