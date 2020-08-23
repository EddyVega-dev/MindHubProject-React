const express = require('express')
const cors = require('cors')
const routes = require('./routers/index')
const { urlencoded } = require('express')

//Crear el elemento del SERVIDOR
const server = express()

//Middleware
server.use(cors())
server.use(express.json())

//Rutas
server.use('/api', routes)

server.listen(4000, console.log('App listening on port 4000'))