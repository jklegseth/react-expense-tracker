// const person = {
//   name: 'Andrew',
//   age: 33,
//   location: {
//     city: 'Burbank',
//     temp: 87
//   }
// };
//
// const { name: firstName = 'anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);
//
// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//   console.log(
//     `It's ${temperature} in ${city}`
//   );
// }
//
// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
// const {name: publisherName = 'Self-Published'} = book.publisher;
//
// console.log(publisherName);


//
// Arrays
//
const address = ['840 N. Kemp', 'Burbank', 'California', '91505'];

const [street, city, state, zip] = address;

console.log(street, city, state, zip);

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [name, , cost] = item;

console.log(`A medium ${name} costs ${cost}`);
