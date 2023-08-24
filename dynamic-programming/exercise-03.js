// Say that you are a traveler on a 2D grid. You begin in the
// top-left corner and your goal is to travel to the bottom-right corner. You may only move down or right.
// In how many ways can you travel to the goal on a grid with dimensions m * n?

// 1. Bad solution O(2^(m+n))

function gridTraveler(m, n) {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
}

// console.log(gridTraveler(2, 3));
// console.log(gridTraveler(3, 2));
// console.log(gridTraveler(3, 3));
// console.log(gridTraveler(18, 18));

// 2. Good solution O(m*n)

function gridTravelerOpt(m, n, memo = {}) {
  const key = `${m}-${n}`;
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[key] = gridTravelerOpt(m - 1, n, memo) + gridTravelerOpt(m, n - 1, memo);
  return memo[key];
}

console.log(gridTravelerOpt(2, 3));
console.log(gridTravelerOpt(3, 2));
console.log(gridTravelerOpt(3, 3));
console.log(gridTravelerOpt(18, 18));
