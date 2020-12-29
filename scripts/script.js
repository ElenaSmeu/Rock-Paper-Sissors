const scoreElement = document.getElementById('score');
const container = document.getElementById('container');

const rulesButtomElement = document.getElementById('rules');
const rulesModalElement = document.getElementById('rules-modal');
const rulesCloseModalElement = document.getElementById('close-modal-button');

var chosen
var score = 0;

const resetScore = () => {
    score = 0;
    scoreElement.innerHTML = score;
    localStorage.setItem('score', score);
};

rulesButtomElement.addEventListener('click', () => {
    rulesModalElement.classList.add('active-modal');
    container.classList.add('blurred-container');
});
rulesCloseModalElement.addEventListener('click', () => {
    rulesModalElement.classList.remove('active-modal');
    container.classList.remove('blurred-container');
});
(function() {
   resetScore();
}) ();

