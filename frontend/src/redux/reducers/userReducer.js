const initialState = {
    urlPic: '',
    token: null,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_USER_INTO_APP':
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                urlPic: action.payload.urlPic,
                token: action.payload.token,
            }

        case 'UNLOG_USER_INTO_APP':
            localStorage.clear()
            return {
                ...state,
                ... initialState,
            }

        default:
            return state
    }
}

export default userReducer