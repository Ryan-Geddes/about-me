'use strict';
//use strict forces some additional checks on JS.  Keeps you from getting away from loose JS code.


var answerCount = 0;
var userName = prompt('What is your name?');

var likeCars = prompt('Let\'s play a guessing game! I\'m going to ask you 5 yes or no questions.  Q1: Do I like Cars?').toLowerCase();

while ((likeCars !== 'yes' && likeCars !== 'no' && likeCars !== 'y' && likeCars !== 'n' )) {
    likeCars = prompt('yes or no').toLowerCase();
}
    if((likeCars === 'yes')||(likeCars === 'y')){
        alert(userName + ', that\'s correct! I love cars!');
        answerCount++;
    }
    else if((likeCars === 'no')||(likeCars === 'n')){
        alert(userName + ' Swing and a miss.  I love cars!');
    }
    else {
        alert(userName + ' WHY CAN\'T YOU JUST BE NORMAL');
    }


var anotherLanguage = prompt('Can I play piano?').toLowerCase();

while ((anotherLanguage !== 'yes' && anotherLanguage !== 'no' && anotherLanguage !== 'y' && anotherLanguage !== 'n' )) {
    anotherLanguage = prompt('yes or no').toLowerCase();
}
    if((anotherLanguage=== 'yes')||(anotherLanguage === 'y')){
        alert(userName + '. Almost.  I used to, but I\'ve forgotten now!');
    }
    else if((anotherLanguage === 'no')||(anotherLanguage === 'n')){
        alert(userName + '.  Correct! I used to play as a kid. :(');
        answerCount++;
    }
    else {
        alert(userName + ' WHY CAN\'T YOU JUST BE NORMAL');
    }

var homeTown = prompt('Am I from Montana?').toLowerCase();

while ((homeTown !== 'yes' && homeTown !== 'no' && homeTown !== 'y' && homeTown !== 'n' )) {
    homeTown = prompt('yes or no').toLowerCase();
}
    if((homeTown === 'yes')||(homeTown === 'y')){
        alert(userName + ', that\'s right! I\m from Bozeman!');
        answerCount++;
    }
    else if((homeTown === 'no')||(homeTown === 'n')){
        alert(userName + ', oh nooo.  That\'s incorrect, I grew up in Bozeman!');
    }
    else {
        alert(userName + ' WHY CAN\'T YOU JUST BE NORMAL');
    }

var workPlace = prompt('Do I work at Zillow?').toLowerCase();

while ((workPlace !== 'yes' && workPlace !== 'no' && workPlace !== 'y' && workPlace !== 'n' )) {
    workPlace = prompt('yes or no').toLowerCase();
}
    if((workPlace === 'yes')||(workPlace === 'y')){
        alert(userName + ', that\'s right! I do work at Zillow!');
        answerCount++;
    }
    else if((workPlace === 'no')||(workPlace === 'n')){
        alert(userName + ', oh nooo.  That\'s incorrect, I do work at Zillow!');
    }
    else {
        alert(userName + ' WHY CAN\'T YOU JUST BE NORMAL');
    }

var favoriteColor = prompt('Is green my favorite color?').toLowerCase();

while ((favoriteColor !== 'yes' && favoriteColor !== 'no' && favoriteColor !== 'y' && favoriteColor !== 'n' )) {
    favoriteColor = prompt('yes or no').toLowerCase();
}
    if((favoriteColor === 'yes')||(favoriteColor === 'y')){
        alert(userName + ', that\'s right! I love green!');
        answerCount++;
    }
    else if((favoriteColor === 'no')||(favoriteColor === 'n')){
        alert(userName + ', oh nooo.  That\'s incorrect, green is my favorite color!');
    }
    else {
        alert(userName + ' WHY CAN\'T YOU JUST BE NORMAL');
    }

//Question 6

var guessAnswer = Math.floor(Math.random()*100)
console.log(guessAnswer)
var userGuess = prompt('Let\'s play a game! Guess a number between 1 and 100.  You have 4 guesses.');
var intGuess = parseInt(userGuess);

for (var i = 0; i < 4; i++){
    
    while(isNaN(userGuess)){
        userGuess = prompt('must be a number')
        var intGuess = parseInt(userGuess);
}
    if (intGuess !== guessAnswer && i < 3 && intGuess > guessAnswer){
        userGuess = prompt(userGuess + ' is too high!  You have ' + (3-i) + ' guesses remaining.  Try again.');
        var intGuess = parseInt(userGuess);
    }
    else if (intGuess !== guessAnswer && i < 3 && intGuess < guessAnswer){
        userGuess = prompt(userGuess + ' is too low!  You have ' + (3-i) + ' guesses remaining.  Try again.');
        var intGuess = parseInt(userGuess);
    }
    else if (intGuess === guessAnswer){
        alert('You did it! Ha! It only took you ' + (i+1) + ' guesses! Congrats.');
        answerCount++;
        break;
    }
    else if(intGuess !== guessAnswer && i >= 3){
        alert('Oh nooo. You\'re all out of guesses. :( Correct answer was: ' + guessAnswer);
    }
    else {
        alert('Great. You broke it.  Please reload the page.')
        break;
    }
}


//Array methods on page 530.  
//Commonly used: pop to remove last element, push to add an element to the end, 
//shift to add a value to beginning of array, unshift removes value at beginning of array

var carsArr = [
    'IROC-Z', 
    'Buick Grand National', 
    'Foxbody Mustang', 
    'Corvette C3', 
    'Datsun Fairlady Z',
    'Ford Crown Victoria',
    'Mazda Miata', 
    'Pontiac Trans-Am', 
    'Mercury Capri', 
    'Pontiac Can-Am'];
    
var carGuess = prompt('Of my favorite cars, name one that\'s a badass nasty 80\'s shitbox?  You have 6 guesses.');
    
for (var i = 0; i < 6; i++){
    if (carsArr.indexOf(carGuess) > 2 && i < 5){
        carGuess = prompt('That ain\'t 80\'s rattlecan!  You have ' + (5-i) + ' guesses remaining.  Try again.');
    }
    else if (carsArr.indexOf(carGuess) === -1 && i < 5){
        carGuess = prompt('That car isn\'t on my list!  You have ' + (5-i) + ' guesses remaining.  Try again.');
    }
    else if  (carsArr.indexOf(carGuess) <= 2){
        alert('Hell yeah brother! That\'s a sicknasty rustbox! I also would have accepted the ' 
        + carsArr[0] + ', '
        + carsArr[1] + ', or '
        + carsArr[2] + '. And it only took you '+ (i+1) + ' guesses! Congrats.');
        answerCount++;
        break;
    }    
    else if (carsArr.indexOf(carGuess) > 2 && i >= 5){
        alert('Oh nooo. You\'re all out of guesses. :( Correct answers were: '
        + carsArr[0] + ', '
        + carsArr[1] + ', or '
        + carsArr[2]);
    }
    else {
        alert('Great. You broke it.  Please reload the page.')
        break;
    }
}

if(answerCount === 7){
    alert('Wow, ' + userName + '!  You got ' + answerCount + '/7 right! You\'re a genius!');
}
else if(answerCount <= 6 && answerCount > 0){
    alert('Not bad, ' + userName + '.  You got ' + answerCount + ' out of 7 right!');
}
else if(answerCount === 0){
    alert('Wow.  Sorry ' + userName + '.  I\'m sure you have other redeeming qualities, but you got 0 out of 5 right.');
}
else{
    alert('Oh great you broke it.');
}
