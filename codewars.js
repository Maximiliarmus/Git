// speed of aircrafts is given in *knots*
// travelTime is in *minutes*
// travel distance should be returned in *kilometers*
function travelDistance(avgSpeed, travelTime) {
    const travelHours = travelTime / 60;
    const avgSpeedKm = avgSpeed * 1.852;
    const travelKms = avgSpeedKm * travelHours;

    return travelKms;

}

console.log(travelDistance(600, 60))


//   In one hour of sub-sonic flight at 600 knots should travel ~1111.2 km"
// "In one hour of super-sonic flight at 800 knots should travel ~1481.6 km"

// Вам даны два вектора, исходящие из начала координат (x=0, y=0) 
// с координатами (x1,y1) и (x2,y2). Ваша задача — выяснить, являются 
// ли эти векторы коллинеарными. Коллинеарные векторы — это векторы, 
// которые лежат на одной прямой. Они могут быть направлены в одном и 
// том же или противоположном направлении. Один вектор можно получить из 
// другого, умножив его на определенное число. В терминах координат 
// векторы (x1, y1) и (x2, y2) являются коллинеарными, если (x1, y1) = (k*x2, k*y2), 
// где k — любое число, выступающее в качестве коэффициента.

function collinearity(x1, y1, x2, y2) {
    if (x1 * y2 - x2 * y1 === 0) return true
    else return false
}


// assert.strictEqual(collinearity(1, 1, 1, 1), true, `collinearity( 1,1, 1,1 )`);
// assert.strictEqual(collinearity(1, 2, 2, 4), true, `collinearity( 1,2, 2,4 )`);
// assert.strictEqual(collinearity(1, 2, -1, -2), true, `collinearity( 1,2, -1,-2 )`);
// assert.strictEqual(collinearity(1, 1, 6, 1), false, `collinearity( 1,1, 6,1 )`);
// assert.strictEqual(collinearity(1, 2, 1, -2), false, `collinearity( 1,2, 1,-2 )`);
// assert.strictEqual(collinearity(4, 0, 11, 0), true, `collinearity( 4,0, 11,0 )`);
// assert.strictEqual(collinearity(0, 1, 6, 0), false, `collinearity( 0,1, 6,0 )`);
// assert.strictEqual(collinearity(4, 4, 0, 4), false, `collinearity( 4,4, 0,4 )`);
// assert.strictEqual(collinearity(0, 0, 0, 0), true, `collinearity( 0,0, 0,0 )`);
// assert.strictEqual(collinearity(0, 0, 1, 0), true, `collinearity( 0,0, 1,0 )`);
// assert.strictEqual(collinearity(5, 7, 0, 0), true, `collinearity( 5,7, 0,0 )`);

// Нам нужна функция, которая может преобразовать число (целое число) в строку.

// Какие способы достижения этого вы знаете?

function numberToString(num) {
    if (typeof num === 'number') return num.toString()
}
console.log(numberToString(4))

// ("+-+", "+--") ➞ "+-0"
// # Compare the first characters of each string, then the next in turn.
// # "+" against a "+" returns another "+".
// # "-" against a "-" returns another "-".
// # "+" against a "-" returns "0".
// # Return the string of characters.

function neutralise(s1, s2) {
    let arr = [];
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === "+" && s2[i] === "+") {
            arr.push("+")
        }
        else if (s1[i] === "-" && s2[i] === "-") {
            arr.push("-")
        }

        else { arr.push("0") }
    }
    let result2 = arr.join("");
    return result2;
}
console.log(neutralise(("--++--"), ("--+++-")))

// Дан массив целых чисел.

// Верните массив, где первый элемент — количество положительных чисел, 
// а второй элемент — сумма отрицательных чисел. 0 не является ни положительным, ни отрицательным.

// Если входные данные являются пустым массивом или равны нулю, 
// вернуть пустой массив.

// Пример
// Для ввода [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
// следует вернуть [10, -65].

