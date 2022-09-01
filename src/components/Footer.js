import { Container, Row, Col } from "react-bootstrap"

import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const Footer = () => {
    <footer className='footer'>
        <Container>
            <Row className='align-items-center'>
                <Col sm={6}>
                    <img src={logo} alt="Logo" />
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <div classname="social-icon">
                        <a href=""><img src={navIcon1} alt=""></img></a>
                        <a href=""><img src={navIcon2} alt=""></img></a>
                        <a href=""><img src={navIcon3} alt=""></img></a>
                    </div>
                    <p>CopyRight 2022. All Rights Reserved by Brandon Chan</p>
                </Col>
            </Row>
        </Container>
    </footer>
}