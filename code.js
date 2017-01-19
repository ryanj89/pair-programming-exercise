// Write a function that takes two numbers. For each number, you'll increase each digit by 1 except in the case of 9 where it will be turned into a 0. Then you'll add the two numbers together. For example:
//
// `oddAdd( 13, 50 ) >> 24 + 61 >> 85`
// `oddAdd( 49, 16 ) >> 50 + 27 >> 77`
//
// Assume that you may have numbers of varying length (that is, one digit or five digits) and that they will all be positive and greater than 0.
function oddAdd(numberOne, numberTwo) {
  var numberArray = [];
  // function increaseDigit(number) {
  //   var splitNumber = number.split();
  //   console.log(splitNumber);
  //   //splitNumber.forEach(function())
  //
  // }

// increaseDigit(45);
//


  numberArray.push(numberOne);
  numberArray.push(numberTwo);

  for (var i = 0; i < numberArray.length; i++) {
    var currentNumber = numberArray[i];
    console.log(currentNumber);

    for (var j = 0; j < currentNumber.length; j++) {
      
      console.log(currentNumber[j]);
    }
  }

}



module.exports = {
  oddAdd
};
