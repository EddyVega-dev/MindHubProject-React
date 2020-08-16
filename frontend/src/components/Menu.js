import React, { Component } from 'react'
import {Navbar, NavItem, Icon ,SideNav, SideNavItem, Button} from 'react-materialize'
import '../styles/navbar.css'

class Menu extends Component {
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
                    /* sidenav={<div>
                        <SideNav
                            id="SideNav-10"
                            options={{
                            draggable: true
                            }}
                            trigger={<Button node="button">SIDE NAV DEMO</Button>}
                        >
                            <SideNavItem
                                user={{
                                    background: 'https://placeimg.com/640/480/tech',
                                    email: 'jdandturk@gmail.com',
                                    image: 'static/media/react-materialize-logo.824c6ea3.svg',
                                    name: 'John Doe'
                                }}
                                userView
                            />
                            <SideNavItem
                                href="#!icon"
                                icon={<Icon>cloud</Icon>}
                            >
                                First Link With Icon
                            </SideNavItem>
                            <SideNavItem href="#!second">
                                Second Link
                            </SideNavItem>
                            <SideNavItem divider />
                            <SideNavItem subheader>
                                Subheader
                            </SideNavItem>
                            <SideNavItem
                                href="#!third"
                                waves
                            >
                                Third Link With Waves
                            </SideNavItem>
                        </SideNav>
                    </div>} */
                >
                <NavItem href="#!">
                    To check
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