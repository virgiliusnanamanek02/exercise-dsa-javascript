// Contoh 3: Mencari Pasangan Angka yang Hasil Penjumlahannya Sama dengan Nilai Tertentu
// Pertanyaan: Tuliskan sebuah fungsi yang menerima sebuah array angka dan sebuah nilai target, kemudian mencari
// pasangan angka dalam array tersebut yang hasil penjumlahannya
// sama dengan nilai target.
// Misalkan array angka = [1, 2, 3, 4, 5, 6], nilai target = 10. Kemudian fungsi akan mencari pasangan angka
// yang hasil penjumlahannya sama dengan nilai target. maka hasilnya adalah [4, 5].
//
// Note:
//  - fungsi akan menerima 2 argumen yakni array dan targe.
//  - fungsi akan mengembalikan sepasang angka dalam array yang hasil penjumlahannya sama dengan nilai target.
//
// Design Thinking:
// - fungsi findNumberPairs
//  - Memastikan tidak ada nilai yang sama pada array --> menggunakan Set()
//  - Memastikan array lebih dari 1
//  - Memastikan array tidak kosong
//  - Memastikan nilai target lebih dari 0

function findNumberPairsOpt(arr, target) {
  const result = new Set(); // Inisialisasi Set untuk menampung yang berpasangan

  for (const num of arr) {
    const complement = target - num; // Mencari nilai complement

    if (result.has(complement)) {
      // Jika ada nilai complement
      return [num, complement]; // Kembalikan nilai
    }

    result.add(num); // Jika tidak ada nilai complement
  }

  return undefined;
}

console.log(findNumberPairsOpt([1, 2, 3, 4, 4, 5, 5], 11));
