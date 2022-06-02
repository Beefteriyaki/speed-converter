const converter = document.querySelector('.convert'); //convert button element
const reset = document.querySelector('.reset'); //reset button
converter.addEventListener("click", function(){

let kilometres = Number(document.querySelector(".Kmph").value); //speed in kmph
let miles = Number(document.querySelector(".mph").value); // speed in mph
let metres = Number(document.querySelector(".mps").value); //speed in metres per second
let knot = Number(document.querySelector(".Knots").value);    //speed in knots

if(kilometres !==0){

    miles = kilometres*0.621371;
    metres = kilometres*0.277778;
    knot = kilometres*0.539957;

    document.querySelector(".Kmph").value = kilometres;
    document.querySelector(".mph").value = miles;
    document.querySelector(".mps").value = metres;
    document.querySelector(".Knots").value = knot;


    console.log(kilometres, miles, metres, knot);
}

else if(miles !==0){

    kilometres = miles*1.609344;
    metres = miles*0.44704;
    knot = miles*0.868976;

    document.querySelector(".Kmph").value = kilometres;
    document.querySelector(".mph").value = miles;
    document.querySelector(".mps").value = metres;
    document.querySelector(".Knots").value = knot;
}

else if(metres !==0){

kilometres = metres*3.6;
miles = metres*2.239936;
knot = metres*1.943844;

  document.querySelector(".Kmph").value = kilometres;
  document.querySelector(".mph").value = miles;
  document.querySelector(".mps").value = metres;
  document.querySelector(".Knots").value = knot;
 
}

else{

    kilometres = knot*1.852;
    metres = knot*0.514444;
    miles = knot*1.150779;

    document.querySelector(".Kmph").value = kilometres;
    document.querySelector(".mph").value = miles;
    document.querySelector(".mps").value = metres;
    document.querySelector(".Knots").value = knot;
}

});


reset.addEventListener("click", function(){

    document.querySelector(".Kmph").value = null;
    document.querySelector(".mph").value = null;
    document.querySelector(".mps").value = null;
    document.querySelector(".Knots").value = null; 
});