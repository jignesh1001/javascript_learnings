// intro to promises
console.log("Script starts")
const bucket = ["coffee", "chips", "vegetables", "salt","rice"];

// promise produce
const friedRicePromise = new Promise((resolve, reject) => {
    if (
        bucket.includes("vegetables") &&
        bucket.includes("salt") &&
        bucket.includes("rice")
        ) {
            resolve({value:"FriedRice"});
        } else {
            reject("couldn't do it");
        }
    }); 
    
//  console.log(friedRicePromise)   
    // consume promise
    // how to consume
// consumption of promise is done by browser
// added i  microtask queue    
    friedRicePromise.then(
        // jab promise resolve hoga
        (myFriedRice) => {
            console.log("Lets eat ", myFriedRice);
        }
        // jab promise reject hoga
        
        ).catch((error) => {
            console.log( error);
        })
// added in callback queue        
        setTimeout(()=>{
            console.log("Hello from settimeout")
          },0)
        
// for loop for understanding ansynchronous behaviour of promise        
        for(let i = 0;i<=100;i++){
            console.log(Math.random(),i)
        }
        
        console.log("Script ends")