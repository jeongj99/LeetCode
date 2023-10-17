/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }
    
    const sArray = [];
    const tArray = [];
    
    for (let i = 0; i < s.length; i++) {
        sArray.push(s[i]);
        tArray.push(t[i]);
    }
    
    sArray.sort();
    tArray.sort();
    
    for (let j = 0; j < sArray.length; j++) {
        if (sArray[j] !== tArray[j]) {
            return false
        }
    }
    
    return true;
};