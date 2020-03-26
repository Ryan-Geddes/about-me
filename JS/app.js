'use strict';
// use strict forces some additional checks on JS.  Keeps you from getting away from loose JS code.


console.log('hello ' + userName)

var userName = prompt('What is your name?');

var likeStarWars = prompt('Do you like Star Wars?');
likeStarWars.toUpperCase

if(likeStarWars === 'yes'){
    alert(userName + ' I like it too! uWu');
}
else if(likeStarWars === 'no'){
    alert(userName + ' oh noooo notice me senpai notice meeee');
}
else {
    alert(userName + ' WHY CAN\'T YOU JUST BE NORMAL');
}
