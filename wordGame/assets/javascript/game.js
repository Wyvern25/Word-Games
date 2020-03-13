var guesses = 12;
var winCounter = 0;
var lossCounter = 0;
var alphaString = "abcdefghijklmnopqrstuvwxyz";
var teams = "Ducks Coyotes Bruins Sabres Flames Hurricanes Blackhawks Avalanche Blue_Jackets Stars Red_Wings Oilers Panthers Kings Golden_Knights Wild Canadiens Predators Devils Islanders Rangers Senators Flyers Penguins Sharks Blues Lightning Maple_Leafs Canucks Capitals Jets";
teams = teams.toLowerCase();
var teamArray = teams.split(' ');
var strToGuess = teamArray[Math.floor(Math.random() * teamArray.length)];
var failString = "";
//var guessCheck = "";






var guessLetter = [];

function reset() {
    guessLetter = [];
    strToGuess = teamArray[Math.floor(Math.random() * teamArray.length)];
    guesses = 12;
    failstring = "";
    var str = "";
    var guessCheck = "";
    for (i = 0; i < strToGuess.length; i++) {
        str += "_ ";
        document.querySelector("p").innerText = str;
    }


}


function push() {
    guessCheck = "";
    var endFlag = false;
    guessLetter.push(event.key.toLowerCase());
    str = "";
    for (i = 0; i < strToGuess.length; i++) {

        if (guessLetter.includes(strToGuess[i])) {
            str += strToGuess[i];
            guessCheck += strToGuess[i];


        } else {
            str += "_ ";
            guessCheck += "_";
        }
        guessCheck = guessCheck.substring(guessCheck.length - strToGuess.length);
    }

    document.querySelector("p").innerText = str;

    if (alphaString.includes(event.key.toLowerCase())) {
        failString = failString + " " + event.key.toLowerCase();
        failTag = document.querySelector("fails");
        failTag.innerHTML = failString;
        guesses--;
        guessTag = document.querySelector("guess");
        guessTag.innerHTML = guesses;
    }

    //win condition
    if (guessCheck == strToGuess) {
        document.querySelector("p").innerText = str;

        alert("The team was " + strToGuess + " you win");



        //guessCheck = document.querySelector("wincount");
        winCounter++;
        endFlag = true;
        winTag = document.querySelector("wincount");
        winTag.innerHTML = winCounter;
        guessTag.innerHTML = 12;
        failTag.innerHTML = "";
        guessCheck = "";
        str = "";


        //lose condition    
    } else if (guesses == 0) {
        alert("The team was " + strToGuess + " you lose");
        lossCounter++;
        lossTag = document.querySelector("losscount");
        lossTag.innerHTML = lossCounter;
        endFlag = true;
        guessTag.innerHTML = 12;
        failTag.innerHTML = "";
        guessCheck = "";
        str = "";
    }

    //game repeat    
    if (endFlag == true) {
        failString = "";
        var playAgain = "yes";
        //var playAgain = prompt("Play again? yes or no");

        if (playAgain == "yes") {
            setTimeout(reset(), 500);

        }
    }


}



reset();
document.onkeyup = push;
