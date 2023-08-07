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
