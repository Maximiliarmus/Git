// Создай переменные firstName и age.
// Заполни их своим именем и возрастом.
// Выведи их в консоль.

let firstName = "Max"
let age = 29
console.log(firstName)
console.log(age)

// Создай переменные city и country.
// Объедини их в строку "Город: Москва, Страна: Россия".
// Выведи результат в консоль.

let city = "Moscow"
let country = "Russia"
let location = "Город: " + city + ", " + "Страна: " + country
console.log(location)

// Создай две переменные num1 и num2.
// Сложи их и сохрани результат в sum.
// Выведи sum в консоль.

let num1 = 102
let num2 = 204
let sum = num1 + num2
console.log(sum)

// Создай переменную count со значением 5.
// Увеличь её на 3 и сохрани новое значение.
// Выведи count в консоль.

let count = 5
count += 3
count -= 1
console.log(count)

// Создай переменные с разными типами данных: строка, число, булево значение.
// Выведи их тип в консоль с помощью typeof.

let nameStudent = "Иван"
let ageStudent = 30
let isStudent = true
let hobbyStudent = ["basket", "pool", "horsing"]
console.log(typeof nameStudent)
console.log(typeof ageStudent)
console.log(typeof isStudent)
console.log(typeof hobbyStudent)

// Создай строковую переменную "15" и числовую 5.
// Преобразуй строку в число и сложи с 5.
// Выведи результат в консоль.

let numStr = "15"
let num = 5
let res = Number(numStr) + num
console.log(res)
let res2 = String(num) + numStr
console.log(res2)

// Создай переменные name и hobby.
// Выведи строку "Привет, меня зовут Иван, и я люблю играть в футбол." с помощью шаблонных строк (используем обратные ковычки)

let nameHuman = "Коля"
let hobbyHuman = "играть в футбол"
let mes = `Привет, меня зовут ${nameHuman} и я люблю ${hobbyHuman}`
console.log(mes)

// Создай переменные a = 10 и b = 20.
// Поменяй их значения местами без создания третьей переменной.
// Выведи их в консоль.

let a = 10, b = 20;

[a, b] = [b, a]
console.log(a)
console.log(b)

// Создай переменную city и задай ей значение "Москва".
// Затем измени её значение на "Санкт-Петербург".
// Выведи новое значение в консоль.

let town = "Москва"
town = "Санкт-Петербург"
console.log(town)

// Создай переменную person и сделай её объектом с полями:
// name (имя)
// age (возраст)
// city (город)
// Выведи объект в консоль.
// Выведи отдельно name.

let person = {
    namePerson : "Ольга",
    agePerson : 25,
    cityPerson : "Владивосток"
}
console.log(person)
console.log(person.namePerson)

// Создай переменную num и присвой ей число.
// Используй оператор %, чтобы проверить, чётное число или нет.
// Выведи результат в консоль.

let num3 = 101
console.log(num3 % 2 === 0)