function countPositivesSumNegatives(input) {
    if (input === 0 || input.length === 0) {
        return []
    }
    let positive = input.filter((num) => num > 0).length;
    let sumNegative = input.filter((num) => num < 0).reduce((sum, num) => sum + num, 0)
    return [positive, sumNegative];

    // Как сделать проверку когда пустой массив или равны 0  
};
console.log(countPositivesSumNegatives([]))

//   Создайте функцию, которая всегда возвращает True/ true для 
//   каждого элемента в данном списке.
//   Однако, если элемент — это слово 'flick' , 
//   переключитесь на то, чтобы всегда возвращать противоположное логическое значение.

// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

function flickSwitch(arr) {
    let flag = true;
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        const curName = arr[i]
        if (curName === "flick") {
            flag = flag === true ? false : true

        }
        res.push(flag)

    }
    return res;
}
console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']))

// Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.

// Например:

// Учитывая, что [34, 15, 88, 2]ваше решение вернется2
// Учитывая, что [34, -345, -1, 100]ваше решение вернется-345
// Для целей этого ката можно предположить, что предоставленный массив не будет пустым.

function findSmallestInt(arr) {
    let minRes = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minRes) {
            minRes = arr[i]
        }
    }
    return minRes

}
console.log(findSmallestInt([34, -345, -1, 100]))


//   Ваша задача — создать две функции ( max and min, или maximum and minimum, и т. д., в зависимости от языка ), 
//   которые получают список целых чисел в качестве входных данных и возвращают наибольшее и наименьшее число в этом списке соответственно. Каждая функция возвращает одно число.

function findMin(arr) {
    return Math.min(...arr)
};
function findMax(arr) {
    return Math.max(...arr)
}

console.log(findMin([-52, 56, 30, 29, -54, 0, -110]))
console.log(findMax([-52, 56, 30, 29, -54, 0, -110]))


// Напишите функцию, которая принимает в качестве параметров неотрицательное целое число n и строку s и возвращает строку, 
// s повторяющуюся ровно n раз.

function repeatStr(n, s) {
    const str = s.repeat(n)
    return str
}

console.log(repeatStr(3, '*'))

//   Напишите функцию ИМТ, которая вычисляет индекс массы тела (ИМТ = вес / рост 2 ).

//   если ИМТ <= 18,5 вернуть "Недостаточный вес"

//   если ИМТ <= 25,0 вернуть "Нормально"

//   если ИМТ <= 30,0 вернуть "Избыточный вес"

//   если ИМТ > 30, вернуть «Ожирение»

function calculateWeight(weight, height) {
    let bmi = weight / Math.pow(height, 2)
    if (bmi <= 18.5) { return "Недостаточный вес" }
    else if (bmi <= 25) { return "Нормально" }
    else if (bmi <= 30) { return "Избыточный вес" }
    else { return "Ожирение" }
    return bmi
}

console.log(calculateWeight(80, 1.8))

// Напишите функцию для разбиения строки и преобразования ее в массив слов.

// function parseStr(str) {
//     const parseStr = str.split(" ")
//     return parseStr
// }
// console.log(parseStr("I love arrays they are my favorite"))

// Завершите метод, который принимает логическое значение и возвращает 
// "Yes"строку для true или "No"строку для false.

function boolToWord(bool) {
    if (bool === true) return "Yes"
    return "No"
}
console.log(boolToWord(false))

//   Тимми и Сара думают, что они влюблены, но в том месте, где они живут, 
//   они узнают об этом только тогда, когда каждый из них сорвет по цветку. 
//   Если у одного из цветков четное количество лепестков, а у другого — нечетное, 
//   это значит, что они влюблены.

// Напишите функцию, которая будет принимать количество лепестков каждого цветка и 
// возвращать значение true, если они влюблены, и false, если нет.

function loveFunc(flower1, flower2) {
    if (flower1 % 2 === 0 && flower2 % 2 !== 0) return true
    else if (flower1 % 2 !== 0 && flower2 % 2 === 0) return true
    else return false
}
console.log(loveFunc(0, 1))

