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
    for (let i = 0; i < arr.length; i++) {
        const currentCount = map.get(arr[i]) || 0;
        map.set(arr[i], currentCount + 1)
        console.log(currentCount)
        if (currentCount + 1 === 2 && !added.has(arr[i])) {
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
    for (let i = 0; i < A.length; i++) {
        if (map.has(A[i])) {
            const currentCount = map.get(A[i]);
            map.set(A[i], currentCount + 1)
        }
        else { map.set(A[i], 1) }
    }
    const res = []
    for (const [key, value] of map.entries()) {
        if (value % 2 !== 0) {
            res.push(key)
        }
    }
    return res[0];


}
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]))

// Реализуйте функцию, которая преобразует заданное логическое значение в его строковое представление.

function booleanToString(b) {
    return b.toString()
}
console.log(booleanToString(true))

//   Создайте функцию, которая переводит заданную строку ДНК в РНК.

function DNAtoRNA(dna) {
    let letter = "T"
    const res = dna.split("")
    const res1 = []
    for (let i = 0; i < res.length; i++) {
        if (res[i] === letter) {
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
    const res = [];


    for (let i = 0; i < nFloors; i++) {

        let starCount = star.repeat((nFloors * 2 - 1) - 2 * i)
        let spaceCount = probel.repeat(i)
        const res1 = `${spaceCount}${starCount}${spaceCount}`;
        res.push(res1)

    }

    return res.reverse()

}
console.log(towerBuilder(4))

// Вы были в походе с друзьями далеко от дома, но когда пришло время возвращаться, вы поняли, что топливо заканчивается, 
// а ближайшая заправка находится 50в нескольких милях! Вы знаете, что в среднем ваша машина проезжает около 25 миль на галлон. 
// Остались 2галлоны.

// Учитывая эти факторы, напишите функцию, которая сообщит вам, возможно ли добраться до насоса или нет.

// Функция должна возвращать значение, true если это возможно, и false наоборот.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump <= mpg * fuelLeft
};
console.log(zeroFuel(100, 50, 1))

//   Напишите функцию, которая берет массив слов, объединяет их в предложение и возвращает предложение. 
//   Вы можете игнорировать необходимость очистки слов или добавления знаков препинания, 
//   но вы должны добавлять пробелы между каждым словом. Будьте осторожны, в начале или конце предложения не должно быть пробела!

function smash(words) {
    return words.join(" ")
};
console.log(smash(["hello", "amazing", "world"]))

//  Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c. 
//  Функция должна возвращать true, если треугольник может быть построен со сторонами заданной длины, и false в любом другом случае.

function isTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}
console.log(isTriangle(7, 2, 2))

// Вам будет дано число, и вам нужно будет вернуть его как строку в развернутой форме 

function expandedForm(num) {
    const numToStr = num.toString().split("").reverse()
    const res = []
    for (let i = 0; i < numToStr.length; i++) {
        numToStr[i] = parseInt(numToStr[i])
        const resNum = numToStr[i] * Math.pow(10, i)
        if (resNum > 0) { res.push(resNum) }
    }
    const res1 = res.reverse().join(" + ")
    return res1
}
console.log(expandedForm(1))

// Дано множество чисел, вернуть аддитивное обратное для каждого.
//  Каждое положительное становится отрицательным, а отрицательное становится положительным.

function invert(array) {
    return array.map(num => num * -1);
}
console.log(invert([1, -2, 3, -4, 5]))

function invert(array) {
    return array.map(num => num * -1);
}

//  Наша футбольная команда завершила чемпионат.

// Результаты матчей нашей команды записаны в коллекцию строк. Каждый матч представлен строкой в ​​формате "x:y", 
// где x- счет нашей команды, а y- счет наших соперников.

// Например: ["3:1", "2:2", "0:1", ...]

// Очки начисляются за каждый матч следующим образом:

// если x > y: 3 очка (победа)
// если x < y: 0 баллов (проигрыш)
// если x = y: 1 балл (ничья)
// Нам нужно написать функцию, которая берет эту коллекцию и возвращает количество очков, 
// xнабранных нашей командой ( ) в чемпионате по правилам, приведенным выше.

// Примечания:

// наша команда всегда играет 10 матчей в чемпионате
// 0 <= х <= 4
// 0 <= у <= 4

function points(games) {
    const gamesNums = games.map(pair => pair.split(":").map(Number))
    let counter = 0;
    for (let i = 0; i < gamesNums.length; i++) {
        if (gamesNums[i]?.[0] > gamesNums[i]?.[1]) { counter += 3 }
        else if (gamesNums[i]?.[0] === gamesNums[i]?.[1]) { counter += 1 }
    }
    return counter
}
console.log(points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"]))

//   Завершите решение так, чтобы функция разрывала верблюжий регистр, используя пробел между словами.

function solution(string) {
    return string.replace(/([a-z])([A-Z])/g, '$1 $2');
}
console.log(solution("camelCasingTest"))

//   Давайте играть! Вам нужно вернуть, какой игрок выиграл! В случае ничьей верните Draw!.

const rps = (p1, p2) => {
    switch (true) {
        case p1 === 'scissors' && p2 === 'paper':
            return "Player 1 won!"
        case p1 === 'scissors' && p2 === 'rock':
            return "Player 2 won!"
        case p1 === 'paper' && p2 === 'scissors':
            return "Player 2 won!"
        case p1 === 'paper' && p2 === 'rock':
            return "Player 1 won!"
        case p1 === 'rock' && p2 === 'scissors':
            return "Player 1 won!"
        case p1 === 'rock' && p2 === 'paper':
            return "Player 2 won!"
        default: return "Draw!"
    }
};
console.log(rps('rock', 'paper'))

// Учитывая строку, необходимо вернуть строку, в которой каждый символ (с учетом регистра) повторяется один раз.

function doubleChar(str) {
    const res = str.split("")
    const doubleChar = []
    for (let i = 0; i < res.length; i++) {
        const double = res[i].repeat(2)
        doubleChar.push(double)
    }
    return doubleChar.join('')
}
console.log(doubleChar("abcd"))

// Дан массив целых чисел в виде строк и чисел, вернуть сумму значений массива, как если бы все они были числами.

// Ответ дайте числом.

function sumMix(x) {
    const numX = x.map(str => parseInt(str)).reduce((acc, num) => acc + num, 0)
    return numX
}
console.log(sumMix([9, 3, '7', '3']))

// Вам даны два внутренних угла (в градусах) треугольника.
// Напишите функцию, возвращающую третье значение.
// Примечание: будут проверяться только положительные целые числа.

function otherAngle(a, b) {
    let corner = 180 - (a + b)
    return corner;
}
console.log(otherAngle(30, 60))

//   В строках ДНК символы "A" и "T" являются дополнениями друг друга, как "C" и "G". 
//   Ваша функция получает одну сторону ДНК (строки, за исключением Haskell); 
//   вам нужно вернуть другую, дополнительную сторону. Цепь ДНК никогда не бывает пустой или ДНК вообще нет 
function dnaStrand(dna) {
    return dna.replace(/[ATCG]/g, char => {
        switch (char) {
            case 'A': return 'T';
            case 'T': return 'A';
            case 'C': return 'G';
            case 'G': return 'C';
            default: return char;
        }
    })
}
console.log(dnaStrand("ATTGC"))

//   Напишите функцию, которая возвращает минимальное и максимальное число из указанного списка/массива.

function minMax(arr) {
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    return [min, max]
}
console.log(minMax([1, 2, 3, 4, 5]))

//   Очень просто: дано число (целое / десятичное / и то, и другое в зависимости от языка), 
//   найти его противоположность (аддитивное обратное число).

function opposite(number) {
    return -number
}
console.log(opposite(-3))

//   Напишите функцию RemoveExclamationMarks, которая удаляет все восклицательные знаки из заданной строки.

function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
}
console.log(removeExclamationMarks("Hello World!"))

//   Вам даны lengthи width4-стороннего многоугольника. 
//   Многоугольник может быть как прямоугольником, так и квадратом.
// Если это квадрат, верните его площадь. Если это прямоугольник, верните его периметр.

const areaOrPerimeter = function (l, w) {
    const per = l * 2 + w * 2;
    const square = Math.pow(l, 2)
    if (l === w) { return square }
    return per
};
console.log(areaOrPerimeter(6, 10))

//   Основная идея — подсчитать все встречающиеся символы в строке. 
//   Если у вас есть строка типа aba, то результатом должно быть {'a': 2, 'b': 1}.

// А если строка пустая? Тогда результатом должен быть пустой литерал объекта, {}.

