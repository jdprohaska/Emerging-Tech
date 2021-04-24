

function getName() {
	let x = (<HTMLInputElement>document.querySelector("#firstName")).value;
    (<HTMLInputElement>document.querySelector(".nameDisplay")).innerHTML = x;
}

function getQuantity() {
    let x = (<HTMLInputElement>document.querySelector("#inQuantity")).value;
    (<HTMLElement>document.querySelector(".quantityDisplay")).innerHTML = x;
}

function processQuantity() {
    //alert("inside processQuantity()");
    let x = (<HTMLElement>document.querySelector("#inQuantity")).value;
    //alert("value of quantity " + x);
    
    x = parseInt(x);	//change x from a string to a number
    
    x += 10;	//add 10 to x and stores new total in x
    //x = x + 10;	//same as above
    
    (<HTMLElement>document.querySelector(".newQtyDisplay")).innerHTML = x;			
}