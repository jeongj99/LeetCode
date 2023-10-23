/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        let j = i - 1;
        
        while (j >= 0 && nums[j + 1] < nums[j]) {
            const temp = nums[j + 1];
            nums[j + 1] = nums[j];
            nums[j] = temp
            j--;
        }
    }
    
    return nums;
};