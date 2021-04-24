"use strict";
function getName() {
    var x = document.querySelector("#firstName").value;
    document.querySelector(".nameDisplay").innerHTML = x;
}
function getQuantity() {
    var x = document.querySelector("#inQuantity").value;
    document.querySelector(".quantityDisplay").innerHTML = x;
}
function processQuantity() {
    //alert("inside processQuantity()");
    var x = document.querySelector("#inQuantity").value;
    //alert("value of quantity " + x);
    x = parseInt(x); //change x from a string to a number
    x += 10; //add 10 to x and stores new total in x
    //x = x + 10;	//same as above
    document.querySelector(".newQtyDisplay").innerHTML = x;
}
