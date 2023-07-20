function CreateUser(firstname,lastname,email,age,address){
    this.email = email
    this.age = age
    this.address = address
    this.firstname = firstname
    this.lastname = lastname
    
}
CreateUser.prototype.about = function(){
            return `${this.firstname} is ${this.age} years old`;
        }
CreateUser.prototype.is18 = function(){
            return `${this.firstname} is ${this.age} years old`;
        }       
CreateUser.prototype.sing = function() {
            return "too nan nana"
        }
        const user1 = new CreateUser('harsh','modi','modiagain2024@gmail.com',18,'akhand Bharat')
        const user2 = new CreateUser('harshit','adani ','adani2024@gmail.com',12,'akhand Gujrat')
        const user3 = new CreateUser('mohit','adani ','mohitadani2024@gmail.com',13,'akhand Gujrat')
for(let key in user1){
    // console.log(key)
    if(user1.hasOwnProperty(key)){
        console.log(key)
    }

}