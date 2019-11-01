const items = [...Array(5000).keys()]
const boxes = document.getElementById('boxes')

function render(items) {
    boxes.innerHTML = ''

    items.forEach(item => {
        const box = document.createElement('div')

        box.classList.add('box')

        box.innerHTML = (item)
        // 👉 Use innerHTML for whole page or container element replacements, not on a per element basis.
        //  box.appendChild(document.createTextNode(item))

        boxes.appendChild(box)
    })
}

function square() {
    render(items.map(item => item * item))
}
