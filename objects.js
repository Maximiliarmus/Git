// Создайте объект person с полями: name, age, city. Выведите его в консоль.
const person = {
    name: 'Max',
    age: 29,
    city: 'Vladivostok'
}
console.log(person)

// Выведите в консоль имя и возраст из объекта person.

console.log(person.name)
console.log(person.age) 

// Добавьте в объект person свойство job со значением "Разработчик". Затем удалите свойство city.
person.job = 'Developer'
delete person.city
console.log(person)

// Измените возраст в объекте person на 30 лет.
person.age = 30
console.log(person)

// Добавьте в объект person метод greet, который выводит "Привет, меня зовут {name}".

person.greet = function(){
    console.log(`Привет, меня зовут ${this.name}`)
}
person.greet();

// Создайте объект car, у которого есть свойства brand, model и вложенный объект owner с name и age.
const car = {
    brand: 'Nissan',
    model: 'X-Trail',
    owner:{
        name: 'Alex',
        age: 25,
    }
}
console.log(car.owner.age)

// Склонируйте объект person в новую переменную personCopy.
const personCopy = {...person}
console.log(personCopy)

// Проверьте, есть ли у объекта person свойство city.
console.log('city' in person)

