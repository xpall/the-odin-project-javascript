let fizzBuzzRange = prompt('Enter the range of the FizzBuzz test: ')

for (let i = 1; i <= fizzBuzzRange; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    console.log('FizzBuzz');
  } else if (i % 5 == 0) {
    console.log('Buzz');
  } else if (i % 3 == 0) {
    console.log('Fizz');
  } else {
    console.log(i)
  }
}

// String Manipulation
// get len of string
// print string
// print string - 1
// until reaches 1
// once reached 1
// print string +1
// until reaches lenstring +1
// print string

let text = 'Greetings'

function popEndOfString (someText) {
  for (i = 1; i < someText.length; i++) {
    console.log(someText.substring(0, (1 + someText.length - i)));
  }
}

function addEndOfString (someText) {
  for (i = someText.length; i > 0; i--) {
    console.log(someText.substring(0, ((1 + someText.length - i))));
  }
}

popEndOfString(text)
addEndOfString(text)


























