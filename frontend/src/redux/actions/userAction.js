import Axios from 'axios'

const userAction = {
    newUser: newUser => {
        return async (dispatch, getSate) => {
            const response = await Axios.post('http://127.0.0.1:4000/api/user', newUser)
            if(!response.data.success) alert('not create new user')
            else dispatch({
                type: 'LOGUSER_INTO_APP',
                payload: response.data.user
            })
        }
    },

    loginUser: user => {
        return async (dispatch, getSate) => {
            const response = await Axios.post('http://127.0.0.1:4000/api/login', user)
            if(!response.data.success){
                alert(response.data.mensage)
            }
            else{
                dispatch({
                    type: 'LOGUSER_INTO_APP',
                    payload:response.data.user,
                })
            }
        }
    }
}

export default userAction