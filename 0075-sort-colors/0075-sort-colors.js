/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const count = [0, 0, 0];
    
    for (const num of nums) {
        console.log(count);
        count[num]++;
    }
    
    let i = 0;
    for (let n = 0; n < count.length; n++) {
        for (let j = 0; j < count[n]; j++) {
            nums[i] = n
            i++
        }
    }
};