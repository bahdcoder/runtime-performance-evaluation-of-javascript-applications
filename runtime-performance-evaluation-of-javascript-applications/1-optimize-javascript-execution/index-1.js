const items = ['🥚', '🐔']
const list = document.getElementById('list')

function render(items) {

    list.innerHTML = ''

    items.forEach(item => {
        const listItem = document.createElement('li')

        listItem.classList.add('list-group-item')

        listItem.innerHTML = (item)

        list.appendChild(listItem)
    })
}

function reset() {
    render(items)
}

function sortSlow() {
    // Go through the past 1000 years and try to find out where the
    // chicken and egg came from
    [...Array(1000).keys()].forEach(year => {
        console.log(`Performing the chicken and egg check for the year ${year}`)
    })

    render(items.sort())
}

function sortFast() {
    render(items.sort())
}

render(items)
