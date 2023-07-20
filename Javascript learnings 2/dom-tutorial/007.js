// innnerHTML
const headline = document.querySelector(".headline")
console.log(headline.innerHTML)
headline.innerHTML = "<h1>Inner html changed</h1>"
headline.innerHTML += "<button class= \"btn btn-headline\"> Learn more </button>"
console.log(headline.innerHTML)
