// Цикл for - состоит из 3 значений (значение переменной, до какого момента переменная будет изменяться и как будет изменяться сама переменная)
// for(var i = 0; i < 10; i++)
// console.log(i);

// Цикл while - концепция схожа с for, но переменную создаем вне цикла; внутри цикла указываем условия и ниже указываем как будет меняться переменная
// let i = 0;
// while(i < 10){
//     console.log(i);
//     i++;
// }

// Цикл do while - такой же как while, но концепция что сначала выполняется тело цикла, а потом проверяется условие
// var i = 100;
// do{
// console.log(i);
// i++;
// } while(i < 10);

// Оператор break позволяет выйти из цикла
// for(var i = 100; i <= 10; i /= 2){
//     if(i < 50)
//         break;
//     console.log(i);
// }
// Оператор continue - позволяет пропустить итерацию
// for(var i = 1; i < 20; i++){
//     if(i < 15)
//         break;
//     if(i % 2 != 0)
//         continue;
//     console.log(i);
// }

// Отличие циклов for и while - в цикле for указываем необходимый диапазон, в цикле while можем проверять булевые выражения

// let arr = [5,6,"Hello", "s", true, 9];
// for(let i = 0; i < arr.length; i++){
//     console.log("Элемент под номером №" + (i+1) + ": " + arr[i]);
// }

// Цикл for each - подходит для перебора элементов массива
// let arr = [5,6,"Hello", "s", true, 9];
// arr.forEach(function(item, i, array){
//     console.log("Элемент под номером №" + i + ": " + item + ". Массив: " + array);
// })

// Цикл for in - необходим для перебора объектов

// for(let key in arr){
//     console.log("Элемент под номером № " + key + ": " + arr[key])
// }


// Функции
let arr = ["BMW", "Mersedes", "Audi", "Volvo"];
// Для перебора массива используем forEach
// arr.forEach(function(item, i, arr){
//     console.log("Index: " + i + ": " + item + ". Массив " + arr);
// })

// Функция filter позволяет фильтровать массив
// let newArr = arr.filter(function(el){
//     return el.length == 3 || el.length == 4; 
// });
// console.log(newArr);
// Получаем только положительные числа в массиве:
// let arr_2 = [1, -1, 2, 3, -3,];
// let positive = arr_2.filter(function(el){
//     return el > 0;
// });
// console.log(positive);

// Функция map - позволяет перебирать массив с трансформацией элементов
// Приведем все элементы массива к нижнему регистру
// let newArr = arr.map(function(el){
// return el.toLowerCase();
// })
// console.log(newArr);

// Функция every - каждый элемент массива сравниваем с условием (все должны подходить)
// Функция some - каждый элемент массива сравниваем с условием (хотя бы один должен подходить)

// function elLength(el){
//     return el.length == 3;
// }
// console.log(arr.every(elLength));
// console.log(arr.some(elLength));

// Функция reduce - позволяет последовательно обрабовать все элементы
// let nums = [1, 2, 3, 4, 5];
// Находим сумму всех элементов
// let summa = nums.reduce(function (sum, el) {
//     return sum + el;
// });
// console.log(summa);
// Посчитаем среднеарифметическое число элементов массива
// let currency = [23.5, 4.56, 33.5];
// let average = currency.reduce(function(total, el, index, array){
// Сумма всех элементов:
// total += el;
// Проверка является ли элемент последним элементов массива
// if(index == array.length - 1)
//     return total / array.length;
// else
// return total;
// })
// console.log(average);

// Функция reduceRight - делает все то же самое что и reduce, но элементы считаются справа налево

// Функции

function show() {
    console.log('Hello World');
}
show();

// Все переменные, созданные внутри функции, будут локальными и будут работать только внутри функции
// Все переменные, созданные вне функций и до создания функций, будут глобальными и будут работать для всех функций

function calc(a, b) {
    let res = a + b;
    console.log(res);
}
calc(100, 276);

function multiply(a, b, c) {
    let res = a * b * c;
    return res;
}
let mult = multiply(5, 5, 5);
console.log(mult);

// Функция arrayEven - возвращает массив только с четными числами

// function arrayEven(array) {
//     let isEven = true;
//     array.forEach(function (item, i, arr) {
//         if (item % 2 != 0) {
//             isEven = false;

//         }

//     });
//     return isEven;
// }
// // let arr = [5, 9, 0, 4];
// let arr_2 = [6, 8, 2, 4];
// let isEven = arrayEven(arr_2);
// console.log(isEven);

// Функция с задержкой во времени
function test(){
    console.log('Hello World!');
}
setTimeout(test, 3000);

// Функция позволяет создавать таймер

// setInterval(test, 4000, "GOOD!");