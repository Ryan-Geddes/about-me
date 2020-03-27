'use strict';
// use strict forces some additional checks on JS.  Keeps you from getting away from loose JS code.


console.log('hello ' + userName)
var answerCount = 0;
var userName = prompt('What is your name?');

var likeCars = prompt('Do I like Cars?').toLowerCase();

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

if(answerCount = 5){
    alert('Wow, ' + userName + '!  You got 5/5 right! You\'re a genius!');
}
else if(answerCount <= 4 && answerCount > 0){
    alert('Not bad, ' + userName + '.  You got ' + answerCount + ' out of 5 right!');
}
else if(answerCount = 0){
    alert('Wow.  Sorry ' + userName + '.  I\'m sure you have other redeeming qualities, but you got 0 out of 5 right.');
}
else{
    alert('Oh great you broke it.');
}




    // while (((lowerCars !== 'yes'||'y')||(lowerCars !== 'y'))&&((lowerCars !== 'no')||(lowerCars !== 'n'))) {
    //     var likeCars = prompt('yes or no');
    // }
    // var lowerCars = likeCars.toLowerCase();

    // while ((likeCars !== 'yes'||'y')&&(likeCars !== 'no'||'n')) {
    //     likeCars = prompt('yes or no');
    // }
    // var lowerCars = likeCars.toLowerCase();