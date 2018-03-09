var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value) { 
  var child = Tree(value);
  this.children.push(child);
};



treeMethods.contains = function(value) { //changes from targetNode
    if(this.value === value) {
      return true;
    } else if (this.children.length > 0) {
      for (var i = 0; i < this.children.length; i++) {
        //var pass = this.children[i]
        return this.children[i].contains(value);
        
      }
    }
    return false;
};



var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

//var oak = Tree(5);
//tree.addChild(oak);
//tree.value

//oak.contains(5)