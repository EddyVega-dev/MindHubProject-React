import React, { Component } from 'react'
import {Dropdown, Divider, Button} from 'react-materialize'
import '../styles/navbar.css'
import userAction from '../redux/actions/userAction'
import { Link, NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'

const  Menu = (props) => {

    const logout = () => {
        props.logoutUser()
        Swal.fire({
            icon: 'success',
            title: 'Good Bye',
            text: 'Gracias por visitar',
            footer: 'Hasta otra oportunidad'
        })
    }

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
                                trigger={<img className='login' src={
                                    (!props.response.token) ? process.env.PUBLIC_URL+"/login.png" : props.response.urlPic
                                } alt='login'/>}
                            >{ 
                                (props.response.token) ? (
                                <>
                                    <Link to='/'>
                                        <Button style={{background: 'none', padding: '0', color: '#26a69a', fontSize: '16px', borderStyle: 'none', boxShadow: 'none', textTransform: 'none'}} onClick = {logout}>LogOut</Button>
                                    </Link>
                                    
                                </>
                            )/* : (localStorage.getItem('token')) ? 
                                    
                                    props.forcedLogin(localStorage.getItem('token')) */
                            
                            :(
                                <>
                                   <Link to='/signin'>
                                            Login
                                    </Link>
                                    <Divider />
                                    <Link to='/signup'>
                                        Register
                                    </Link>
                                </>
                            )}
                                    
                            </Dropdown>
                        </div>
                        <Link to='#' data-target="menu-responsive" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </Link>
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/cities'>Cities</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <ul className="sidenav" id="menu-responsive">
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/cities'>Cities</NavLink></li>
            </ul>
        </>
    )
    
}

const mapStateToProps = state => {
    return {
        response: state.user,
    }
}

const mapDispatchToProps = {
    logoutUser: userAction.logoutUser,
    forcedLogin: userAction.forcedLogin,
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)