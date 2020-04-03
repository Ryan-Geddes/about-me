

'use strict';


//use strict forces some additional checks on JS.  Keeps you from getting away from loose JS code.

//Stretch Goal: Put question game into arrays as per below instructions:

//Attempt to make your code more DRY by putting all of 
//the questions, answers, and responses to the first five yes/no questions into arrays (or 
//even one huge multidimensional array), and modifying the game logic such that a ‘for’ 
//loop will control the flow from question to question.

//Array methods on page 530.  
//Commonly used: pop to remove last element, push to add an element to the end, 
//shift to add a value to beginning of array, unshift removes value at beginning of array


// Logic Notes/Scratchpaper:
//
// I'm going to use 3 separate arrays to help keep my brain organized: 1 for responses, 1 for questions, 1 for answer
// counter = i, i <5, i++ 
// Counter keeps track of what question you're on
// each if  statement tracks a single question
// prompt user input
    //if (i = 0)
    // if the counter is 1, arrayGuess =  prompt question one, if YES is correct:
        // if YES arrayGuess = answerArr[0] or answerArr [1[]
            //correct message, add score counter condition
        // if NO arrayGuess = answerArr[2] or answerArr [3]
            //wrong message, 
    // if the counter is 2, ask question two,
        //true condition
        // false condition
//
//        
//END NOTES BEGIN CODE:
   
var answerCount = 0;
var userName = prompt('What is your name?');

function fiveQuestions() {

var responseArr = [
    userName + ', that\'s correct! I love cars!', 
    userName + ' Swing and a miss.  I love cars!', 
    userName + '. Almost.  I used to, but I\'ve forgotten now!', 
    userName + '.  Correct! I used to play as a kid. :(', 
    userName + ', that\'s right! I\'m from Bozeman!', 
    userName + ', oh nooo.  That\'s incorrect, I grew up in Bozeman!',
    userName + ', that\'s right! I do work at Zillow!', 
    userName + ', oh nooo.  That\'s incorrect, I do work at Zillow!',   
    userName + ', that\'s right! I love green!', 
    userName + ', oh nooo.  That\'s incorrect, green is my favorite color!',  
    userName + ' WHY CAN\'T YOU JUST BE NORMAL'];


var questionArr = [
    'Let\'s play a guessing game! I\'m going to ask you 5 yes or no questions.  Q1: Do I like Cars?', 
    'Can I play piano?', 
    'Am I from Montana?', 
    'Do I work at Zillow?',
    'Is green my favorite color?', ];

var answerArr = [
    'yes', 
    'y', 
    'no', 
    'n', ];

var arrayGuess; // =  prompt(questionArr[0]).toLowerCase();


for (var i = 0; i < 5; i++){
    
    if (i = 1){
        var arrayGuess = prompt(questionArr[0]).toLowerCase();

        while ((arrayGuess !== answerArr[0] && arrayGuess !== answerArr[1] && arrayGuess !== answerArr[2] && arrayGuess !== answerArr[3] )){
            arrayGuess = prompt('yes or no').toLowerCase();
        }
        if( arrayGuess=== answerArr[0] || arrayGuess === answerArr[1]){
            alert(responseArr[0]);
            answerCount++;           
        }
        else if( arrayGuess=== answerArr[2] || arrayGuess === answerArr[3]){
            alert(responseArr[1]); 
        }
        else {
            alert(responseArr[10]);            
        }
    } 

    if (i = 2){
        var arrayGuess = prompt(questionArr[1]).toLowerCase();

        while ((arrayGuess !== answerArr[0] && arrayGuess !== answerArr[1] && arrayGuess !== answerArr[2] && arrayGuess !== answerArr[3] )){
            arrayGuess = prompt('yes or no').toLowerCase();
        }
        if( arrayGuess=== answerArr[0] || arrayGuess === answerArr[1]){
            alert(responseArr[2]);
        }
        else if( arrayGuess=== answerArr[2] || arrayGuess === answerArr[3]){
            alert(responseArr[3]);
            answerCount++;
        }
        else {
            alert(responseArr[10]);
        }
    }   
    if (i = 3){
        var arrayGuess = prompt(questionArr[2]).toLowerCase();

        while ((arrayGuess !== answerArr[0] && arrayGuess !== answerArr[1] && arrayGuess !== answerArr[2] && arrayGuess !== answerArr[3] )){
            arrayGuess = prompt('yes or no').toLowerCase();
        }
        if( arrayGuess=== answerArr[0] || arrayGuess === answerArr[1]){
            alert(responseArr[4]);
            answerCount++;
        }
        else if( arrayGuess=== answerArr[2] || arrayGuess === answerArr[3]){
            alert(responseArr[5]);
        }
        else {
            alert(responseArr[10]);
        }
    }   
    if (i = 4){
        var arrayGuess = prompt(questionArr[3]).toLowerCase();

        while ((arrayGuess !== answerArr[0] && arrayGuess !== answerArr[1] && arrayGuess !== answerArr[2] && arrayGuess !== answerArr[3] )){
            arrayGuess = prompt('yes or no').toLowerCase();
        }
        if( arrayGuess=== answerArr[0] || arrayGuess === answerArr[1]){
            alert(responseArr[6]);
            answerCount++;
        }
        else if( arrayGuess=== answerArr[2] || arrayGuess === answerArr[3]){
            alert(responseArr[7]);
        }
        else {
            alert(responseArr[10]);
        }
    } 
    if (i = 5){
        var arrayGuess = prompt(questionArr[4]).toLowerCase();

        while ((arrayGuess !== answerArr[0] && arrayGuess !== answerArr[1] && arrayGuess !== answerArr[2] && arrayGuess !== answerArr[3] )){
            arrayGuess = prompt('yes or no').toLowerCase();
        }
        if( arrayGuess=== answerArr[0] || arrayGuess === answerArr[1]){
            alert(responseArr[8]);
            answerCount++;
        }
        else if( arrayGuess=== answerArr[2] || arrayGuess === answerArr[3]){
            alert(responseArr[9]);
        }
        else {
            alert(responseArr[10]);
        }
    } 
}
}

fiveQuestions();

var guessAnswer = Math.floor(Math.random()*100);
console.log(guessAnswer)
var userGuess = prompt('Let\'s play a game! Guess a number between 1 and 100.  You have 4 guesses.');
var intGuess = parseInt(userGuess);

for (var i = 0; i < 4; i++){
    
    while(isNaN(userGuess)|| userGuess === ''){
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
        else if  (carsArr.indexOf(carGuess) <= 2 && carsArr.indexOf(carGuess) > -1) {
            alert('Hell yeah brother! That\'s a sicknasty rustbox! I also would have accepted the ' 
            + carsArr[0] + ', '
            + carsArr[1] + ', or '
            + carsArr[2] + '. And it only took you '+ (i+1) + ' guesses! Congrats.');
            answerCount++;
            break;
        }    
        else if (carsArr.indexOf(carGuess) > 2 || carsArr.indexOf(carGuess) === -1 && i >= 5){
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
    alert('Oh great you broke the answer count system.');
}

