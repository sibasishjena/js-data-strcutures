class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(x) {
        if (this.head === null) {
            this.head = new Node(x);
            this.tail = this.head;
        } else {
            const temp = new Node(x);
            this.tail.next = temp;
            this.tail = temp;
        }
    }

    isEmpty() {
        return this.head === null;
    }
    
    getFront() {
        return this.head === null ? null : this.head.data;
    }

    pop() {
        if (!this.head) {
            return null;
        } else {
            const temp = this.head.next;
            const prev = this.head;
            this.head.next = null;
            this.head = temp;
            return prev.data;
        }
    }
}

class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}
