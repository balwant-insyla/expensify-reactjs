//
const person = {
    name: 'Balwant',
    age: 35,
    location: {
        city: 'Mohali',
        temp: 35
    } 
}

const {name = 'Default name', age} = person
const {city, temp: temperature} = person.location

console.log(`${name} is ${age}`)
console.log(`${city } has ${temperature}`)

const address = ['Randhara', 'Mandi', 'HP', '175001']

const [street, cityName, state='default state', zip] = address
//const [, city, state, zip] = address

console.log(`${cityName } and ${state}`)