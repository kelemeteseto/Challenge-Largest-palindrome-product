/*  largestPalindromeProduct(multiplicands, digits)
 *
 *  @param multiplicands  the amount of multiplicands to multiply by
 *  @param digits         the amount of digits in each multiplicand
 *
 *  @returns an object containing the
 *  two factors used to produce the palindromeNumber
 *  and the palindromeNumber itself.
 */
module.exports = function(multiplicands, digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = -Infinity;

  // do your work here
  var maxValue = Math.pow(10, digits);

  for(var x = 0; x < maxValue; x++) {
    for(var y = 0; y < maxValue; y++) {
      var product = x * y;
      // if(product <= maxValue) break;
      if(product.toString() === product.toString().split('').reverse().join('') && product > palindromeNumber) {
        factor_0 = x;
        factor_1 = y;
        palindromeNumber = product;
      }
    }
  }

  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};