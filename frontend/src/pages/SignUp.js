import React, { useEffect, useState } from 'react'
import {TextInput, Select, Button, Icon, Row, Col} from 'react-materialize'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import userAction from '../redux/actions/userAction'
import '../styles/sign.css'
import Swal from 'sweetalert2'

const SignUp = (props) => {

    const [countries, setCountries] = useState([{country: 'Perú', value: 'PR'}, {country:'Argentina', value: 'AR'}, {country: 'Uruguay', value: 'UR'}, {country: 'Chile', value: 'CH'}, {country: 'México', value: 'MX'}, {country: 'Paraguay', value: 'PY'}, {country: 'Brasil', value: 'BR'}, {country: 'Colombia', value: 'CL'}, {country: 'España', value: 'ES'}, {country: 'United States', value: 'US'}])
    const properties = ['urlPic', 'userName', 'password', 'email', 'firstName', 'lastName', 'country']
    const [newUser, setNewUser] = useState({urlPic: '', userName: '', password: '', email: '', firstName: '', lastName: '', country: ''})

    const readInput = e => {
        const property = e.target.id
        const value = e.target.value
        setNewUser({
            ...newUser,
            [property]: value
        })
    }

    const isEmpty = (property) => newUser[property].length === 0
    
    const sendInfo = async e => {
        e.preventDefault()
        let empty = false

        properties.map(property => {if(isEmpty(property)) empty = true} )

        if(empty) {
            Swal.fire({
                icon: 'error',
                title: 'Incorrect',
                text: 'empty fields',
            })
        }else {
            await props.newUser(newUser)
        }
    }

    useEffect(() => {
        if(props.response.token){
            Swal.fire({
                icon: 'success',
                title: 'Great',
                text: 'Gracias por inscribirte capo!!',
                footer: 'Disfruta de nuestro servicio'
            })
            props.history.push('/')
        }
    }, [props.response])

    return (
        <>
            <div className='containerSign center'>
                <h1 className='center responsiveText'>Create Acount</h1>
                <TextInput className='center' id="urlPic" label="Your Pic URL" onChange={readInput}/>
                <TextInput className='center' id="userName" label="Username" onChange={readInput}/>
                <TextInput className='center' id="password" label="Password" password onChange={readInput}/>
                <TextInput className='center' email id="email" label="Email" validate onChange={readInput}/>
                <TextInput className='center' id="firstName" label="FirstName" onChange={readInput}/>
                <TextInput className='center' id="lastName" label="LastName" onChange={readInput}/>
                <Select
                id="country"
                multiple={false}
                onChange={readInput}
                options={{
                    classes: '',
                    dropdownOptions: {
                    alignment: 'left',
                    autoTrigger: true,
                    closeOnClick: true,
                    constrainWidth: true,
                    coverTrigger: true,
                    hover: false,
                    inDuration: 150,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 250
                    }
                }}
                value=""
                >
                <option
                    disabled
                    value=""
                >
                    Choose your country
                </option>
                {countries.map((country, index) => {
                    return(<option key={index} value={country.value}>{country.country}</option>)
                })}
                </Select>
                <Row>
                    <Col m={12} s={12}>
                        <Button
                            node="button"
                            type="submit"
                            waves="light"
                            onClick={sendInfo}
                            >
                            Submit
                            <Icon right>
                                send
                            </Icon>
                        </Button>                    
                    </Col>
                    <Col m={12} s={12}>
                        <Button
                            node="button"
                            waves="light"
                        >
                            <Link className='link' to='/signip'>SingIn</Link>
                        </Button>
                    </Col>
                </Row>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        response: state.user,
    }
}

const mapDispatchToProps = {
    newUser: userAction.newUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)