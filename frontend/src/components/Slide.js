import React, { Component } from "react";
import { Row, Col } from "react-materialize";
import CardH from './CardH'

class Slide extends Component {
    render() {
        return (
            <div className="container">
                <Row>
                {this.props.cities.map((city, index) => 
                    <Col key={index} m={6} s={12}>
                        <CardH city={city}/>
                    </Col>
                )}
                </Row>
            </div>
        );
    }
}

export default Slide;
