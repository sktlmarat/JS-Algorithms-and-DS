// Node class
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Singly Linked List
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length += 1;
        return this;
    }

    get(index) {
        if (index >= this.length || index < 0){
            return null;
        } 
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.val;
    }

    set(index, val){
        var foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index  < 0 || index > this.length) {
            return false;
        }
        if (index === length) {
            this.push(val);
        }
        if (index === 0){
            this.unshift(val);
        }
        let prev = this.get(index - 1)
        let newNode = new Node(val);
        let temp = prev.next;
        newNode.next = temp;
        this.length++;
        return true;
    }

    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}
