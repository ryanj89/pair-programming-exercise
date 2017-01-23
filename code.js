// Write a function that takes two numbers. For each number, you'll increase each digit by 1 except in the case of 9 where it will be turned into a 0. Then you'll add the two numbers together. For example:
//
// `oddAdd( 13, 50 ) >> 24 + 61 >> 85`
// `oddAdd( 49, 16 ) >> 50 + 27 >> 77`
//
// Assume that you may have numbers of varying length (that is, one digit or five digits) and that they will all be positive and greater than 0.

// *********************************************************

function oddAdd(numberOne, numberTwo) {
// Create an empty array to store the two arguments in.
  var numberArray = [];

// Translate each number into an array of separate digits.
  numberOne = (numberOne).toString(10).split("").map(function(t){return parseInt(t)});

  numberTwo = (numberTwo).toString(10).split("").map(function(t){return parseInt(t)});

// Push the two arrays into the numberArray
  numberArray.push(numberOne);
  numberArray.push(numberTwo);

// Use the map function to operate on each array within the bigger array.
  numberArray.map(addOne);

// Add 1 to digits less than 9, make 0 if digit is nine.
  function addOne(miniArray) {
    for (var i = 0; i < miniArray.length; i++) {
      if (miniArray[i] < 9) {
        miniArray[i] += 1;
      } else {
        miniArray[i] =0;
      }
    }
    return miniArray;
  }

// Join the string digits into one number instead of separate digits. Then use parseInt to change the string to an integer.
  numberArray.map(joinDigits);
  function joinDigits(currentValue, index, array) {
    array[index] = array[index].join("");
    array[index] = parseInt(array[index]);
    return array[index];
  }

// Sum the two numbers together and return the result.
  return numberArray[0]+numberArray[1];

  //console.log(numberArray);

};
module.exports = {
  oddAdd
};
