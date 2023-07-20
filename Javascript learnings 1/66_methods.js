// methods
// functions inside object
function print(){
     
    console.log(`First name is ${this.firstname} and age is ${this.age}`)
   //  console.log(`First name is ${person.firstname} and age is ${person.age}`)
  }

const person1  = {
   firstname : "Prateek",
   age : 8,
   about : print
}
const person2 = {
   firstname : "Altaf",
   age : 12,
   about : print
}
const person3 = {
   firstname : "Shahrukh",
   age : 18,
   about : print
}
person1.about() 
person2.about()
person3.about()