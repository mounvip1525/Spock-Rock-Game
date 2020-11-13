const playerScore=document.getElementById('player-score');
const playerChoiceEl=document.getElementById('player-choice');
const computerScore=document.getElementById('computer-score');
const computerChoiceEl=document.getElementById('computer-choice');
const resultText=document.getElementById('resultText');

const playerRock=document.getElementById('playerRock');
const playerPaper=document.getElementById('playerPaper');
const playerScissors=document.getElementById('playerScissors');
const playerLizard=document.getElementById('playerLizard');
const playerSpock=document.getElementById('playerSpock');

const computerRock=document.getElementById('computerRock');
const computerPaper=document.getElementById('computerPaper');
const computerScissors=document.getElementById('computerScissors');
const computerLizard=document.getElementById('computerLizard');
const computerSpock=document.getElementById('computerSpock');

const allGameIcons=document.querySelectorAll('.far');

let computerChoice='';

//To remove the 'selected' class for unselected icons (ie. to have the 'selected' class only for the recently clicked icon)
function resetSelected(){
    allGameIcons.forEach(icon=>{
        icon.classList.remove('selected');
    });
}

//Randomly select the computer's choice
function randomComputerChoice(){
    // Math.floor(Math.random() * (max - min + 1) ) + min; to generate between the range of min and max(both included)
    // console.log(Math.floor(Math.random()*5)+1);
    computerChoiceNumber=Math.floor(Math.random()*5)+1;
    switch(computerChoiceNumber){
        case 1:
            computerChoice='rock';
            break;
        case 2:
            computerChoice='paper';
            break;
        case 3:
            computerChoice='scissors';
            break;
        case 4:
            computerChoice='lizard';
            break;
        case 5:
            computerChoice='spock';
            break;
        default:
            break;
    }
    // console.log(computerChoice);
}

//Call functions to process the turn
function checkResult(){
    resetSelected();
    randomComputerChoice();
    displayComputerChoice();
}

//Add the 'selected' class to the randomised computer's choice
function displayComputerChoice(){
    // console.log(playerChoice)
    switch(computerChoice){
        case 'rock':
            computerRock.classList.add('selected');
            computerChoiceEl.textContent=' --- Rock';
            break;
        case 'paper':
            computerPaper.classList.add('selected');
            computerChoiceEl.textContent=' --- Paper';
            break;
        case 'scissors':
            computerScissors.classList.add('selected');
            computerChoiceEl.textContent=' --- Scissors';
            break;
        case 'lizard':
            computerLizard.classList.add('selected');
            computerChoiceEl.textContent=' --- Lizard';
            break;
        case 'spock':
            computerSpock.classList.add('selected');
            computerChoiceEl.textContent=' --- Spock';
            break;
        default:
            break;
    }
}


//Add 'selected' class to the clicked icon based on user choice
function select(playerChoice){
    // console.log(playerChoice)
   checkResult();
    switch(playerChoice){
        case 'rock':
            playerRock.classList.add('selected');
            playerChoiceEl.textContent=' --- Rock';
            break;
        case 'paper':
            playerPaper.classList.add('selected');
            playerChoiceEl.textContent=' --- Paper';
            break;
        case 'scissors':
            playerScissors.classList.add('selected');
            playerChoiceEl.textContent=' --- Scissors';
            break;
        case 'lizard':
            playerLizard.classList.add('selected');
            playerChoiceEl.textContent=' --- Lizard';
            break;
        case 'spock':
            playerSpock.classList.add('selected');
            playerChoiceEl.textContent=' --- Spock';
            break;
        default:
            break;
    }
}

