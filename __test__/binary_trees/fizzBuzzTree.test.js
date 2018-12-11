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


  it('should change numbers divisible by 3 to Fizz', () => {

    BST.insert(7);
    BST.insert(6);
    BST.insert(8);
    BST.insert(11);
    BST.insert(2);
    BST.insert(30);
    BST.insert(5);
    
    /*
          7
        6   8
      2       11
       5         30 
    */
    expect(fizzBuzzTree(BST).root.left.val).toBe('Fizz');

    expect(fizzBuzzTree(BST).root.left.left.right.val).toBe('Buzz');

    expect(fizzBuzzTree(BST).root.right.right.right.val).toBe('FizzBuzz');
  });


});