// window.alert('Kirito is coming soon')

// call back
window.addEventListener('load', function () {
    console.log('LOAD')
    const element1 = document.getElementById('title')
    console.log(element1)
    // element1.innerText = 'The exchanged sentence'

    const button = document.getElementById('button')
    button.addEventListener('click', function () {
        console.log('PULL')
    })

    const box = document.getElementById('box')
    box.innerHTML = '<p>TEST</p>'

    const input = document.getElementById('text')
    input.addEventListener('keyup', function (event) {
        console.log('event: ', event.target.value)
    })

})
