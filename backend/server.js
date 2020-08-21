const express = require('express')

const server = express()

server.get('/', (req, res) => {
    res.send("hola, bienvenido nuevamente!")
})

server.listen(4000, console.log('App listening on port 4000'))