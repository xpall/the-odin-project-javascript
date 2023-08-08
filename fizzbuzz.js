// get input
// generate range 1 to input
// check if div by 5 and 3 = FizzBuzz
// if only by 3 = Fizz
// if only by 5 = Buzz
// else = number

function main() {
  return fizzBuzzSubstitution(getRange(getInput()));
}

function getInput() {
  return +(prompt('Enter a valid number: '));
}

function getRange(n) {
  return (Array(n).fill().map((element, index) => index + 1));
}

function fizzBuzzSubstitution(numRange) {
  for (i of numRange) {
    if (i % 3 == 0 && i % 5 == 0) {
      numRange[i] = 'FizzBuzz';
    } else if (i % 3 == 0) {
      numRange[i] = 'Fizz';
    } else if (i % 5 == 0) {
      numRange[i] = 'Buzz';
    } else {
      numRange[i] = i;
    }
  }
  // return numRange;
}

main();
