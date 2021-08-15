function fn() {
    console.log('Hello World')
}

fn()

function add(num1, num2) {
    console.log(num1 + num2)
    return num1 + num2
}

added = add(1, 2)
console.log(added)

function createPeople(name) {
    this.name = name
}

// constrcutor
const people = new createPeople('Kirito')
console.log(people)

// function test() {
//     console.log('TEST')
// }

// let test = function () {
//     console.log('TEST')
// }

let test = () => {
    console.log('TEST')
}

test()