// nomor 6
function deliveryCost (distance) {
    if (distance <= 2) {
        return 5000
    } else {
        return 5000 + ((distance - 2) * 3000)
    }
}

// --------------------------atau--------------------------

// function deliveryCost (distance) {
//     let totalCost = 0
//     if (distance <= 2) {
//         totalCost = 5000
//     } else {
//         totalCost = 5000 + ((distance - 2) * 3000)
//     }
//     return totalCost
// }

let z = deliveryCost(5)
console.log(z)