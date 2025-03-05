// Метод filter() используется для фильтрации массива — он создаёт новый массив, содержащий только те элементы, которые соответствуют заданному условию.

// Фильтрация чётных чисел

const nums = [1,2,3,4,5,6,7,8,9,10]

const evenNums = nums.filter((nums) => nums % 2 === 0)
console.log(evenNums)

// const nums = [1,2,3,4,5,6,7,8,9,10];
// const evenNums = [];

// for(let i = 0; i < nums.length; i++){
//     if(nums[i] % 2 !== 0){
//         evenNums.push(nums[i]);
//     }

// }
// console.log(evenNums)

// Задача: оставить пользователей, у которых возраст 18 и больше.
const users = [
    { name: "Анна", age: 25 },
    { name: "Борис", age: 17 },
    { name: "Василий", age: 30 },
    { name: "Олег", age: 16 }
];

const adults = users.filter((user) => user.age >= 18);

console.log(adults);

// const users = [
//         { name: "Анна", age: 25 },
//         { name: "Борис", age: 17 },
//         { name: "Василий", age: 30 },
//         { name: "Олег", age: 16 }
//     ];

// const adults = []

// for(let i = 0; i < users.length; i++){
//     if(users[i].age >= 18){
//         adults.push(users[i])
//     }
// }
// console.log(adults)

// Дан массив чисел. Найдите среднее значение и оставьте только те числа, которые больше среднего.

const nums2 = [10, 20, 30, 40, 50, 60, 70];
let total = 0
let average = 0
nums2.forEach((nums) => (total += nums) / nums2.length)
average = total / nums2.length;
console.log(total)
console.log(average)
nums3 = nums2.filter((num) => num > average)
console.log(nums3)

// Задание: Дано несколько товаров с ценами. Оставь только те, которые дороже 100 рублей.
const products = [
    { name: "Шоколад", price: 80 },
    { name: "Молоко", price: 120 },
    { name: "Хлеб", price: 40 },
    { name: "Сыр", price: 200 },
  ];

const expensiveProducts = products.filter((product) => product.price >= 100);
    console.log(expensiveProducts)

    // const products1 = [
    //     { name: "Шоколад", price: 80 },
    //     { name: "Молоко", price: 120 },
    //     { name: "Хлеб", price: 40 },
    //     { name: "Сыр", price: 200 },
    //   ];
    //   const expensiveProducts1 = []

    //   for(let i = 0; i < products1.length; i++){
    //     if(products1[i].price >= 100){
    //         expensiveProducts1.push(products1[i])
    //     }

    //   }
    //   console.log(expensiveProducts1)


