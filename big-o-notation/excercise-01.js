// Determine the time and space complexities for each of the following functions.
// If you're not sure what these functions do, copy and paste them into the console
// and experiment with different inputs!

// 1. O(n) because it only use 1 for loop

function logUpTo(n) {
  for (var i = 1; i <= n; i++) {
    console.log(i);
  }
}

// 2. O(1) because

function logAtMost10(n) {
  for (var i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}

// 3.

function logAtLeast10(n) {
  for (var i = 1; i <= Math.max(n, 10); i++) {
    console.log(i);
  }
}

// 4.

function onlyElementsAtEvenIndex(array) {
  var newArray = Array(Math.ceil(array.length / 2));
  for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray[i / 2] = array[i];
    }
  }
  return newArray;
}

// 5.

function subtotals(array) {
  var subtotalArray = Array(array.length);
  for (var i = 0; i < array.length; i++) {
    var subtotal = 0;
    for (var j = 0; j <= i; j++) {
      subtotal += array[j];
    }
    subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}
