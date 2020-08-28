import React, { Component } from 'react'
import {Dropdown, Divider} from 'react-materialize'
import '../styles/navbar.css'
import { Link, NavLink } from 'react-router-dom'

class Menu extends Component {
    render() {
        return (
            <>
                <div className="navbar-fixed">
                    <nav className='blue-grey'>
                        <div className="nav-wrapper container">
                            <div className="brand-logo right">
                                <Dropdown
                                    id="Dropdown_6"
                                    options={{
                                    alignment: 'left',
                                    coverTrigger: false,
                                    hover: false,
                                    }}
                                    trigger={<img className='login' src={process.env.PUBLIC_URL+"/login.png"}/>}
                                >
                                        <Link to='/'>
                                            Login
                                        </Link>
                                        <Divider />
                                        <Link to='/'>
                                            Register
                                        </Link>
                                </Dropdown>
                            </div>
                            <Link to='#' data-target="menu-responsive" className="sidenav-trigger">
                                <i className="material-icons">menu</i>
                            </Link>
                            <ul id="nav-mobile" className="left hide-on-med-and-down">
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink to='/cities'>Cities</NavLink></li>
                                <li><NavLink to='/'>To check</NavLink></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <ul className="sidenav" id="menu-responsive">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/cities'>Cities</NavLink></li>
                    <li><NavLink to='/'>To check</NavLink></li>
                </ul>
            </>
        );
    }
}

export default Menu