import React, { Component } from 'react'
import {Navbar, Icon} from 'react-materialize'
import '../styles/navbar.css'

class Logo extends Component {
    render() {
        return (
            <>
                <Navbar
                    className='blue-grey backgroundLogo'
                    centerLogo
                    menuIcon={<Icon className='menuSecond'>menu</Icon>}
                    brand={<img className='logo' src={process.env.PUBLIC_URL+"/logoComplete.png"} alt="logoComplete"/>}          
                    options={{
                        draggable: true,
                        edge: 'left',
                        inDuration: 250,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 200,
                        preventScrolling: true
                    }}
                >
                </Navbar>
            </>
        );
    }
}

export default Logo