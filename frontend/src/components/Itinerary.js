import React, { Component } from 'react'
import {Row, Col, Icon, Button} from 'react-materialize'
import '../styles/itinerary.css'
import Activities from './Activities'
import Comments from './Comments'

class Itinerary extends Component {
    
    state = {
        viewMore: false,
    }

    render() {       

        const viewPrice = (cantPrice) => {
            if (cantPrice === 0) return <> </>
            return (<><Icon className='stylePrice'>monetization_on</Icon> {viewPrice(cantPrice - 1)}</>)    
        }

        const viewSwitch = () => {
            this.setState({
                viewMore: !this.state.viewMore
            })
        }


        return (
            <>
                <div className='section blue-grey itineraryContent'>
                    <h1 className='center responsiveText titleItinerary'>
                        {this.props.itineraryCity.title.toUpperCase()}
                    </h1>
                    <Row>
                        <Col m={4} s={12}>
                            <img src={this.props.itineraryCity.profilePic} className='white aligncenter circle user' alt='user'/>
                            <p className='center nameUser'>{this.props.itineraryCity.userName}</p>
                        </Col>
                        <Col m={8} s={12}>
                            <Row className=''>
                                <Col m={3} s={4}>
                                    <p className='center'><Icon>favorite_border</Icon>{this.props.itineraryCity.rating}</p>
                                </Col>  
                                <Col m={3} s={4}>
                                    <p className='center'><Icon>access_time</Icon>{this.props.itineraryCity.duration}h</p>
                                </Col>
                                <Col m={6} s={4}>
                                    <p>{viewPrice(this.props.itineraryCity.price)}</p>
                                </Col>
                            </Row>
                            <Row>
                                {this.props.itineraryCity.hashtag.map((tag, index) =>
                                    <Col key={index} m={4} s={4}> 
                                        <p className='center'>#{tag}</p>
                                    </Col>
                                )}                                                     
                            </Row>
                        </Col>
                    </Row>
                    {this.state.viewMore && 
                        <>
                            <h1 className = 'center responsiveText'>Activities</h1>
                            <Activities idItinerary={this.props.idItinerary}/>
                            <Comments/>
                        </>
                    }
                    <Row className='center readMore'>
                        <Col m={12} s={12}>
                            <Button onClick={viewSwitch} className='light-blue accent-4'>
                                {this.state.viewMore ? 'View Less' : 'View More'}
                            </Button>                                
                        </Col>
                    </Row>
                </div>
            </>
        )
    }
}

export default Itinerary