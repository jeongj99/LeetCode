/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let x = 1;
    let y = 2;
    let z = 0;
    
    for (let i = 3; i <= n; i++) {
        z = x + y;
        x = y;
        y = z;
    }
    
    return n === 1 ? x : y;
};