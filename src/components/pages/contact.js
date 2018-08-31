import React, { Component } from 'react'
import { Row, Col, Button, Form, FormGroup, Input, Label } from 'reactstrap'


import MapCom from './map/mapContainer'

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="Container">
                    <h1>Contact Us</h1>
                    <hr/>

                    <p>BANGKOK, Thailand <br/>Orbits DVL <br/>Ladkrabang…………………………………….. <br/>Tel: <br/>Fax: <br/>Email: </p>
                </div>

                    <Row>
                        <Col className="mx-auto contactSide">
                            <Form>
                                <FormGroup row>
                                    <Label for="Name" sm={2}>Name</Label>
                                    <Col sm={2}>
                                        <Input type="select" name="title" id="genderTitle">
                                            <option>นาย</option>
                                            <option>นางสาว</option>
                                            <option>นาง</option>
                                        </Input>
                                    </Col>
                                    <Col sm={4}>
                                        <Input type="name" name="fName" id="fName" placeholder="first name" />
                                    </Col>
                                    <Col sm={4}>
                                        <Input type="name" name="lName" id="lName" placeholder="last name" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="examplePassword" sm={2}>Password</Label>
                                    <Col sm={10}>
                                        <Input type="tel" name="telNum" id="telNum" placeholder="phone number" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="exampleSelect" sm={2}>E-mail</Label>
                                    <Col sm={10}>
                                        <Input type="email" name="ConEmail" id="ConEmail" placeholder="e-mail" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="exampleSelectMulti" sm={2}>Contry of Residence</Label>
                                    <Col sm={10}>
                                        <Input type="select" name="title" id="genderTitle">
                                            <option>นาย</option>
                                            <option>นางสาว</option>
                                            <option>นาง</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="exampleText" sm={2}>Text Area</Label>
                                    <Col sm={10}>
                                        <Input type="textarea" name="text" id="exampleText" />
                                    </Col>
                                </FormGroup>
                                <FormGroup check row>
                                    <Col sm={{ size: 10, offset: 2 }}>
                                        <Button>Submit</Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </Col>

                        <Col className="mx-auto">
                            <MapCom/>
                        </Col>
                    </Row>
            </div>
        )
    }
}

export default Contact;