/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (!nums.length) {
        return 0;
    }
    
    const sorted = nums.sort((a, b) => {
        return a - b;
    })
    
    let record = 1;
    let counter = 1;
    
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] + 1 === (sorted[i + 1])) {
            counter++;
        } else if (sorted[i] === sorted[i + 1]) {
            continue;
        } else {
            if (counter > record) {
                record = counter;
            }
            counter = 1;
        }
    }
    return record;
};