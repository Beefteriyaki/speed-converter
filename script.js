const converter = document.querySelector('.convert'); //convert button element

converter.addEventListener("click", function(){

let kilometres = document.querySelector(".Kmph").value; //speed in kmph
let miles = document.querySelector(".mph").value; // speed in mph
let metres = document.querySelector(".mps").value; //speed in metres per second
let knot = document.querySelector(".Knots").value;    //speed in knots

if(kilometres !==null){

    miles = kilometres*0.621371;
    metres = kilometres*0.277778;
    knot = kilometres*0.539957;

    document.querySelector(".mph").value = miles;
    document.querySelector(".mps").value = metres;
    document.querySelector(".Knots").value = knot;


    console.log(kilometres, miles, metres, knot);
}

else if(miles !==null){

    kilometres = miles*1.609344;
    metres = miles*0.44704;
    knot = miles*0.868976;

    document.querySelector(".Kmph").value = kilometres;
    document.querySelector(".mps").value = metres;
    document.querySelector(".Knots").value = knot;
}

});