import React, { Component } from "react";
import { Row, Card, Icon, CardTitle, Col } from "react-materialize";
import "../styles/slide.css";

class Slide extends Component {
  render() {
    return (
      <div className="container">
        <Row>
          {this.props.citys.map((city, index) => {
            return (
              <Col key={index} m={6} s={12}>
                <Card
                  closeIcon={<Icon>close</Icon>}
                  header={<CardTitle image={city.img}>{city.nameImg}</CardTitle>}
                  revealIcon={<Icon>more_vert</Icon>}
                ></Card>
              </Col>
            )
          })}
        </Row>
      </div>
    );
  }
}

export default Slide;