// Для заданной точки на евклидовой плоскости ( x и y) вернуть квадрант, в котором находится точка: 1, 2, 3 
// или 4(целое число). 
// x и y являются ненулевыми целыми числами, поэтому заданная точка никогда не лежит на осях.

function quadrant(x, y) {
    if (x > 0 && y > 0) return 1
    else if (x < 0 && y > 0) return 2
    else if (x < 0 && y < 0) return 3
    else return 4
}
console.log(quadrant(1, -2))

// Часы показывают h часы, m минуты и s секунды после полуночи.

// Ваша задача — написать функцию, которая возвращает время с полуночи в миллисекундах.

function past(h, m, s) {
    if (h < 0 || h > 23) throw new Error("Неверно указаны часы");
    if (m < 0 || m > 59) throw new Error("Неверно указаны минуты");
    if (s < 0 || s > 59) throw new Error("Неверно указаны секунды");
    timePerMil = (h * 3600000) + (m * 60000) + (s * 1000)
    return timePerMil
}
console.log(past(0, 0, 0))

// Получаете массив чисел, возвращаете сумму всех положительных единиц.
function positiveSum(nums) {
    const resNums = nums.filter((num) => num > 0)
        .reduce((sum, num) => sum + num, 0)
    return resNums
}
console.log(positiveSum([-1, -4, -7, -12]))

// Дана строка цифр, вам следует заменить любую цифру ниже 5 на '0', 
// а любую цифру 5 и выше на '1'. Верните полученную строку.

function fakeBin(x) {
    const arrNums = x.split("").map(Number);
    const arrRes = []
    for (let i = 0; i < arrNums.length; i++) {

        if (arrNums[i] < 5) {
            arrRes.push(0)
        }
        else {
            arrRes.push(1)
        }

    }
    const arrRes2 = arrRes.map(String).join('');
    return arrRes2
}
console.log(fakeBin("45385593107843568"))

// В коробке есть несколько столбцов игрушечных кубиков, выстроенных в ряд. В i-ом столбце находятся a_iкубики. 
// Сначала гравитация в коробке тянет кубики вниз. Когда Боб переключает гравитацию, она начинает тянуть все кубики к определенной стороне коробки, d, 
// которая может быть либо 'L'или 'R'(левой, либо правой). 
// Ниже приведен пример того, как может выглядеть коробка кубиков до и после переключения гравитации.

const flip = (d, a) => {
    if (d === "R") {
        a.sort((b, c) => b - c)
    }
    else { a.sort((b, c) => c - b) }
    return a
}
console.log(flip("L", [1, 4, 5, 3, 5]))

//   Дополните функцию квадратной суммы так, чтобы она возводила в квадрат каждое переданное ей число, 
//   а затем суммировала результаты.

function squareSum(numbers) {
    const res = numbers.map((num) => Math.pow(num, 2)).reduce((sum, num) => sum + num, 0)
    return res
}
console.log(squareSum([]))

// Нам нужна функция, которая может преобразовать строку в число. 

const stringToNumber = function (str) {
    let res = +str;
    return res;
}
console.log(stringToNumber("605"))

//   Рассмотрим массив/список овец, где некоторые овцы могут отсутствовать на своих местах. Нам нужна функция, 
//   которая подсчитывает количество овец, присутствующих в массиве (true означает присутствие).

function countSheeps(sheep) {
    const resCountSheep = []
    for (let i = 0; i < sheep.length; i++) {
        if (sheep[i] === true) {
            resCountSheep.push("+")
        }
    }
    return resCountSheep.length
}
console.log(countSheeps([undefined, null, false, true]))

//   Даны два целых числа a и b, которые могут быть положительными или отрицательными, 
//   найдите сумму всех целых чисел между ними и включая их и верните ее. Если два числа равны, 
//   верните a или b.

// Примечание: a и b не заказываются!

function getSum(a, b) {
    const nums = [a, b]
    if (a === b) { return a };
    if (a > b) {
        [a, b] = [b, a]
    }
    const res = []
    for (let i = a; i <= b; i++) {
        res.push(i)
    }
    const resSum = res.reduce((sum, num) => sum + num, 0)
    return resSum
}
console.log(getSum(0, -1))

