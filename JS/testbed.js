'use strict';
//use strict forces some additional checks on JS.  Keeps you from getting away from loose JS code.


// counter = i, i <5, i++ 
// Counter keeps track of what question you're on
// 
// each if  statement tracks a single question
// 
// 
// 
// 
// 
var answerCount = 0;
var userName = 'Ryan'
var responseArr = [
    userName + ', that\'s correct! I love cars!', 
    userName + ' Swing and a miss.  I love cars!', 
    userName + '. Almost.  I used to, but I\'ve forgotten now!', 
    userName + '.  Correct! I used to play as a kid. :(', 
    userName + ', that\'s right! I\m from Bozeman!', 
    userName + ', oh nooo.  That\'s incorrect, I grew up in Bozeman!',
    userName + ', that\'s right! I do work at Zillow!', 
    userName + ', oh nooo.  That\'s incorrect, I do work at Zillow!',   
    userName + ', that\'s right! I love green!', 
    userName + ', oh nooo.  That\'s incorrect, green is my favorite color!',  
    userName + ' WHY CAN\'T YOU JUST BE NORMAL', ];

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


// var likeCars = prompt('Let\'s play a guessing game! I\'m going to ask you 5 yes or no questions.  Q1: Do I like Cars?').toLowerCase();

// while ((likeCars !== 'yes' && likeCars !== 'no' && likeCars !== 'y' && likeCars !== 'n' )) {
//     likeCars = prompt('yes or no').toLowerCase();
// }
//     if((likeCars === 'yes')||(likeCars === 'y')){
//         alert(userName + ', that\'s correct! I love cars!');
//         answerCount++;
//     }
//     else if((likeCars === 'no')||(likeCars === 'n')){
//         alert(userName + ' Swing and a miss.  I love cars!');
//     }
//     else {
//         alert(userName + ' WHY CAN\'T YOU JUST BE NORMAL');
//     }

// 



    // if the counter is 2, ask question two,
        //true condition
        // false condition