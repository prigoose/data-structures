var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  extend(newTree, binaryTreeMethods);
  return newTree;
};

var binaryTreeMethods = {}

binaryTreeMethods.insert = function(inputValue) {
  if (this.value > inputValue) {
    if (this.left === null) {
      this.left = BinarySearchTree(inputValue);
    } else {
      this.left.insert(inputValue);
    }
  }
  if (this.value < inputValue) {
    if (this.right === null) {
      this.right = BinarySearchTree(inputValue);
    } else {
      this.right.insert(inputValue);
    }
  }
};

binaryTreeMethods.contains = function(inputValue) {
  var result = false;
  
  if (this.value === inputValue) {
    result = true;
  }

  if (this.value > inputValue) {
    if (this.left !== null) {
      result = result || this.left.contains(inputValue);
    }
  }

  if (this.value < inputValue) {
    if (this.right !== null) {
      result = result || this.right.contains(inputValue);
    }
  }

  return result;
}

binaryTreeMethods.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
// insert is log. Contains is linear due to our implementation. Depth first log is linear by necessity.
