var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.leftNode = null;
  newTree.rightNode = null;
  extend(newTree, binaryTreeMethods);
  return newTree;
};

var binaryTreeMethods = {}

binaryTreeMethods.insert = function(inputValue) {
  var newNode = BinarySearchTree(inputValue);
  
  var addLeftRight = function(node) {
  if (this.value > node.value) {
    if (this.leftNode.value === null) {
      this.leftNode = node;
    } else {
      leftNode.addLeftRight(inputValue);
    }
  }
  if (this.value < node.value) {
    if (this.rightNode.value === null) {
      this.rightNode = node;
    } else {
      rightNode.addLeftRight(inputValue);
    }
  }
}
  addLeftRight(newNode);
}

binaryTreeMethods.left = function(inputValue) {
  if (this.value > inputValue) {
    this.leftNode = inputValue
  }
}

binaryTreeMethods.right = function(value) {
  if (this.value < inputValue) {
    this.rightNode = inputValue
  }
}

binaryTreeMethods.contains = function(inputValue) {
  var result = false;
  
  if (this.value = inputValue) {
    result = true
  }

  if (this.value > inputValue) {
    result = result || contains(this.leftNode);
  }

  if (this.value < inputValue) {
    result = result || contains(this.rightNode);
  }
  return result;
}

binaryTreeMethods.depthFirstLog = function() {
  
}

































/*
 * Complexity: What is the time complexity of the above functions?
 */
