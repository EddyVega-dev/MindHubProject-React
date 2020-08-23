const express = require('express')
const routes = express.Router()
const CitiesController = require('../controller/CitiesController')

routes.route('/invitado').get(CitiesController.getListCities)

module.exports = routes