// Вы забыли посчитать количество тостов, которые вы туда положили, вы не знаете, положили ли вы в тостер ровно шесть тостов.

// Определите функцию, которая подсчитывает, сколько еще (или меньше) тостов вам нужно в тостерах. Даже если вам нужно больше или меньше, 
// число все равно будет положительным, а не отрицательным.

function sixToast(num) {
    if (num > 6) return num - 6;
    return 6 - num
}
console.log(sixToast(3))

//   Дан массив из единиц и нулей. Преобразуйте эквивалентное двоичное значение в целое число.

// Например: [0, 0, 0, 1]рассматривается как 0001, что является двоичным представлением 1.

const binaryArrayToNumber = arr => {
    return parseInt(arr.join(""), 2)
};
console.log(binaryArrayToNumber([1, 1, 1, 1]))

//   Создайте функцию, которая отвечает на вопрос «Вы играете на банджо?».
// Если ваше имя начинается с буквы «R» или строчной «r», вы играете на банджо!

function areYouPlayingBanjo(name) {
    const allowedLetter = ['R', 'r']
    if (allowedLetter.includes(name.charAt(0))) return `${name} plays banjo`;
    return `${name} does not plays banjo`
}
console.log(areYouPlayingBanjo("ringo"))

//   Создайте функцию, которая принимает целое число в качестве аргумента и 
//   возвращает значение "Even"для четных или "Odd"нечетных чисел.

function evenOrOdd(number) {
    if (number % 2 === 0) return "Even"
    return "Odd"
}
console.log(evenOrOdd(-30))

// У Western Suburbs Croquet Club есть две категории членства: Senior и Open. Они хотели бы, 
// чтобы вы помогли им с формой заявления, которая сообщит потенциальным членам, в какую категорию они будут помещены.

// Чтобы стать пожилым, член должен быть не моложе 55 лет и иметь гандикап больше 7. 
// В этом крокетном клубе гандикапы варьируются от -2 до +26; чем лучше игрок, тем ниже гандикап.

// Вход
// Входные данные будут состоять из списка пар. Каждая пара содержит информацию об одном потенциальном 
// члене. Информация состоит из целого числа для возраста человека и целого числа для инвалидности человека.

// Выход
// Вывод будет состоять из списка строковых значений (на Haskell и C: Openили Senior), 
// указывающих, следует ли отнести соответствующий член к старшей или открытой категории.

function openOrSenior(data) {
    const clubMembers = []
    for (let i = 0; i < data.length; i++) {
        if (data[i]?.[0] >= 55 && data[i]?.[1] >= 7) {
            clubMembers.push("Senior")
        }
        else { clubMembers.push("Open") }
    }
    return clubMembers
}
console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]))

// В этом небольшом задании вам дана строка чисел, разделенных пробелами, 
// и вам нужно вернуть наибольшее и наименьшее число.

// Все номера действительны Int32, нет необходимости их проверять.
// Во входной строке всегда будет хотя бы одно число.
// Выходная строка должна состоять из двух чисел, разделенных одним пробелом, 
// причем наибольшее число должно быть первым.

function highAndLow(numbers) {
    const res = numbers.split(" ").map(Number)
    let max = Math.max(...res)
    let min = Math.min(...res)
    return `${max} ${min}`
}
console.log(highAndLow("1 9 3 4 -5"))

//   Дано случайное неотрицательное число, необходимо вернуть цифры этого числа 
//   в массиве в обратном порядке

function digitize(n) {
    const res = [...n.toString()].reverse().map(Number)
    return res
}
console.log(digitize(352312))

//   Завершите findNextSquareметод, который находит следующий целочисленный полный квадрат после переданного в качестве параметра. 
//   Напомним, что целочисленный полный квадрат — это целое число n, такое, что sqrt(n) также является целым числом.

// Если аргумент сам по себе не является точным квадратом, то верните либо -1 
// пустое значение, например None, или null, в зависимости от вашего языка. Вы можете предположить, что аргумент неотрицательный.

