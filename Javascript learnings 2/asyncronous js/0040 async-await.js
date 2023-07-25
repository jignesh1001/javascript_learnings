// async await 
// fetch(URL)
// .then(response => response.json())
// .then(data => console.log(data))

const URL = "https://jsonplaceholder.typicode.com/postss"
async function getPosts(){
    const response = await fetch(URL)
    if(!response.ok ){
        throw new Error("Something went wrong")
    }
    const data = await response.json()
    return data
}
// const myData = getPosts()
// console.log(myData)

getPosts().then(mydata => console.log(mydata))
           .catch(error => console.log(error))


