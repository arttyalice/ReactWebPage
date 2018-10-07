import React, { Component } from 'react'
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap'

import axios from 'axios'

class Contents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            propData: []
        }
        
    }

    componentDidMount() {
        axios.get('http://www.orbitsdvl.co.th/api/buildings')
            .then(res => {
                this.setState({
                    propData: res.data
                })
            })
    }
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
                        {
                            this.state.propData.map((data, i) => {
                                return (
                                    <Card key={i}>
                                        <CardImg top width="100%" src={data.img}/>
                                        <CardBody>
                                            <CardTitle>{data.building_address}</CardTitle>
                                            <CardText>{data.building_type}</CardText>
                                            <CardText>{data.area}</CardText>
                                            <Button>Please Contact</Button>
                                        </CardBody>
                                    </Card>
                                )
                            })
                        }
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Contents;
