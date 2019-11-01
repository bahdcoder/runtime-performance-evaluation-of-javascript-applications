const boxContainer = document.getElementById('box-container')


function resizeBoxes() {
    const boxes = document.querySelectorAll('.box')
    const textarea = document.querySelector('textarea')
    
    // loop through all boxes. get scroll height. 
    // find box position and subtract
    for (let index = 0; index < boxes.length; index++) {
        // 👇  This actually triggers layout over and over, causing a reflow.
        const textAreaHeight = textarea.clientHeight
        const box = boxes[index]

        box.style.height = `${textAreaHeight}px`
    }
}

function render() {
    [...Array(500).keys()].forEach(item => {
        const box = document.createElement('div')

        box.classList.add('box')

        box.id = `box-${item}`

        box.appendChild(
            document.createTextNode(`${item}  - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`)
        )
    
        boxContainer.appendChild(
            box
        )
    })
}

render()
