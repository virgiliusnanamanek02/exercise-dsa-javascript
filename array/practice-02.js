// Contoh 2: Mencari Elemen Terbesar dalam Array
// Pertanyaan: Tuliskan sebuah fungsi untuk mencari elemen terbesar dalam sebuah array angka.
// Note:
// - Dibutuhkan sebuah array
// - Fungsi akan mengembalikan nilai elemen terbesar
// - Fungsi akan menerima sebuah parameter berupa array
// - Pendekatan:
//  - Menggunakan for loop O(n)
//  - Menggunakan for of O(n)

function arrMax(arr) {
  let max = 0;

  // Jika array kosong

  if (arr.length === 0) {
    return undefined;
  }

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > max) {
      // Jika nilai dalam index tertentu lebih besar dari nilai max
      max = arr[index]; // Ubah nilai max
    }
  }

  return max;
}

console.log(arrMax([1, 2, 3, 4, 30, 129]));
