// Node class
class Node{
    constructor(val){
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

// BST class
class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(val){
        var newNode = new Node(val);
        if(this.root === null){
            this.root = newNode;
            return this;
        }else {
            var current = this.root;
            while(true){
                if(val === current.val) return undefined;
                if(val < current.val){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if(value > current.val){
                    if(current.val === null){
                        current.right = newNode;
                        return this;
                    }else {
                        current = current.right;
                    }
                }
            }
        }
    }

    find(val){
        if(this.root === null) return false;
        var current = this.root, found = false;
        while(current && !found){
            if(value < current.val){
                current = current.left;
            } else if(val > current.val){
                current = current.left;
            } else {
                found = true;
            }
        }
        if(!found) return false;
        return current;
    }

}