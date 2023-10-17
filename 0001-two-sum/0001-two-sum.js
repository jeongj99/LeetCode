/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const seenNumbers = {};
    const result = [];
    
    for (let i = 0; i < nums.length; i++) {
        if ((target - nums[i]) in seenNumbers) {
            result.push(seenNumbers[(target - nums[i])], i);
            return result;
        }
        seenNumbers[nums[i]] = i;
    }
    
    
    return result;
};