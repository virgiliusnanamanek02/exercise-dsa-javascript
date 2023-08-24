# Solusi Latihan Big O Notasi

Mari kita analisis masing-masing fungsi untuk menentukan kompleksitas waktu
(time complexity) dan kompleksitas ruang (space complexity) dari setiap fungsi.

**1. `logUpTo(n)`**

- Kompleksitas Waktu: O(n) - Loop `for` berjalan sebanyak `n` kali, di mana `n`
  adalah input.
- Kompleksitas Ruang: O(1) - Tidak ada penambahan ruang yang tergantung pada
  ukuran input.

**2. `logAtMost10(n)`**

- Kompleksitas Waktu: O(1) - Loop `for` paling banyak berjalan 10 kali karena
  dibatasi oleh `Math.min(n, 10)`.
- Kompleksitas Ruang: O(1) - Tidak ada penambahan ruang yang tergantung pada
  ukuran input.

**3. `logAtLeast10(n)`**

- Kompleksitas Waktu: O(n) - Loop `for` berjalan sebanyak `n` kali, di mana `n`
  adalah input.
- Kompleksitas Ruang: O(1) - Tidak ada penambahan ruang yang tergantung pada
  ukuran input.

**4. `onlyElementsAtEvenIndex(array)`**

- Kompleksitas Waktu: O(n) - Loop `for` berjalan sebanyak `n` kali, di mana `n`
  adalah panjang array.
- Kompleksitas Ruang: O(n) - `newArray` memiliki panjang setengah dari panjang
  `array`, sehingga akan menghabiskan ruang sekitar O(n/2), yang dalam notasi
  kompleksitas ruang dinyatakan sebagai O(n).

**5. `subtotals(array)`**

- Kompleksitas Waktu: O(n^2) - Ada loop `for` dalam loop `for`, di mana iterasi
  dalam loop dalam tergantung pada iterasi dalam loop luar.
- Kompleksitas Ruang: O(n) - `subtotalArray` memiliki panjang yang sama dengan
  `array`, sehingga akan menghabiskan ruang sekitar O(n).

Dalam kesimpulan, Anda bisa menggambarkan kompleksitas waktu dan ruang untuk
setiap fungsi sebagai berikut:

1. `logUpTo(n)`: Waktu - O(n), Ruang - O(1)
2. `logAtMost10(n)`: Waktu - O(1), Ruang - O(1)
3. `logAtLeast10(n)`: Waktu - O(n), Ruang - O(1)
4. `onlyElementsAtEvenIndex(array)`: Waktu - O(n), Ruang - O(n)
5. `subtotals(array)`: Waktu - O(n^2), Ruang - O(n)
