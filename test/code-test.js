// Write a function that takes two numbers. For each number, you'll increase each digit by 1 except in the case of 9 where it will be turned into a 0. Then you'll add the two numbers together. For example:
//
// `oddAdd( 13, 50 ) >> 24 + 61 >> 85`
// `oddAdd( 49, 16 ) >> 50 + 27 >> 77`
//
// Assume that you may have numbers of varying length (that is, one digit or five digits) and that they will all be positive and greater than 0.
const chai = require('chai');
const expect = chai.expect;
const oddAdd = require('../code').oddAdd;

describe('oddAdd', function() {
  it('should take 50 and 61 and return 133', function() {
    expect(oddAdd(50, 61)).to.equal(133);
  });
  it('should take 1 and 99 and return 2', function() {
    expect(oddAdd(1, 99)).to.equal(2);
  });
  it('should take 25 and 14 and return 61', function() {
    expect(oddAdd(25, 14)).to.equal(61);
  });
});
