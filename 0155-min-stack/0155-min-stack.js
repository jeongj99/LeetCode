class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    
    push(val) {
        if (!this.stack.length) {
            this.stack.push(val);
            this.minStack.push(val);
        } else {
            this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], val))
            this.stack.push(val);
        }
    }
    
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }
    
    top() {
        return this.stack[this.stack.length - 1];
    }
    
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}