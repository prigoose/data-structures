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
    // var ChilrenLength = node.children.length
    //debugger;
    //var directChilren = this.chilren
    var result = false;
 
    if(this.value === value) {
      result = true;
    }

    for (var i = 0; i < this.children.length; i++) {
        result = result || this.children[i].contains(value);
    }
  
    return result;
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