/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const regex = /[^a-z0-9]/g;
    
    const edited = s.toLowerCase().replace(regex, "");
    
    let leftIndex = 0;
    
    let rightIndex = edited.length - 1;
    
    while (leftIndex < rightIndex) {
        if (edited[leftIndex] !== edited[rightIndex]) {
            return false;
        } else {
            leftIndex++;
            rightIndex--;
        }
    }
    console.log(edited);
    
    return true;
};