//Selesaikan array seperti ini tanpa menggunakan metode sort():
//["z", "c", "g", "u", "t"] --> ["c", "g", "t", "u", "z"]
// Bedah Masalah:
// - Kasus di atas tidak menggunakan metode sort()
// - Dibutuhkan sebuah array
// - Fungsi akan mengembalikan array baru
// - Fungsi akan menerima sebuah parameter berupa array
//  - Pendekatan:
//  - Melakukan pengecekan menggunakan loop luar dan dalam --> O(n^2)

function alphabetSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        // Membandingkan nilai ASCII
        let temp = arr[i]; // Menyimpan nilai sebelumnya
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(alphabetSort(["z", "c", "g", "u", "t"]));
console.log(alphabetSort(["y", "k", "c", "i", "v"]));