function findNextSquare(sq) {
    let n = Math.sqrt(sq)
    if (!Number.isInteger(n)) { return -1 }
    return Math.pow((n + 1), 2)

}
console.log(findNextSquare(625))
findNextSquare(121)

// Тролли атакуют ваш раздел комментариев!

// Распространенный способ решения этой проблемы — удалить все гласные буквы из комментариев троллей, нейтрализовав угрозу.

// Ваша задача — написать функцию, которая принимает строку и возвращает новую строку, в которой удалены все гласные.

// Например, строка «Этот сайт для неудачников LOL!» превратится в «Ths wbst s fr lsrs LL!».

// Примечание: в данном случае ката yне считается гласной.

function disemvowel(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}
console.log(disemvowel("This website is for losers LOL!"))

//   Дано целое число, определите, является ли оно квадратом числа :

//   В математике квадратное число или полный квадрат — это целое число, 
//   которое является квадратом целого числа; другими словами, это произведение некоторого целого числа на самого себя.

//   Тесты всегда будут использовать некоторое целое число, так что не беспокойтесь об этом 
//   в языках с динамической типизацией.

var isSquare = function (n) {
    return Math.sqrt(n) % 1 === 0 ? true : false; // fix me
}
console.log(isSquare(26))

function addBinary(a, b) {
    let y = a + b
    return y.toString(2)
}
console.log(addBinary(5, 9))

// Цвета, используемые принтером, записываются в контрольную строку. Например, 
// «хорошая» контрольная строка будет aaabbbbhaijjjmозначать, что принтер использовал три раза цвет a, четыре раза цвет b, один раз цвет h, затем один раз цвет a...

// Иногда возникают проблемы: отсутствие цветов, техническая неисправность и 
// выдается «плохая» контрольная строка, например, aaaxbbbbyyhwawiwjjjwwmс буквами не из a to m.

// Вам нужно написать функцию printer_error, которая, учитывая строку, 
// вернет частоту ошибок принтера в виде строки , представляющей рациональное число, 
// числитель которого — количество ошибок, а знаменатель — длина контрольной строки. 
// Не сводите эту дробь к более простому выражению.

// Строка имеет длину больше или равную единице и содержит только буквы от a до z.

function printerError(s) {
    const a = [...s].filter((char) => char > 'm' && char <= 'z').length
    const b = [...s].length
    return `${a}/${b}`
}
console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))

// Ваша задача — создать функцию, которая выполняет четыре основные математические операции.

// Функция должна принимать три аргумента - операция(строка/символ), значение1(число), значение2(число).
// Функция должна возвращать результат чисел после применения выбранной операции.

function basicOp(operation, value1, value2) {
    switch (operation) {
        case "+": return value1 + value2;
        case "-": return value1 - value2;
        case "*": return value1 * value2;
        case "/": return value1 / value2;
        default: return 'Operation must be one of + - * /'
    }

}
console.log(basicOp('/', 2, 3))

//   Ваша задача — написать функцию, которая возвращает n-й член следующего ряда, 
//   который является суммой первых n членов последовательности ( n— входной параметр).
// Вам необходимо округлить ответ до двух знаков после запятой и вернуть его в виде строки.
// Если заданное значение 0 равно , то должно быть возвращено "0.00".
// В качестве аргументов вам будут предоставлены только натуральные числа.

function SeriesSum(n) {
    let sum = 0;

    for (let i = 0; i < n; i++) {
        let dem = i * 3 + 1
        sum += 1 / dem;
    }

    return sum.toFixed(2)
}
console.log(SeriesSum(0))

// В небольшом городе население p0 = 1000в начале года. Население регулярно увеличивается на 2 percentв год, и, кроме того, 50в город ежегодно приезжают новые жители. 
// Сколько лет нужно городу, чтобы его население стало больше или равно количеству p = 1200жителей?

function nbYear(p0, percent, aug, p) {
    percent = percent / 100;
    let years = 0;

    while (p0 < p) {
        p0 = Math.floor(p0 + p0 * percent + aug);
        years++;
    }
    return years
}
console.log(nbYear(1000, 2.0, 50, 1214))

