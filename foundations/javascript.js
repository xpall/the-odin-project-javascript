// let myName = "JL";
// let myAge = 25;
// let myLocation = "Laguna, Philippines"
// let originalSentence = `Hello world! I am ${myName}, I am ${myAge} years old. From ${myLocation}`;

// formattedSentence = originalSentence.split(" ");
// console.log(formattedSentence);

// let age = 25;

// // question 1 -correct

// if (age >= 14 && age <= 90) {
//     alert("Age is between 14 and 90")
// }

// // question 2 -correct

// if (!(age >=14 && age <=90)) {
//     alert("Age is not between 14 and 90")
// }

// if (age < 14 || age > 90) {
//     alert("Age is not between 14 and 90")
// }

// question 3 -correct on the second try (fatal  error on first, thought -1 evaluates to 'false')
// 1. runs --> -1 --> 'first'
// 2. does not run --> 0
// 3. runs --> 1 --> 'third'

// questio 4

let userName = prompt('Who\'s there?')

if (userName == 'Admin') {

    let pass = prompt('Password')

    if (pass == 'TheMaster') {
        alert('Welcome!');
    }   else if (pass == '' || pass == null) {
        alert('Canceled');
    }   else {
        alert('Wrong password')
    }
}   else if (userName == '' || userName == null) {
    alert('Canceled');
}   else {
    alert('I don\'t know you')
}
  

let cheese = "Cheddar";

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}


let value = prompt('What is the "official name of JavaScript?');
if (value == 'ECMAScript') {
  alert('Right!');
  } else {
    alert('You don\'t know? ECMAScript!');
  }

let value = prompt('What is the "official name of JavaScript?');
let answer = (value == 'ECMAScript') ? alert('Right!')
  :alert('You don\'t know? ECMAScript!')



let number = prompt("Enter a number: ")

if (number > 0) {
  alert("1")
}   else if (number < 0) {
  alert("-1")
}   else {
  alert("0")
}

let number2 = prompt("Enter a number: ")

let message = (number2 > 0) ? alert("1")
  : (number2 < 0) ? alert("-1")
  : alert("0");


let result = (a + b < 4) ? 'Below': 'Over';

let login = prompt('Username')
let message = (login == 'Employee') ? 'Hello' : 
  (login == 'Director') ? 'Greetings' : 
  (login == '') ? 'No Login' : '';
alert(message)

let browser = prompt('What browser do you use?')

if (browser == 'Edge') {
  alert('You\'ve got the Edge!');
} else if (browser === 'Chrome' 
  || browser == 'Firefox' 
  || browser == 'Safari' 
  || browser == 'Opera') {
  alert('Okay we support these browsers too');
} else {
  alert('We hope that this page looks ok!');
}

let a = +prompt('a?','')

switch (a) {
  case 0:
    alert(0);
    break;

  case 1:
    alert(1);
    
  case 2:
  case 3:
    alert('2,3');
    break;
}