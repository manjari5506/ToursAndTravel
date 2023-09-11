import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";

export const Newsletter = () => {
  return (
    <Container className="newsletter">
      <Row>
        <Col lg="6">
          <div className="newsletter__content">
            <h2>Subscribe now to get useful traveling information.</h2>

            <div className="newsletter__input">
              <input type="email" placeholder="Enter your email" />
              <button className="btn newsletter__btn">Subscribe</button>
            </div>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo quo ut repellat illum ab sed ducimus quos sequi optio, a
              dicta in praesentium doloribus non, voluptatum pariatur. Delectus,
              voluptates itaque!
            </p>
          </div>
        </Col>
        <Col lg='6'>
          <div className="newsletter__img">
            <img src={maleTourist} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
