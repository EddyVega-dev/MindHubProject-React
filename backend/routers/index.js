const express = require('express')
const routes = express.Router()
const CitiesController = require('../controller/CitiesController')
const ItinerariesController = require('../controller/ItinerariesController')
const ActivitiesController = require('../controller/ActivitiesController')

routes.route('/cities')
.get(CitiesController.getListCities)
.post(CitiesController.newCity)

routes.route('/cities/:idCity')
.get(CitiesController.getCity)

routes.route('/itineraries')
.get(ItinerariesController.getListItineraries)
.post(ItinerariesController.newItinerary)

routes.route('/itineraries/:idCity')
.get(ItinerariesController.getItineraryCity)

routes.route('/activities')
.get(ActivitiesController.getListActivities)
.post(ActivitiesController.newActivity) 

module.exports = routes