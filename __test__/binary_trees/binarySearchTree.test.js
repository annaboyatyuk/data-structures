import {BinarySearchTree} from '../../src/binary_trees/binarySearchTree.js';
import {Node} from '../../src/binary_trees/binarySearchTree.js';

describe('Node', () => {

  it('should create a node when a single argument is given', () => {
    let node = new Node(5);

    expect(node.val).toBe(5);
    expect(node.left).toBeNull;
    expect(node.right).toBeNull();

  });

});

describe('Binary tree', () => {
  let BT;

  beforeEach(() => {
    BT = new BinarySearchTree();
  });

  it('should create a tree with an empty root', () => {
    expect(BT.root).toBeNull();
  });

  it('.insert() should add a root node if no root node exists', () => {
    BT.insert(5);
    expect(BT.root.val).toBe(5);
    expect(BT.root.left).toBeNull();
    expect(BT.root.right).toBeNull();
  });

  it('.insert() should add a left child when value is smaller', () => {
    BT.insert(5);
    BT.insert(2);
    BT.insert(1);
    expect(BT.root.val).toBe(5);
    expect(BT.root.right).toBeNull();
    expect(BT.root.left.val).toBe(2);
    expect(BT.root.left.left.val).toBe(1);
  });

  it('.insert() should add a right child when value is greater', () => {
    BT.insert(5);
    BT.insert(7);
    BT.insert(10);
    expect(BT.root.val).toBe(5);
    expect(BT.root.left).toBeNull();
    expect(BT.root.right.val).toBe(7);
    expect(BT.root.right.right.val).toBe(10);
  });

});