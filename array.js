// Map, filter, reduce, some, every, find, indexof, forEach

const nums = [1,2,3,4,5,6];
const squares  = nums.map((num) => {
    return num * num
})
console.log(squares)

// const number = [1,2,3,4,5,6]
// const newNumber = number.map((number) => number * 2)
// console.log(newNumber)

const number = [1,2,3,4,5,6]
const newNumber = []

for(let i = 0; i < number.length; i++){
    newNumber.push(number[i] * 2)
}
console.log(newNumber)

// const number2 = [1,3,5,7,8,9]
// const newNumber2 = number2.map((number2) => {
//     return number2 -= 2
// })
// console.log(newNumber2)

const number2 = [1,3,5,7,8,9]
const newNumber2 = []
for(let i = 0; i < number2.length; i++){
    newNumber2.push(number2[i] - 2)
}
console.log(newNumber2)

// const number3 = [1,3,5,6,12,132]
// const newNumber3 = number3.map((number3, index) =>{
//     return index === 2 ? number3 / 2 : number3
// })
// console.log(newNumber3)

const number3 = [1,3,5,6,12,132]
const newNumber3 = []

for (let i = 0; i < number3.length; i++){
    if(i === 2){
        newNumber3.push(number3[i] / 2)
    }
    else{newNumber3.push(number3[i])}
}
