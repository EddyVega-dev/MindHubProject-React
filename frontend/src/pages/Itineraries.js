import React, { Component } from 'react'
import Axios from 'axios';

class Itineraries extends Component {
    
    state = {
        city: {},
    }

    async componentDidMount() {
        const searchId = this.props.match.params.idCity
        const response = await Axios.get(`http://127.0.0.1:4000/api/itineraries/${searchId}`)
        const city = response.data.itineraryCity
        this.setState({
            city: city
        })
    }
    
    
    render() {
        return (
            <>
                <h1>Hola</h1>
            </>
        );
    }
}

export default Itineraries