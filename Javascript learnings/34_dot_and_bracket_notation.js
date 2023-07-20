// difference between dot and bracket notation

const key = "email";
const person = {
    "name" : "harshit",
    "age": 22,
    "person hobbies" : [ "guitar","sleeping", "listening music"]
}

console.log(person["person hobbies"])

person[key] = "harshitvashisht@dev.com"
console.log(person)

/* to access the value of key variable and use it as key in object 
 we use bracket notation. Instead of using key as key value the 
 value within key variable is taken as key */