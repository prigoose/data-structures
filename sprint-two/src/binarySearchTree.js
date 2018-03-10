var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.leftNode;
  newTree.rightNode;
  extend(newTree, binaryTreeMethods);
  return newTree;
};

var binaryTreeMethods = {}

binaryTreeMethods.insert = function(inputValue) {
  var newNode = BinarySearchTree(inputValue);
  if (this.value > newNode.value && this.leftNode.value === undefined) {
    this.leftNode = newNode;
  }
  if (this.value < newNode.value) {
    this.rightNode = newNode;
  }
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
