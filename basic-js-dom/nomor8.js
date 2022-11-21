// let row = 5

// for (let i = 0; i < row; i++) {
//     for (let j = row; j > i; j--) {
//         console.log("*")
//     }
//     console.log(" ")
// }

function segitiga2(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = panjang; j > i; j--) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga2(10));