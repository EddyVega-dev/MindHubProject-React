import React, { Component } from 'react'
import {Row} from 'react-materialize'
import '../styles/hero.css'
import {Link} from 'react-router-dom'

class Hero extends Component {
    render() {
        return (
            <>
                <div className="section blue-grey lighten-5">
                    <Row className='container center'>
                        <div className="description">Find your perfect trip, designed by insiders who know and love their cities.</div>
                        <Link to='/Cities'><img className="nextButton" src={process.env.PUBLIC_URL+"/next.png"} alt="nextButton"/></Link>
                    </Row>
                </div>
            </>
        );
    }
}

export default Hero