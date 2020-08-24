const express = require('express')
const routes = express.Router()
const CitiesController = require('../controller/CitiesController')

routes.route('/cities')
.get(CitiesController.getListCities)
.post(CitiesController.newCity)

module.exports = routes