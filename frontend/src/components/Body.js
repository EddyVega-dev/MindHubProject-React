import React, { Component } from 'react';
import CarouselEsp from './CarouselEsp';
import Hero from './Hero';

class Body extends Component {
    render() {
        return (
            <>
                <Hero/>
                <CarouselEsp/>
            </>
        );
    }
}

export default Body;