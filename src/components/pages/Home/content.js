import React, { Component } from 'react'
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Contents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            propData: []
        }
        
    }

    async componentDidMount() {
        await axios.get('http://www.orbitsdvl.co.th/api/buildings')
            .then(res => {
                res.data.forEach(e => {
                    this.setState({
                        propData: [
                            ...this.state.propData,
                            { 
                                building_address: e.building_address,
                                building_type: e.building_type,
                                building_id: e.building_id,
                                area: e.area,
                                img: e.img
                            }
                        ]
                    })
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
                                        <CardImg top width="100%" src={atob(data.img)}/>
                                        <CardBody>
                                            <CardTitle>{data.building_address}</CardTitle>
                                            <CardText>{data.building_type}</CardText>
                                            <CardText>{data.area}</CardText>
                                            <Link to="/Contact">
                                                <Button>Please contact.</Button>
                                            </Link>
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
