import React, { Component } from 'react'
import {TextInput, Row, Col} from 'react-materialize'
import CardM from '../components/CardM'
import Axios from 'axios'
import '../styles/cities.css'

class Cities extends Component {

    state = {
        cities: [],
        citiesFiltered: []
    }

    async componentDidMount(){
        const response = await Axios.get('http://127.0.0.1:4000/api/cities')
        const info = await response.data.cities
        this.setState({
            cities: info,
            citiesFiltered: info 
        })
    }

    captureCity = e => {
        const cityDesired = e.target.value
        const cityFiltered = this.state.cities.filter(city => city.city.toLowerCase().indexOf(cityDesired.trim().toLowerCase()) === 0)
        this.setState({
            citiesFiltered: cityFiltered
        })
    }

    render() {
        return (
            <>
                <div className='section heroCities'>
                    <Row className='center'>
                        <h1>CITIES</h1>
                    </Row>
                    <Row className='container'>
                        <TextInput
                            id="TextInput-4"
                            label="Search city"
                            onChange={this.captureCity} 
                        />
                    </Row>
                </div>
                <div className='container'>
                    <Row>
                    {this.state.citiesFiltered.map((city, index) => 
                        <Col key={index} m={4} s={12}>
                            <CardM city={city} link={city._id}/>
                        </Col>
                    )}
                    </Row>
                </div>
            </>
        );
    }
}

export default Cities