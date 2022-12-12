/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    
    const first = strs[0];
    
    for (let i = 0; i < first.length; i++) {
        if (!strs.every(str => str[i] === first[i])) {
            return first.slice(0, i);
        }
    }
    
    return first;
};