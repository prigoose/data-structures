var LinkedList = function() {
  //debugger;
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    this.tail = node;
    if (this.head === null) {
      this.head = node;
    }
  };

  list.removeHead = function() {
    
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
  //connect them?
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
//console.log(tail.value)