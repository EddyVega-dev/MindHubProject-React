const express = require('express')
const routes = express.Router()
const CitiesController = require('../controller/CitiesController')
const ItinerariesController = require('../controller/ItinerariesController')

routes.route('/cities')
.get(CitiesController.getListCities)
.post(CitiesController.newCity)

routes.route('/cities/:idCity')
.get(CitiesController.getCity)

routes.route('/itineraries')
.get(ItinerariesController.getListItinerary)
.post(ItinerariesController.newItinerary)

routes.route('/itineraries/:idCity')
.get(ItinerariesController.getItineraryCity)

module.exports = routes