function count(string) {
    const arr = string.split('')
    const mapped = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (mapped.has(arr[i])) {
            const currentLetter = mapped.get(arr[i])
            mapped.set(arr[i], currentLetter + 1)

        }
        else { mapped.set(arr[i], 1); }
    }
    const res = {}
    for (const [key, value] of mapped) {
        res[key] = value
    }
    return res
}
console.log(count('aba'))

//   Изограмма — это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. 
//   Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой. 
//   Предположим, что пустая строка — изограмма. Игнорировать регистр букв.

function isIsogram(str) {
    const arr = str.toLowerCase().split("")
    const map = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            const currentLetter = map.get(arr[i])
            map.set(arr[i], currentLetter + 1)
        }
        else {
            map.set(arr[i], 1)
        }
        for (const value of map.values()) {
            if (value !== 1) { return false }
        }
    }
    return true
}
console.log(isIsogram("aba"))

//   Вы живете в городе Картезия, где все дороги расположены в идеальной сетке. 
//   Вы прибыли на встречу на десять минут раньше, 
//   поэтому решили воспользоваться возможностью и немного прогуляться. 
//   Город предоставляет своим гражданам приложение Walk Generating на их телефонах — 
//   каждый раз, когда вы нажимаете кнопку, оно отправляет вам массив однобуквенных строк, 
//   представляющих направления для ходьбы (например, ['n', 's', 'w', 'e']). 
//   Вы всегда проходите только один квартал для каждой буквы (направления), 
//   и вы знаете, что вам потребуется одна минута, чтобы пересечь один городской квартал, 
//   поэтому создайте функцию, которая будет возвращать true, если прогулка, которую вам дает приложение, 
//   займет у вас ровно десять минут (вы не хотите опоздать или опоздать!), и, 
//   конечно же, вернет вас в исходную точку. В противном случае возвращайте false .

function isValidWalk(walk) {
    if (walk.length !== 10) { return false }
    const map = new Map()
    for (let i = 0; i < walk.length; i++) {
        if (map.has(walk[i])) {
            const currentLetter = map.get(walk[i])
            map.set(walk[i], currentLetter + 1)
        }
        else {
            map.set(walk[i], 1)
        }
    }

    return map.get('n') === map.get('s') && map.get('w') === map.get('e')

}
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']))

//   Напишите функцию dirReduc, которая будет принимать массив строк и возвращать массив строк, 
//   в котором удалены ненужные направления (W<->E или S<->N рядом ).

function dirReduc(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr.length === 4 && arr[0] !== arr[i]) { return arr }

    }

    return false
}
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]))

// При заданной длине, смещении и списке перемещаем окно этой длины, 
// перемещаясь на это смещение каждый шаг, по списку, возвращая список списков.

// Окна могут перекрывать друг друга или пропускать определенные элементы. Все окна должны быть заданной длины; 
// если после определенного смещения остается недостаточно элементов, завершите список списков. 
// Можно брать элементы 0из пустого списка, поэтому позаботьтесь о window(0,offset,list)правильной обработке.

function window(length, offset, list) {
    const windows = []

    for (let i = 0; i <= list.length; i += offset) {
        const add = list.slice(i, i + length)
        if (add.length === length)
            windows.push(add)

    }

    return windows;
}
console.log(window(0, 1, [0, 1, 2]))

//   Задача о максимальной сумме подмассива состоит 
//   в нахождении максимальной суммы непрерывной подпоследовательности в массиве или списке целых чисел:

const maxSequence = function (arr) {
    if (arr.every(num => num < 0)) { return 0 }
    const sums = []
    for (let i = 0; i < arr.length; i++) {
        let sum = 0
        for (let j = i; j < arr.length; j++) {
            sum += arr[j]
            sums.push(sum)
        }
    }
    return Math.max(...sums)
}
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

//   В этом простом задании вам дано число и вы должны сделать его отрицательным. 
//   Но, может быть, число уже отрицательное?

function makeNegative(num) {
    if (num < 0) { return -num }
    return num
}
console.log(makeNegative(-11))

//   Алекс только что получил новый обруч, он ему очень нравится, но он расстроен, 
//   потому что его младший брат лучше его.

// Напишите программу, в которой Алекс может ввести ( n), сколько раз обруч сделает оборот, 
// и программа вернет ему ободряющее сообщение:

// Если Алекс наберет 10 или более обручей, верните веревку "Great, now move on to tricks".
// Если он не набрал 10 обручей, верните веревку "Keep at it until you get it".

function hoopCount(n) {
    if (n > 10) { return 'Great, now move on to tricks' }
    return 'Keep at it until you get it'
}
console.log(hoopCount(11))

//  Ваши одноклассники попросили вас скопировать для них некоторые документы. 
//  Вы знаете, что есть 'n' одноклассников и документы имеют 'm' страниц.

// Ваша задача — подсчитать, сколько пустых страниц вам нужно. Если n < 0 или m < 0 вернуть 0.

function paperwork(n, m) {
    if (n >= 0 && m >= 0) { return n * m }
    return 0
}
console.log(paperwork(5, 0))

// Вы пишете код для управления светофорами вашего города. Вам нужна функция для обработки каждого изменения с green, 
// на yellow, на red, а затем greenснова на .

// Завершите функцию, которая принимает строку в качестве аргумента, 
// представляющего текущее состояние света, и возвращает строку, 
// представляющую состояние, в которое должен измениться свет.

function updateLight(current) {
    if (current === 'red') { return 'green' }
    else if (current === 'green') { return 'yellow' }
    else if (current === 'yellow') { return 'red' }

}

//   На этот раз мы хотим написать вычисления с использованием функций и получить результаты. 
//   Давайте рассмотрим несколько примеров:
const dividedBy = (number) => {
    const operator = '/'
    if (number !== 0) {
        return {
            operator,
            number
        }
    }
    return 'Делить на 0 нельзя!'
}

const times = (number) => {
    const operator = '*'

    return {
        operator,
        number
    }
}

const plus = (number) => {
    const operator = '+'

    return {
        operator,
        number
    }
}

const minus = (number) => {
    const operator = '-'

    return {
        operator,
        number
    }
}

const one = (result) => {
    const number = 1

    if (result?.operator) {
        return Math.floor(eval(`${number} ${result.operator} ${result.number}`))
    }

    return number
}

const two = (result) => {
    const number = 2

    if (result?.operator) {
        return Math.floor(eval(`${number} ${result.operator} ${result.number}`))
    }

    return number
}

const three = (result) => {
    const number = 3

    if (result?.operator) {
        return Math.floor(eval(`${number} ${result.operator} ${result.number}`))
    }

    return number
}

const four = (result) => {
    const number = 4

    if (result?.operator) {
        return Math.floor(eval(`${number} ${result.operator} ${result.number}`))
    }

    return number
}

const five = (result) => {
    const number = 5

    if (result?.operator) {
        return Math.floor(eval(`${number} ${result.operator} ${result.number}`))
    }

    return number
}

const six = (result) => {
    const number = 6

    if (result?.operator) {
        return Math.floor(eval(`${number} ${result.operator} ${result.number}`))
    }

    return number
}

const seven = (result) => {
    const number = 7

    if (result?.operator) {
        return Math.floor(eval(`${number} ${result.operator} ${result.number}`))
    }

    return number
}

const eight = (result) => {
    const number = 8

    if (result?.operator) {
        return Math.floor(eval(`${number} ${result.operator} ${result.number}`))
    }

    return number
}

const nine = (result) => {
    const number = 9

    if (result?.operator) {
        return Math.floor(eval(`${number} ${result.operator} ${result.number}`))
    }

    return number
}

const zero = (result) => {
    const number = 0

    if (result?.operator) {
        return eval(`${number} ${result.operator} ${result.number}`)
    }
    else { throw new Error('Делить на 0 нельзя') }
}

try {
    console.log(one(dividedBy(zero())))
}
catch (e) {
    console.error(e.message)
}
// console.log(one(dividedBy(zero())))

// Ваша задача — создать функцию, которая может принимать любое неотрицательное целое число 
// в качестве аргумента и возвращать его с его цифрами в порядке убывания. 
// По сути, переставьте цифры так, чтобы создать максимально возможное число.

function descendingOrder(n) {
    const arr = Array.from(n.toString())
    const res = arr.map(Number).sort((a, b) => b - a).join('')
    return parseInt(res)
}
console.log(descendingOrder(12345))

//   Ваша команда пишет новый модный текстовый редактор, 
//   и вам поручено реализовать нумерацию строк.

