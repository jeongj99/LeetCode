/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const hash = {};
    
    for (const num of nums) {
        if (num in hash) {
            hash[num]++;
        } else {
            hash[num] = 1;
        }
    }
    
    const array = Object.entries(hash);
    
    array.sort((a, b) => b[1] - a[1]);
    
    const sortedKeys = array.map((pair) => pair[0]);
    
    return sortedKeys.slice(0, k)
};