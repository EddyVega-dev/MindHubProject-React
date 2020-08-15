import React, { Component } from 'react'
import {Navbar, NavItem, Icon} from 'react-materialize'
import '../styles/navbar.css'

class NadBar extends Component {
    render() {
        return (
            <>
                <Navbar
                    className='blue-grey'
                    alignLinks='right'
                    brand={<img className='logoComplete' src={process.env.PUBLIC_URL+"/logoComplete.png"} alt="logoComplete"/>}
                    id="mobile-nav"
                    menuIcon={
                        <div className='row'>
                            <Icon className='col s6'>menu</Icon>
                            <Icon className='col s6'>person_pin</Icon>
                        </div>    
                    }            
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
                <NavItem href="">
                    To check
                </NavItem>
                <NavItem href="">
                    To check
                </NavItem>
                <NavItem>
                    To check
                </NavItem>
                </Navbar>
            </>
        );
    }
}

export default NadBar