// Напишите функцию, которая принимает список строк и возвращает каждую строку, 
// снабженную правильным числом.

const number = function (array) {
    const res = []
    for (let i = 0; i < array.length; i++) {
        let obj = `${i + 1}: ${array[i]}`
        res.push(obj)
    }
    return res

}
console.log(number(["a", "b", "c"]))

//   Вам будет дана непустая строка. Ваша задача — вернуть средний символ(ы) строки.

// Если длина строки нечетная, вернуть средний символ.
// Если длина строки четная, вернуть 2 средних символа.

function getMiddle(s) {
    const res = s.split("")
    const length = s.length
    const middle = Math.floor(length / 2)
    for (let i = 0; i < res.length; i++) {
        if (res.length % 2 !== 0) {

            return res[middle]
        }
        return res[middle - 1] + res[middle]
    }
}
console.log(getMiddle('middle'))

//   Реализуйте функцию, которая вычисляет разницу между двумя списками. Функция должна удалить все вхождения элементов из первого списка ( a), которые присутствуют во втором списке ( b).
//    Порядок элементов в первом списке должен быть сохранен в результате.

function arrayDiff(a, b) {
    return a.filter((el) => !b.includes(el))
}
console.log(arrayDiff([1, 2, 2], [1]))

// Вам дадут массив целых чисел. Ваша задача — взять этот массив и найти индекс N, 
// где сумма целых чисел слева от N равна сумме целых чисел справа от N.

// Если индекса, который бы это сделал, нет, верните -1.

function findEvenIndex(arr) {
    const sum = arr.reduce((acc, num) => acc + num)
    let runSum = 0;
    for (let i = 0; i < arr.length; i++) {
        const isRightSum = (sum - arr[i]) / 2 === runSum
        runSum += arr[i]
        if (isRightSum) { return i }

    }
    return -1
}
console.assert(findEvenIndex([1, 2, 3, 4, 3, 2, 1]) === 3, 'Где-то ошибка')
console.assert(findEvenIndex([1, 2, 3, 4, 5, 6]) === -1, 'Где-то ошибка')

// Напишите функцию, которая преобразует входную строку в верхний регистр.

function makeUpperCase(str) {
    return str.toUpperCase()
}
console.assert(makeUpperCase('hello') === 'HELLO', 'Где то ошибка')

// Напишите функцию, которая вычисляет среднее значение чисел в заданном массиве.

// Примечание: пустые массивы должны возвращать 0.

function findAverage(array) {
    if (array.length !== 0) {
        const sum = array.reduce((acc, num) => acc + num)
        return sum / array.length;
    }
    return 0
}
console.assert(findAverage([1, 2, 3]) === 2, 'Где то ошибка1')
console.assert(findAverage([]) === 0, 'Где то ошибка2')

// В этом ката речь идет об умножении заданного числа на восемь,
//  если это четное число, и на девять в противном случае.

function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9
}
console.assert(simpleMultiplication(2) === 16, 'Где то ошибка1')
console.assert(simpleMultiplication(3) === 27, 'Где то ошибка2')
console.assert(simpleMultiplication(0) === 0, 'Где то ошибка3')
console.assert(simpleMultiplication(-2) === -16, 'Где то ошибка4')
console.assert(simpleMultiplication(-5) === -45, 'Где то ошибка5')

function accum(s) {
    const arrLetter = s.split('')
    for (let i = 1; i < arrLetter.length; i++) {
        arrLetter[0] = arrLetter[0].toUpperCase()
        arrLetter[i] = arrLetter[i].charAt(0).toUpperCase() + arrLetter[i].toLowerCase().repeat(i)
    }
    return arrLetter.join('-')
}
console.assert(accum("ZpglnRxqenU") === "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu", 'Где то ошибка')
console.assert(accum("NyffsGeyylB") === "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb", 'Где то ошибка')

// Определите, какой сегодня порядковый день в году.

function toDayOfYear(arr) {
    let dayOfMonth = []
    if (arr[2] % 4 === 0 && arr[2] % 100 !== 0 || arr[2] % 400 === 0) {
        dayOfMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    }

    else { dayOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] }
    let curDay = 0
    if (arr[1] > 1) {
        dayOfMonth.length = arr[1] - 1
        curDay = dayOfMonth.reduce((acc, num) => acc + num) + arr[0]
    }
    else { curDay = curDay + arr[0] }
    return curDay
}
console.log(toDayOfYear([5, 1, 2017]))
console.assert(toDayOfYear([25, 12, 2017]) === 359, 'Где то ошибка1')
console.assert(toDayOfYear([31, 12, 2000]) === 366, 'Где то ошибка2')
console.assert(toDayOfYear([1, 5, 3000]) === 121, 'Где то ошибка2')
console.assert(toDayOfYear([14, 3, 1066]) === 73, 'Где то ошибка2')
console.assert(toDayOfYear([5, 11, 1604]) === 310, 'Где то ошибка2')
console.assert(toDayOfYear([31, 12, 2001]) === 365, 'Где то ошибка2')
console.assert(toDayOfYear([31, 12, 2004]) === 366, 'Где то ошибка2')

// Напишите функцию, которая принимает массив чисел (целые числа для тестов) и целевое число. Она должна найти два разных элемента в массиве, которые при сложении дают целевое значение. Индексы этих элементов затем 
// должны быть возвращены в кортеже/списке (в зависимости от вашего языка) следующим образом: (index1, index2).

function twoSum(numbers, target) {
    const res = []
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                res.push(i, j)
            }
        }

    }
    return res
}
console.log(twoSum([1234, 5678, 9012], 14690))
// console.assert(twoSum([1, 2, 3], 4) === 3, 'ошибка1')

// Банкоматы допускают использование 4- или 6-значных PIN-кодов,
//  которые не могут содержать ничего, кроме 4 или 6 цифр.

// Если функции передана допустимая строка PIN-кода, вернуть true, в противном случае вернуть false.

function validatePIN(pin) {

    return /^\d{4}$|^\d{6}$/.test(pin)
}
console.log(validatePIN("1234"))

// Вам дан массив(список) strarrстрок и целое число k. Ваша задача —
//  вернуть первую самую длинную строку, состоящую из k последовательных строк, взятых в массиве.

function longestConsec(strarr, k) {
    const topLength = [...strarr].sort((a, b) => b.length - a.length).slice(0, k)
    if (k <= strarr.length && k > 0) {
        return strarr.filter(str => topLength.includes(str)).join("")
    }
    return ""

}
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3))

// Завершите функцию, которая принимает в качестве входных данных неотрицательное целое число n и возвращает 
// список всех степеней числа 2 с показателем степени от 0 до n(включительно).

function powersOfTwo(n) {
    const res = []
    for (let i = 0; i <= n; i++) {
        let pow = Math.pow(2, i)
        res.push(pow)
    }
    return res
}
console.log(powersOfTwo(0))

// Напишите функцию feast, которая принимает имя животного и блюдо 
// в качестве аргументов и возвращает значение true или false, указывающее, разрешено ли животному принести блюдо на пир.

function feast(beast, dish) {
    return beast.at(0) === dish.at(0) && beast.at(-1) === dish.at(-1) ? true : false
}
console.log(feast("brown bear", "bear claw"))

// Возьмите массив и удалите каждый второй элемент из массива. Всегда сохраняйте первый элемент и начинайте удаление со следующего элемента.

function removeEveryOther(arr) {

    return arr.filter((_, index) => index % 2 === 0)

}
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))

// Возвращает количество гласных в заданной строке.

// Мы будем считать a, e, i, o, uгласными для этого Ката (но не y).

// Входная строка будет состоять только из строчных букв и/или пробелов.

function getCount(str) {
    const vowels = str.replace(/[aeiou]/g, '')
    return str.length - vowels.length;
}
console.log(getCount('abracadabra'))

// Суммировать все числа заданного массива (cq. list), за исключением самого высокого и самого низкого элемента (по значению, а не по индексу!).

function sumArray(array) {
    if (Array.isArray(array) && array.length !== 0) {
        const res = array.sort((a, b) => a - b)
        res.pop()
        res.shift()
        if (res.length > 0) {
            return res.reduce((acc, num) => acc + num)
        }
    }
    return 0
}
console.log(sumArray([6, 2, 1, 8, 10]))

// Вам дан массив целых чисел нечетной длины , в котором все числа одинаковы, за исключением одного числа.

// Завершите метод, который принимает такой массив и возвращает это единственное отличающееся число.

// Входной массив всегда будет действителен! (нечетная длина >= 3)

