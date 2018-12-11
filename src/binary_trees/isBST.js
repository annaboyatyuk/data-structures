let isBST = (bst) => {
  if (bst.root === undefined) {
    return 'must input a tree';
  }

  if (bst.root === null) {
    return true;
  }

  return checkNode(bst.root);

};

function checkNode(node) {

  let left = true;
  let right = true;

  if (node.right) {
    if (node.val > node.right.val) {
      return false;
    } else {
      right = checkNode(node.right);
    }
  }

  if (node.left) {
    if (node.val < node.left.val) {
      return false;
    } else {
      left = checkNode(node.left);
    }
  }

  if (left === true && right === true) {
    return true;
  } else {
    return false;
  }

}

export default isBST;