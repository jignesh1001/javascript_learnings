// optional chaining

const user = {
    name : "Jagdish",
    // address : ''
}
console.log(user?.address?.street)
console.log(user?.name)
// ? prevents from typerror of finding property of undefined