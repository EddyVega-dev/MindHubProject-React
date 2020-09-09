const initialState = {

}

const userReducer = (state = initialState, action) => {
    switch (action.types) {
        case 'LOGUSER_INTO_APP':
            return {
                ...state

            }

            default:
            return state
    }
}