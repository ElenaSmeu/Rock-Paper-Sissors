const scoreElement = document.getElementById('score');
const container = document.getElementById('container');
const choices = ['paper', 'rock', 'scissors'];
const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');
const step3 = document.getElementById('step-3');
const step4 = document.getElementById('step-4');

const rulesButtomElement = document.getElementById('rules');
const rulesModalElement = document.getElementById('rules-modal');
const rulesCloseModalElement = document.getElementById('close-modal-button');

const resetButton = document.getElementById('resetGame');

const paperChoiceButton = document.getElementById('paper');
const rockChoiceButton = document.getElementById('rock');
const scissorsChoiceButton = document.getElementById('scissors');

const userChoiceStep2 = document.getElementById('choiceStep2');
const userChoiceIconStep2 = document.getElementById('choiceIconStep2');

const userChoiceStep3 = document.getElementById('choiceStep3');
const userChoiceIconStep3 = document.getElementById('choiceIconStep3');

const userChoiceStep4 = document.getElementById('choiceStep4');
const userChoiceIconStep4 = document.getElementById('choiceIconStep4');

const computerChoice = document.getElementById('comp-choice');
const computerChoiceIcon = document.getElementById('com-choiceIcon');

const computerChoice2 = document.getElementById('comp-choice2');
const computerChoiceIcon2 = document.getElementById('com-choiceIcon2');

const playAgain = document.getElementById('play-again');
const result = document.getElementById('result');

var chosenWeapon;
var computerChosenWeapon;
var score = 0;


const goToStep1 = () => {
    step1.classList.add('active-step');
    if(step2.classList.contains('active-step')) {
        step2.classList.remove('active-step');
    }
    if(step3.classList.contains('active-step')) {
        step3.classList.remove('active-step');
    }
    if(step4.classList.contains('active-step')) {
        step4.classList.remove('active-step');
    }
}
const goToStep2 = () => {
    step1.classList.remove('active-step');
    step2.classList.add('active-step');
    userChoiceStep2.classList.add(`${chosenWeapon}-wrap`);
    userChoiceIconStep2.src = `images/icon-${chosenWeapon}.svg`;
    updateComputerChoice();
}
const goToStep3 = () => {
    step2.classList.remove('active-step');
    step3.classList.add('active-step');
    userChoiceStep3.classList.add(`${chosenWeapon}-wrap`);
    userChoiceIconStep3.src = `images/icon-${chosenWeapon}.svg`;
}
const goToStep4 = () => {
    step3.classList.remove('active-step');
    step4.classList.add('active-step');
    userChoiceStep4.classList.add(`${chosenWeapon}-wrap`);
    userChoiceIconStep4.src = `images/icon-${chosenWeapon}.svg`;
}

const resetScore = () => {
    score = 0;
    scoreElement.innerHTML = score;
    localStorage.setItem('score', score);
};
const newGame = () => {
    resetScore();
    goToStep1();
}

const calculateScore = () => {
    if ( chosenWeapon == 'paper') {
        if (computerChosenWeapon == 'rock' ) {
            userWins();
        } else if (computerChosenWeapon == 'paper') {
            even();
        } else if (computerChosenWeapon == 'scissors') {
            computerWins();
        }
    } else if( chosenWeapon == 'rock') {
        if (computerChosenWeapon == 'rock' ) {
            even();
        } else if (computerChosenWeapon == 'paper') {
            computerWins();
        } else if (computerChosenWeapon =='scissors') {
            userWins();
        }

    } else if( chosenWeapon == 'scissors') {
        if (computerChosenWeapon == 'rock' ) {
            computerWins();
        } else if (computerChosenWeapon == 'paper') {
            userWins();
        } else if (computerChosenWeapon == 'scissors') {
            even();
        }
    }
}
const updateScore = () => {
    scoreElement.innerHTML = score;
    localStorage.setItem('score', score);
}
const computerWins = () => {
    console.log(chosenWeapon, computerChosenWeapon);
    score --;
    console.log('Computer wins');
    result.innerHTML = 'You lose';
    playAgain.className = 'lose';
    if (userChoiceIconStep4.classList.contains('winner-wrap')) {
        userChoiceIconStep4.classList.remove('winner-wrap');
    }
    computerChoice2.classList.add('winner-wrap');
    updateScore();
}
const userWins = () => {
    score++;
    console.log(chosenWeapon, computerChosenWeapon);
    console.log('User wins');
    result.innerHTML = 'You win';
    playAgain.className = null;
    if( computerChoice2.classList.contains('winner-wrap')) {
        computerChoice2.classList.remove('winner-wrap');
    }
    userChoiceStep4.classList.add('winner-wrap');
    updateScore();
}
const even = () => {
    console.log('Is even');
    console.log(chosenWeapon, computerChosenWeapon);
    result.innerHTML = 'Even';
    playAgain.className = null;
    if (userChoiceIconStep4.classList.contains('winner-wrap')) {
        userChoiceIconStep4.classList.remove('winner-wrap');
    }
    if( computerChoice2.classList.contains('winner-wrap')) {
        computerChoice2.classList.remove('winner-wrap');
    }
    computerChoice2.classList.add('winner-wrap');
    userChoiceStep4.classList.add('winner-wrap');
}
const updateComputerChoice = () => {
    setTimeout( () => {
        ramdomComputerPick();
        goToStep3();
        for( i = 0; i <= choices.length -1; i++) {
            if (computerChoice.classList.contains(`${choices[i]}-wrap`)) {
                computerChoice.classList.remove(`${choices[i]}-wrap`);
            }
        }
        computerChoice.classList.add(`${computerChosenWeapon}-wrap`);
        computerChoiceIcon.src = `images/icon-${computerChosenWeapon}.svg`;
        goToStep4();
        calculateScore();
        for( i = 0; i <= choices.length -1; i++) {
            if (computerChoice2.classList.contains(`${choices[i]}-wrap`)) {
                computerChoice2.classList.remove(`${choices[i]}-wrap`);
            }
        }
        computerChoice2.classList.add(`${computerChosenWeapon}-wrap`);
        computerChoiceIcon2.src = `images/icon-${computerChosenWeapon}.svg`;
    }, 1000);
    
}

get_random = function (list) {
    return list[Math.floor((Math.random()*list.length))];
} 
const ramdomComputerPick = () => {
    computerChosenWeapon = get_random(choices);
}

rulesButtomElement.addEventListener('click', () => {
    rulesModalElement.classList.add('active-modal');
    container.classList.add('blurred-container');
});
rulesCloseModalElement.addEventListener('click', () => {
    rulesModalElement.classList.remove('active-modal');
    container.classList.remove('blurred-container');
});
resetButton.addEventListener('click', () => {
    newGame();
});

paperChoiceButton.addEventListener('click', () => {
    chosenWeapon = 'paper';
    goToStep2();
});
rockChoiceButton.addEventListener('click', () => {
    chosenWeapon = 'rock';
    goToStep2();
});
scissorsChoiceButton.addEventListener('click', () => {
    chosenWeapon = 'scissors';
    goToStep2();
});

playAgain.addEventListener('click', () => {
    goToStep1();
});


(function() {
   newGame();
}) ();


