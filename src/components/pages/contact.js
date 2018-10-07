import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap'


import MapCom from './map/mapContainer'

class Contact extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Contact Us</h1>
                        <hr/>
                    </Col>
                </Row>
                <Row className="contactContent">
                    <Col className="mx-auto imgSide">
                        <img src={require('../../assets/img/place.jpg')} alt=''/>
                    </Col>

                    <Col className="mx-auto contactSide">
                        <p>OrbitsDVL Company Limited.
                        <br/>3/12 Floor 3, Chai Sa-Nguan Building,
                        <br/>New Petchaburi Road, Makkasan, Ratchathewi,
                        <br/>Fax: Bangkok 10400
                        <br/>
                        <br/>Tel: 
                        <br/>Email: info@orbitsdvl.co.th</p>
                    </Col>
                </Row>
                <Row>
                    <MapCom/>
                </Row>
            </Container>
        )
    }
}

export default Contact;