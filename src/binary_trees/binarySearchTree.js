export class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let node = new Node(val);
    let current = this.root;

    if(!this.root) {
      this.root = node;
    }
    
    while(current) {
      if(current.val > val) {
        if(!current.left) {
          current.left = node;
          break;
        } else {
          current = current.left;
        }
      } else {
        if(!current.right) {
          current.right = node;
          break;
        } else {
          current = current.right;
        }
      }
    }

    return this;
  }
}
