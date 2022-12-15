/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const numSet = new Set();
    
    for (let i = 0; i < nums.length; i++) {
        if (numSet.has(nums[i])) {
            nums.splice(i, 1);
            i--;
        } else {
            numSet.add(nums[i]);
        }
    }
    return nums.length;
};