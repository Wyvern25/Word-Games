
var guesses = 10;
var winCounter = 0;
var lossCounter = 0;  
        
var alphaString ="abcdefghijklmnopqrstuvwxyz";    
var guessLetter = Math.floor(Math.random()*25);        
guessLetter =alphaString[guessLetter];
var failString = "";
    
function psychic(){
    alphaString ="abcdefghijklmnopqrstuvwxyz";    
    guessLetter = Math.floor(Math.random()*25);        
    guessLetter =alphaString[guessLetter];           
    guesses = 10; 
    failstring="";
}    

function userGuess(){             
    letterTag = document.querySelector("letter");
    //debug letterTag.innerHTML = guessLetter;
    var endFlag = false;
        
    //guessed letters
    if( alphaString.includes(event.key)){
        failString = failString +" "+ event.key;
        failTag = document.querySelector("fails");
        failTag.innerHTML = failString;
        guesses--;
        guessTag = document.querySelector("guess");
        guessTag.innerHTML = guesses;        
    }
        
    //win condition
    if (guessLetter.includes(event.key)){
        alert("The letter was "+ guessLetter + " you win");
        winCounter++;
        endFlag = true;
        winTag = document.querySelector("wincount");
        winTag.innerHTML = winCounter;
        guessTag.innerHTML = 10;
        failTag.innerHTML = "";
        
        //lose condition    
    }else if (guesses == 0){
        alert("The letter was "+ guessLetter + " you lose");
        lossCounter++;
        lossTag = document.querySelector("losscount");
        lossTag.innerHTML = lossCounter;    
        endFlag = true;    
        guessTag.innerHTML = 10;
        failTag.innerHTML = "";
    }    

    //game repeat    
    if (endFlag == true){
        failString= "";
            
        var playAgain = prompt("Play again? yes or no");
            
        if (playAgain == "yes"){            
        psychic();
        }
    }        
                   
           
        

                       
    
}     
document.onkeyup = userGuess;
    
    
    