// Учитывая непустой массив целых чисел, вернуть результат умножения значений по порядку

function grow(x) {
    return x.reduce((acc, num) => acc * num,)
}
console.log(grow([2, 2, 2, 2, 2, 2]))

// Дан массив целых чисел, вернуть новый массив, в котором каждое значение удвоено.

function maps(x) {
    return x.map(x => x * 2)
}
console.log(maps([1, 2, 3]))

// Герой направляется в замок, чтобы выполнить свою миссию. 
// Однако ему сказали, что замок окружен парой могущественных драконов! 
// Для победы над каждым драконом требуется 2 пули, наш герой понятия не имеет, 
// сколько пуль ему следует нести.. Если предположить, что он схватит определенное заданное количество пуль 
// и двинется вперед, чтобы сразиться с другим определенным заданным количеством драконов, выживет ли он?

// Верните true, если да, в противном случае false :)

function hero(bullets, dragons) {

    return bullets >= 2 * dragons;
}
console.log(hero(9, 5))

// Вы, вероятно, знаете систему "лайков" из Facebook и других страниц. 
// Люди могут "лайкать" записи в блогах, фотографии или другие элементы. Мы хотим создать текст, 
// который должен отображаться рядом с таким элементом.

// Реализуйте функцию, которая принимает массив, содержащий имена людей, которым нравится элемент

function likes(names) {
    if (names.length >= 4) { return `${names[0]}, ${names[1]} and ${names.length - 2} others like this` }
    else if (names.length < 1) { return `no one likes this` }
    else if (names.length === 2) { return `${names[0]} and ${names[1]} likes this` }
    else if (names.length === 1) { return `${names[0]} likes this` }
    else { return `${names[0]}, ${names[1]} and ${names[2]} likes this` };


}
console.log(likes(["Alex"]))

//   Добро пожаловать. В этом ката вам предлагается возвести в квадрат каждую цифру числа и сложить их.

// Например, если мы пропустим 9119 через функцию, то получим 811181, потому что 9 2 — это 81, а 1 2 — это 1. (81-1-1-81)

// Пример №2: Ввод 765 вернет/должен вернуть 493625, потому что 7 2 равно 49, 6 2 равно 36, а 5 2 равно 25. (49-36-25)

// Примечание: функция принимает целое число и возвращает целое число.

function squareDigits(num) {
    const res = String(num).split("").map(num => Math.pow(num, 2));
    return Number(res.join(""))
}
console.log(squareDigits(3212))

//   Даны два положительных целых числа n и p, мы хотим найти положительное целое число k, если оно существует, такое, 
//   что сумма цифр n возведенных в последовательные степени, начиная с , p равна k * n.

function digPow(n, p) {
    let res = String(n).split("").map(Number);
    for (let i = 0; i < res.length; i++) {
        res[i] = Math.pow(res[i], p)
        p++;
    }
    const res2 = res.reduce((acc, n) => acc + n, 0)
    console.log(res2)
    let k = res2 / n
    if (res2 === n * k && Number.isInteger(k)) { return k }
    return -1
}
console.log(digPow(5584207, 9))

// По городу ходит автобус, который забирает и высаживает людей на каждой остановке.

// Вам предоставляется список (или массив) пар целых чисел. Элементы каждой пары представляют 
// количество людей, которые заходят в автобус (первый элемент), и количество людей, 
// которые выходят из автобуса (второй элемент) на автобусной остановке.

// Ваша задача — вернуть количество людей, которые все еще находятся 
// в автобусе после последней остановки (после последнего массива). 
// Несмотря на то, что это последняя остановка, автобус может быть не пустым, 
// и некоторые люди могут все еще находиться внутри автобуса, они, вероятно, 
// спят там :D

