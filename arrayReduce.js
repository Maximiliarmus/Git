// Метод reduce() используется для свертки (агрегирования) массива в одно значение. Он проходит по всем элементам массива и накапливает результат, используя переданную коллбэк-функцию.

// Сумма всех чисел в массиве

function sumArray(numbers){
    return numbers.reduce((sum, num) => sum + num, 0)
}

console.log(sumArray([1,2,3,4,5,6,7]))

// Произведение всех чисел в массиве

function multiplyArray(numbers){
    return numbers.reduce((multiply, num) => multiply * num, 1)
}
console.log(multiplyArray([1,2,3,4,5,6]))

// Нахождение среднего арифметического через reduce

function averageArray(nums){
    const sum = nums.reduce((acc, num) => acc + num)
    return sum / nums.length;
}
console.log(averageArray([2,4,6,8,10]))