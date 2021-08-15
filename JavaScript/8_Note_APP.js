const content = document.getElementById('content')
const date = document.getElementById('date')
const time = document.getElementById('time')
const addButton = document.getElementById('addButton')
const deleteButton = document.getElementById('deleteButton')
const getList = document.getElementById('list')

const list = []

function render() {
    let html_str = ''

    list.forEach(function (item) {
        html_str += `
        <div class="item">
            <div>
                <p>content: ${item.content}</p>
                <p>time: ${item.date} ${item.time}</p>
            </div>
        </div>
        `
    })

    getList.innerHTML = html_str
}

addButton.addEventListener('click', function () {
    console.log(content.value)
    console.log(date.value)
    console.log(time.value)
    list.unshift({content: content.value, date: date.value, time: time.value})
    console.log(list)

    render()
})

deleteButton.addEventListener('click', function () {
    list.shift()
    let html_str = ''

    render()
})
