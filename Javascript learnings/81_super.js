//super
class Animal{
    constructor(fname,age){
        console.log("constructor called")
        this.fname = fname
        this.age = age

    }
    about(){
        return `Method present in animal class : ${this.fname} is ${this.age}`
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
    about(){
        return `this is modified about : ${this.fname} is ${this.age}`
    }
    isDanger(){
        return this.age >= 10
    }
}

// const animal1 = new Dog('Tiger',1,23)
// console.log(animal1)
// console.log(animal1.isDanger())
// console.log(animal1.about())

const animal2 = new Animal('Harry',2)
console.log(animal2.about())