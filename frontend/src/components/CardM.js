import React, { Component } from 'react'
import {Card, Icon, CardTitle} from "react-materialize";
import {Link} from 'react-router-dom'
import '../styles/card.css'

class CardM extends Component {
    render() {
        return (
            <>
                <Card
                closeIcon={<Icon>close</Icon>}
                header={<Link to={`/itineraries/${this.props.link}`}><CardTitle image={this.props.city.image}><div className='letterNameImg center responsiveText'>{this.props.city.city}, {this.props.city.country}</div></CardTitle></Link>}
                revealIcon={<Icon>more_vert</Icon>}
                ></Card>
            </>
        );
    }
}

export default CardM