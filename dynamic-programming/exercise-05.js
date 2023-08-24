// Knapsack Problem
// Knapsack Problem is a classic problem in dynamic programming. It is a problem that asks us to
// find the maximum value that we can put in a knapsack
//
// Consider the problem having weights and profits are:

// Weights: {3, 4, 6, 5}
//
// Profits: {2, 3, 1, 4}
//
// The weight of the knapsack is 8 kg
//
// The number of items is 4
//

// 1. Memoization

function knapsackMemo(weights, profits, capacity, itemCount, memo = {}) {
  if (capacity in memo) return memo[capacity]; // if the capacity is in the memo, return the value
  if (capacity === 0 || itemCount === 0) return 0; // if capacity is 0 or itemCount is 0, return 0
  if (weights[itemCount - 1] > capacity)
    // if the previous weight is greater than capacity
    return knapsackMemo(weights, profits, capacity, itemCount - 1, memo); // recurse to the next weight
  const profit1 =
    profits[itemCount - 1] +
    knapsackMemo(
      weights,
      profits,
      capacity - weights[itemCount - 1],
      itemCount - 1,
      memo
    );
  const profit2 = knapsackMemo(weights, profits, capacity, itemCount - 1, memo);
  memo[capacity] = Math.max(profit1, profit2);
  return memo[capacity];
}

// console.log(knapsackMemo([3, 4, 6, 5], [2, 3, 1, 4], 8, 4));

// 2. Tabulation

function knapsackTab(weights, profits, capacity, itemCount) {
  const table = new Array(capacity + 1).fill(0);
  for (let i = 1; i <= capacity; i++) {
    for (let j = 0; j < itemCount; j++) {
      if (weights[j] > i) {
        table[i] = table[i];
      } else {
        table[i] = Math.max(table[i], table[i - weights[j]] + profits[j]);
      }
    }
  }
  return table[capacity];
}

console.log(knapsackTab([3, 4, 6, 5], [2, 3, 1, 4], 8, 4));
