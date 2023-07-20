//super
class Animal{
    constructor(fname,age){
        console.log("constructor called")
        this.fname = fname
        this.age = age

    }
    about(){
        return `${this.fname} is ${this.age}`
    }
    isSuperCute(){
        return this.age <= 1;
    }
    iscute(){
        return true;
    }
}
class Dog extends Animal{
    constructor(fname,age,speed){
        super(fname,age)
        this.speed = speed
    }
    isDanger(){
        return this.age >= 10
    }
}

const animal1 = new Dog('Tiger',1,23)
console.log(animal1)
console.log(animal1.isDanger())