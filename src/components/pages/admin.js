import React, { Component } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Form,
    Input,
    Label
} from "reactstrap";
import axios from "axios"

class Admin extends Component {
    constructor() {
        super()
        this.state = {
            propData: [],
            editModal: false,
            InsertModal: false,
            deleteModal: false,
            selBuilding: {},
            selBuildingTmp: {
                building_type: null,
                building_address: null,
                area: null,
                building_id: null
            }
        }
        this.toggleInsert = this.toggleInsert.bind(this)
        this.toggleEdit = this.toggleEdit.bind(this)
        this.toggleDelete = this.toggleDelete.bind(this)
        this.insertData = this.insertData.bind(this)
        this.editData = this.editData.bind(this)
        this.deleteData = this.deleteData.bind(this)
    }

    handleChange(e) {
        if(e.target.name === 'name') {
            this.setState({
                selBuilding: {
                    building_type: e.target.value
                }
            })
        } else if (e.target.name === 'address') {
            this.setState({
                selBuilding: {
                    building_address: e.target.value
                }
            })
        } else {
            this.setState({
                selBuilding: {
                    area: e.target.value
                }
            })
        }
    }

    componentDidMount() {
        this.fetchData()
    }
    async fetchData() {
        let reader = new FileReader()
        await axios.get('http://www.orbitsdvl.co.th/api/buildings')
            .then(res => {
                res.data.forEach(e => {
                    let base64data
                    if (e.img !== null) {
                        reader.readAsDataURL(e.img)
                        reader.onload = () => {
                            base64data = reader.result
                            console.log(base64data)
                        }
                    }
                    this.setState({
                        propData: [
                            ...this.state.propData,
                            { building_address: e.building_address, building_type: e.building_type, building_id: e.building_id, img: base64data }
                        ]
                    })
                });
                this.setState({
                    propData: res.data
                })
            })
    }
    toggleInsert() {
        this.setState({
            InsertModal: !this.state.InsertModal,
        })
    }
    toggleEdit(data) {
        this.setState({
            editModal: !this.state.editModal,
            selBuilding: data
        })
    }
    toggleDelete(data) {
        this.setState({
            deleteModal: !this.state.deleteModal,
            selBuilding: data
        })
    }
    insertData(event) {
        event.preventDefault()
        let form = event.target
        let data = new FormData(form)
        let req = new FormData()
        for (let name of data.keys()) {
            const input = data.get(name)
            req.append(name, input)
        }
        axios.post('http://www.orbitsdvl.co.th/api/buildings', req)
            .then(res => {
                this.toggleInsert()
                this.fetchData()
            })
    }
    editData(event) {
        event.preventDefault()
        let form = event.target
        let data = new FormData(form)
        let req = new FormData()
        for (let name of data.keys()) {
            const input = data.get(name)
            req.append(name, input)
        }
        axios.post('http://www.orbitsdvl.co.th/api/buildings/' + this.state.selBuilding.building_id, req)
            .then(res => {
                this.toggleEdit()
                this.fetchData()
            })
    }
    deleteData() {
        axios.post('http://www.orbitsdvl.co.th/api/buildings/delete/' + this.state.selBuilding.building_id)
            .then(res => {
                this.toggleDelete()
                this.fetchData()
            })
    }

    render () {
        return (
            <div className="HomeContent mx-auto">
            <Container>
                <Row>
                    <Col>
                        <h1>
                            Manage Hot Property
                        </h1>
                        <hr/>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button color="primary" onClick={this.toggleInsert}>Insert</Button>
                    </Col>
                </Row>

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
                                        <Row>
                                            <Col>
                                                <Button className="editBtn" onClick={() => {this.toggleEdit(data)}}>Edit</Button>
                                                <Button className="deleteBtn" onClick={() => {this.toggleDelete(data)}}>Delete</Button>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            )
                        })
                    }

                </Row>
            </Container>
            
            {
                // Add 
            }
            <Modal isOpen={this.state.InsertModal} toggle={this.toggleInsert}>
                <Form onSubmit={this.insertData}>
                    <ModalHeader toggle={this.toggleInsert}>Insert Property</ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col xs="2">
                                <label name="name">Type: </label>
                            </Col>
                            <Col xs="8">
                                <input id="name" name="name" type="text" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2">
                                <label name="address">Address: </label>
                            </Col>
                            <Col xs="8">
                                <input id="address" name="address" type="text" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2">
                                <label name="area">Size: </label>
                            </Col>
                            <Col xs="8">
                                <input id="area" name="area" type="text" />
                            </Col>
                        </Row>
                        {/* <Row>
                            <Col xs="2">
                                <label name="img">img: </label>
                            </Col>
                            <Col xs="8">
                                <input id="img" name="img" type="file" />
                            </Col>
                        </Row> */}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary">Submit</Button>{' '}
                        <Button color="danger" onClick={this.toggleInsert}>Cancel</Button>
                    </ModalFooter>
                </Form>
            </Modal>
            
            { 
                // Edit 
            }
            <Modal isOpen={this.state.editModal} toggle={this.toggleEdit}>
                <Form onSubmit={this.editData}>
                    <ModalHeader toggle={this.toggleEdit}>Edit Property</ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col xs="2" className="my-2">
                                <Label name="name">Type: </Label>
                            </Col>
                            <Col xs="10">
                                <Input id="name" name="name" type="text" onChange={this.handleChange.bind(this)} value={this.state.selBuilding.building_type}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="my-2">
                                <Label name="address">Address: </Label>
                            </Col>
                            <Col xs="10">
                                <Input id="address" name="address" type="text" onChange={this.handleChange.bind(this)} value={this.state.selBuilding.building_address}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="2" className="my-2">
                                <Label name="area">Size: </Label>
                            </Col>
                            <Col xs="10">
                                <Input id="area" name="area" type="text" onChange={this.handleChange.bind(this)} value={this.state.selBuilding.area}/>
                            </Col>
                        </Row>
                        {/* <Row>
                            <Col xs="2">
                                <label name="img">img: </label>
                            </Col>
                            <Col xs="8">
                                <Input id="img" name="img" type="file" />
                            </Col>
                        </Row> */}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary">Submit</Button>{' '}
                        <Button color="danger" onClick={this.toggleEdit}>Cancel</Button>
                    </ModalFooter>
                </Form>
            </Modal>
            { 
                // Delete 
            }
            <Modal isOpen={this.state.deleteModal} toggle={this.toggleDelete}>
                <ModalHeader toggle={this.toggleDelete}>Delete Property</ModalHeader>
                <ModalBody>
                    <Row>
                        <Col>
                            Are you Sure?
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.deleteData}>Submit</Button>{' '}
                    <Button color="danger" onClick={this.toggleDelete}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
        )
    }
}

export default Admin
