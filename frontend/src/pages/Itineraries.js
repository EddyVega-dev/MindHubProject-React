import React, { Component } from 'react'
import Axios from 'axios';
import { Col, Row, Icon} from "react-materialize";
import CardH from '../components/CardH'
import Itinerary from '../components/Itinerary'
import '../styles/itineraries.css'
import {Link} from 'react-router-dom'

class Itineraries extends Component {
    
    state = {
        itinerariesCity: [],
        city: {}
    }

    async componentDidMount() {
        const searchId = this.props.match.params.idCity
        const responseItinerary = await Axios.get(`http://127.0.0.1:4000/api/itineraries/${searchId}`)
        const responseCity = await Axios.get(`http://127.0.0.1:4000/api/cities/${searchId}`)
        const itineraryCity = responseItinerary.data.itineraryCity
        const city = responseCity.data.searchCity

        this.setState({
            itinerariesCity: itineraryCity,
            city: city
        })
    }
    
    render() {
        return (
            <>
                <div className="container">
                    <Row className='valign-center'>
                        <Col m={6} s={12}>
                            <CardH city={this.state.city}/>
                        </Col>
                        <Col m={6} className='center'>
                            <div className='section cityName'>
                                <p className='responsiveText'>Itinerary of the city of {this.state.city.city}, {this.state.city.country}</p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        {this.state.itinerariesCity.map( (itinerary , index) => 
                            <Col key={index} m={12} s={12}>
                                <Itinerary itineraryCity={itinerary}/>
                            </Col>
                        )}
                    </Row>
                    
                    <Row>
                        <Col m={6} s={12}>
                            <Link to='/Cities'><Icon>fast_rewind</Icon></Link>
                        </Col>
                        <Col m={6} s={12}>
                            <Link to='/'><Icon>home</Icon></Link>
                        </Col>
                    </Row>
                </div>                
            </>
        );
    }
}

export default Itineraries