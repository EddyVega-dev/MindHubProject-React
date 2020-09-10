const express = require('express')
const router = express.Router()
const CitiesController = require('../controller/CitiesController')
const ItinerariesController = require('../controller/ItinerariesController')
const ActivitiesController = require('../controller/ActivitiesController')
const UserController = require('../controller/UserController')
/* const passport = require('../config/passport') */

router.route('/cities')
.get(CitiesController.getListCities)
.post(CitiesController.newCity)

router.route('/cities/:idCity')
.get(CitiesController.getCity)

router.route('/itineraries')
.get(ItinerariesController.getListItineraries)
.post(ItinerariesController.newItinerary)

router.route('/itineraries/:idCity')
.get(ItinerariesController.getItineraryCity)

router.route('/activities')
.get(ActivitiesController.getListActivities)
.post(ActivitiesController.newActivity) 

router.route('/activities/:idItinerary')
.get(ActivitiesController.getActivity)

router.route('/user')
.post(/* UserController.validateData, */ UserController.newUser)

router.route('/login')
.post(UserController.loginUser)
/* 
router.route('/veriftoken')
.get(passport.authenticate('jwt', {session: false}), UserController.veriftoken)
 */
module.exports = router