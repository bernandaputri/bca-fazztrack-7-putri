// nomor 9
function square (size) {
    let showSquare = ""
    for(let i = 0; i < size; i++) { 
        for(let j = 0; j < size; j++) {
        if (i === 0 || i === size - 1) {
            showSquare += "* "
        } else {
            if (j === 0 || j === size - 1) {
                showSquare += "* "
            } else {
                showSquare += "  "
            }
        }
    }
    showSquare += "\n"
    }
    return showSquare
}

let squareResult = square(5)
console.log(squareResult)