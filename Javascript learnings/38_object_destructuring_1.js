// object destructuring
const band = {
    bandName : 'Leeds united',
    famousSong : 'One kiss',
    year : 1998,
    anotherfamoussong : "Shape of U" 

};
// const Name = band.bandName;
// const song = band.famousSong;
// console.log(Name ,":", song);
// console.log(Name ,":", song);
const { bandName : var1, famousSong : var2,...var3 } = band;
console.log(var1,var2,var3)