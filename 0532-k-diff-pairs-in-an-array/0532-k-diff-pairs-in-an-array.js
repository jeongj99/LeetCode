/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    const hash = {};
    let count = 0;
    
    for (const num of nums) {
        if (hash[num]) {
            hash[num]++;
        } else {
            hash[num] = 1;
        }
    }
    
    for (const key in hash) {
        if (k > 0 && hash[Number(key) + k]) {
            count++;
        } else if (k === 0 && hash[key] > 1) {
            count++;
        }
    }
    
    return count;
};