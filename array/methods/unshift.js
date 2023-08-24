// Unshift Methods in Arrays

Array.prototype.myUnshift = function(...values) {
  for (let i = this.length; i > 0; i--) {
    this[i] = this[i - 1];
  }

  for (const value of values) {
    this[0] = value;
  }
  return this.length;
};

const arr = [1, 2, 3];
console.log(arr.myUnshift(4));
console.log(arr);
console.log(arr.myUnshift(5, 6, 7));
console.log(arr);
