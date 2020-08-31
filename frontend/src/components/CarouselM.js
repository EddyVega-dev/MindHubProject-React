import React, { Component } from 'react'
import {Carousel} from 'react-materialize'
import Slide from './Slide'
import '../styles/carousel.css'
import Citys from '../json/info.json'

class CarouselM extends Component {
    
    state = {
        listCapitals: [],
    }
    
    orderFourCapitals(){
        let index2 = 0
        Citys.map((city, index) => {
            if((index + 1) % 4 === 0){
                this.state.listCapitals.push(Citys.slice(index2, index + 1))
                index2 = index + 1
            }
            (((index + 1) % 4 !== 0) && (index === (Citys.length - 1))) && this.state.listCapitals.push(this.state.citys.slice(index2, index + 1))
        })
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
                        duration: 50,
                }}
                >
                
                {this.orderFourCapitals(),
                this.state.listCapitals.map((capitals, index) =>
                    <div key={index} className = 'blue-grey lighten-3'>
                        <Slide cities={capitals}/>
                    </div>
                )}
                
                </Carousel>


            </>
        );
    }
}

export default CarouselM