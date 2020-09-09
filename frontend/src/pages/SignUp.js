import React, { useEffect, useState } from 'react'
import {TextInput, Select, Button, Icon} from 'react-materialize'
import { connect } from 'react-redux'
import userAction from '../redux/actions/userAction'

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

        if(empty) alert('empty fields')
        else {
            const response = await props.newUser(newUser)
            /* if(response.data.success) props.history.push('/') */
        }
    }

    return (
        <>
            <div className='container center'>
                <h1>Create Acount</h1>
                <TextInput id="urlPic" label="Your Pic URL" onChange={readInput}/>
                <TextInput id="userName" label="Username" onChange={readInput}/>
                <TextInput id="password" label="Password" password onChange={readInput}/>
                <TextInput email id="email" label="Email" validate onChange={readInput}/>
                <TextInput id="firstName" label="FirstName" onChange={readInput}/>
                <TextInput id="lastName" label="LastName" onChange={readInput}/>
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
            </div>
        </>
    )
}


const mapDispatchToProps = {
    newUser: userAction.newUser
}

export default connect(null, mapDispatchToProps)(SignUp)