// Slice Methods in Arrays

// slice() merupakan method array di JavaScript yang berfungsi menyalin sebagian elemen array ke array baru.
//
// Elemen yang ingin disalin ditentukan menggunakan indeks, indeks awal dan akhir.
// Method ini tidak mengubah array asli.

Array.prototype.mySlice = function(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result[i - start] = this[i];
  }
  return result;
};

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.mySlice(0, 5));
