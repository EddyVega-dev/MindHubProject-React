import React, { Component } from 'react'
import {TextInput, Row, Col} from 'react-materialize'
import CardF from '../components/CardF'
import Axios from 'axios'

class Cities extends Component {

    state = {
        cities: [],
        citiesFiltered: []
    }

    async componentDidMount(){
        /* await Axios.get('https://restcountries.eu/rest/v2/all').then(response => response.json()).then(data =>{
            this.setState({
                cities: data,
                citiesFiltered: data 
            })
        }) */
        const response = await fetch('https://restcountries.eu/rest/v2/all')
        const info = await response.json()
        this.setState({
            cities: info,
            citiesFiltered: info 
        })
    }

    captureCity = e => {
        const cityDesired = e.target.value
        const cityFiltered = this.state.cities.filter(city => city.capital.toLowerCase().indexOf(cityDesired.trim().toLowerCase()) === 0)
        this.setState({
            citiesFiltered: cityFiltered
        })
    }

    render() {
        return (
            <>
                <div className='container'>
                    <TextInput
                        id="TextInput-4"
                        label="Search city"
                        onChange={this.captureCity} 
                    />
                    <Row>
                    {this.state.citiesFiltered.map((city, index) => 
                        <Col key={index} m={6} s={12}>
                            <CardF city={city}/>
                        </Col>
                    )}
                    </Row>
                </div>
            </>
        );
    }
}

export default Cities