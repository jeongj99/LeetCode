/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            result[i] = 1;
        } else {
            result[i] = nums[i - 1] * result[i - 1];
        }
    }
    
    let post = 1;
    for (let j = nums.length - 1; j >= 0; j--) {
        result[j] *= post;
        post *= nums[j];
    }
    
    return result;
};

// [1, 1, 2, 6]