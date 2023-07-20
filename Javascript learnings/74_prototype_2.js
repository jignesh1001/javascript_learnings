
// const userMethods = {
//     about : function(){
//         return `${this.firstname} is ${this.age} years old`;
//     },
//     is18 : function(){
//         return `${this.firstname} is ${this.age} years old`;
//     }
//     sing : function() {
//         return "too nan nana"
//     }
// }
function createUser(firstname,lastname,email,age,address){
    const user = Object.create(createUser.prototype)
    user.firstname = firstname
    user.lastname = lastname
    user.email = email
    user.age = age
    user.address = address
    return user;
}
createUser.prototype.about = function(){
            return `${this.firstname} is ${this.age} years old`;
        }
createUser.prototype.is18 = function(){
            return `${this.firstname} is ${this.age} years old`;
        }       
createUser.prototype.sing = function() {
            return "too nan nana"
        }
const user1 = createUser('harsh','modi','modiagain2024@gmail.com',18,'akhand Bharat')
const user2 = createUser('harshit','adani ','adani2024@gmail.com',12,'akhand Gujrat')
const user3 = createUser('mohit','adani ','mohitadani2024@gmail.com',13,'akhand Gujrat')
console.log(user1)
console.log(user1.about())
console.log(user1.sing())
console.log(user1.is18())
console.log(user3.about())
console.log(user3.is18())

