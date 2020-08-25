import React, { Component } from 'react'
import {TextInput, Row, Col} from 'react-materialize'
import CardM from '../components/CardM'
import Axios from 'axios'

class Cities extends Component {

    state = {
        cities: [],
        citiesFiltered: []
    }

    async componentDidMount(){
        const response = await Axios.get('http://127.0.0.1:4000/api/cities')
        const info = response.data.cities
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
                <div className='container'>
                    <h1 className='center'>Cities</h1>
                    <TextInput
                        id="TextInput-4"
                        label="Search city"
                        onChange={this.captureCity} 
                    />
                    <Row>
                    {this.state.citiesFiltered.map((city, index) => 
                        <Col key={index} m={6} s={12}>
                            <CardM city={city}/>
                        </Col>
                    )}
                    </Row>
                </div>
            </>
        );
    }
}

export default Cities