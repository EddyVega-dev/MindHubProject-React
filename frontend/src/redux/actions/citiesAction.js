import Axios from 'axios'

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
        return async(dispatch, getState) => {
            const responseItinerary = await Axios.get(`http://127.0.0.1:4000/api/itineraries/${searchIdCity}`)
            const itineraryCity = responseItinerary.data.itineraryCity
            dispatch({
                type: 'GETITINERARY',
                payload: itineraryCity,
            })
        }
    },

    getActivities: () => {
        return async(dispatch, getState) => {
            const responseActivity = await Axios.get(`http://127.0.0.1:4000/api/activities`)
            const activityItineraries = responseActivity.data.activities
            dispatch({
                type: 'GETACTIVITIES',
                payload:activityItineraries,
            })
        }
    },

}

export default citiesActions