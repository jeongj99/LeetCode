/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let x = 1;
    let y = 1;
    
    for (let i = 0; i < n - 1; i++) {
        const z = x + y;
        y = x
        x = z
    }
    
    return x;
};