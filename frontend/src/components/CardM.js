import React, { Component } from 'react'
import {Card, Icon, CardTitle} from "react-materialize";

class CardM extends Component {
    render() {
        return (
            <>
                <Card
                closeIcon={<Icon>close</Icon>}
                header={<a href='#!' target='_blank'><CardTitle image={this.props.city.img}><div className='letterNameImg'>{this.props.city.nameImg}</div></CardTitle></a>}
                revealIcon={<Icon>more_vert</Icon>}
                ></Card>
            </>
        );
    }
}

export default CardM