function stray(numbers) {
    const map = new Map()
    for (let i = 0; i < numbers.length; i++) {
        if (map.has(numbers[i])) {
            let curNum = map.get(numbers[i])
            map.set(numbers[i], curNum + 1)
        }
        else { map.set(numbers[i], 1) }
    }
    for ([key, value] of map) {
        if (value === 1) { return key }
    }
}
console.log(stray([1, 2, 1]))

// Ваша задача — написать функцию, которая увеличивает строку, чтобы создать новую строку.

// Если строка уже заканчивается цифрой, то число следует увеличить на 1.
// Если строка не заканчивается цифрой, к новой строке следует добавить цифру 1.

function incrementString(string) {
    const hasDigits = /\d/.test(string)
    if (!hasDigits) { return string + '1' }
    const match = string.match(/(\d+)$/);
    if (match) {
        const numberStr = match[1]
        const numberLength = numberStr.length
        const res = (parseInt(numberStr, 10) + 1).toString();
        const padded = res.padStart(numberLength, '0');
        return string.replace(/(\d+)$/, padded)
    }

}

console.log(incrementString("foobar000"))

// Возьмите 2 строки s1и , s2 включающие только буквы от a до z. Верните новую отсортированную строку (в алфавитном порядке возрастания), 
// максимально длинную, содержащую различные буквы - каждая взята только один раз - из s1 или s2.

function longest(s1, s2) {
    const setA = new Set([...s1])
    const setB = new Set([...s2])
    const res = new Set([...setA, ...setB])
    return Array.from(res).sort().join('')
}
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"))

// Напишите функцию, которая будет возвращать количество различных нечувствительных к регистру буквенных символов и числовых цифр, 
// которые встречаются более одного раза во входной строке. 
// Можно предположить, что входная строка содержит только буквы алфавита (как заглавные, так и строчные) и числовые цифры.

function duplicateCount(text) {
    const text2 = text.toLowerCase()
    const map = new Map()
    for (let i = 0; i < text2.length; i++) {
        if (map.has(text2[i])) {
            let curLetter = map.get(text2[i])
            map.set(text2[i], curLetter + 1)
        }
        else { map.set(text2[i], 1) }
    }
    let counter = 0
    for ([key, value] of map) {
        if (value > 1) { counter++ }
    }
    return counter
}
console.log(duplicateCount("aA11"))

// Вы получаете массив с результатами тестов ваших однокурсников. Теперь посчитайте средний балл и сравните свой!

// Возвращайтесь, trueесли вам станет лучше, иначе false!

function betterThanAverage(classPoints, yourPoints) {
    const sumClassPoints = classPoints.reduce((acc, num) => acc + num)
    let avgClassPoints = sumClassPoints / classPoints.length
    return yourPoints > avgClassPoints
}
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))

// Ваша задача — написать функцию, которая возвращает сумму последовательности целых чисел.

// Последовательность определяется тремя неотрицательными значениями: начало , конец , шаг .

const sequenceSum = (begin, end, step) => {
    const arr = []
    if (begin > end) { return 0 }
    for (let i = begin; i <= end; i += step) {
        arr.push(i)
    }
    return arr.reduce((acc, num) => acc + num)
};
console.log(sequenceSum(1, 5, 3))

// Ваша задача — преобразовать строки в то, как их написал бы Джейден Смит. 
// Строки — это настоящие цитаты Джейдена Смита, но они не написаны заглавными буквами так, как он изначально их набирал.

Object.defineProperty(
    String.prototype,
    'toJadenCase',
    {
        value:
            function toJadenCase() {
                return this
                    .split(" ")
                    .map(word => word.toUpperCase().charAt(0) + word.slice(1))
                    .join(" ")

            }
    }
);
console.log("How can mirrors be real if our eyes aren't real".toJadenCase())

// Если в качестве входных данных задано целое число, 
// можно ли округлить его до ближайшего (то есть «больше или равно») кратного 5 числа?

function roundToNext5(n) {
    return Math.ceil(n / 5) * 5 + 0
}
console.log(roundToNext5(-2))

// Вам нужно вернуть строку, которая выглядит как ромбовидная форма при печати на экране, используя *символы звездочки ( ). 
// Конечные пробелы должны быть удалены, и каждая строка должна заканчиваться символом новой строки ( \n).

function diamond(n) {
    if (n % 2 !== 0 && n > 0) {
        let star = "*"
        let space = " "
        let res = ''
        for (let i = 1; i <= n; i += 2) {
            let spaceRep = (n - i) / 2
            res += space.repeat(spaceRep) + star.repeat(i) + '\n'
        }
        for (let i = n - 2; i >= 1; i -= 2) {
            let spaceRep = (n - i) / 2
            res += space.repeat(spaceRep) + star.repeat(i) + '\n'
        }
        return res
    }
    return null;
}
console.log(diamond(3))

// Создайте функцию, которая возвращает значение, умноженное на 50 и увеличенное на 6. 
// Если введенное значение является строкой, она должна вернуть «Ошибка».

function problem(x) {
    if (typeof x === "string") { return "Error" }
    return x * 50 + 6
}
console.log(problem('fd'))

// Создайте функцию, которая возвращает имя победителя в поединке между двумя бойцами.

// Каждый боец ​​по очереди атакует другого, и тот, кто убьет другого первым, побеждает. Смерть определяется как наличие health <= 0.

function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function () { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    let attacker = fighter1.name === firstAttacker ? fighter1 : fighter2
    let defender = attacker === fighter1 ? fighter2 : fighter1

    while (fighter1.health > 0 && fighter1.health > 0) {
        defender.health -= attacker.damagePerAttack
        if (defender.health <= 0) break;
        [attacker, defender] = [defender, attacker];
    }
    return attacker.name;
}
console.log(declareWinner(new Fighter("Lew", 5, 2), new Fighter("Harry", 5, 4), "Lew"))

// В рамках этого ката вам необходимо создать функцию, 
// которая при наличии триплета возвращает индекс числового элемента, который находится между двумя другими элементами.

function gimme(triplet) {
    const res = [...triplet]
    const sorted = res.sort((a, b) => a - b)
    const middle = sorted[1]
    return triplet.indexOf(middle)
}
console.log(gimme([2, 3, 1]))

// Ваша задача — завершить предложенный метод и вернуть количество лет «Y» в целом, чтобы мистер Скрудж получил желаемую сумму.

function calculateYears(principal, interest, tax, desired) {
    let years = 0
    if (principal === desired) { return 0 }
    while (desired > principal) {
        let marj = principal * interest
        let taxed = marj * tax
        principal += marj - taxed
        years++
        if (desired <= principal) break;
    }
    return years
}
console.log(calculateYears(1000, 0.05, 0.18, 1100))

// Дан массив /список [] целых чисел . 
// Постройте массив произведений того же размера, такой, что prod[i] равен произведению всех элементов Arr[], кроме Arr[i] .

function productArray(numbers) {
    const res = []
    for (let i = 0; i < numbers.length; i++) {
        const multiply = numbers.reduce((acc, num) => acc * num)
        const elRes = multiply / numbers[i]
        res.push(elRes)
    }
    return res
}
console.log(productArray([12, 20]))
console.assert(JSON.stringify(productArray([12, 20])) === JSON.stringify([20, 12]), 'ошибка1')
console.assert(JSON.stringify(productArray([3, 27, 4, 2])) === JSON.stringify([216, 24, 162, 324]), 'ошибка2')
console.assert(JSON.stringify(productArray([13, 10, 5, 2, 9])) === JSON.stringify([900, 1170, 2340, 5850, 1300]), 'ошибка3')
console.assert(JSON.stringify(productArray([16, 17, 4, 3, 5, 2])) === JSON.stringify([2040, 1920, 8160, 10880, 6528, 16320]), 'ошибка4')

// Ваша задача — отсортировать заданную строку. Каждое слово в строке будет содержать одно число. 
// Это число — позиция, которую слово должно занимать в результате.

function order(words) {
    const arrLetter = words.split(" ")
    const copyArr = [...arrLetter].map(str => str.replace(/\D/g, '')).sort((a, b) => a - b)
    const res = copyArr.map(elem => arrLetter.find(el => el.includes(elem)))
    return res.join(' ')
}
console.log(order("is2 Thi1s T4est 3a"))
console.assert(order("is2 Thi1s T4est 3a") === "Thi1s is2 3a T4est", 'ошибка1')
console.assert(order("4of Fo1r pe6ople g3ood th5e the2") === "Fo1r the2 g3ood 4of th5e pe6ople", 'ошибка2')
console.assert(order("") === "", 'ошибка3')

