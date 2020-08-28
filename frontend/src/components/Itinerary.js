import React, { Component } from 'react'
import {Row, Col} from 'react-materialize'
import User from '../assets/images/user.png'
import '../styles/itinerary.css'

class Itinerary extends Component {
    render() {
        return (
            <>
                <div className='section blue-grey itineraryContent'>
                    <Row>
                        <Col>
                            <div className='white userContent'>
                                <img src={User} className='user'/>
                            </div>
                            <p>{this.props.itineraryCity.profilePic}</p>
                        </Col>
                        <Col>
                            <div>Hashtag: 
                            {this.props.itineraryCity.hashtag.map(tag => 
                                <p>#{tag}</p>
                            )}
                            </div>
                        </Col>
                        <Col>
                            {this.props.itineraryCity.rating}
                            {this.props.itineraryCity.duration}
                            {this.props.itineraryCity.price}
                        </Col>
                    </Row>
                </div>
            </>
        )
    }
}

export default Itinerary