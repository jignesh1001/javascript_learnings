// static methods and properties

class Person{
    constructor(firstname,lastname,age){
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }
    static classInfo(){
        return 'this is person class'
    }
    static desc = "static property"
    get fullName(){
        return `${this.firstname} ${this.lastname}`
    }
    set fullName(fullName){
        const [firstname,lastname] = fullName.split(" ") 
        this.firstname = firstname
        this.lastname = lastname
    } 
    about(){
        return `Method present in animal class : ${this.firstname} is ${this.age}`
    }
    isSuperCute(){
        return this.age <= 1;
    }
    iscute(){
        return true;
    }
        
}

const person1 = new Person("Harsh","Beniwal",27)
console.log(person1.about())
console.log(person1.isSuperCute())
console.log(Person.classInfo())
console.log(Person.desc)