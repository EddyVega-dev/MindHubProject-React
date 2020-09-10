import Axios from 'axios'
import Swal from 'sweetalert2'

const userAction = {
    newUser: newUser => {
        return async(dispacth, getState) => {
            const response = await Axios.post('http://127.0.0.1:4000/api/user', newUser)
            if(!response.data.success) alert(response.data.error)
            else {dispacth({
                type: 'LOG_USER_INTO_APP',
                payload: {token: response.data.token, urlPic: response.data.urlPic},
            })}
        }
    },

    loginUser: user => {
        return async(dispacth, getState) => {
            const response = await Axios.post('http://127.0.0.1:4000/api/login', user)
            if(!response.data.success){
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: `${response.data.mensage}`,
                })
            }
            else {dispacth({
                type: 'LOG_USER_INTO_APP',
                payload: {token: response.data.token, urlPic: response.data.urlPic},
            })
            }
        }
    },

    logoutUser: () => {
        return (dispacth, getState) => {
            dispacth({
                type: 'UNLOG_USER_INTO_APP',
            })
        }
    },

    forcedLogin: tokenLS => {
        return async (dispacth, getState) => {
            const response = await Axios.get('http://127.0.0.1:4000/api/veriftoken', {
                headers: { 
                    Authorization: `Bearer ${tokenLS}`
                }
            })

            if(response.data.success){
                dispacth({
                    type: 'LOG_USER_INTO_APP',
                    payload: {token: tokenLS,urlPic: response.data.urlPic}
                })
            }
        }
    }
}

export default userAction