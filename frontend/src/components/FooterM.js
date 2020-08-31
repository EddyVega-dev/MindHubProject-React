import React, { Component } from 'react';
import {Footer, Row} from 'react-materialize'
import '../styles/footer.css'

class FootWeb extends Component {
    render() {
        return (
            <>
                <Footer
                    className='grey darken-3'                
                    moreLinks={<a className="grey-text text-lighten-4 right" href="https://github.com/EddyVega-dev">Create by developer Eddy Vega</a>}
                    copyrights="&copy 2020 Copyright Text"
                    links={
                    <ul>
                        <Row>
                            <li className='col'><a className="grey-text text-lighten-3" href='https://www.facebook.com/'><img className='imageFoot' src={process.env.PUBLIC_URL+"/facebook.png"} alt='facebook'/></a></li>
                            <li className='col'><a className="grey-text text-lighten-3" href='https://www.instagram.com/'><img className='imageFoot' src={process.env.PUBLIC_URL+"/instagram.png"} alt='instagram'/></a></li>
                            <li className='col'><a className="grey-text text-lighten-3" href='https://twitter.com/'><img className='imageFoot' src={process.env.PUBLIC_URL+"/twitter.png"} alt='twitter'/></a></li>
                            <li className='col'><a className="grey-text text-lighten-3" href='https://www.youtube.com/'><img className='imageFoot' src={process.env.PUBLIC_URL+"/youtube.png"} alt='youtube'/></a></li>
                        </Row>
                    </ul>}
                >
                <h5 className="white-text">
                    MyTinenary Content
                </h5>
                <p className="grey-text text-lighten-4">
                    Find your perfect trip, designed by insiders who know and love their cities.
                </p>
                </Footer>
            </>
        );
    }
}

export default FootWeb;