// Дополните функцию так, чтобы она находила среднее значение трех переданных ей оценок и возвращала буквенное значение, связанное с этой оценкой.
function getGrade(s1, s2, s3) {
    const mark = (s1 + s2 + s3) / 3
    if (mark >= 90 && mark <= 100) { return 'A' }
    else if (mark >= 80 && mark <= 90) { return 'B' }
    else if (mark >= 70 && mark <= 80) { return 'C' }
    if (mark >= 60 && mark <= 700) { return 'D' }
    else { return 'F' }
}
console.log(getGrade(58, 59, 60))

// Вам необходимо найти слово с наивысшей оценкой из заданной строки слов.

// Каждая буква слова приносит очки в зависимости от ее положения в алфавите: a = 1, b = 2, c = 3и т. д.

// Например, счет abadбудет 8(1 + 2 + 1 + 4).

// Вам необходимо вернуть слово с наивысшим рейтингом в виде строки.

function high(x) {
    const arr = x.split(' ')
    const map = new Map()
    for (let i = 0; i < arr.length; i++) {
        const pos = arr[i].split('').map(str => str.charCodeAt(0) - 96).reduce((acc, num) => acc + num)
        if (map.has(arr[i])) {
            const curStr = map.get(arr[i])
            map.set(arr[i], curStr + pos)
        }
        else { map.set(arr[i], pos) }
    }
    let maxKey = null
    let maxValue = 0
    for ([key, value] of map) {
        if (value > maxValue) {
            maxValue = value;
            maxKey = key
        }
    }
    return maxKey
}
console.log(high('man i need a taxi up to ubud'))
console.assert(high('what time are we climbing up the volcano') === 'volcano', 'ошибка1')
console.assert(high('take me to semynak') === 'semynak', 'ошибка1')
console.assert(high('aa b') === 'aa', 'ошибка2')
console.assert(high('aa b') === 'aa', 'ошибка3')
console.assert(high('b aa') === 'b', 'ошибка4')
console.assert(high('bb d') === 'bb', 'ошибка5')
console.assert(high('d bb') === 'd', 'ошибка6')
console.assert(high('aaa b') === 'aaa', 'ошибка7')

// Что, если нам нужно добавить длину слов, разделенных пробелом, в конец того же слова и вернуть ее в виде массива?

function addLength(str) {
    const arr = str.split(" ")
    const res = []
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + " " + arr[i].length
        res.push(arr[i])
    }

    return arr
}
console.log(addLength("you will win"))

// Дан список целых чисел, определите, является ли сумма его элементов четной или нечетной.

// Дайте ответ в виде строки, соответствующей "odd"или "even".

function oddOrEven(array) {
    if (array.length === 0) { array.push(0) }
    const sum = array.reduce((acc, num) => acc + num)
    if (sum % 2 === 0) { return 'even' }
    return 'odd'
}
console.log(oddOrEven([]))

// Напишите функцию, которая принимает число в качестве входных данных и возвращает сумму абсолютных значений каждой из десятичных цифр числа.

function sumDigits(number) {
    const nums = Math.abs(number).toString().split('')
    return nums.map(Number).reduce((acc, num) => acc + num)

}
console.log(sumDigits(-32))

// Создайте функцию, которая получает (квадратную) матрицу и вычисляет сумму обеих диагоналей (главной и побочной)

function sum(matrix) {
    if (matrix.length === 0) { return 0 }
    const sumArr = []
    for (let i = 0; i < matrix.length; i++) {
        sumArr.push(matrix[i][i])
        let secondEl = matrix[i].length - i - 1
        sumArr.push(matrix[i][secondEl])
    }
    return sumArr.reduce((acc, num) => acc + num);
}
console.log(sum([[-2, 5, 3, 2], [9, -6, 5, 1], [3, 2, 7, 3], [-1, 8, -4, 8]]))
console.assert(sum([[-2, 5, 3, 2], [9, -6, 5, 1], [3, 2, 7, 3], [-1, 8, -4, 8]]) === 15, 'ошибка 1')
console.assert(sum([[4]]) === 8, 'ошибка 2')
console.assert(sum([[1, 2], [3, 4]]) === 10, 'ошибка 3')
console.assert(sum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) === 30, 'ошибка 4')
console.assert(sum([]) === 0, 'ошибка 5')

// В этом ката вы напишете арифметический список, который по сути является списком, содержащим последовательные термины в последовательности.

function seqlist(first, c, l) {
    const res = []
    let i = first;
    while (res.length < l) {
        res.push(i)
        i += c
    }
    return res
}
console.log(seqlist(100, -7, 10))

console.assert(JSON.stringify(seqlist(0, 1, 20)) === JSON.stringify([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]), 'ошибка1');
console.assert(JSON.stringify(seqlist(2, 2, 10)) === JSON.stringify([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 'ошибка2');
console.assert(JSON.stringify(seqlist(-12, 3, 4)) === JSON.stringify([-12, -9, -6, -3]), 'ошибка3');
console.assert(JSON.stringify(seqlist(4, 0, 15)) === JSON.stringify([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]), 'ошибка4');
console.assert(JSON.stringify(seqlist(0, -5, 8)) === JSON.stringify([0, -5, -10, -15, -20, -25, -30, -35]), 'ошибка5');
console.assert(JSON.stringify(seqlist(100, -7, 10)) === JSON.stringify([100, 93, 86, 79, 72, 65, 58, 51, 44, 37]), 'ошибка6');

// Представьте, что вы пытаетесь катить мяч на определенное расстояние по дороге. Мяч будет иметь начальную скорость, 
// которая медленно уменьшается из-за трения и трещин на дороге. Каждый раз, когда мяч катится на расстояние, равное его скорости, или перекатывается через трещину, его скорость уменьшается на 1. Учитывая скорость s, с которой мяч начинает катиться, 
// и дорожную карту r улицы, представленную строкой, верните, сможет ли мяч пересечь конец дороги (True или False).

function ballTest(s, r) {
    const roadArr = r.split('');
    let crack = 0;
    let step = 0;

    for (let i = 0; i < roadArr.length; i++) {
        step++;
        if (roadArr[i] === "x") crack++;

        if (step === s) {
            s -= (crack + 1);  // после завершения блока
            if (s <= 0 && i !== roadArr.length - 1) return false;  // если не успели добежать
            step = 0;
            crack = 0;
        }
    }

    // остаток (если дорога не кратна s)
    if (step > 0) {
        s -= (crack + 1);
        if (s < 0) return false;
    }

    return true;
}

console.log(ballTest(24, "xxxxxxxxxx_____x___xx__xx____________x__________x_"))

// Завершите решение так, чтобы оно возвращало отформатированную строку. 
// Возвращаемое значение должно быть равно "Value is VALUE", где value — это 5-значное дополненное число.


function solution(value) {
    const num = value.toString().padStart(5, '0')
    return `Value is ${num}`
}
console.log(solution(5))

// Учитывая начальные координаты обоих роботов и последовательность команд, 
// определите, существует ли вероятность столкновения двух роботов в какой-либо момент времени из-за пропущенных команд.

function willRobotsCollide(x1, y1, x2, y2, commands) {
    let posXRob1 = x1
    let posYRob1 = y1
    let posXRob2 = x2
    let posYRob2 = y2
    const robot1 = {
        posXRob1,
        posYRob1
    }
    const robot2 = {
        posXRob2,
        posYRob2
    }
    const left = "L"
    const right = "R"
    const up = "U"
    const down = "D"
    const comArr = commands.split('')
    for (let i = 0; i < comArr.length; i++) {

    }
    return comArr
}
console.log(willRobotsCollide(0, 0, 1, 0, "UL"))

// Водительский номер Великобритании состоит из личных данных водителя. Отдельные буквы и цифры могут быть закодированы с использованием приведенной ниже информации. Вам необходимо будет вывести полный 16-значный номер водительского удостоверения ЗАГЛАВНЫМИ БУКВАМИ.

function driver(data) {
    const res = []
    let fam1 = data[2].length < 5 ? data[2].padEnd(5, '9') : data[2]
    let fam2 = fam1.slice(0, 5)
    res.push(fam2)
    const year1 = data[3].split('-').pop()
    const year2 = year1[2]
    res.push(year2)
    const month1 = new Date(data[3])
    const month2 = month1.getMonth() + 1
    const month3 = month2.toString().padStart(2, '0')
    const month = data[4] === 'F' ? Number(month3) + 50 : month3
    res.push(month.toString())
    const date = data[3].split('-')[0]
    res.push(date)
    const numYear = year1[3]
    res.push(numYear)
    const letterName = data[0].split('')[0]
    res.push(letterName)
    const letterMidName = data[1].length === 0 ? '9' : data[1].split('')[0]
    res.push(letterMidName)
    const randomSym = '9AA'
    res.push(randomSym)
    return res.join('').toUpperCase()
}
console.log(driver(["John", "James", "Smith", "01-Jan-2000", "M"]))

// Завершите функцию возврата, true если два аргумента являются анаграммами друг друга; false в противном случае возвратите значение.

const isAnagram = function (test, original) {
    test = test.toLowerCase().split('').sort().join('')
    original = original.toLowerCase().split('').sort().join('')
    return test === original
};
console.log(isAnagram("dumble", "bumble"))
console.assert(isAnagram("foefet", "toffee") === true, 'Ошибка1')
console.assert(isAnagram("Buckethead", "DeathCubeK") === true, 'Ошибка2')
console.assert(isAnagram("Twoo", "WooT") === true, 'Ошибка3')
console.assert(isAnagram("dumble", "bumble") === false, 'Ошибка4')
console.assert(isAnagram("ound", "round") === false, 'Ошибка5')
console.assert(isAnagram("apple", "pale") === false, 'Ошибка6')

// Вам будет дано arrayи limit значение. Вы должны проверить, что все значения в массиве ниже или равны предельному значению. Если это так, верните true. В противном случае верните false.

function smallEnough(a, limit) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] > limit) { return false }
    }
    return true
}
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107))

