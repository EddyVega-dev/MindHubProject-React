const Itinerary = require('../models/Itinerary')

const ItineraryController = {
    getListItineraries: async (req, res) => {
        const listItineraries = await Itinerary.find()

        res.json({
            success: true,
            cities: listItineraries,
        })
    },

    newItinerary: (req, res) => {
        const{hashtag, title, profilePic, rating, duration, price, cityId, userName} = req.body

        const newItinerary = new Itinerary({
            hashtag: hashtag,
            title: title,
            profilePic: profilePic,
            rating: rating,
            duration: duration,
            price: price,
            cityId: cityId,
            userName: userName,
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
        const searchItineraryCity = await Itinerary.find({cityId: req.params.idCity})
        res.json({
            itineraryCity: searchItineraryCity
        })
    }

}

module.exports = ItineraryController