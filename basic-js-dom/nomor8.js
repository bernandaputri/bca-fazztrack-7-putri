// nomor 8
function triangle (row) {
    let display = ''
    for (let i = 0; i < row; i++) {
        for (let j = row; j > i; j--) {
            display += '* '
        }
        display += '\n'
    }
    return display
}

let star = triangle(5)
console.log(star)