function countPeopleInBus(busStops) {
    const res = []
    if (busStops.length === 1 && Array.isArray(busStops[0]) && busStops[0]?.[0] === 0 && busStops[0]?.[1] === 0) { return 0 }
    else if (busStops.length === 1 && Array.isArray(busStops[0]) && busStops[0]?.[0] > busStops[0]?.[1]) { return busStops[0]?.[0] }
    busStops[0] = busStops[0]?.[0] - busStops[0]?.[1]
    for (let i = 1; i < busStops.length; i++) {
        busStops[i] = busStops[i - 1] + busStops[i]?.[0] - busStops[i]?.[1]
        res.push(busStops[i])
    }
    return res.pop()
}
console.log(countPeopleInBus([[81, 0]]))

// Есть массив с некоторыми числами. Все числа равны, кроме одного. Попробуйте найти его!
function findUniq(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1] && arr[i + 1] === arr[i + 2]) { return arr[i] }
        else if (arr[i] !== arr[i + 1]) { return arr[i + 1] }

    }

}
console.log(findUniq([0, 1, 0, 0, 0]))

//   Реализуйте функцию unique_in_order, которая принимает в качестве аргумента последовательность и возвращает список элементов без элементов 
//   с одинаковым значением рядом друг с другом, сохраняя исходный порядок элементов.

let uniqueInOrder = function (iterable) {
    if (typeof iterable === "string") {
        iterable.split("")
    }
    const res = []
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i + 1]) { res.push(iterable[i]) }
    }
    return res
}
console.log(uniqueInOrder('ABBCcAD'))

//   Создайте функцию, которая возвращает сумму двух наименьших положительных чисел, 
//   заданных массивом из минимум 4 положительных целых чисел. 
//   Не будут переданы числа с плавающей точкой или неположительные целые числа.

function sumTwoSmallestNumbers(numbers) {
    let min1 = Math.min(...numbers)
    let index1 = numbers.indexOf(min1)
    numbers.splice(index1, 1)
    let min2 = Math.min(...numbers)
    return min1 + min2
}

console.log(sumTwoSmallestNumbers([456, 456, 510, 944]))

// Возьмите 2 строки s1 и , s2 включающие только буквы от a до z. 
// Верните новую отсортированную строку (в алфавитном порядке возрастания), 
// максимально длинную, содержащую различные буквы - каждая взята только один раз - из s1 или s2.

// Панграмма — это предложение, которое содержит каждую букву алфавита хотя бы один раз. 
// Например, предложение «The quick brown fox jumps over the lazy dog» является панграммой, 
// потому что в нем хотя бы один раз используются буквы AZ (регистр не имеет значения).

// Дана строка, определить, является ли она панграммой. Верните True, если это так, False, если нет. 
// Игнорируйте цифры и знаки препинания.

function isPangram(string) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const lowerString = string.toLowerCase()

    return [...alphabet].every(letter => lowerString.includes(letter))
}
console.log(isPangram("The quick brown fox jumps over the lazy do."))

// Создайте функцию с двумя аргументами, которая будет возвращать массив первых nкратных x.

// Предположим, что и заданное число, и количество подсчетов будут положительными числами, большими, чем 0.

// Возвращает результаты в виде массива или списка (в зависимости от языка).

function countBy(x, n) {

    const z = new Array(n).fill(0).map((_, i) => (i + 1) * x)

    return z;
}
console.log(countBy(1, 10))

//   Создайте программу, которая фильтрует список строк и возвращает список, 
//   содержащий только имена ваших друзей.

// Если в имени ровно 4 буквы, то это точно ваш друг! 
// В противном случае, будьте уверены, это не...

function friend(friends) {
    const res = []
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length === 4) {
            res.push(friends[i])
        }
    }
    return res
}
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]))

//   Дан треугольник из последовательных нечетных чисел:
//   Вычислите сумму чисел в n- й строке этого треугольника (начиная с индекса 1), например: ( Вход --> Выход )

function rowSumOddNumbers(n) {
    let firstNumber = n * (n - 1) + 1;
    if (n === 1) { return n }
    const arr = [];
    arr.length = n;
    for (let i = 1; i < n; i++) {
        arr[0] = firstNumber;
        arr[i] = firstNumber + (i * 2);
    }
    const res = arr.reduce((acc, num) => acc + num, 0)
    return res
}
console.log(rowSumOddNumbers(42))


