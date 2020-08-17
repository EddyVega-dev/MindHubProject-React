import React, { Component } from 'react'
import '../styles/navbar.css'

class Logo extends Component {
    render() {
        return (
            <>
                <div className="sectionLogo backgroundLogo center">
                    <img className='logo' src={process.env.PUBLIC_URL+"/logoComplete.png"} alt="logoComplete"/>
                </div>
            </>
        );
    }
}

export default Logo