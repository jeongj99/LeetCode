/**
 * @param {number[]} nums
 * @return {number[]}
 */

const merge = (arrOne, arrTwo) => {
    const result = [];
    let i = 0;
    let j = 0;
    
    while (i < arrOne.length && j < arrTwo.length) {
        if (arrOne[i] <= arrTwo[j]) {
            result.push(arrOne[i]);
            i++;
        } else {
            result.push(arrTwo[j]);
            j++;
        }
    }
    
    while (i < arrOne.length) {
        result.push(arrOne[i]);
        i++;
    }
    
    while (j < arrTwo.length) {
        result.push(arrTwo[j]);
        j++;
    }
    
    return result;
}

var sortArray = function(nums) {
    if (nums.length <= 1) {
        return nums;
    }
    
    let mid = Math.floor(nums.length / 2);
    
    let left = sortArray(nums.slice(0, mid));
    
    let right = sortArray(nums.slice(mid));
    
    return merge(left, right);
};