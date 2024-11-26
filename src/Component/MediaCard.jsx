import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import z8 from '../img/z8.webp'
import z9 from '../img/z-9.webp'
import z11 from '../img/z-11.webp'

function MediaCard() {
    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">News and Updates</h2>
            <Row className="g-4 mb-4"> {/* Added mb-4 here */}
                {/* First Card */}
                <Col md={4}>
                    <Card className="rounded shadow border-0">
                        <Card.Img
                            variant="top"
                            src={z8}
                            className="rounded-top"
                        />
                        <Card.Body className="bg-light">
                            <Button
                                variant="dark"
                                href="#"
                                className="d-flex align-items-center gap-2"
                            >
                                Read <span>&rarr;</span>
                            </Button>
                        </Card.Body>
                        <Card.Footer className="bg-transparent">
                            <p className="text-muted mb-0">Media Release</p>
                            <Card.Text className="small">
                                Zensar honored with Avtar & Seramount Best Companies for Women...
                            </Card.Text>
                        </Card.Footer>
                    </Card>
                </Col>

                {/* Second Card */}
                <Col md={4}>
                    <Card className="rounded shadow border-0">
                        <Card.Img
                            variant="top"
                            src={z9}
                            className="rounded-top"
                        />
                        <Card.Body className="bg-light">
                            <Button
                                variant="dark"
                                href="#"
                                className="d-flex align-items-center gap-2"
                            >
                                Read <span>&rarr;</span>
                            </Button>
                        </Card.Body>
                        <Card.Footer className="bg-transparent">
                            <p className="text-muted mb-0">Press Release</p>
                            <Card.Text className="small">
                                Zensar reports 4.0% YoY revenue growth for Q2FY25.
                            </Card.Text>
                        </Card.Footer>
                    </Card>
                </Col>

                {/* Third Card */}
                <Col md={4}>
                    <Card className="rounded shadow border-0">
                        <Card.Img
                            variant="top"
                            src={z11}
                            className="rounded-top"
                        />
                        <Card.Body className="bg-light">
                            <Button
                                variant="dark"
                                href="#"
                                className="d-flex align-items-center gap-2"
                            >
                                Read <span>&rarr;</span>
                            </Button>
                        </Card.Body>
                        <Card.Footer className="bg-transparent">
                            <p className="text-muted mb-0">Media Release</p>
                            <Card.Text className="small">
                                Zensar partners with Afrika for collaboration...
                            </Card.Text>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>

            <Row className="g-4"> {/* Second row */}
                {/* Repeat your cards for the second row here */}
            </Row>
            <div className="d-flex justify-content-center align-items-center vh-30 mt-30">
                <button className="bg-black text-white p-2 rounded mt-2">View all</button>
            </div>
        </Container>
    );
}

export default MediaCard;
