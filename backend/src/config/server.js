const port = 3003

const bodyParser = requie('body-parser')
const express = requie('express')
const server = express()

server.use(bodyParser.urlencoded({ extended: true}))
server.use(bodyParser.json())

server.listem(port, function() {
    console.log(`BACKEND is runnign on port ${port}.`)
})