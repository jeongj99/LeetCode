// /**
//  * @param {number} x
//  * @return {boolean}
//  */
var isPalindrome = function(x) {
    const reverseX = [...x.toString()].reverse().join('');

    return x.toString() === reverseX
};