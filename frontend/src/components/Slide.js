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
                  header={<a href='#!' target='_blank'><CardTitle image={city.img}><div className='letterNameImg'>{city.nameImg}</div></CardTitle></a>}
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
