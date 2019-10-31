const boxContainer = document.getElementById('box-container')

function render() {
    [...Array(10000).keys()].forEach(item => {
        const box = document.createElement('div')
        const boxContent = document.createElement('span')

        boxContent.classList.add('box-label')

        if (item === 9999) {
            box.classList.add('box-9999')
        }

        boxContent.appendChild(
            document.createTextNode(`Box - ${item}`)
        )

        box.classList.add('box')

        box.appendChild(
            boxContent
        )
    
        boxContainer.appendChild(
            box
        )
    })
}

function findBox9999() {
    console.time('🐔🐔🐔🐔🐔')
    // 👉 SLOWEST  document.querySelector('.box:nth-last-child(-n+1) .box-label')

    // 👉 FASTEST document.querySelector('.box-container .box .box-label')
    console.timeEnd('🐔🐔🐔🐔🐔')
}

render()
