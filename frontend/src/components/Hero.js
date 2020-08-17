import React, { Component } from 'react'
import {Row} from 'react-materialize'
import '../styles/hero.css'

class Hero extends Component {
    render() {
        return (
            <>
                <div className="section blue-grey lighten-5">
                    <Row className='container center'>
                        <div className="description">Find your perfect trip, designed by insiders who know and love their cities.</div>
                        <a href='#!' target='_blank'><img className="nextButton" src={process.env.PUBLIC_URL+"/next.png"} alt="nextButton"/></a>
                    </Row>
                </div>
            </>
        );
    }
}

export default Hero