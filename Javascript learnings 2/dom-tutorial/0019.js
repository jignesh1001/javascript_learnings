// event object
// const firstButton = document.querySelector("#one")



// firstButton.addEventListener('click',function(event){
//     console.log(event)    
// })


// jab bhi main kisi bhi element pe eventlistener add hoga 
// js engine  -- lien by line execute karta hai
// browser -- js engine + extra features
// browser -- js engine + webapi

// jab browser ko pata chala ki user ne event perform kia 
// jo hum listen kar rahe the
// browser --- 
//1. callback function js engine ko dega
//2. callback function ke saath browser/webapi jo event hua hai  uski information bhi dega
// ye information hume object ke form me milegi


const allButtons = document.querySelectorAll(".my-buttons button")
allButtons.forEach(function(button){
    button.addEventListener("click",(e)=>
        console.log(e.currentTarget)
    )

})
