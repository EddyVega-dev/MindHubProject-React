import React, { Component } from 'react';
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/FootWeb'

class Home extends Component {
    render() {
        return (
            <>
                <Header/>
                <Body/>
                <Footer/>    
            </>
        );
    }
}

export default Home;