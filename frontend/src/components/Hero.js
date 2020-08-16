import React, { Component } from 'react'
import {Row} from 'react-materialize'
import '../styles/hero.css'

class Hero extends Component {
    render() {
        return (
            <>
                <div className="section amber accent-3">
                    <Row className='container center'>
                        <p className="center-align">Find your perfect trip, designed by insiders who know and love their cities.</p>
                        <a href='#!' target='_blank'><img className="nextButton" src={process.env.PUBLIC_URL+"/next.png"} alt="nextButton"/></a>
                    </Row>
                </div>
            </>
        );
    }
}

export default Hero