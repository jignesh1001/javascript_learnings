// Maps
// const person = {
//     firstName: "Akshat",
//     age : 7,
//     1: "one"
// }
// console.log(person.firstName)
// console.log(person["firstName"])
// for(let key in person){
//     console.log(typeof key)
// }

// key value pair
const persons = new Map();
persons.set("firstname", "harshit");
persons.set("age", 90);
persons.set(1, "one");
// console.log(persons)
persons.set([1, 2, 3, 4], "NUMBERS");
// console.log(persons.get('firstname'))
// console.log(persons.get('age'))
// console.log(persons.get(1))
// console.log(persons.keys())
// for(let key of persons.keys()){
//     console.log(key,typeof key)
// }
// for(let key of persons){
//     console.log(key, Array.isArray(key))
// }
// for(let [key,value] of persons){
//     console.log(key,value)
// }
const person = new Map([
  ["firstName", "Harshit"],
  ["lastName", "Sharma"],
  ["age", "22"],
]);
// console.log(person)
const person1 = {
  id: 1,
  firstName: "Harshit",
};
const person2 = {
  id: 2,
  firstName: "Harshita",
};
const extraInfo = new Map();
extraInfo.set(person1, { age: 12, gender: "male" });
extraInfo.set(person2, { age: 12, gender: "female" });
console.log(extraInfo);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);
