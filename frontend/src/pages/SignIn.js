import React, { useEffect, useState } from 'react'
import {TextInput, Button} from 'react-materialize'
import { Link } from 'react-router-dom'
import '../styles/login.css'
import { connect } from 'react-redux'
import userAction from '../redux/actions/userAction'

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
            props.loginUser(userLogin)
            props.history.push('/')
        }
    }

    useEffect(() => {

    }, [])

    return (
        <>
            <div className='container center'>
                <h1 className='center'>LogIn</h1>
                <TextInput id="userName" label="Username" onChange={readInput}/>
                <TextInput id="password" label="Password" password onChange={readInput}/>
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

const mapDispatchToProps = {
    loginUser: userAction.loginUser
}

export default connect(null, mapDispatchToProps)(SignIn)