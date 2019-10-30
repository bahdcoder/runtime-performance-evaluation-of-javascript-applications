const items = [...Array(7000000).keys()]
const worker = new Worker('worker.js')
const boxes = document.getElementById('boxes')

worker.onmessage = function ({ data }) {
    console.log('🐔🐔 Received message from web worker 🐔🐔')
}

function squareSlowly() {
    items.map(item => item * item)

    console.log('🐔🐔 Done processing 🐔🐔')
}

function squareWithWebWorker() {
    worker.postMessage(items)

    console.log('🐔🐔 Posting to web worker 🐔🐔')
}
