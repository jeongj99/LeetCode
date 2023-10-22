/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    
    let left = 0;
    let right = height.length - 1;
    
    while (left < right) {
        const tallest = Math.min(height[left], height[right]);
        const base = right - left;
        const currArea = base * tallest;
        
        
        if (currArea > maxArea) {
            maxArea = currArea;
        }
        
        height[left] > height[right] ? right-- : left++
    }
    
    return maxArea;
};