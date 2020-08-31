import React, { Component } from 'react'
import {Row} from 'react-materialize'
import '../styles/hero.css'
import {Link} from 'react-router-dom'
import AllCities from '../assets/images/AllCities.png'

class Hero extends Component {
    render() {
        //process.env.PUBLIC_URL+"/next.png"
        return (
            <>
                <div className="container section hero">
                    <Row className='container center'>
                        <div className="section description hero2">Find your perfect trip, designed by insiders who know and love their cities.</div>
                        <Link to='/Cities'><img className="nextButton" src={AllCities} alt="nextButton"/></Link>
                    </Row>
                </div>
            </>
        );
    }
}

export default Hero