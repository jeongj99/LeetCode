/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hash = {};
    
    for (const str of strs) {
        const sorted = str.split("").sort().join("");
        
        if (!(sorted in hash)) {
            hash[sorted] = [str];
        } else {
            hash[sorted].push(str);
        }
    }
    
    return Object.values(hash);
};