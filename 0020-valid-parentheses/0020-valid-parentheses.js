/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const closeToOpen = {
        ")": "(",
        "]": "[",
        "}": "{"
    };
    
    for (const c of s) {
        if (c in closeToOpen) {
            if (stack.length !== 0 && stack[stack.length - 1] === closeToOpen[c]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(c);
        }
        
    }
    
    if (stack.length === 0) {
        return true;
    }
    
    return false;
};