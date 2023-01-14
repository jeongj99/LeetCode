/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const hashTable = {};
    
    for (const num of nums) {
        hashTable[num] = hashTable[num] + 1 || 1;
    }
    
    return Object.keys(hashTable).find(key => hashTable[key] === 1);
};