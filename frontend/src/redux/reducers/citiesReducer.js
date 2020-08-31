const initialState = {
    cities: [],
    citiesFiltered: [],
    itinerariesCity: [],
    city: {},
}

const citiesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GETCITIES': 
            return{
                ...state,
                cities: action.payload,
                citiesFiltered: action.payload,
            }

        case 'GETCITYFILTERED':
            const cityFiltered = state.cities.filter(city => city.city.toLowerCase().indexOf(action.payload.trim().toLowerCase()) === 0)
            return{
                ...state,
                citiesFiltered: cityFiltered,
            }

        case 'GETCITY':
            return{
                ...state,
                city: action.payload,
            }
        case 'GETITINERARY':
            return{
                ...state,
                itinerariesCity: action.payload
            }

        default:
            return state
    }
}

export default citiesReducer