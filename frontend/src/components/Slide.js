import React, { Component } from "react";
import { Row, Card, Icon, CardTitle, Col } from "react-materialize";
import "../styles/slide.css";
import foto from "../assets/images/buenosAires.png";

class Slide extends Component {
  render() {
    return (
      <div className="container cards-pather">
        <Row>
          <Col m={6} s={12}>
            <Card
              closeIcon={<Icon>close</Icon>}
              header={<CardTitle image={foto}>Buenos Aires</CardTitle>}
              revealIcon={<Icon>more_vert</Icon>}
            ></Card>
          </Col>
          <Col m={6} s={12}>
            <Card
              closeIcon={<Icon>close</Icon>}
              header={
                <CardTitle image={require("../assets/images/londres.png")}>
                  londres
                </CardTitle>
              }
              revealIcon={<Icon>more_vert</Icon>}
            ></Card>
          </Col>
        </Row>
        <Row>
          <Col m={6} s={12}>
            <Card
              closeIcon={<Icon>close</Icon>}
              header={<CardTitle image={foto}>Buenos Aires</CardTitle>}
              revealIcon={<Icon>more_vert</Icon>}
            ></Card>
          </Col>
          <Col m={6} s={12}>
            <Card
              closeIcon={<Icon>close</Icon>}
              header={
                <CardTitle image={require("../assets/images/londres.png")}>
                  londres
                </CardTitle>
              }
            ></Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Slide;
