

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) { 
    this._storage.set(index, [[k, v]]);
  } else if (this._storage.get(index) !== undefined) {
    var value = this._storage.get(index);
    var isOld = false;
    for (var i = 0; i < value.length; i++) {
        if (value[i][0] === k) {
          value[i][1] = v;
          isOld = true;
        } 
    }
    if (isOld === false) {
      value.push([k, v]);
    }
  } 
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var value = this._storage.get(index);
  for (var i = 0; i < value.length; i++) {
    if (value[i][0] === k) {
      return value[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var value = this._storage.get(index);
  for (var i = 0; i < value.length; i++) {
    if (value[i][0] === k) {
      value.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
// It's constant time because the hashing function points us to exactly the index we need.


