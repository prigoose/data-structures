var LinkedList = function() {
  //debugger;
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (this.tail !== null) {
      this.tail.next = node;
      this.tail = node
      } else if (this.tail === null) {
      this.tail = node;
      }
    if (this.head === null) {
      this.head = node;
    }
    //this.tail points to most recent node
    //this.tail.next should point to current 
  };

  list.removeHead = function() {
    //save former head
    var formerHead = this.head.value;
    //point head to the former head's 'next' value
    this.head = this.head.next;
    //return former head
    return formerHead;
  };

  list.contains = function(target) {
  var helper = function(node) {
      if (node.value === target) {
        return true;
      } else if (node.value !== target && node.next === null) {
        return false;
      } else {
        return helper(node.next);
      }
    
    }
  return helper(this.head);
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