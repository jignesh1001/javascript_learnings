// new keyword
function createUser(firstname,age){
    this.firstname = firstname;
    this.age = age 

}
createUser.prototype.about = function(){
    console.log(this.firstname,this.age)
}

const user1 = new createUser("harshit",12)
console.log(user1)
user1.about()