// Дано: список и число, создайте новый список, содержащий каждое число listне более Nраз, без переупорядочивания.
// Например, если входное число равно 2, а входной список равен [1,2,3,1,2,1,2,3], вы берете [1,2,3,1,2], отбрасываете следующее, [1,2]так как это приведет к 1и 2нахождению в результате 3раз, а затем берете 3, что приводит к [1,2,3,1,2,3].
// С помощью списка [20,37,20,21]и числа 1результат будет равен [20,37,21].

function deleteNth(arr, n) {
    const res = [] /*- это массив, куда мы будем складывать отфильтрованные значения (ответ).*/
    const map = new Map()
    for (let num of arr) {
        const curNum = map.get(num) || 0 /*- возвращает текущее количество (|| 0 -  если undefined, значит число ещё не встречалось → считаем, что 0)*/
        if (curNum < n) { /*Проверяем: если число встретилось меньше n раз, то можно добавить его в результат*/
            res.push(num) - /*Добавляем число в итоговый массив res*/
                map.set(num, curNum + 1)  /*- Увеличиваем счётчик этого числа в map на 1 — то есть отмечаем, что оно уже ещё раз встретилось*/
        }
    }
    return res
}
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3))

// Напишите функцию, которая принимает в качестве аргумента одну непустую строку, состоящую только из строчных и заглавных букв ASCII ( word), 
// и возвращает упорядоченный список, содержащий индексы всех заглавных (верхних) букв в строке.

const capitals = function (word) {
    const res = []
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) { res.push(i) }
    }
    return res
};
console.log(capitals(''))


// В супермаркете есть очередь к кассам самообслуживания. Ваша задача — написать функцию для расчета общего времени, необходимого всем покупателям для оплаты!

// вход
// клиенты: массив положительных целых чисел, представляющих очередь. Каждое целое число представляет клиента, а его значение — это количество времени, которое требуется им для оформления заказа.
// n: положительное целое число, количество касс.
// выход
// Функция должна возвращать целое число — общее требуемое время.

function queueTime(customers, n) {
    if (customers.length === 0) { return 0 }
    if (customers.length < n) { return Math.max(...customers) }
    const tills = Array(n).fill(0)
    for (let i = 0; i < customers.length; i++) {
        let min = Math.min(...tills)
        let nextTill = tills.indexOf(min)
        tills[nextTill] += customers[i]
    }
    return Math.max(...tills)
}
console.log(queueTime([2, 2, 3, 3, 4, 4], 2))

// Ваша задача — написать функцию, которая может проверить корректность сообщения UVB-76. Функция должна возвращать значение, trueесли сообщение имеет правильный формат, и falseнаоборот.

function validate(message) {
    const test = message.split(' ')
    for (let i = 0; i < test.length; i++) {
        if (test[0] === 'MDZHB' && /^\d+$/.test(test[1]) && test[1].length === 2 && /^\d+$/.test(test[2]) && test[2].length === 3 && /^[A-Z]+$/.test(test[3]) && /^\d+$/.test(test[4]) && test[4].length === 2 && /^\d+$/.test(test[5]) && test[5].length === 2 && /^\d+$/.test(test[6]) && test[6].length === 2 && /^\d+$/.test(test[7]) && test[7].length === 2)
            return true
    }
    return false;
}
console.log(validate("MDZHB 12 733 EDINENiE 67 79 66 32"))
console.assert(validate("Is this a right message?") === false, 'Ошибка1')
console.assert(validate("MDZHB 12 733 EDINENIE 67 79 66 32") === true, 'Ошибка2')
console.assert(validate("MDZHB 12 733 INITIAL 67 79 66 32") === true, 'Ошибка3')
console.assert(validate("MDZHB 60 130 KROLI5T 58 89 54 54") === false, 'Ошибка4')
console.assert(validate("Is this a wrong message?") === false, 'Ошибка5')
console.assert(validate("MDZHB 12 733 VOSKHOD 67 79 66 32") === true, 'Ошибка6')
console.assert(validate("MD2HB 60 120 AKKRETSIA 58895454") === false, 'Ошибка7')
console.assert(validate("MDZHB 102 733 BZHDM 67 79 66 32") === false, 'Ошибка8')
console.assert(validate("MDZHB 12 733 VOSKHOD 67 79 66") === false, 'Ошибка9')

// Напишите swapфункцию, которая меняет местами два целых числа.

swap = ary => {
    ary[0] = ary[0] + ary[1]
    ary[1] = ary[0] - ary[1]
    ary[0] = ary[0] - ary[1]
    return ary
}
console.log(swap([100, 200]))

// Рассмотрим последовательность целых чисел xs и целевое целое число n. Ваша задача — написать функцию, которая подсчитывает, сколько комбинаций индексов xsудовлетворяют двум правилам:

// Размер комбинации должен быть на 1 меньше размера xs
// Сумма элементов, соответствующих индексам, должна быть равна n

function numCombo(arr, num) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        const group = arr.slice(0, i).concat(arr.slice(i + 1));
        if (group.reduce((acc, num) => acc + num) === num) { count++ }
    }
    return count;
}
console.log(numCombo([2, 0, 0, 0, 1], 2))


// При наличии математического уравнения, имеющего *,+,-,/, преобразуйте его следующим образом:

function solve(eq) {
    const exp = eq.match(/(\d+|[a-zA-Z]+|[+\-*/])/g)
    return exp.reverse().join('')
}
console.log(solve("100*b/y"))

// Даны два числа и арифметический оператор (его имя в виде строки), вернуть результат применения этого оператора к двум числам.

// aи bоба будут положительными целыми числами и aвсегда будут первым числом в операции, и bвсегда вторым.

// Четыре оператора: «сложение», «вычитание», «деление», «умножение».

function arithmetic(a, b, operator) {
    const operation = {
        "add": (a, b) => a + b,
        "subtract": (a, b) => a - b,
        'divide': (a, b) => a / b,
        'multiply': (a, b) => a * b
    }
    const func = operation[operator]
    return func(a, b)
}
console.log(arithmetic(1, 2, "divide"))

// Учитывая список целочисленных значений, ваша задача — вернуть сумму значений. Однако если одно и то же целое значение встречается в списке несколько раз, вы можете учесть его в сумме только один раз.

function uniqueSum(lst) {
    if (lst.length === 0) { return null }
    const set = new Set(lst)
    const res = [...set].reduce((acc, num) => acc + num)
    return res
}
console.log(uniqueSum([]))
console.assert(uniqueSum([1, 3, 8, 1, 8]) === 12, 'Ошибка1')
console.assert(uniqueSum([1, 2, 3]) === 6, 'Ошибка2')
console.assert(uniqueSum([-1, -1, 5, 2, -7]) === -1, 'Ошибка3')
console.assert(uniqueSum([]) === null, 'Ошибка4')

// Это простое упражнение для понимания функции языка JavaScript, называемой замыканием.

// Функция buildFun возвращает массив функций. Единственный параметр, принимаемый buildFun, — это количество элементов N возвращаемого массива.

