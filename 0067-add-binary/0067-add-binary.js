/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const numA = `0b${a}`
    const numB = `0b${b}`
    
    const total = BigInt(numA) + BigInt(numB);
    
    return total.toString(2);
};