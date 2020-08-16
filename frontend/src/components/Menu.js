import React, { Component } from 'react'
import {Navbar, NavItem, Icon, Dropdown, Divider, Button} from 'react-materialize'
import '../styles/navbar.css'

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
                        className='right'
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
                            <a href="#!" target='_blank'>
                                one
                            </a>
                            <a href="#">
                                two
                            </a>
                            <Divider />
                            <a href="#">
                                three
                            </a>
                            <a href="#">
                                <Icon>
                                view_module
                                </Icon>
                                four
                            </a>
                            <a href="#">
                                <Icon>
                                cloud
                                </Icon>
                                {' '}five
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