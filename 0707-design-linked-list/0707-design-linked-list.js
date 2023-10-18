class Node {
    constructor(val, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class MyLinkedList {
    constructor() {
        this.head = new Node();
        this.tail = new Node();
        this.length = 0; 
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    
    get(index) {
        if (index < 0 || index >= this.length) {
            return -1;
        }
        
        let currentNode = this.head.next;
        
        while (index--) {
            currentNode = currentNode.next;
        }
        
        return currentNode.val;
    }
    
    addAtHead(val) {
        let prev = this.head;
        let next = this.head.next;
        
        let node = new Node(val, prev, next);
        
        prev.next = node;
        next.prev = node;
        
        this.length++; 
    }
    
    addAtTail(val) {
        let prev = this.tail.prev;
        let next = this.tail;
        
        let node = new Node(val, prev, next);
        
        prev.next = node;
        next.prev = node;
        
        this.length++;
    }
    
    addAtIndex(index, val) {
        if (index < this.length) {
            let currentNode = this.head.next;
             while (index--) {
                 currentNode = currentNode.next;
             }
            
            let prev = currentNode.prev;
            
            let node = new Node(val, prev, currentNode);
            
            prev.next = node;
            currentNode.prev = node;
            
            this.length++;
        } else if (index === this.length) {
            this.addAtTail(val);
        }
    }
    
    deleteAtIndex(index) {
        if (index >= 0 && index < this.length) {
            let currentNode = this.head.next;
            while (index--) {
                currentNode = currentNode.next;
            }
            
            let prev = currentNode.prev;
            let next = currentNode.next;
            
            prev.next = next;
            next.prev = prev;
            
            this.length--;
        }
    }
}