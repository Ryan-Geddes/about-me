'use strict';
// use strict forces some additional checks on JS.  Keeps you from getting away from loose JS code.


console.log('hello ' + userName)

var userName = prompt('What is your name?');

var likeStarWars = prompt('Do you like Star Wars?');
likeStarWars.toUpperCase
//if the user answers yes, I want to alert:
// username and the phrase ' I like star wars too!'

//if the user answers no, I want to alert:
// username and the phrase 'GO FUCK YOURSELF'

if(likeStarWars === 'yes'){
    alert(userName + ' I LIKE IT TUUUUU uWu');
}
else if(likeStarWars === 'no'){
    alert(userName + ' oh noooo notice me senpai notice meeee');
}
else {
    alert(userName = ' WHY CAN\'T YOU JUST BE NORMAL');
}
