import React, { Component } from 'react'
import {Card, Icon, CardTitle} from "react-materialize";
import '../styles/card.css'

class CardM extends Component {
    render() {
        return (
            <>
                <Card
                closeIcon={<Icon>close</Icon>}
                header={<a href='#'><CardTitle image={this.props.city.image}><div className='letterNameImg center'>{this.props.city.city}, {this.props.city.country}</div></CardTitle></a>}
                revealIcon={<Icon>more_vert</Icon>}
                ></Card>
            </>
        );
    }
}

export default CardM