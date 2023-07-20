// function returning promise
function ricePromise(){
const bucket = ["coffee", "chips", "vegetables", "salt","rice"];
 return new Promise((resolve, reject) => {
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
}


ricePromise().then(
    // jab promise resolve hoga
    (myFriedRice) => {
        console.log("Lets eat ", myFriedRice);
    }
    // jab promise reject hoga
    ).catch((error) => {
        console.log( error);
    })