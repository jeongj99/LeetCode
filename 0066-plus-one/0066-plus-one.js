/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let num = BigInt(digits.join(''));
    num++
    
    const result = num.toString().split('');
    
    return result;
};