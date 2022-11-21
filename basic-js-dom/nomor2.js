// =====================================================VAR=====================================================

// var
// variable dideklarasikan secara global
// seluruh variable yang dideklarasikan dengan var dapat digunakan di semua scope kecuali function scope
// variable var yang dideklarasikan di dalam function scope hanya dapat diakses di dalam function tersebut
// jenis variable yang nilainya dapat diperbarui
// variable let dapat dideklarasikan ulang

// -----------------------------------contoh-----------------------------------
// var name = "Putri"
// function tryVar() {
//     console.log(name)
// }
// tryVar() --> ketika function dijalankan, maka outpunya adalah Putri

// var name = "Putri"
// function tryVar() {
//     var changeName = "Bernanda"
// }
// console.log(changeName) --> ketika function dijalankan hasilnya error karena variable changeName dideklarasikan di dalam function tryVar

// var num = 0
// var num = 4*3 --> dapat dideklarasikan ulang dan diperbarui
// console.log(num) --> ketika dijalankan, output num yang dicetak adalah nilai terakhir setelah diubah

// var num = 0
// num = 4*3 --> dapat diperbarui
// console.log(num) --> ketika dijalankan, output num yang dicetak adalah nilai terakhir setelah diubah

// =====================================================LET=====================================================

// let
// jenis variable yang nilainya dapat diperbarui
// variable let tidak dapat dideklarasikan ulang
// variable ini hanya dapat diakses di dalam blok tempat variable itu dideklarasikan
// apabila variable let dengan nama yang sama dideklarasikan di scope yang berbeda, 
// maka tidak akan terjadi error karena kedua variable tersebut diperlakukan berbeda

// -----------------------------------contoh-----------------------------------
// let day = "Senin"

// if (day == "Senin") {
//     let greeting = "Semangaaaat!"
//     console.log(greeting) --> output "Semangaaaat!" karena dideklarasikan dalam 1 scope yang sama
// }

// let day = "Senin"

// if (day == "Senin") {
//     let greeting = "Semangaaaat!"
// }
// console.log(greeting) --> output error karena tidak dideklarasikan dalam 1 scope yang sama

// let numTest = 5
// numTest = 2*8
// console.log(numTest) --> ketika dijalankan, output num yang dicetak adalah nilai terakhir setelah diubah

// let numTest = 5
// let numTest = 2*8
// console.log(numTest) --> ketika dijalankan akan error karena variable dideklarasikan ulang

// let name = "Putri"
// if (true) {
//     let name = "Bernanda"
//     console.log(name)  --> output Bernanda, karena yang dijalankan adalah variable let name yang di dalam scope
// }    
// console.log(name) --> Output Putri, karena yang dijalankan adalah variable let name di luar scope tertentu

// =====================================================CONST=====================================================

// const
// jenis variable yang nilainya tetap, tidak bisa diperbarui
// variable const tidak bisa dideklarasikan ulang
// nilai variable hanya dapat di akses dalam scope yang sama

// -----------------------------------contoh-----------------------------------

// const name = "Putri"
// name = "Bernanda"
// console.log(name) --> error karena value di dalam const tidak dapat diperbarui

// const name = "Putri"
// const name = "Bernanda"
// console.log(name) --> error karena value di dalam const tidak dapat diperbarui dan dideklarasikan ulang

// let i = 3
// if (i <= 3) {
//     const num = 3
//     console.log(num) --> output 3 karena num dideklarasikan di dalam scope
// }

// let i = 3
// if (i <= 3) {
//     const num = 3
// }
// console.log(num) --> output error karena memanggil variable num di luar scope