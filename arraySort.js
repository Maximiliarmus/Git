// Метод sort() используется для сортировки массивов. По умолчанию он сортирует элементы как строки в 
// лексикографическом порядке. Чтобы правильно сортировать числа или объекты, нужно передавать функцию сравнения.

// Сортировка чисел по возрастанию

const nums = [1,9,5,3,23,231,213321]
nums.sort((a,b) => a - b)
console.log(nums)

const nums2 = [1,9,5,3,23,231,213321]
nums2.sort((a,b) => b - a)
console.log(nums2)



const num3 = [1,9,5,3,23,231,213321]

function sort(a, b){
    if(a > b) {
        return 1
    }
    else if(a < b){
        return -1
    }
    else{
        return 0
    }
}
console.log(num3.sort(sort))