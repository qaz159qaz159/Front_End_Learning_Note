// if else

if (100 > 50) {
    console.log('RIGHT')
} else {
    console.log('WRONG')
}

let score = 100
let isRight = score === 100 // === !==
console.log(isRight)

if (score === 100) {
    console.log('211')
} else if (score > 90) {
    console.log('985')
} else {
    console.log('NO')
}

// switch

switch (score) {
    case 100:
        console.log('211')
        break
    case 90:
        console.log('985')
        break
    default:
        console.log('NO')
}