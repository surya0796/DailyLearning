const ws = new WebSocket('ws://localhost:9876/websocket')

const allMessages = document.querySelector("#messages")
const typedMessage = document.querySelector("#message")
const sendBtn = document.querySelector("#send")

sendBtn.disabled = true
sendBtn.addEventListener("click", sendMessage)

function sendMessage(e) {
    e.preventDefault()
    generateHtml("Client",typedMessage.value)
    ws.send(JSON.stringify(typedMessage.value))
    typedMessage.value = ""
}
function generateHtml (type , message) {
    appendInHtml = `${type} ${message}`
    const div = document.createElement('div')
    div.innerHTML = appendInHtml
    allMessages.append(div)
}
ws.onopen = function () {
    sendBtn.disabled = false
    ws.onmessage = (e)=>generateHtml("Server", e.data)
}