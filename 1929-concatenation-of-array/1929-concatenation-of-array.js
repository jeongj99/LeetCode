/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const ans = [];
    
    for (let n = 1; n <= 2; n++) {
        for (let i = 0; i < nums.length; i++) {
            ans.push(nums[i]);
        }
    }
    
    return ans;
};