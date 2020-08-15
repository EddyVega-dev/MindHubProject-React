import React, { Component } from 'react';
import {Footer} from 'react-materialize'
import '../styles/footer.css'

class FootWeb extends Component {
    render() {
        return (
            <div>
                <Footer
                    className='grey darken-3'                
                    moreLinks={<a className="grey-text text-lighten-4 right" href="https://github.com/EddyVega-dev">Create by developer Eddy Vega</a>}
                    copyrights="&copy 2020 Copyright Text"
                    links={<ul><li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li></ul>}
                >
                <h5 className="white-text">
                    MyTinenary Content
                </h5>
                <p className="grey-text text-lighten-4">
                    You can use rows and columns here to organize your footer content.
                </p>
                </Footer>
            </div>
        );
    }
}

export default FootWeb;