// shift Methods in Arrays

Array.prototype.myShift = function() {
  const removedElement = this[0]; // Get the first element
  for (let i = 0; i < this.length - 1; i++) {
    // Remove the first element
    this[i] = this[i + 1]; // Shift the elements
  }
  this.length = this.length - 1; // Reduce the length
  return removedElement;
};

const arr = [1, 2, 3];
console.log(arr.myShift());
console.log(arr);
