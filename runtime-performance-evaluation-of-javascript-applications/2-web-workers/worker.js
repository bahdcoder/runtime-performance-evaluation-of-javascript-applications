onmessage = function ({ data }) {
    console.log('🧟🧟 Worker received message from thread. 🧟🧟')

    postMessage(data.map(item => item * item))
}
