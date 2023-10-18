class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class BrowserHistory {
    constructor(homepage) {
        this.head = new Node(homepage);
        this.currentPage = this.head;
    }
    
    visit(url) {
        let newPage = new Node(url);
        this.currentPage.next = newPage;
        newPage.prev = this.currentPage;
        
        this.currentPage = newPage;
    }
    
    back(step) {
        while (step-- && this.currentPage.prev !== null) {
            this.currentPage = this.currentPage.prev;
        }
        
        return this.currentPage.val;
    }
    
    forward(step) {
        while (step-- && this.currentPage.next !== null) {
            this.currentPage = this.currentPage.next;
        }
        
        return this.currentPage.val;
    }
}