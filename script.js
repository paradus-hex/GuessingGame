'use strict';
/*
console.log(document.querySelector('.message').textContent); //reading the set text from index.html
document.querySelector('.message').textContent = 'Correct Answer 🎊'; //setting a new string to the .message class
console.log(document.querySelector('.message').textContent); //reading the new set value
//this is already dom manipulation as we have manipulated the element in index.html using javascript language.
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.guess').value); //no value
document.querySelector('.guess').value = 23; //set value
console.log(document.querySelector('.guess').value); //read set value
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //Initial number of guesses
let highScore = 0;
document.querySelector('.score').textContent = score;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message; //creating a refactoring function to make the code more DRY
};

document.querySelector('.check').addEventListener('click', function () {
  //addEventListener takes two argument,1st one is the event to listen to and the 2nd is the event handler function,i.e the fucntion to be executed upon the occurence of the event.
  //also notice that in this case. the user input of score is stored in the .guess class of indec.html(or so i think so up until this point)
  //console.log(document.querySelector('.guess').value);
  //user input stored in guess
  const guess = Number(document.querySelector('.guess').value);
  //remember when we get user input it's always in string.so do type convert into number
  //Also we use .value instead of .textContent because .value is associated with input values from user but text content is associated with the text in the code itself
  //Continue case
  if (score > 1) {
    //this is better and different than the one jonas showed
    //No input from user case
    if (guess === 0) {
      //you can use !guess as guess=0 is falsy value which turn !guess in a truthy value and it enters the if statement which is for truth values. {
      // document.querySelector('.message').textContent = 'No Value 0️⃣';
      displayMessage('No Value 0️⃣');
      //Win case
    } else if (guess === secretNumber) {
      // document.querySelector('.message').textContent ='CONGRATULAIONS🎉!You Won!';
      displayMessage('CONGRATULAIONS🎉!You Won!');
      score > highScore ? (highScore = score) : (highScore = highScore);
      document.querySelector('.highscore').textContent = highScore;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = ' #60b347';
      document.querySelector('.number').style.width = '30rem';
      //lesser than case
    } else if (guess < secretNumber) {
      // document.querySelector('.message').textContent = 'Too low!📉';there is a more better refractory code in final folder of jonas.
      displayMessage('Too low!📉');
      score--;
      document.querySelector('.score').textContent = score;
      //greater than case
    } else if (guess > secretNumber) {
      // document.querySelector('.message').textContent = 'Too High!📈';
      displayMessage('Too High!📈');
      score--;
      document.querySelector('.score').textContent = score;
    }
    //lost case/End game
  } else {
    // document.querySelector('.message').textContent ='You have lost the game 💔';
    displayMessage('You have lost the game 💔');
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#8a0303';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
