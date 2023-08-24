// Contoh 1: Menghitung Rata-rata Array
// Pertanyaan: Tuliskan sebuah fungsi untuk menghitung rata-rata dari elemen dalam sebuah array.
// Note:
// - Dibutuhkan sebuah array
// - Fungsi akan mengembalikan nilai rata-rata
// - Fungsi akan menerima sebuah parameter berupa array
// - Pendekatan:
//  - Menggunakan for loop O(n)
//  - Menggunakan reduce O(n)

// Pendekatan 1. Menggunakan for loop

function arrAverage(arr) {
  let sum = 0;

  // Jika array kosong
  if (arr.length === 0) {
    return 0;
  }

  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }

  return sum / arr.length;
}

console.log(arrAverage([1, 2, 3, 4, 5]));

// Pendekatan 2. Menggunakan reduce

function arrAverage2(arr) {
  // Jika array kosong
  if (arr.length === 0) {
    return 0;
  }
  const total = arr.reduce((a, b) => a + b, 0); // 0 adalah default value

  return total / arr.length;
}

console.log(arrAverage2([1, 2, 3, 4, 5]));
