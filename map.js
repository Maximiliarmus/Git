// Создайте объект Map, добавьте в него три пары ключ-значение:

// "name" → "Alice"
// "age" → 25
// "city" → "New York"
// Выведите объект в консоль.

const userMap = new Map()
userMap.set('name', 'Max')
userMap.set('age', '25')
userMap.set('city', 'Vlad')

console.log(userMap)

// Из коллекции userMap получите значение по ключу "name" и выведите его в консоль.

console.log(userMap.get('name'))

// Проверьте, есть ли в userMap ключ "country", и выведите true или false.

console.log(userMap.has('city'))

// Удалите из userMap ключ "city" и выведите обновленный Map.

userMap.delete('city')
console.log(userMap)

// Выведите количество элементов в userMap.
userMap.set('city', 'Vlad')
console.log(userMap.size)
