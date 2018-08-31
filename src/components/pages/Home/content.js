import React, { Component } from 'react'
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap'

import transPic from "../../../assets/img/tran.png";

class Contents extends Component {
    render() {
        return (
            <div className="HomeContent mx-auto">
                
                <Container>
                    <Row>
                        <Col>
                            <h1>
                                Find to: 
                            </h1>
                            <hr/>
                        </Col>
                    </Row>

                    <Row>

                        <Col xs="6">
                            <h2>Buy</h2> 
                            <p>Land</p>

                            <h2>Rent</h2> 
                            <p>Factory and Warehouse</p>

                        </Col>
                        <Col xs="6">
                        
                            <h2>Location</h2>
                            <p>Bangkok, Ayutthaya, Pathumthani, Nonthaburi, Chonburi, Rayong, Samutprakarn, Samutsakorn, Other.</p>
                        
                        </Col>
                    </Row>

                    <Row>
                        <h1>Hot Property:</h1>
                    </Row>
                    <hr/>

                    <Row className="cardContainer mx-auto">
                            <Card>
                                <CardImg top width="100%" src={transPic}/>
                                <CardBody>
                                    <CardTitle>6,700,00 บาท</CardTitle>
                                    <CardText>ที่นี่ที่ไหนเอ่ย</CardText>
                                    <Button>More...</Button>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardImg top width="100%" src={transPic}/>
                                <CardBody>
                                    <CardTitle>6,700,00 บาท</CardTitle>
                                    <CardText>ที่นี่ที่ไหนเอ่ย</CardText>
                                    <Button>More...</Button>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardImg top width="100%" src={transPic}/>
                                <CardBody>
                                    <CardTitle>6,700,00 บาท</CardTitle>
                                    <CardText>ที่นี่ที่ไหนเอ่ย</CardText>
                                    <Button>More...</Button>
                                </CardBody>
                            </Card>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Contents;