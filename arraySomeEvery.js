// Проверка наличия четного числа
function hasEvenNumber(arr) {
    return arr.some((num) => num % 2 === 0)
}
console.log(hasEvenNumber([1,2,3,4,5,6,7,8]))
console.log(hasEvenNumber([1,3,5,7]))

// Поиск строки длиннее 5 символов

function hasLongString(arr){
    return arr.some((str) => str.length > 5)
}
console.log(hasLongString(["cat", "dog", "elephant"]))
console.log(hasLongString(["cat", "dog", "pig"]))

// Проверка пользователей старше 18 лет

const users = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 15 }
];

function hasAdult(users){
    return users.some((user) => user.age >= 18)
}
console.log(hasAdult(users))

// Проверка наличия завершенных задач

const tasks = [
    { title: "Task 1", completed: false },
    { title: "Task 2", completed: true },
    { title: "Task 3", completed: false }
];

function hasTaskCompl(tasks){
    return tasks.some((task) => task.completed)
}
console.log(hasTaskCompl(tasks))


// Все числа положительные

function allPositive(nums){
    return nums.every((num) => num > 0)
}
console.log(allPositive([1,2,3,4,5]))
console.log(allPositive([1,2,3,4,-5]))

// Все числа четные


function allEven(nums){
    return nums.every((num) => num % 2 === 0)
}
console.log(allEven([2,4,6,8,10]))
console.log(allEven([2,4,6,8,9]))

// Все товары в наличии

const products = [
    { name: "Laptop", inStock: true },
    { name: "Mouse", inStock: true },
    { name: "Keyboard", inStock: false }
];

function allInStock(products){
    return products.every((product) => product.inStock)
}
console.log(allInStock(products))