// Желаемый результат заключается в том, что после выполнения всех функций в массиве должно быть возвращено число от 0 до N.

function buildFun(n) {

    let res = []

    function inner() {
        for (let i = 0; i < n; i++) {
            res.push(i);
        }
        return res
    }
    return inner
}
const counter = buildFun(10)
console.log(counter())

// Генетический алгоритм основан на группах хромосом, называемых популяциями. Чтобы создать популяцию хромосом, нам нужно сгенерировать случайные двоичные строки заданной длины.

// В этом ката вам необходимо реализовать функцию generate, которая получает a lengthи должна вернуть случайную двоичную строку с lengthсимволами.

const generate = length => {
    let res = ''
    for (let i = 0; i < length; i++) {
        res += Math.random() < 0.5 ? '0' : '1'
    }
    return res
};
console.log(generate(10))


// Декодирование — это тот же процесс, но в обратном порядке. Если мы декодируем csordaew, то получим codewars.

function encode(s) {
    const res = []
    let start = 0
    let end = s.length - 1
    while (start <= end) {
        if (start === end) {
            res.push(s[start])
        }
        else { res.push(s[start], s[end]) }
        start++;
        end--
    }
    return res.join('')
}
function decode(s) {
    const res = []
    let start = 0
    let end = s.length - 1
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            res[start++] = s[i]
        }
        else { res[end--] = s[i] }
    }
    return res.join('')
}
console.log(encode("codewars"))
console.log(decode("csordaew"))

// Напишите функцию, persistenceкоторая принимает положительный параметр numи возвращает его мультипликативную устойчивость, то есть количество раз, которое необходимо умножить цифры, numпока не получится однозначная цифра.

function persistence(num) {
    let count = 0
    while (num >= 10) {
        num = num.toString().split('').map(Number).reduce((a, b) => a * b)
        count++
    }
    return count
}
console.log(persistence(999))
console.assert(persistence(39) === 3, "Ошибка1")
console.assert(persistence(4) === 0, "Ошибка2")
console.assert(persistence(25) === 2, "Ошибка3")
console.assert(persistence(999) === 4, "Ошибка4")

// Вы только что обнаружили квадратное NxNполе ( ) и заметили предупреждающий знак. Знак гласит, что на двумерном сетчатом поле перед вами заложена бомба.

// Напишите функцию, которая принимает двумерный массив и возвращает местоположение мины. Мина представлена целым числом 1в двумерном массиве. Области в двумерном массиве, не являющиеся миной, будут представлены как 0s.

function mineLocation(field) {

    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
            if (field[i][j] === 1) {
                return [i, j]
            }
        }
    }
}
console.log(mineLocation([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0]]))

// Вы работаете специалистом по анализу данных в ИТ-компании, и ваш начальник внезапно попросил вас найти наиболее распространенные закономерности в играх «Крестики-нолики», представленных в опросе на веб-сайте вашей компании.

// Однако некоторые из них не из реальных игр, т. е. позиция на такой игровой доске не может быть достигнута посредством обычной игры.

// Вам придется найти способ отфильтровать такие «игры», оставив только правильные (достижимые).

function isValid(board) {
    // Функция для подсчета символов игрока на всем поле
    const countMoves = (board, player) => board.reduce((count, row) => count + [...row].filter(c => c === player).length, 0)
    const hasWon = (board, player) => {
        const winLines = [
            // Горизонтали
            [board[0][0], board[0][1], board[0][2]],
            [board[1][0], board[1][1], board[1][2]],
            [board[2][0], board[2][1], board[2][2]],
            // Вертикали
            [board[0][0], board[1][0], board[2][0]],
            [board[0][1], board[1][1], board[2][1]],
            [board[0][2], board[1][2], board[2][2]],
            // Диагонали
            [board[0][0], board[1][1], board[2][2]],
            [board[0][2], board[1][1], board[2][0]]
        ]
        return winLines.some(line => line.every(cell => cell === player))
    }
    //   количество ходов X
    const xCount = countMoves(board, 'X')
    //   количество ходов O
    const oCount = countMoves(board, 'O')
    //   выиграли ли первый игрок
    const xWins = hasWon(board, 'X')
    //   выиграли ли второй игрок
    const oWins = hasWon(board, 'O')

    // Проверки валидности

    // Некорректное количество ходов
    if (oCount > xCount || xCount > oCount + 1) { return false }
    // оба не могут выиграть одновременно
    if (xWins && oWins) { return false }
    // если первый игрок победил, то у него должен быть лишний ход
    if (xWins && xCount !== oCount + 1) { return false }
    // если второй игрок победил, то должно быть одинаково ходов
    if (oWins && oCount !== xCount) { return false }
    return true
}
console.log(isValid(["XOX", "XOX", "OXO"]))

// Создайте функцию с именем «rotate», которая принимает массив и возвращает новый массив с элементами внутри повернутых n пробелов.

// Если n больше 0, массив сдвигается вправо. Если n меньше 0, массив сдвигается влево. Если n равно 0, массив возвращается без изменений.

function rotate(array, n) {
    const res = [...array]
    const len = res.length
    n = n % len
    if (n > 0) {
        for (let i = 0; i < n; i++) {
            res.unshift(res.pop())
        }
    }
    if (n < 0) {
        for (let i = 0; i > n; i--) {
            res.push(res.shift())
        }
    }
    return res
}
console.log(rotate([1, 2, 3, 4, 5], 11))
console.assert(JSON.stringify(rotate([1, 2, 3, 4, 5], 1)) === JSON.stringify([5, 1, 2, 3, 4], 'ошибка1'))
console.assert(JSON.stringify(rotate([1, 2, 3, 4, 5], 2)) === JSON.stringify([4, 5, 1, 2, 3], 'ошибка2'))
console.assert(JSON.stringify(rotate([1, 2, 3, 4, 5], 3)) === JSON.stringify([3, 4, 5, 1, 2], 'ошибка3'))
console.assert(JSON.stringify(rotate([1, 2, 3, 4, 5], 4)) === JSON.stringify([2, 3, 4, 5, 1], 'ошибка4'))
console.assert(JSON.stringify(rotate([1, 2, 3, 4, 5], 5)) === JSON.stringify([1, 2, 3, 4, 5], 'ошибка5'))
console.assert(JSON.stringify(rotate([1, 2, 3, 4, 5], 0)) === JSON.stringify([1, 2, 3, 4, 5], 'ошибка6'))
console.assert(JSON.stringify(rotate([1, 2, 3, 4, 5], -1)) === JSON.stringify([2, 3, 4, 5, 1], 'ошибка7'))
console.assert(JSON.stringify(rotate([1, 2, 3, 4, 5], -2)) === JSON.stringify([3, 4, 5, 1, 2], 'ошибка8'))
console.assert(JSON.stringify(rotate([1, 2, 3, 4, 5], -3)) === JSON.stringify([4, 5, 1, 2, 3], 'ошибка9'))
console.assert(JSON.stringify(rotate([1, 2, 3, 4, 5], -4)) === JSON.stringify([5, 1, 2, 3, 4], 'ошибка10'))
console.assert(JSON.stringify(rotate([1, 2, 3, 4, 5], -5)) === JSON.stringify([1, 2, 3, 4, 5], 'ошибка11'))

var clonewars = function (kataPerDay) {
    let countClones = 1
    let kataByClones = 0

    for (let i = 0; i < kataPerDay; i++) {

        countClones = Math.pow(2, i)
        kataByClones += countClones * (kataPerDay - i)

    }

    return [countClones, kataByClones]
}
console.log(clonewars(0))

// Реализуйте функцию, которая отфильтровывает значения массива, удовлетворяющие заданному предикату.

function reject(array, predicate) {
    const res = array.filter(el => !predicate(el))

    return res
}
console.log(reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0))


// Дан квадрат matrix. Ваша задача — поменять местами его самые длинные диагонали, поменяв местами их элементы в соответствующих позициях.

function swapDiagonals(matrix) {
    let n = matrix.length
    for (let i = 0; i < n; i++) {
        let firstEl = matrix[i][i]
        matrix[i][i] = matrix[i][n - 1 - i]
        matrix[i][n - 1 - i] = firstEl

    }
    return matrix;
}
console.log(swapDiagonals([[43, 455, 32, 103], [102, 988, 298, 981], [309, 21, 53, 64], [2, 22, 35, 291]]))

// Напишите функцию, которая принимает строку (день недели) и целое число (число, которое нужно проверить), чтобы она сообщала врачу, боюсь я или нет. (возвращает логическое значение)

