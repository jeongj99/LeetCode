/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const result = [];
    let temp = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 1 === nums[i + 1]) {
            temp.push(nums[i]);
        } else {
            temp.push(nums[i]);
            if (temp.length === 1) {
                result.push(`${temp[0]}`);
            } else {
                result.push(`${temp[0]}->${temp[temp.length - 1]}`);
            }
            temp = [];
        }
    }
    return result;
};