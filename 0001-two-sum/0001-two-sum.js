/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const seenNumbers = [];
    const result = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (seenNumbers.includes(target - nums[i])) {
            const j = nums.findIndex((element) => {
                return element === (target - nums[i]);
            })
            result.push(j, i);
            return result;
        }
        
        seenNumbers.push(nums[i]);
    }
    
    return result;
};