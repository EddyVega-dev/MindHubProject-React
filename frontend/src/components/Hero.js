import React, { Component } from 'react'
import {Row} from 'react-materialize'
import '../styles/hero.css'
import {Link} from 'react-router-dom'
import AllCities from '../assets/images/AllCities.png'
import { connect } from 'react-redux'
import citiesActions from '../redux/actions/citiesAction'

class Hero extends Component {

    componentDidMount(){
        this.props.getInfo()
    }

    render() {
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

const mapStateToProps = state => {
    return {
        response: state.cities,
    }
}

const mapDispatchToProps = {
    getInfo: citiesActions.getInfo,
}

export default connect(mapStateToProps, mapDispatchToProps)(Hero)