import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap'

class Service extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Our Services</h1>
                        <hr></hr>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h2>Logistics</h2>
                        <ul>
                            <li>transportation</li>
                            <li>Supply and Service</li>
                            <li>Supply Management</li>
                        </ul>

                        <h2>Warehouse and Factory</h2>
                        <ul>
                            <li>Sale and Leasing</li>
                            <li>Space search and analysis</li>
                            <li>Land Sales and Investment</li>
                            <li>Lease term and negotiation</li>
                            <li>Developement Consultant and Advisory</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Service;