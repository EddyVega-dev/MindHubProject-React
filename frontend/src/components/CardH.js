import React, { Component } from 'react'
import {Card, Icon, CardTitle} from "react-materialize";
import '../styles/card.css'

class CardH extends Component {
    render() {
        if(!this.props.city.image) {return null}
        return (
            <>
            <Card
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image={this.props.city.image}><div className='letterNameImg center responsiveText'>{this.props.city.city}, {this.props.city.country}</div></CardTitle>}
            revealIcon={<Icon>more_vert</Icon>}
            ></Card>
            </>
        )
    }
}

export default CardH