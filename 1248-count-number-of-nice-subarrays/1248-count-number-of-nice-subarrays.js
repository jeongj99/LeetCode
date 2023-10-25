/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let count = 0;
    let oddCount = 0;
    let oddMap = { 0: 1 };

    for (let num of nums) {
        if (num % 2 === 1) {
            oddCount++;
        }

        if (oddMap[oddCount - k]) {
            count += oddMap[oddCount - k];
        }

        oddMap[oddCount] = (oddMap[oddCount] || 0) + 1;

    }

    return count;
};