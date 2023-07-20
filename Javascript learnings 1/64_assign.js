// clone using  Object.assign
// objects are stored in heap memory obj & obj1 pointed to same memory location
// using Object.assign we cloned obj and a new array is created in memory 
// which is asigned to obj1
const obj = {
    key1 : "value1",
    key2 : "value2"
}
const obj1 = Object.assign({key4 : "value4",key5 : "value5"},obj)
obj.key3 = "value3"
console.log(obj)
console.log(obj1)