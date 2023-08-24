// Fibonacci

// 1. Bad Algorithm - O(2^n)

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Program di atas menggunakan algoritma yang buruk karena memerlukan banyak operasi.

// 2. Good Algorithm - O(n)

// 2.1 Memoization

function fibMemo(n, memo = {}) {
  if (n in memo) return memo[n];

  if (n <= 0) return 0;
  if (n <= 2) return 1;

  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

console.log(fibMemo(1000));

// 2.2 Tabulation

function fibTab(n) {
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
}

console.log(fibTab(1000));
