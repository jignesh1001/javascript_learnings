// callbacks,callback hell ,pyramid of doom
// asynchronous programming
// console.log("hello world")
const heading1 = document.querySelector('.heading1')
const heading2 = document.querySelector('.heading2')
const heading3 = document.querySelector('.heading3')
const heading4 = document.querySelector('.heading4')
const heading5 = document.querySelector('.heading5')
const heading6 = document.querySelector('.heading6')
const heading7 = document.querySelector('.heading7')
// setTimeout(()=>{
//     heading1.textContent = "one"
//     heading1.style.color = "violet"
//     setTimeout(()=>{
//         heading2.textContent = "two"
//         heading2.style.color = "purple"
//         setTimeout(()=>{
//             heading3.textContent = "three"
//             heading3.style.color = "red"
//             setTimeout(()=>{
//                 heading4.textContent = "four"
//                 heading4.style.color = "pink"
//                 setTimeout(()=>{
//                     heading5.textContent = "five"
//                     heading5.style.color = "green"
//                     setTimeout(()=>{
//                         heading6.textContent = "six"
//                         heading6.style.color = "blue"
//                         setTimeout(()=>{
//                             heading7.textContent = "seven"
//                             heading7.style.color = "brown"
                        
//                         },1000)
//                     },3000)
//                 },2000)
//             },1000)
//         },2000)
//     },2000)
// },1000)

function changeText(element,text,color,time,onSuccessCallback,onFailCallback){
    setTimeout(()=>{
if(element){
    element.textContent = text;
    element.style.color = color
    // element.style.color = color
    if(onSuccessCallback)
    {
        onSuccessCallback()
    }
}
else{
    if(onFailCallback)
    {
        onFailCallback()
    }
}
    },time)
}
changeText(heading1,"one","violet",1000,()=>{
    changeText(heading2,"two","cyan",1000,()=>{
        changeText(heading3,"three","red",1000,()=>{
            changeText(heading4,"four","green",1000,()=>{
                changeText(heading5,"five","grey",1000,()=>{
                    changeText(heading6,"six","blue",1000,()=>{
                        changeText(heading7,"seven","orange",1000,()=>{

                        },()=>{
                            console.log("Heading7 does not exist")
                        })
                    },()=>{
                        console.log("Heading6 does not exist")
                    })
                },()=>{
                    console.log("Heading5 does not exist")
                })
            },()=>{
                console.log("Heading4 does not exist")
            })
        },()=>{
            console.log("Heading3 does not exist")
        })
    },()=>{
        console.log("Heading2 does not exist")
    })
},()=>{
    console.log("Heading1 does not exist")
})