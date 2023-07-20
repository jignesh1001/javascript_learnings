// getters and setters

// get is used to treat method as a property
class Person{
    constructor(firstname,lastname,age){
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }
    get fullName(){
        return `${this.firstname} ${this.lastname}`
    }
    set fullName(fullName){
        const [firstname,lastname] = fullName.split(" ") 
        this.firstname = firstname
        this.lastname = lastname
    } 
}

const person1 = new Person("Sukhvinder","Chadda",43)
person1.fullName = "Ali Abdaal"
console.log(person1)
console.log(person1.fullName)
