// 👉 Global variables are not garbage collected - They are in memory forever
const arrayLengthContainer = document.getElementById('array-length')

function increaseItems() {
    // 👇   Local variables will be cleaned up by the garbage collector
    let items = [...Array(10000).keys()]
    items = [...items, ...Array(100000).keys()]

    arrayLengthContainer.innerHTML = ''

    arrayLengthContainer.appendChild(document.createTextNode(items.length))
}

increaseItems()
