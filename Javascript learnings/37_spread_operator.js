// spread operator

const array1 = [1,2,3]
const array2 = [5,6,7]

// const newArray = [ ...array1,...array2,89,98]
const newArray =[...'12345667890']
// console.log(newArray)

// spread operator in objects

const obj1 = {
    key1: 'value1',
    key2: 'value2',
    key1: 'value67', // only one key1 can be there also the last value given wiil be the value that key1 will take
};
const obj2 = {
    key1:'value_obj2',
    key3: 'value3',
    key4: 'value4',
    
};

// const newObject = {...obj2,...obj1,key5: 'value69'};
// const newObject = {...obj1,...obj2};
// for key1 value will be taken from last object which was spread
// console.log(obj1);
// const newObject = {...'abc'}
const newObject = {...'abcdefghijklmnopqrstuvwxyz'}
// console.log(newObject);
let i  = 0;
for( i = 0;i < 26;i++){
    // console.log('Character at index ' + i + ' is ' + newObject[i]);
}

for(let key in newObject){
    console.log('Character at index ' +key+ ' is ' + newObject[key]);
}
console.log("Loop ended")
console.log(Object.keys(newObject))
console.log(Array.isArray(Object.keys(newObject)))


