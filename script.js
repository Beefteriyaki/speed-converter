const converter = document.querySelector('.convert'); //convert button element

converter.addEventListener("click", function(){

const kilometres = document.querySelector(".Kmph").value; //speed in kmph
const miles = document.querySelector(".mph").value; // speed in mph
const metres = document.querySelector(".mps").value; //speed in metres per second
const knot = document.querySelector(".Knots").value;    //speed in knots

console.log(kilometres, miles, metres, knot);

});