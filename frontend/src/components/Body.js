import React, { Component } from 'react';
import CarouselM from './CarouselM';
import Hero from './Hero';

class Body extends Component {
    render() {
        return (
            <>
                <Hero/>
                <div className='container'>
                    <CarouselM/>
                </div>
            </>
        );
    }
}

export default Body;