// Сможете ли вы найти иголку в стоге сена?

// Напишите функцию findNeedle(), которая принимает array полный мусор, но содержит один"needle"

// После того, как ваша функция найдет иглу, она должна вернуть сообщение (в виде строки), которое гласит:

// "found the needle at position "плюс indexон нашел иголку, так что:

function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle')}`
}

console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))

//   Дано два массива aи bнапишите функцию comp(a, b)(или compSame(a, b)), которая проверяет, 
//   содержат ли два массива «одинаковые» элементы с одинаковой кратностью (кратность элемента — это количество раз, которое он встречается). 
//   «Одинаковые» здесь означает, что элементы в bявляются квадратами элементов в a, независимо от порядка.

function comp(array1, array2) {
    if (Array.isArray(array1) && Array.isArray(array2)) {
        const res = array2.map(el => Math.sqrt(el))

        const res1 = res.sort((a, b) => a - b);
        const res2 = array1.sort((a, b) => a - b);
        for (let i = 0; i < res1.length; i++) {
            const equal = res1[i] === res2[i]
            if (!equal) return false
        }
        return true
    }
    return false
}

console.log(comp([], []))

//   Вам дана задача определить, является ли указанное положительное целое число совершенным кубом — 
//   числом, которое является кубом целого числа !

function youAreACube(value) {
    const x2 = Math.cbrt(value)

    return Number.isInteger(x2)
}
console.log(youAreACube(99))

// Дано массив, найти дубликаты в этом массиве и вернуть новый массив этих дубликатов. 
// Элементы возвращаемого массива должны появляться в том порядке, в котором они впервые появились как дубликаты.

function duplicates(arr) {
    const map = new Map();
    const res = []
    const added = new Set();
    for(let i = 0; i < arr.length; i++){
        const currentCount = map.get(arr[i]) || 0;
        map.set(arr[i], currentCount + 1)
       console.log(currentCount)
    if(currentCount + 1 === 2 && !added.has(arr[i])){
        res.push(arr[i])
        added.add(arr[i])
    }
    
    }
    
    
    
    return res
}
console.log(duplicates([1, 2, 3, 3, 2, 1]))

// Дан массив целых чисел, найдите то, которое встречается нечетное количество раз.

// Всегда будет только одно целое число, которое встречается нечетное количество раз.

function findOdd(A) {
    const map = new Map()
    for(let i = 0; i < A.length; i++){
        if(map.has(A[i])){
            const currentCount = map.get(A[i]);
            map.set(A[i], currentCount + 1)
        }
        else{map.set(A[i], 1)}
    }
        const res = []
        for(const [key, value] of map.entries()){
            if(value % 2 !== 0){
                res.push(key)
            }
        }
        return res[0];
    
    
  }
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))

// Реализуйте функцию, которая преобразует заданное логическое значение в его строковое представление.

function booleanToString(b){
    return b.toString()
  }
  console.log(booleanToString(true))

//   Создайте функцию, которая переводит заданную строку ДНК в РНК.

function DNAtoRNA(dna) {
    let letter = "T"
    const res = dna.split("")
    const res1 = []
    for(let i = 0; i < res.length; i++){
        if(res[i] === letter){
            res[i] = "U"
        }
        res1.push(res[i]) 
    }
    
    return res1.join("")
  }
  console.log(DNAtoRNA(("TTTT")))

//   Построить башню в форме пирамиды, как массив/список строк, заданных положительным целым числом number of floors. 
//   Блок башни представлен "*"символом.

function towerBuilder(nFloors) {
    const probel = ' '
    const star = '*'
    const res = []
    res.length = nFloors;
    
    for(let i = 0; i < res.length; i++){
      res[0] = star.repeat(res.length * 2 - 1).split('')
      res[i] = res[0].splice(0, i, probel.repeat(i)).push(" ")
      console.log(res[i])
    }
    return res

  }
console.log(towerBuilder(3))