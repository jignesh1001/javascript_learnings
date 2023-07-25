const URL = "https://jsonplaceholder.typicode.com/posts"
const xhr = new XMLHttpRequest()

// step1
xhr.open("GET",URL)


// xhr.onreadystatechange = function(){
    
//     if(xhr.readyState === 4){
//         console.log(xhr)
//         const response = xhr.response
//         // console.log( response)
//         const data = JSON.parse(response)
//         console.log(typeof data)
//     }
// }

// excutes only when readyState is 4

xhr.onload = function(){
    console.log(xhr.readyState)
        const response = xhr.response
        // console.log(response)
        const data = JSON.parse(response)
        console.log(data)

}
xhr.send()


