// Задача:
// Создай переменную num, задай ей любое число.
// Используй if, чтобы проверить:
// Если число положительное → выведи "Число положительное"
// Если отрицательное → "Число отрицательное"
// Если ноль → "Число равно нулю"

let num = 0
if (num > 0) {
    console.log("Число положительное")
}
else if (num < 0) {
    console.log("Число отрицательное")
}
else {
    console.log("Число равно нулю")
}

// Задача:
// Объяви переменную num, присвой ей любое число.
// Используй if, чтобы проверить:
// Если число чётное → "Число чётное"
// Если нечётное → "Число нечётное"

let num2 = 9
if (num2 % 2 === 0){
    console.log("Число чётное")
}
else if (num2 % 2 !== 0){
    console.log("Число нечётное")
}

// Создай переменную age.
// Если age больше или равно 18, выведи "Доступ разрешен"
// Иначе — "Доступ запрещен"

let age1 = 9
if (age1 >= 18){
    console.log("Доступ разрешен")
}
else{
    console.log("Доступ запрещен")
}

// Создай две переменные a и b.
// Используй if, чтобы сравнить их:
// Выведи "a больше b", если a > b
// "b больше a", если b > a
// "Числа равны", если a === b

let a = 4, b = 3
if (a > b) {
    console.log("a больше b")
}
else if (b > a){
    console.log("b больше a")

}
else {
    console.log("Числа равны")
}

// Объяви переменную day, присвой ей число от 1 до 7.
// Используй switch, чтобы вывести название дня недели.

let dayOfWeek = 7
switch (dayOfWeek){
    case 1:
        console.log("Понедельник")
        break;
        case 2:
            console.log("Вторник")
            break;
            case 3:
                console.log("Среда")
                break;
                case 4:
                    console.log("Четверг")
                    break;
                    case 5:
                        console.log("Пятница")
                        break;
                        case 6:
                            console.log("Суббота")
                            break;
                            case 7:
                                console.log("Воскресенье")
                                break;}

// Объяви переменную hour (от 0 до 23).                                
// Используй switch, чтобы определить время суток:
                                
// "Утро" (6 - 11)
// "День" (12 - 17)
// "Вечер" (18 - 23)
// "Ночь" (0 - 5)

let hourOfDay = -3
switch (true){
    case hourOfDay >= 6 && hourOfDay < 12:
    console.log("Утро")
    break;
    case hourOfDay >= 12 && hourOfDay < 18:
    console.log("День")
    break;
    case hourOfDay >= 18 && hourOfDay < 24:
        console.log("Вечер")
        break;
    case hourOfDay >= 0 && hourOfDay < 6:
        console.log("Ночь")
        break;
        default:
            console.log("Неверное время")
}

// Создай переменную age.
// Используй тернарный оператор (? :) для проверки:
// Если age >= 18 → "Доступ разрешен"
// Иначе → "Доступ запрещен"

let age2 = 1
let access = age2 >= 18 ? "Доступ разрешен" : "Доступ запрещен";
console.log(access)

// Создай переменную text, в которой хранится строка.
// Проверь, пустая ли строка.
// Если пустая → "Строка пустая", иначе → "В строке есть символы"

let text = " f"
let message = text === " " ? " Строка пустая" : "Строка не пустая"
console.log(message)

// Создай две переменные login и password.
// Если login равен "admin" и password равен "1234", то выведи "Доступ разрешен"
// Если login правильный, но password неправильный → "Неверный пароль"
// Если login неправильный → "Неверный логин"

let loginUser = "admin", passwordUser = "1234"
if (loginUser === "admin" && passwordUser === "1234"){
    console.log("Доступ разрешен")
} 
else if (loginUser === "admin" && passwordUser !== "1234"){
    console.log("Неверный пароль")
}
else if(loginUser !== "admin" && passwordUser !== "1234"){
    console.log("Неверный догин или пароль")
}
else{
    console.log("неверный логин")
}

// Создай переменную num, присвой ей любое число.
// Если число делится на 3 без остатка → выведи "Число делится на 3"
// Если число делится на 5 без остатка → выведи "Число делится на 5"
// Если число делится и на 3, и на 5 → выведи "Число делится на 3 и на 5"
// Если не делится ни на 3, ни на 5 → выведи "Число не делится ни на 3, ни на 5"

let num3 = 1001
if (num3 % 5 === 0 && num3 % 3 === 0){
    console.log("Число делится и на 3, и на 5")
}
else if(num3 % 5 === 0){
    console.log("Число делится на 5")
}
else if(num3 % 3 === 0){
    console.log("Число делится на 3")
}
else{
    console.log("Число не делится ни на 3, ни на 5")
}

// Задай переменной secret случайное число от 1 до 10.
// Попроси пользователя ввести число (guess).
// Если guess === secret, выведи "Поздравляю, ты угадал!".
// Если guess < secret, выведи "Слишком маленькое число".
// Если guess > secret, выведи "Слишком большое число".

let secret = Math.floor(Math.random() * 10) + 1
// Math.random - генерирует случайное число от 0 до 1 (не включительно)
// Math.floor - округляет число вниз до ближайшего целого
// math.random * 10 - делает диапазон от 0 до 9.99999
// + 1 - получаем диапазон от 1 до 10 (вместо 0 до 9)
let guess = parseInt(prompt("Введите число от 1 до 10"))
// prompt("Введите число от 1 до 10") - открывает окно в браузере, где пользователь может ввести число (введенное значение всегда string)
// parseInt - преобразует число в строку
if (guess === secret){
    console.log("Вы угадали!")
}
else if(guess < secret){
    console.log("Давай больше!")
}
else{
    console.log("Давай меньше!")
}

let number = parseInt(prompt("Введите число:"), 10);
// 10 в конце значит счисление (нельзя буквы и другие символы) 
if(isNaN(number)){
    alert("Введите число!")
}
else if(number % 2 === 0){
    alert("Число четное")
}
else{
    alert("Число нечетное")
}

// Идея: Игрок выбирает камень, ножницы или бумагу, а программа случайно выбирает свой вариант и определяет победителя.

let choises = ["камень", "ножницы", "бумага"];
let userChoise = prompt("Выберите: камень, ножницы или бумага?").toLowerCase();
// toLowerCase - метод строки который преобразовывает регистр в нижний
let compChoise = choises[Math.floor(Math.random() * choises.length)]
// Math.random - генерирует случайное число от 0 до 1 (не включительно)
// Math.floor - округляет число вниз до ближайшего целого
// math.random * choises.length - умножаем рандомное число на длину массива, делая диапазон от 0 до 2 (3 не вкл). 
alert("Компьютер выбрал: " + compChoise);
if(compChoise === userChoise){
    alert("Ничья!")
}
else if((compChoise === "камень" && userChoise === "бумага") || (compChoise === "бумага" && userChoise === "ножницы") || (compChoise === "ножницы" && userChoise === "камень")){
    alert("Вы победили!")
}
else{
    alert("Вы проиграли!")
}

// Идея: Программа загадывает загадку, и пользователь должен её отгадать.
let answer = prompt("Зимой и летом одним цветом. Что это?").toLowerCase();
let rightChoises = ["ёлка", "ель", "сосна", "пихта", "кедр"]
if(answer === rightChoises[0] || answer === rightChoises[1] || answer === rightChoises[2] || answer === rightChoises[3] || answer === rightChoises[4]){
    alert("Вы угадали!")
}
else{
    alert("Вы не угадали!")
}