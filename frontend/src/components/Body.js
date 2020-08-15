import React, { Component } from 'react';
import {Carousel} from 'react-materialize'
import Slide from './Slide'
import '../styles/body.css'

class Body extends Component {

    state = {
        ciudades: [
            {
                img: '../assets/images/buenosAires.png',
                name: 'Autonomous City of Buenos Aires, Argentina',
            },
            {
                img: '../assets/images/londres.png',
                name: 'Ciudad de Londres, Inglaterra',
            },
            {
                img: '../assets/images/buenosAires.png',
                name: 'Ciudad Atónoma de Buenos Aires',
            },
            {
                img: '../assets/images/buenosAires.png',
                name: 'Ciudad Atónoma de Buenos Aires',
            }
        ]
    }

    render() {
        return (
            <>
                <Carousel
                    carouselId="Carousel-2"
                    className="box-carrusel white-text center"
                    options={{
                        fullWidth: true,
                        indicators: true,  
                }}
                >
                <div className="blue-grey lighten-3">
                    <Slide/> 
                </div>
                <div className="amber">
                    <div>
                        <Slide/>
                    </div>
                </div>                
                </Carousel>
            </>
        );
    }
}

export default Body;