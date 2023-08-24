// Push Methods in Arrays

Array.prototype.myPush = function(...values) {
  for (const value of values) {
    this[this.length] = value;
  }
  return this.length;
};

const arr = [1, 2, 3];
console.log(arr.myPush(4));
console.log(arr);
console.log(arr.myPush(5, 6, 7));
console.log(arr);
