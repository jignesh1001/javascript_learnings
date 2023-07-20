// computed properties

const key1 = "objkey1";
const key2 = "objkey2";
const key3 = "objkey3";
const key4 = "objkey4";

const value1 = "myvalue1"
const value2 = "myvalue2"
const value3 = "myvalue3"
const value4 = "myvalue4"

//what we have to achieve
// const obj = {
//     objkey1 : "myvalue1",
//     objkey2 : "myvalue2",
// }

// how can we achieve
const obj = {
    // [key1] : value1,
    // [key2] : value2,
    // [key3] : value3,
    // [key4] : value4,
}
obj[key1] = value1;
obj[key2] = value2;
obj[key3] = value3;
obj[key4] = value4;

const object5 = {};

object5[key1] = value1;
object5[key2] = value2;
object5[key3] = value3;
object5[key4] = value4;

 console.log(obj);
 console.log(typeof(obj))
 console.log(Array.isArray(obj))
console.log(object5);
