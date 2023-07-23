   // Promise.resolve
// Promise Chaining

// const myPromise = Promise.resolve(8)
// myPromise.then(value=>{
//     console.log(value)
// })

// then() 
// then method hamesha promise return karta hai

function myPromise(){
    return new Promise((resolve,reject)=>{
        resolve("foo")
        
    })
}

myPromise().then(value=>{
    console.log(value)
    value += "bar"
    return value
    // return Promise.resolve(value)
})
.then((value)=>{
    console.log(value)
    value += "baaz"
    return value
})
.then((value)=>{
    console.log(value)
    // value += "baaz"
    // return value
})

