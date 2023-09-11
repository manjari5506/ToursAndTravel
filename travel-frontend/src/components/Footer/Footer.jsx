import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const quick__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const quick__links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

export const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>Lorem ipsum, dolor sit am consectetur op edit.</p>

              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link target="_blank" to="#">
                    <i class="ri-linkedin-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link target="_blank" to="#">
                    <i class="ri-github-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link target="_blank" to="#">
                    <i class="ri-twitter-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link target="_blank" to="#">
                    <i class="ri-medium-fill"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="3">
            <h5 className="footer__links-title">Discover</h5>

            <ListGroup>
              {quick__links?.map((item, index) => (
                <ListGroupItem key={index} className="quick__links ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__links-title">Quick Links</h5>

            <ListGroup>
              {quick__links2?.map((item, index) => (
                <ListGroupItem key={index} className="quick__links ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__links-title">Contact</h5>

            <ListGroup className="footer__quick-links">

              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-fill"></i>
                  </span>
                  Address:
                </h6>
                <p className="mb-0">Jhansi</p>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-fill"></i>
                  </span>
                  Email:
                </h6>
                <p className="mb-0">raikwar.manjari@gmail.com</p>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-fill"></i>
                  </span>
                  Phone:
                </h6>
                <p className="mb-0">+91 7905384169</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='12' className="text-center pt-5">
            <p className="love">Made with <i className="ri-heart-fill"></i> in {year}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
