/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const hash = {};
    
    for (let i = 0; i < numbers.length; i++) {
        if (target - numbers[i] in hash) {
            return [(hash[(target - numbers[i])] + 1), i + 1];
        } else {
            hash[numbers[i]] = i;
        }
    }
};