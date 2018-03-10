

// Instantiate a new graph
var Graph = function(value) {
  this.nodes = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  this.nodes[value] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
  var edges = this.nodes[value];
  for (var i = 0; i < edges.length; i++) {
    this.removeEdge(edges[i], value);
  }
  delete this.nodes[value]
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var indexOfToNode = this.nodes[fromNode].indexOf(toNode);
  var indexOfFromNode = this.nodes[toNode].indexOf(fromNode);
  this.nodes[fromNode].splice(indexOfToNode, 1);
  this.nodes[toNode].splice(indexOfFromNode, 1);

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // for key in object;
  for (var key in this.nodes) {
      cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
