// Node class
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

//Doubly Linked list class
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        else if (this.length === 1){
            var oldTail = this.tail;
            this.head = null;
            this.tail = null;
        }else {
            this.tail = oldTail.prev;
            this.tail.next = null;
            oldTail.prev = null;
        }
        this.length -= 1;
        return oldTail;
    }

    shift() {
        if (this.length === 0) return undefined;
        var oldHead = this.head;
        if (this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            this.oldHead.next = null;
            this.oldHead.prev = null;
        }
        this.length -= 1;
        return oldHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length += 1;
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;
        if(index <= this.length/2){
            let current = this.head;
            for (let i = 0; i < this.length; i++) {
                current = current.next;
            }
        }
        else{
            let current = this.tail;
            for (let i = this.length - 1; i > 0; i--) {
                current = current.prev;
            }
        }
        return current;
    }

    set(index, val){
        let foundNode = this.get(index);
        if(foundNode !== null){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);
        var newNode = new Node(val);
        var beforeNode = this.get(this.index - 1);
        var afterNode = this.get(this.index);
        beforeNode.next = newNode;
        afterNode.prev = newNode;
        newNode.next = afterNode;
        newNode.prev = beforeNode;
        this.length += 1;
        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length -= 1;
        return removedNode;

    }
}