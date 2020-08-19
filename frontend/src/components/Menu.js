import React, { Component } from 'react'
import {Navbar, NavItem, Icon, Dropdown, Divider} from 'react-materialize'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'

class Menu extends Component {
    render() {
        return (
            <>
                <Navbar
                    className='blue-grey'
                    alignLinks='right'
                    centerChildren
                    brand={<Dropdown
                        id="Dropdown_6"
                        options={{
                          alignment: 'left',
                          autoTrigger: true,
                          closeOnClick: true,
                          constrainWidth: true,
                          container: null,
                          coverTrigger: false,
                          hover: false,
                          inDuration: 150,
                          onCloseEnd: null,
                          onCloseStart: null,
                          onOpenEnd: null,
                          onOpenStart: null,
                          outDuration: 250
                        }}
                        trigger={<img className='login' src={process.env.PUBLIC_URL+"/login.png"}/>}
                      >
                            <a href="#" target='_blank'>
                                Login
                            </a>
                            <Divider />
                            <a href="#">
                                Register
                            </a>
                      </Dropdown>}
                    id="mobile-nav"
                    menuIcon={<Icon>menu</Icon>}            
                    options={{
                        draggable: false,
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
                <NavItem>
                    <Link to='/'>To check</Link>
                </NavItem>
                <NavItem href="#!">
                    To check
                </NavItem>
                <NavItem href="#!">
                    To check
                </NavItem>
                </Navbar>
            </>
        );
    }
}

export default Menu