import {BinarySearchTree} from '../../src/binary_trees/binarySearchTree.js';
import fizzBuzzTree from '../../src/binary_trees/fizzBuzzTree.js';

describe('fizzBuzztree()', () => {

  let BST;
  beforeEach(() => {
    BST = new BinarySearchTree();
  });

  it('should not modify the tree if nothing is divisible by 3 or 5', () => {
    BST.insert(7);
    BST.insert(2);
    BST.insert(8);
    BST.insert(11);

    expect(fizzBuzzTree(BST)).toBe(BST);
  });
});