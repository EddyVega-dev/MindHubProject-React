import React, { useEffect, useState } from 'react'
import {TextInput, Button} from 'react-materialize'
import { Link } from 'react-router-dom'
import '../styles/login.css'
import { connect } from 'react-redux'
import userAction from '../redux/actions/userAction'
import '../styles/sign.css'
import Swal from 'sweetalert2'

const SignIn = (props) => {

    const [user, setUser] = useState({userName: '', password: ''})

    const readInput = e => {
        const property = e.target.id
        const value = e.target.value
        setUser({
            ...user,
            [property]: value
        })
    }        

    const sendInfo = async e => {
        e.preventDefault()
        if(user.userName === '' || user.password === '') alert('empty fields')
        else{
            const userLogin = {userName: user.userName, password: user.password}
            await props.loginUser(userLogin)
        }
    }

    useEffect(() => {
        if(props.response.token) {
            Swal.fire({
                icon: 'success',
                title: 'Welcome',
                text: 'Bienvenido nuevamente',
                footer: 'Disfruta de nuestro servicio'
            })
            props.history.push('/')
        }
    }, [props.response])

    return (
        <>
            <div className='containerSign center'>
                <h1 className='center responsiveText'>LogIn</h1>
                <TextInput className='center' id="userName" label="Username" onChange={readInput}/>
                <TextInput className='center' id="password" label="Password" password onChange={readInput}/>
                <Button
                    node="button"
                    style={{
                    marginRight: '5px'
                    }}
                    waves="light"
                    onClick={sendInfo}
                >
                    LogIn
                </Button>
                <Button
                    node="button"
                    waves="light"
                >
                    <Link className='link' to='/signup'>Register</Link>
                </Button>
            </div>
        </>
    );
}

const mapStateToProps = state => {
    return {
        response: state.user,
    }
}

const mapDispatchToProps = {
    loginUser: userAction.loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)