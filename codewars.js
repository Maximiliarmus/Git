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

function parseStr(str) {
    const parseStr = str.split(" ")
    return parseStr
}
console.log(parseStr("I love arrays they are my favorite"))

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

function fakeBin(x){
const arrNums = x.split("").map(Number);
const arrRes = []   
for(let i = 0; i < arrNums.length; i++){
    
    if(arrNums[i] < 5){
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