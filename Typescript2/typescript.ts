let targetNumber: number = 0;	//this global variable will store the target number to be guessed in the Hi-Low Game

function myFunction() {
	
    
    
    //1. Create an array called numberRanges for the following numbers 5,10,20
    let numberRanges: any[] = [5, 10, 20];
    let dropBox = document.querySelector("#topNumber"); 
    

    
    //2. Use the numberRanges array to populate the topNumber dropdown list
    for(let i = 0; i < numberRanges.length; i++) {
        dropBox.options.add(new Option(numberRanges[i]));
    }	}
    
    
    function getTargetNumber() {
        
        document.getElementById("outResults").innerHTML = "";
        //3. The onChange event handler fires it will call this function. Get the selected value from the list using document.querySelector()
        let inTopVal = document.querySelector("#topNumber").value;
        console.log(inTopVal);
        //4. Call the randomNumber function and pass it the chosen number as a parameter. Capture the retun value in targetNumber	
        targetNumber = randomNumber(inTopVal);
        console.log(targetNumber);
    }//end getTargetNumber()
    

    function hiLowGame()	{
        //alert("inside redGreenGame()");	
        let resultsBox = document.querySelector("#outResults");
        
        let inNumb = document.querySelector("#inputNumber").value;
        
        if( inNumb == targetNumber )		//5. There is a problem with the if statement
        {
            //6. display CORRECT!!!	
            confetti.start();
            playAudio();
            resultsBox.innerHTML = "CORRECT!!!";
            
        }
        else
        {
            if( inNumb > targetNumber)
            {
                resultsBox.innerHTML = "LOWER!";	
            }
            else
            {
                resultsBox.innerHTML = "HIGHER!";	
            }
        }
        
    }//end hiLowGame()
    
    function randomNumber(inTopNum: number) {
        return Math.floor(Math.random()* inTopNum) + 1;	//random number from 1 to inTopNum	
    }