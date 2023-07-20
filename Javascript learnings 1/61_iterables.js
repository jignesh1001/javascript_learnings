// itreables
// string,array are itreables
// objects are not iterable

const firstName = "Hathiram"
for(let char of firstName){
    console.log(char.toUpperCase())
}
const users = ["user1" ,"user2","user3"]
for(user of users){
    console.log(user.toUpperCase())
}

// const obj1 = {
//     'key1': 'value1',
//     'key2': 'value2',
//     'key3': 'value3',
//     'key4': 'value4',
    
// }
// for(elements of obj1){
//     console.log(elements)
// }

// array like objects 
// jinke pass length property hoti hai
// aur jinko hum index se access kar sakte hai
// example - string

const firstname = "harshit";
console.log(firstname.length)
console.log(firstname[4])