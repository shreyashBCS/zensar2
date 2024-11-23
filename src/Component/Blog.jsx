import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

function Blog() {
    return (
        <div>
            <h3 className='ms-5 mt-3'>We create experiences that put people first
            </h3>
            <Container className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
                <Row>
                    {/* Left Text Section */}
                    <Col md={4} className="d-flex flex-column justify-content-center">
                        <p>
                            Experiences are only as good as their weakest point. It’s about more
                            than creating shiny things. It’s about the quality of your entire
                            brand.
                        </p>
                    </Col>

                    {/* Service Cards Section */}
                    <Col md={8}>
                        <Row>
                            {/* Experience Services Card */}
                            <Col md={4} className="mb-4 text-center">
                                <div>
                                    <div
                                        className="rounded-circle mx-auto mb-3"
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            backgroundColor: '#000080',
                                        }}
                                    ></div>
                                    <h5>Experience Services</h5>
                                    <p>
                                        Design, deliver, and grow digital products, services, and
                                        experiences to transform business.
                                    </p>
                                    <Button variant="outline-dark" className="d-flex align-items-center mx-auto">
                                        Learn more <span className="ms-2">→</span>
                                    </Button>
                                </div>
                            </Col>
                            {/* ------------------------------------------------------------------------------------------------------------------------------------ */}
                            {/* Advanced Engineering Services Card */}
                            <Col md={4} className="mb-4 text-center">
                                <div>
                                    <div
                                        className="triangle mx-auto mb-3"
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            backgroundColor: '#ff5733',
                                            clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)',
                                        }}
                                    ></div>
                                    <h5>Advanced Engineering Services</h5>
                                    <p>
                                        Cloud-native, full-stack, generative-AI focused advanced
                                        engineering services to address business-critical digital
                                        needs.
                                    </p>
                                    <Button variant="outline-dark" className="d-flex align-items-center mx-auto">
                                        Learn more <span className="ms-2">→</span>
                                    </Button>
                                </div>
                            </Col>
                            {/* ---------------------------------------------------------------------------------------------------------------------------------------------- */}
                            {/* Data Engineering and Analytics Card */}
                            <Col md={4} className="mb-4 text-center">
                                <div>
                                    <div
                                        className="rounded-circle mx-auto mb-3"
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            backgroundColor: '#000080',
                                            clipPath: 'circle(50% at 50% 50%)',
                                        }}
                                    ></div>
                                    <h5>Data Engineering and Analytics</h5>
                                    <p>
                                        Deliver enhanced profitability and cost optimization through
                                        data engineering and analytics strategies.
                                    </p>
                                    <Button variant="outline-dark" className="d-flex align-items-center mx-auto">
                                        Learn more <span className="ms-2">→</span>
                                    </Button>
                                </div>
                            </Col>
                            {/* ------------------------------------------------------------------------------------------------------------------- */}
                            <Col md={4} className="mb-4 text-center">
                                <div>
                                    {/* Icon (Circle) */}
                                    <div
                                        className="rounded-circle mx-auto mb-3"
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            backgroundColor: '#000080',
                                        }}
                                    ></div>

                                    {/* Title */}
                                    <h5>Applicaton Services</h5>

                                    {/* Description */}
                                    <p>
                                        Design, deliver, and grow digital products, services, and experiences to
                                        transform business.
                                    </p>

                                    {/* Button */}
                                    <Button variant="outline-dark" className="d-flex align-items-center mx-auto">
                                        Learn more <span className="ms-2">→</span>
                                    </Button>
                                </div>


                            </Col>
                            {/* -------------------------------------------------------------------------------------------------- */}
                            <Col md={4} className="mb-4 text-center">
                                <div>
                                    {/* Icon (Triangle) */}
                                    <div
                                        className="triangle mx-auto mb-3"
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            backgroundColor: '#ff5733',
                                            clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)',
                                        }}
                                    ></div>
                                    {/* --------------------------------------------------------------------------------------------------------------------------- */}
                                    {/* Title */}
                                    <h5>Cloud, Infrastructure and Security services</h5>

                                    {/* Description */}
                                    <p>
                                        Cloud-native, full-stack, generative-AI focused advanced engineering
                                        services to address business-critical digital needs.
                                    </p>

                                    {/* Button */}
                                    <Button variant="outline-dark" className="d-flex align-items-center mx-auto">
                                        Learn more <span className="ms-2">→</span>
                                    </Button>
                                </div>
                            </Col>

                        </Row>

                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Blog
