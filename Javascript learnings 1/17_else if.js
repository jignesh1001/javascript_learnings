//if
//else if 
//else if 
//else 

let tempInDegree = 12;

if(tempInDegree < 0){
    console.log("Extremely cold Outside")
}
else if(tempInDegree < 16){
    console.log("It is cold outside")
}
else if(tempInDegree < 25){
    console.log("Weather is okay")
}
else if(tempInDegree < 35){
    console.log("Let go for a swim")
}
else if(tempInDegree < 45){
    console.log(" Turn on the AC")
}
else{
    console.log(" too hot")
}
// else if checks for the first condition after else if keyword  and jumps out of loop 

console.log("Hello we are outside the loop")


let tempInDegree1 = 12;

if(tempInDegree1 > 40){
    console.log("too hottt");
}
else if( tempInDegree1 > 30){
    console.log("lets go for swim");
    
}

else if( tempInDegree1 > 20){
    console.log("Weather is cool");
    
}

else if( tempInDegree1 > 10){
    console.log("It is very cold outside");
    
}
else{
    console.log("extremely cold ")
}

console.log("Outside the loop")
