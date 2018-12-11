const fizzBuzzTree = (bst) => {

  depth(bst.root);
  console.log(bst.root.val);
  return bst;
};


function depth(node) {

  if(!node) {
    return node;
  }

  if(node.val % 3 === 0 && node.val % 5 === 0) {
    node.val = 'FizzBuzz';
  } else if(node.val % 3 === 0) {

    node.val = 'Fizz';
  } else if(node.val % 5 === 0) {
    node.val = 'Buzz';
  }

  depth(node.left);
  depth(node.right);


  return node;

}

export default fizzBuzzTree;