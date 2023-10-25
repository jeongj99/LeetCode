/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let remainderCount = {};
    let count = 0;

    for (let t of time) {
        let remainder = t % 60;
        count += remainderCount[(60 - remainder) % 60] || 0;
        remainderCount[remainder] = (remainderCount[remainder] || 0) + 1;
    }

    return count;
};