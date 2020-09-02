import React, { Component } from 'react'
import {TextInput, Row, Col} from 'react-materialize'
import CardM from '../components/CardM'
import '../styles/cities.css'
import { connect } from 'react-redux'
import citiesActions from '../redux/actions/citiesAction'

class Cities extends Component {

    componentDidMount(){
        this.props.getInfo()
    }

    captureCity = e => {
        const cityDesired = e.target.value
        this.props.getCityFiltered(cityDesired)
    }

    render() {
        return (
            <>
                <div className='section heroCities container'>
                    <Row className='center'>
                        <h1 className='titleCities'>CITIES</h1>
                    </Row>
                    <Row>
                        <TextInput
                            id="TextInput-4"
                            label="Search city"
                            onChange={this.captureCity}
                        />
                    </Row>
                </div>
                <div className='citiesContainer'>
                    <div className='container'>
                        <Row>
                        {(this.props.response.citiesFiltered.length !== 0) ? this.props.response.citiesFiltered.map((city, index) => 
                            <Col key={index} m={4} s={12}>
                                <CardM city={city} link={city._id}/>
                            </Col>
                        ) : <div className='errorCities center'>
                                <img className='errorCity' src='https://fabicu.com/wp-content/uploads/2020/04/01-error404.jpg' alt='errorCity' />
                                <h3 className='blue-text foundCity'>City not found</h3>
                            </div>}
                        </Row>
                    </div>
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
    getCityFiltered: citiesActions.getCityFiltered,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)