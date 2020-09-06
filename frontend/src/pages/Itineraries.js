import React, { Component } from 'react'
import { Col, Row, Icon} from "react-materialize";
import Itinerary from '../components/Itinerary'
import '../styles/itineraries.css'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import citiesActions from '../redux/actions/citiesAction'

class Itineraries extends Component {

    state = {
        city: {},
    }

    componentDidMount() {
        const searchIdCity = this.props.match.params.idCity
        this.props.getItinerary(searchIdCity)
        this.setState({city: this.props.response.cities.filter(city => city._id === searchIdCity)[0]})
    }
    
    render() {

        const styleItinerary = {
            backgroundImage: `url(${this.state.city.image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPositionY: '50%',
            fontSize: '5vh',
            padding: '8vh 0vh',
            marginTop: '1vh',
        }

        return (
            <>
                <div className='blue-grey lighten-3'>
                    <div style={styleItinerary} className=' section center valign-center'>
                       {<p className='nameItinerary responsiveText'>Itinerary {this.state.city.city}, {this.state.city.country}</p>}
                    </div>

                    <div className='itinerariesContainer'>
                        <div className="container">

                            <Row>
                                {(this.props.response.itinerariesCity.length !== 0) ? this.props.response.itinerariesCity.map( (itinerary , index) => 
                                    <Col key={index} m={12} s={12}>
                                        <Itinerary itineraryCity={itinerary} idItinerary={itinerary._id}/>
                                    </Col>
                                ) : <div className='section blue-grey itineraryContent'>
                                        <h1 className='center responsiveText titleItinerary'>
                                            Not Itinerary yet!
                                        </h1>
                                    </div>}
                            </Row>
                            
                            <Row>
                                <Col m={6} s={6}>
                                    <Link to='/Cities'><Icon>fast_rewind</Icon></Link>
                                </Col>
                                <Col m={6} s={6}>
                                    <Link to='/'><Icon>home</Icon></Link>
                                </Col>
                            </Row>
                        </div>                
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        response: state.cities,
    }
}

const mapDispatchToProps = {
    getItinerary: citiesActions.getItinerary,
}

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries)