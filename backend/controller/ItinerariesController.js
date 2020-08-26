const Itinerary = require('../models/Itinerary')

const ItineraryController = {
    getListItinerary: async (req, res) => {
        const listItinerary = await Itinerary.find()

        res.json({
            success: true,
            cities: listItinerary,
        })
    },

    newItinerary: (req, res) => {
        const{hashtag, title, profilePic, rating, duration, price, cityId} = req.body

        const newItinerary = new Itinerary({
            hashtag: hashtag,
            title: title,
            profilePic: profilePic,
            rating: rating,
            duration: duration,
            price: price,
            cityId: cityId,
        })

        newItinerary.save()
        .then(itinerary => {
            res.json({
                success: true,
                itineraryCity: itinerary,
            })
        })
        .catch(error => {
            res.json({
                success: false,
                error: error,
            })
        })
    },

    getItineraryCity: async (req, res) => {
        const searchCity = await Itinerary.findOne({cityId: req.params.idCity})
        res.json({
            itineraryCity: searchCity
        })
    }

}

module.exports = ItineraryController