// nomor 7
function count (num) {
    let theResult = []
    for (let p = 1; p <= num; p++) {
        if (p%3 == 0 && p%5 == 0) {
            theResult.push("fazztrack")
        } else if (p%3 == 0) {
            theResult.push("fazz")
        } else if (p%5 == 0) {
            theResult.push("track")
        }
    }
    return theResult
}

let countResult = count(27)
console.log(countResult)