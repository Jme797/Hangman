
/* declare ids to variable */

let startDiv = document.getElementById('start');
let lettersDiv = document.getElementById('lettersDiv');
let letters = [];
let word = "Hangman";

let optionsList = document.getElementById('lettersChoiceDiv');
let options = optionsList.getElementsByTagName('button');

let guesses = 0;
/* 
let part1 = document.getElementById('part1');
let part2 = document.getElementById('part2');
let part3 = document.getElementById('part3');
let part4 = document.getElementById('part4');
let rope = document.getElementById('rope');
let head = document.getElementById('head');
let eyes = document.getElementById('eyes');
let mouth = document.getElementById('mouth');
let body = document.getElementById('body');
let arm1 = document.getElementById('arm1');
let arm2 = document.getElementById('arm2');
let leg1 = document.getElementById('leg1');
let leg2 = document.getElementById('leg2');
let cross = document.getElementById('cross');
 */
let parts = ['part1', 'part2', 'part3', 'part4', 'rope', 'head', 'eyes', 'mouth', 'body', 'arm1', 'arm2', 'leg1', 'leg2', 'cross'];

function start() {
    startDiv.style.display = "none";

    for (let i = 0; i < parts.length; i++) {

        document.getElementById(parts[i]).style.visibility = "hidden";
    }

    word = selectWord();
    lettersDiv.innerHTML = "";
    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) != " ") {
            lettersDiv.innerHTML += `            
        <div class="letter">
            <p>${word.charAt(i)}</p>
        </div>
        `;
        } else {
            lettersDiv.innerHTML += "<div class='space'></div>";
        }
    }
    letters = lettersDiv.getElementsByTagName('p');

    for (let i = 0; i < letters.length; i++) {
        letters[i].style.visibility = "hidden";
    }

    guesses = 0;

    for (let i = 0; i < options.length; i++) {
        options[i].disabled = false;
    }
}

function guessLetter(letter) {

    word = word.toUpperCase();

    for (let i = 0; i < options.length; i++) {
        if (options[i].name == letter) {
            options[i].disabled = true;
        }
    }

    if (!word.includes(letter)) {

        if (parts[guesses] == "cross") {
            document.getElementById('eyes').style.visibility = "hidden";
            gameOver();
        }
        /*         if (parts[guesses] == "head") {
                    for (let i = 0; i < 2; i++) {
                        document.getElementById(parts[guesses]).style.visibility = "visible";
                        guesses += 1;
                    }
                } */
        if (parts[guesses] == "part3") {
            document.getElementById(parts[guesses]).style.visibility = "visible";
            guesses += 1;
        }
        if (parts[guesses] == "part1") {
            document.getElementById(parts[guesses]).style.visibility = "visible";
            guesses += 1;
        }
        document.getElementById(parts[guesses]).style.visibility = "visible";
        guesses += 1;
    }

    for (let i = 0; i < letters.length; i++) {
        if (letters[i].innerHTML.toUpperCase() == letter) {
            letters[i].style.visibility = "visible";
        }
    }
    if (checkIfWon()) {
        startDiv.style.display = "block";
        startDiv.getElementsByTagName('h2')[0].innerHTML = "You win. Play Again";
    }
}

function gameOver() {
    startDiv.style.display = "block";
    for (let i = 0; i < options.length; i++) {
        options[i].disabled = true;
    }
    newWord = titleCase(word);
    startDiv.getElementsByTagName('h2')[0].innerHTML = newWord + "<br>You lose. Try Again?";
}
function checkIfWon() {

    let checks = [];

    for (let i = 0; i < letters.length; i++) {

        if (letters[i].style.visibility != "visible") {
            checks.push("no");
        }
    }
    if (checks.length > 0) {
        return false;
    } else {
        return true;
    }
}
function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');

}


function selectWord() {

    let rand = Math.floor(Math.random() * 71);

    switch (rand) {
        case 1:
            return "Ghost Rider";
        case 2:
            return "Ant Man";
        case 3:
            return "SpiderMan Homecoming";
        case 4:
            return "X Men Days of Future Past";
        case 5:
            return "Spider Man";
        case 6:
            return "Iron Man";
        case 7:
            return "Thor";
        case 8:
            return "Doctor Strange";
        case 9:
            return "Logan";
        case 10:
            return "Avengers Infinity War";
        case 12:
            return "Deadpool";
        case 13:
            return "Ant Man and the Wasp";
        case 14:
            return "X Men";
        case 15:
            return "Marvel Avengers Assemble";
        case 16:
            return "Guardians of the Galaxy";
        case 17:
            return "Black Panther";
        case 18:
            return "Thor Ragnarok";
        case 19:
            return "Grown Ups";
        case 20:
            return "The Other Guys";
        case 21:
            return "Neighbors";
        case 22:
            return "Charlies angels";
        case 23:
            return "Kingsman The secret service";
        case 24:
            return "Lets be cops";
        case 25:
            return "Central Intelligence";
        case 26:
            return "Jumanji the next level";
        case 27:
            return "Harley Quinn Birds of prey";
        case 28:
            return "The Brothers Grimsby";
        case 29:
            return "Men in black international";
        case 30:
            return "the Fast and the Furious";
        case 31:
            return "Quantum of solace";
        case 32:
            return "Baywatch";
        case 33:
            return "Jack ryan shadow recruit";
        case 34:
            return "Mr and mrs smith";
        case 35:
            return "Gamer";
        case 36:
            return "Baby Driver";
        case 37:
            return "Moana";
        case 38:
            return "The greatest showman";
        case 39:
            return "grease";
        case 40:
            return "The ugly truth";
        case 41:
            return "mission imposiible iii";
        case 42:
            return "Blackhat";
        case 43:
            return "Jason Bourne";
        case 44:
            return "Titanic";
        case 45:
            return "The lucky one";
        case 46:
            return "american sniper";
        case 47:
            return "Focus";
        case 48:
            return "the fault in our stars";
        case 49:
            return "braveheart";
        case 50:
            return "Forty year old virgin";
        case 51:
            return "twilight";
        case 52:
            return "remeber me";
        case 53:
            return "the theory of everything";
        case 54:
            return "Aladdin";
        case 55:
            return "Bad boys";
        case 56:
            return "Hitch";
        case 57:
            return "hancock";
        case 58:
            return "Bad boys";
        case 59:
            return "The Karate Kid";
        case 60:
            return "this means war";
        case 61:
            return "step up";
        case 62:
            return "street dance";
        case 63:
            return "rush hour";
        case 64:
            return "fifty shades of grey";
        case 65:
            return "Max payne";
        case 66:
            return "taxi";
        case 67:
            return "takers";
        case 68:
            return "halloween";
        case 69:
            return "magic mike";
        case 70:
            return "love garanteed";
    }
}