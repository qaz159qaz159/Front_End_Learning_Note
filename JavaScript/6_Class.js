class people {
    constructor(name) {
        this.name = name
        // bind the "this" at "people"
        // we can also use "=>" function to bind
        this.hello = this.hello.bind(this)
    }

    hello = () => {
        console.log('Hello world! ', this.name)
    }
}

class SAOplayer extends people {
    constructor(name) {
        super(name)
    }

    hello2() {
        super.hello()
        console.log('One more sentence')
    }
}

// the same as the above
people.prototype.hello = function () {
    console.log('Hello world! ', this.name)
}

const person = new people('Kirito')
console.log('People: ', person)
console.log('Name: ', person.name)
console.log(person.hello())

const person2 = {name: 'Asuna'}
person2.hello = person.hello
person2.hello()

const Kirito = new SAOplayer('Kirito')
Kirito.hello2()