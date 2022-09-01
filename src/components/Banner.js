import { useState, useEffect } from 'react';

import { HashLink } from 'react-router-hash-link';

import "animate.css";

import TrackVisibility from 'react-on-screen';

import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg";
import { BrowserRouter } from 'react-router-dom';

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ 'Web App Developer', 'Web Developer', "Freelancer" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) }
    // eslint-disable-next-line
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <BrowserRouter>
            <section className='banner' id='home'>
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? 'animate__animated animated__fadeIn' : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{`Hi I'm Brandon a `}<span className="wrap">{text}</span></h1>
                                    <p>I'm a freelance Web Developer who specializes in creating beautiful and minimalistic websites.</p>
                                    <p>Currently I'm focused on expanding my knowledge through personal projects and online courses.</p>
                                    <HashLink to="#connect" style={{ textDecoration: 'none' }}>
                                        <button>Let's Connect <ArrowRightCircle size={25} /></button>
                                    </HashLink>
                                </div>}
                            </TrackVisibility>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img src={headerImg} alt="Header Img" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </BrowserRouter>
    )
}
