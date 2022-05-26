const button = document.querySelector(".button");

button.addEventListener("click", function(){
    let kmph = document.querySelector(".Kmph").value;
    let mph = document.querySelector(".mph").value;
    let mps = document.querySelector(".mps").value;
    let knots = document.querySelector(".Knots").value;

    console.log(kmph,mph,mps,knots);
});