const AmIAfraid = function (day, num) {
    if (day === "Monday" && num === 12) { return true }
    if (day === "Tuesday" && num > 95) { return true }
    if (day === "Wednesday" && num === 34) { return true }
    if (day === "Thursday" && num === 0) { return true }
    if (day === "Friday" && num % 2 === 0) { return true }
    if (day === "Sunday" && (num === 666 || num === -666)) { return true }
    if (day === "Saturday" && num === 56) { return true }
    return false

}
console.log(AmIAfraid("Saturday", -666))
console.assert(AmIAfraid("Monday", 13) === false, "Ошибка1")
console.assert(AmIAfraid("Sunday", -666) === true, "Ошибка1")
console.assert(AmIAfraid("Tuesday", 2) === false, "Ошибка1")
console.assert(AmIAfraid("Tuesday", 965) === true, "Ошибка1")
console.assert(AmIAfraid("Friday", 2) === true, "Ошибка1")

// Вы — управляющий парка развлечений! Сегодня вы изучаете доход от продажи различных продуктов питания в вашем парке. 
// Все продавцы, работающие на вас, могут сообщить процент посетителей, употребляющих именно эти продукты. 
// На основе этих данных ваша текущая цель — разработать метод для определения минимального процента посетителей, которые должны были купить тот или иной продукт у всех продавцов в вашем парке.

function minimumPercentage(foods) {
    const sum = foods.reduce((acc, num) => acc + num, 0)
    const maxPr = sum - (foods.length - 1) * 100
    const res = [0, maxPr]
    return Math.max(...res)
}
console.log(minimumPercentage([50, 100]))

// Реализуйте версию rangeи sum(которую вы затем сможете скопировать и использовать в своих будущих ката, чтобы сделать их меньше).

Array.range = function (start, count) {
    const res = new Array(count).fill(0).map((_, index) => start + index)

    return res;
}
console.log(Array.range(-3, 5))

Array.prototype.sum = function () {
    if (this.length === 0) { return 0 }
    return this[0] + this.slice(1).sum()
}
console.log([-3, -2, -1, 0, 1, 2, 3].sum())

// Вес каждого восклицательного знака равен 2; вес каждого вопросительного знака равен 3. Положим две струны leftна rightвесы — уравновешены ли они?

// Если левая сторона тяжелее, возвращаемся "Left"; если правая сторона тяжелее, возвращаемся "Right"; если они сбалансированы, возвращаемся "Balance".

function balance(left, right) {
    let vLeft = 0
    let qLeft = 0
    let vRight = 0
    let qRight = 0
    for (let i = 0; i < left.length; i++) {
        if (left[i] === '!') { vLeft += 2 }
        if (left[i] === '?') { qLeft += 3 }
    }
    for (let i = 0; i < right.length; i++) {
        if (right[i] === '!') { vRight += 2 }
        if (right[i] === '?') { qRight += 3 }
    }
    let sumLeft = vLeft + qLeft
    let sumRight = vRight + qRight
    if (sumLeft > sumRight) { return 'Left' }
    if (sumLeft < sumRight) { return 'Right' }
    return 'Balance';
}
console.log(balance("!!???!????", "??!!?!!!!!!?"))

// Создайте функцию, которая принимает римское число в качестве аргумента и возвращает его значение в виде целого десятичного числа. Вам не нужно проверять форму римского числа.

function solution(roman) {
    const obj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let total = 0
    for (let i = 0; i < roman.length; i++) {
        const curValue = obj[roman[i]]
        const nextValue = obj[roman[i + 1]]
        if (nextValue && curValue < nextValue) {
            total -= curValue
        }
        else { total += curValue }
    }

    return total;
}
console.log(solution('MMVIII'))


// Ваша задача — реализовать функцию, которая принимает список целых чисел и сортирует его в волновом порядке на месте; ваша функция не должна ничего возвращать.

function waveSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (i % 2 === 0) {
            if (arr[i] < arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
        else {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr
}
console.log(waveSort([1, 2]))

// Имея строку, содержащую цифры (обозначающие силу пламени свечей), вычислите количество ударов, необходимое для того, чтобы потушить все свечи.

// Начиная с начала ряда, каждый удар может коснуться только трёх свечей, уменьшая их силу на одну. Вы сможете коснуться следующих свечей только после того, как погаснут свечи, стоящие прямо перед вами.

function blowCandles(str) {
    let count = 0
    const strNum = str.split('').map(Number)
    while (strNum.some(num => num > 0)) {
        count++

        let startIndex = strNum.findIndex(num => num > 0)
        for (let i = 0; i < 3; i++) {
            const curIndex = startIndex + i
            if (curIndex < strNum.length && strNum[curIndex] > 0) {
                strNum[curIndex]--;
            }
        }
    }
    return count
}
console.log(blowCandles("0323456"))

// Дано число n, такое что n > 1, найти, являются ли его корень 2- й степени , корень 4 -й степени и корень 8- й степени целыми числами (дробная часть равна 0), вернуть, trueесли оно существует, falseесли нет.

function perfectRoots(n) {
    let double = Math.pow(n, 1 / 2)
    let fourth = Math.pow(n, 1 / 4)
    let eights = Math.pow(n, 1 / 8)
    return double % 1 === 0 && fourth % 1 === 0 && eights % 1 === 0;
}
console.log(perfectRoots(6561))

// Завершите функцию, которая принимает 3 числа x, y and k(где x ≤ y) и возвращает количество целых чисел в диапазоне [x..y](включая оба конца), которые делятся на k.

function divisibleCount(x, y, k) {
    const diffOne = Math.floor(y / k)
    const diffTwo = Math.floor((x - 1) / k)
    return diffOne - diffTwo
}
console.log(divisibleCount(6, 11, 2))

// В этой задаче вам будет дан массив целых чисел, и ваша задача — вернуть сумму элементов, занимающих индексы, являющиеся простыми числами.

// Первый элемент массива находится по индексу 0.
function isPrime(num) {

    if (num <= 1) { return false }
    if (num <= 3) { return true }
    if (num % 2 === 0 || num % 3 === 0) { return false }
    for (let j = 5; j * j <= num; j += 6) {
        if (num % j === 0 || num % (j + 2) === 0) { return false }
    }
    return true
}

function total(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(i)) { sum += arr[i] }
    }
    return sum

};
console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]))

// Если дано строго положительное целое число n, цель этого ката — найти все возможные пары целых чисел, (a, b)произведение квадратов которых равно n:

// Верните двумерный массив этих пар.

function squareProduct(n) {
    const res = []
    const sqrtTwo = Math.sqrt(n)
    if(sqrtTwo % 1 !== 0){return res}
    for(let i = 1; i * i <= sqrtTwo; i++){
        if(sqrtTwo % i === 0){
            const j = sqrtTwo / i;

            res.push([i,j])
            
        }
    }
    
    return res;
}
console.log(squareProduct(256))

// При наличии строки s и символа cвернуть массив целых чисел, представляющих кратчайшее расстояние от текущего символа s до c.

function shortesttoChar(s, c) {
    const res = []
    let prev = -Infinity
  if(s === "" || c === ""){return res}
  if(!s.includes(c)){return res}
  for(let i = 0; i < s.length; i++){
    if(s[i] === c){prev = i}
    res[i] = i - prev
  }
  prev = Infinity
  for(let i = s.length - 1; i >= 0; i--){
    if(s[i] === c){prev = i}
    res[i] = Math.min(res[i], prev - i)
  }
  return res
}
console.log(shortesttoChar("aaaaaa", "b"))

// Расстояние Хэмминга — это мера сходства двух строк одинаковой длины. Дополните функцию так, чтобы она возвращала количество позиций, в которых входные строки не совпадают.

function hamming(a, b) {
	const arr1 = a.split('')
    const arr2 = b.split('')
    let count = 0
    for(let i = 0; i < arr1.length; i++){
if(arr1[i] !== arr2[i]){count++}
    }
    return count;
}
console.log(hamming("old father, old artificer","of my soul the uncreated "))

// Разница hamming distanceмежду парой чисел — это количество двоичных битов, которые различаются в своей двоичной записи.

function hammingDistance (a, b) {
    let num1 = a.toString(2)
    let num2 = b.toString(2)
    let count = 0
    const maxLength = Math.max(num1.length, num2.length)
    num1 = num1.padStart(maxLength, 0)
    num2 = num2.padStart(maxLength, 0)
    for(let i = 0; i < num1.length; i++){
        if(num1[i] !== num2[i]){count++} 
    }
  return count;  
}
console.log(hammingDistance(34013, 702))



