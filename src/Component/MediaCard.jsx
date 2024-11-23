import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function MediaCard() {
    return (
        <Container className="my-5" >
            <h2 className="text-center mb-4">News and Updates</h2>
            <Row className="g-4">
                {/* First Card */}
                <Col md={4}>
                    <Card className="rounded shadow border-0">
                        <Card.Img
                            variant="top"
                            src="path-to-image1.jpg"
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
                            src="path-to-image2.jpg"
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
                            src="path-to-image3.jpg"
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
            {/* ------------------------------------- */}
            <Row className="g-4">
                {/* First Card */}
                <Col md={4}>
                    <Card className="rounded shadow border-0">
                        <Card.Img
                            variant="top"
                            src="path-to-image1.jpg"
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
                            src="path-to-image2.jpg"
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
                            src="path-to-image3.jpg"
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
            <div className="d-flex justify-content-center align-items-center vh-30 mt-20">
                <button className="bg-black text-white p-2 rounded">View all</button>
            </div>        </Container >

    )
} export default MediaCard
