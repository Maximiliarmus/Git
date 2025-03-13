// Задание: Создайте Set, добавьте в него числа 1, 2, 3, 4, 5 и выведите его в консоль.
const nums = new Set([1,3,4,5,4,5,6,7])
console.log(nums)

// Задание: Добавьте в Set числа 6 и 7, затем попробуйте добавить 3 еще раз. Выведите множество в консоль.
nums.add(6);
nums.add(8);
nums.add(9);
console.log(nums)

// Задание: Проверьте, есть ли в множестве число 4, а также число 10. Выведите результаты в консоль.
console.log(nums.has(4));
console.log(nums.has(11));

// Задание: Удалите число 2 из множества и выведите Set в консоль.
nums.delete(2)
console.log(nums)
// Добавим обратно
nums.add(2)
console.log(nums)

// Задание: Выведите количество элементов в Set.

console.log(nums.size)

// Задание: Очистите множество и выведите его.
nums.clear()
console.log(nums)

// Задание: Создайте Set с числами 10, 20, 30, 40. Используйте forEach и for...of для вывода всех элементов.

const nums2 = new Set([10,20,30,40])

nums2.forEach((num) => console.log(num))

for(let num of nums2){
    console.log(num)
}

// Задание: У вас есть массив с повторяющимися числами. Удалите дубликаты с помощью Set.
const dubl = [1,2,2,3,3,4,5,6,7,7]
const noDubl = new Set(dubl)
console.log(dubl)
console.log([...noDubl])

// Задание: Найдите пересечение двух множеств setA и setB (общие элементы).

const setA = new Set([1,2,3,4,5,6,7])
const setB = new Set([4,5,6,7,8,9,10])

const x = new Set([...setA].filter((num) => setB.has(num)))
console.log(x)

// Задание: Найдите разность setA - setB (элементы, которые есть в setA, но нет в setB).

const diff = new Set([...setA].filter((num) => !setB.has(num)))
console.log(diff)

// Задание: Объедините setA и setB в одно множество.

const union = new Set([...setA, ...setB])
console.log(union)

