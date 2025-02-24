// for — когда количество итераций известно заранее
// while — когда количество итераций заранее неизвестно
// do...while — когда минимум одно выполнение обязательно

// Задача: Используй цикл, чтобы вывести числа от 1 до 10 в консоль.

for(let i = 1; i <= 10; i++) {
    console.log(i);
}

let i = 1
while(i <= 10){
    console.log(i);
    i++;
}

// Задача: Используй цикл, чтобы вывести только чётные числа от 2 до 20.

for(let i = 2; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

// Задача: Вывести таблицу умножения для 5 (от 5 × 1 до 5 × 10).

for(let i = 1; i <= 10; i++){
    console.log("5 * " + i + " = " + (5 * i))
}

// Задача: Пользователь вводит число N, программа вычисляет факториал N!.

// let n = parseInt(prompt("Введите число:"))
// let fact = 1
// for(let i = 1; i <= n; i++){
//     fact *= i;
// }
// console.log(n + "! = " + fact);

// Задача: Пользователь вводит число N, программа проверяет, является ли оно простым.
// 🔹 Простое число — это число, у которого только два делителя: 1 и само число.
// (Примеры: 2, 3, 5, 7, 11, 13, 17...)

// let n1 = parseInt(prompt("Введите число:"))
// let isPrime = true

// for(let i = 2; i < n1; i++){
// if (n1 % i === 0){
//     isPrime = false;
//     break;
// }
// }
// if(n > 1 && isPrime){
//     console.log("Число " + n1 + " простое!")
// }
// else{
//     console.log("Число " + n1 + " не простое!")
// }


// Задача: Пользователь вводит высоту M и ширину N, программа рисует прямоугольник из #.

// let m = parseInt(prompt("Введите высоту прямоугольника:"));
// let f = parseInt(prompt("Введите ширину прямоугольника:"));

// for(let i = 1; i <= m; i++){
//     let row = ""
//     for(let j = 1; j <= f; j++){
//  row += "#"
//     }
//     console.log(row)  
// }

// Выведи числа от 1 до 10 в консоль.

let num = 1
while(num <= 10){
    console.log(num);
    num++;
}

// Запроси у пользователя число k, выведи сумму чисел от 1 до k.
// let k = parseInt(prompt("Введите число:"))

// let i1 = 1;
// let sum = 0;

// while(i1 <= k){
//     sum += i1;
//     i1++;
// }
// console.log("Сумма чисел от 1 до " + k + " равна " + sum)

// Напишите программу, которая запрашивает у пользователя числа и суммирует их, пока он не введет 0. После этого программа выводит сумму.

let sum2 = 0;
let num4 = parseInt(prompt("Введите число: "), 10)

while(num4 != 0){
    sum2 += num4;
    num4 = parseInt(prompt("Введите число: "), 10);
}
console.log("Сумма введенных чисел = ", sum2)

// Минимальное и максимальное число
// Пользователь вводит числа, пока не введет 0. Программа находит и выводит минимальное и максимальное из введенных чисел.

let minNum = Infinity;
let maxNum = -Infinity;
// где Infinity - бесконечность
let num5;

do{
    num5 = parseInt(prompt("Введите число:"), 10)
    if (num5 != 0){
        minNum = Math.min(minNum, num5);
        maxNum = Math.max(maxNum, num5);
    }

} while(num5 != 0)

    console.log("Минимальное число: ", minNum, "\nМаксимальное число: ", maxNum)

//     Проверка пароля
// Программа должна запрашивать у пользователя пароль, пока он не введет правильный.

const correctPas = "1234"
let pas;

do{
    pas = prompt("Введите пароль: ")
    if(pas !== correctPas){
        alert("Пароль неверный. Попробуйте снова")
    }
}while(pas !== correctPas)

    alert("Доступ разрешен!")



