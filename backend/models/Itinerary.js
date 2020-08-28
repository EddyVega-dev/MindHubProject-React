const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    hashtag: {type: Array, required: true},
    title: {type: String, required: true},
    profilePic: {type: String, required: true},
    rating: {type: Number, required: true},
    duration: {type: Number, required: true},
    price: {type: Number, required: true},
    cityId: {type: mongoose.Schema.ObjectId, ref: 'city' , required: true},
    userName: {type: String, required: true},
    comments: {type: Array, default: []}
})

const Itinerary = mongoose.model('itinerary', itinerarySchema)

module.exports = Itinerary