import React, { Component } from 'react'
import {Card, Icon, CardTitle} from "react-materialize";
import '../styles/card.css'

class CardF extends Component {
    render() {
        return (
            <>
                <Card
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image={this.props.city.flag}><div className='letterNameImg center'>{this.props.city.capital}</div></CardTitle>}
                revealIcon={<Icon>more_vert</Icon>}
                ></Card>
            </>
        );
    }
}

export default CardF