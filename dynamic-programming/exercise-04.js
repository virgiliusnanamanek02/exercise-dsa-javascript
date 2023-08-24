// Write a function `canSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.
// The function should return a boolean indicating whether or not it is possible to generate the
// targetSum using numbers from the array
// You may use an element of the array as many times as needed.
// You may assume that all input numbers are nonnegative.

// canSum(7, [5, 3, 4, 7]) => true
// canSum(7, [2, 4]) => false

// 1. Bad solution => Brute force O(n^m)

function canSum(targetSum, numbers) {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers)) return true;
  }
  return false;
}

// console.log(canSum(7, [5, 3, 4, 7]));
// console.log(canSum(7, [2, 4]));
// console.log(canSum(300, [7, 14]));

function canSumMemo(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSumMemo(remainder, numbers, memo)) return (memo[remainder] = true);
  }
  return (memo[targetSum] = false);
}

console.log(canSumMemo(7, [5, 3, 4, 7]));
console.log(canSumMemo(7, [2, 4]));
console.log(canSumMemo(300, [7, 14]));
