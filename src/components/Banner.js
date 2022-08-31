import { Container, Row, Col } from "react-bootstrap"

export const Banner = () => {
    return (
        <section>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Brandon`}<span className="wrap">Web Developer</span></h1>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
