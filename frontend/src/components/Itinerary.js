import React, { Component } from 'react'
import {Row, Col} from 'react-materialize'
import '../styles/itinerary.css'

class Itinerary extends Component {
    render() {
        return (
            <>
                <div className='section blue-grey itineraryContent'>
                    <h1 className='center'>
                        {this.props.itineraryCity.title}
                    </h1>
                    <Row>
                        <Col m={4}>
                            <img src='https://files.brightside.me/files/news/part_65/658960/8141310-image-crop-1517x1585-1544022651-728-1680c03dbb-1544090549.jpg' className='white aligncenter circle user' alt='user'/>
                            <p className='center'>{this.props.itineraryCity.profilePic}</p>
                        </Col>
                        <Col m={8}>
                            <Row>
                                <Col m={4}>
                                    <p>Likes: {this.props.itineraryCity.rating}</p>
                                </Col>  
                                <Col m={4}>
                                    <p>{this.props.itineraryCity.duration} Hours</p>
                                </Col>
                                <Col m={4}>
                                    <p>{this.props.itineraryCity.price}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col m={2}>
                                    <p>Hashtag:</p> 
                                </Col>
                                {this.props.itineraryCity.hashtag.map((tag, index) =>
                                    <Col key={index} m={3}> 
                                        <p className='center'>#{tag}</p>
                                    </Col>
                                )}                                                     
                            </Row>
                        </Col>
                    </Row>
                </div>
            </>
        )
    }
}

export default Itinerary