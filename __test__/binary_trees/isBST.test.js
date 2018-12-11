import isBST from '../../src/binary_trees/isBST.js';
import {BinarySearchTree} from '../../src/binary_trees/binarySearchTree.js';

describe('isBST()', () => {
  
  let BST;

  beforeEach(() => {
    BST = new BinarySearchTree;
  });

  it('hould verify that input is a BT', () => {
    expect(isBST('hello_world')).toBe('must input a tree');
  });

  it('should return true for an empty tree', () => {
    expect(isBST(BST)).toBeTruthy();
  });
  
  it('should return true for a bst with only a root', () => {
    BST.insert(5);
    expect(isBST(BST)).toBeTruthy();
  });

  it('should return true for a truthy bst', () => {
    BST.insert(5);
    BST.insert(7);
    BST.insert(4);
    BST.insert(1);

    expect(isBST(BST)).toBeTruthy();
  });

  it('should return false for a faulty left child', () => {
    BST.insert(5);
    BST.insert(7);
    BST.insert(4);
    BST.insert(1);

    BST.root.left.val = 20;

    expect(isBST(BST)).toBeFalsy();
  });

  it('should return false for a faulty right child', () => {
    BST.insert(5);
    BST.insert(7);
    BST.insert(4);
    BST.insert(2);

    BST.root.right.val = 1;

    expect(isBST(BST)).toBeFalsy();
  });

  it('should return false for a faulty BST with one layered node being false', () => {
    BST.insert(5);
    BST.insert(7);
    BST.insert(4);
    BST.insert(2);
    BST.insert(9);

    BST.root.right.right.val = 1;

    expect(isBST(BST)).toBeFalsy();
  });
});