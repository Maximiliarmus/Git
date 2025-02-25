// Function Declaration — используйте, если функция должна быть доступна во всей области видимости, например, для глобальных или больших функций, которые будут вызываться несколько раз в разных частях кода.

// Function Expression — используйте, если функция нужна как часть выражения или как параметр в других функциях, например, в обработчиках событий или функциях обратного вызова.

// Arrow Function — используйте для коротких функций, где важен лексический контекст this, и когда вам не нужно иметь свой объект arguments. Это особенно полезно для обработчиков событий, методов массива или функций внутри методов объектов/классов.

// Напишите три варианта функции, которая принимает два числа и возвращает их сумму.

function sum(a, b) {
    return a + b;
}

let sum2 = function (a, b) {
    return a + b;
}

let sum3 = (a, b) => a + b;

console.log(sum(3, 5));
console.log(sum2(4, 5));
console.log(sum3(5, 5));

// Создайте функцию, которая принимает число и возвращает "Чётное" или "Нечётное" в зависимости от его значения.

function checkEven(num) {
    return num % 2 === 0 ? "Четное" : "Нечетное";
}

let checkEven2 = function (num) {
    return num % 2 === 0 ? "Четное" : "Нечетное";

};

let checkEven3 = (num) => num % 2 === 0 ? "Четное" : "Нечетное";

console.log(checkEven(10));
console.log(checkEven(8));
console.log(checkEven(7));

// Напишите функцию, которая принимает три числа и возвращает наибольшее.

function maxNumber1(a, b, c) {
    return Math.max(a, b, c)
}

let maxNumber2 = function (a, b, c) {
    return Math.max(a, b, c)
};

let maxNumber3 = (a, b, c) => Math.max(a, b, c);

console.log(maxNumber1(3, 4, 5));
console.log(maxNumber2(30, 14, 15));
console.log(maxNumber3(3, 14, 50));

// Напишите функцию, которая принимает два числа (min, max) и возвращает случайное число между ними.

function getRandom1(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let getRandom2 = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let getRandom3 = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

console.log(getRandom1(2, 10));
console.log(getRandom1(3, 100));
console.log(getRandom1(4, 1000));

// Создайте функцию, которая проверяет, является ли строка палиндромом (читается одинаково слева направо и справа налево).

function isPalindrome(str) {
    let reserved = str.split("").reverse().join("");
    return str === reserved;
}
// метод sprit разбивает строку на массив символов
// метод reverse переварачивает данный массив
// метод join соединяет массив элементов обратно в строку
// return str === reserved - введенное в параметр функции слово должно быть равно перевернутому ранее слову

let isPalindrome2 = function (str) {
    return str === str.split("").reverse().join("");
};

let isPalindrome3 = str => str === str.split("").reverse().join("");

console.log(isPalindrome("text"));
console.log(isPalindrome2("level"));
console.log(isPalindrome("madam"));

console.log(myD())

function myD() {
    return "Привет мир!"
}

// Функция приветствия

function greet(name) {
    return `Привет, ${name}!`;
}
console.log(greet("Игорь"));

// Сумма двух чисел

let sumTwo = (a, b) => a + b;
console.log(sumTwo(15, 10));

// Квадрат числа

let square = a => a * a;
console.log(square(15));

// Определение чётности

let isEven = function (num) {
    return num % 2 === 0 ? "Четное" : "Нечетное";

}
console.log(isEven(6))

// Минимальное из двух чисел

function minOfTwo(a, b) {
    return a < b ? a : b;
}
console.log(minOfTwo(4, 5))

// Факториал числа

function fact(n) {
    if (n === 0) return 1;
    return n * fact(n - 1)
}
console.log(fact(5));
// В данном случае происходит рекурсия, функция вызывает саму себя, по этому это работает как цикл

// Функция, возвращающая массив чисел от 1 до n

function range(n) {
    let arr = []; // 1. Создаем пустой массив arr
    for (let i = 1; i <= n; i++) {  // 2. Запускаем цикл от 1 до n
        arr.push(i);  // 3. Добавляем i в массив
    }
    return arr; // 4. Возвращаем готовый массив
}
console.log(range(6));

// Функция, возвращающая сумму всех элементов массива

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
    // Метод .reduce() выполняет указанную функцию для каждого элемента массива, сохраняя промежуточный результат.
    // sum - переменная которая хранит накопленный результат
    // num - текущий элемент массива
    // 0 - начальное значение
}
console.log(sumArray([1, 2, 3, 4, 5, 6, 7]));

// Функция для работы с объектами

function getObjectKeys(obj) {
    return Object.keys(obj);
}
console.log(getObjectKeys({ name: "Анна", age: "25" }));

function getObjectValues(obj) {
    return Object.values(obj);
}
console.log(getObjectValues({ name: "Анна", age: "25" }));

// Фильтрация массива по длине строк

function filterByLength(arr, length){
    return arr.filter(word => word.length > length)
}
console.log(filterByLength(["яблоко","груша","киви","апельсин"], 6))