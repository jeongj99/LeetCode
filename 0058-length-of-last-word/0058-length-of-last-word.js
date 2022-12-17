/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const wordsArray = s.trim().split(' ');
    
    return wordsArray[wordsArray.length - 1].length;
};