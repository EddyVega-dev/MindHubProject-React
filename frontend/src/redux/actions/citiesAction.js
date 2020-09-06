const { default: Axios } = require("axios")

const citiesActions = {
    getInfo: () => {
        return async(dispatch, getState) => {
            const response = await Axios.get('http://127.0.0.1:4000/api/cities')
            const info = response.data.cities
            dispatch({
                type: 'GETCITIES',
                payload: info,
            })
        }
    },

    getCityFiltered: cityDesired => {
        return async(dispatch, getState) => {
            dispatch({
                type: 'GETCITYFILTERED',
                payload: cityDesired,
            })
        }
    },

    getItinerary: searchIdCity => {
        return async(dispacth, getState) => {
            const responseItinerary = await Axios.get(`http://127.0.0.1:4000/api/itineraries/${searchIdCity}`)
            const itineraryCity = responseItinerary.data.itineraryCity
            dispacth({
                type: 'GETITINERARY',
                payload: itineraryCity,
            })
        }
    },

    getActivities: () => {
        return async(dispacth, getState) => {
            const responseActivity = await Axios.get(`http://127.0.0.1:4000/api/activities`)
            const activityItineraries = responseActivity.data.activities
            dispacth({
                type: 'GETACTIVITIES',
                payload:activityItineraries,
            })
        }
    },

}

export default citiesActions