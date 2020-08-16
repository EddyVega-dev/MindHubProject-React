import React, { Component } from 'react'
import Menu from './Menu'
import Logo from './Logo'

class Header extends Component {
    
    render() {
        return (
            <>
                <Menu/>
                <Logo/>
            </>
        );
    }
}

export default Header