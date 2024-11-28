// var x = 5;
// var y = 10;
// var res;

// res = x + y;
// console.log("Результат:"+ res)

// res = x - y;
// console.log("Результат:"+ res)

// res = x * y;
// console.log("Результат:"+ res)

// res = x / y;
// console.log("Результат:"+ res)

// res = x % y;
// console.log("Результат:"+ res)

// res += 5;
// console.log(res)

// res --;
// console.log(res)

// res = -res;
// console.log(res)

let x = 22;
let y = 22;
let hasCar = false;

if (x > y) {
    console.log("Число Х больше чем число Y")
    console.log("Проверка")
}
else if (x == y) {
    console.log("числа равные")
    if (x != 24 || hasCar == true) console.log("Число X не равно 24")
}
else {
    console.log("числа не равны")
}

let str = "allah";

switch (str) {
    case "Bob":
        console.log("Имя Bob");
        break;
    case "John":
        console.log("Имя John");
        break;
    case "George":
        console.log("Имя George");
        break;
default:
    console.log("Нам не известно имя");
    break;
}

let nums = 26;
let res = "";
if(nums > 25)
    res = "Big";
else res = "Small";
console.log(res);

let result = nums > 25 ? "Big" : "Small";
console.log(result);

let array = [45, true, 6.92, "R"];
array[1] = false;
array[2] = "Hello";
array[3] += " World";
console.log(array[0]);
array[4] = 5;
// Позволяет узнать длину массива
array.length();
// Позволяет удалить последний элемнт в массиве
array.pop();
// Позволяет добавить элемент в конец массива
array.push();
// Позволяет удалить первый элемент массива
array.shift();
// Позволяет добавить элемент в начало массива
array.unshift();
// Позволяет удалить конкретный элемент массива
delete array[индекс];
// Для создания массива используется также класс Array 
let arr = new Array(1,2,3,4,5);
// Двумерный массив
let matrix = [
    [56, "Hello"],
    [5],
    [8.9, true, false, 56] 
];
// Обращение к элементу true
matrix[2][1]
// Фунrция split - из строки делаем массив по определенному символу  
let srt = "Hello, world, 5, 0, qwe";
let array_split = str.split(", ");
// Функция join - делаем из массива строку
let str_join = array_split.join(", ");
// Функция splice - удаление элементов в массиве (устанавливаем с какого и сколько)
array.splice(1,2);
