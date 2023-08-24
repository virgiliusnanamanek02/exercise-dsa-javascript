// Pop Methods in Arrays
// How pop works

Array.prototype.myPop = function() {
  if (this.length === 0) {
    return undefined; // Return undefined if the array is empty
  }

  const removedElement = this[this.length - 1]; // Get the last element
  this.length = this.length - 1; // Reduce the length of the array
  return removedElement;
};

const arr = [1, 2, 3];
console.log(arr.myPop()); // Output: 3
console.log(arr); // Output: [1, 2]
