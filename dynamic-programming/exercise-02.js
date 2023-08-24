// Factorial

// 1. Bad Algorithm - O(2^n)

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Algoritma di atas memerlukan banyak operasi.

// 2. Good Algorithm - O(n)
// 2.1 Memoization

function factMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return 1;
  memo[n] = n * factMemo(n - 1, memo);
  return memo[n];
}

console.log(factMemo(10));

// 2.2 Tabulation

function factTab(n) {
  const fact = [1];
  for (let i = 1; i <= n; i++) {
    fact[i] = i * fact[i - 1];
  }
  return fact[n];
}

console.log(factTab(10));
