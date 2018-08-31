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
  Nav,
  NavItem,
  NavLink,
  TabPane,
  TabContent,
  Input,
  Form,
  FormGroup
} from "reactstrap";
import classnames from "classnames";
import transPic from "../../assets/img/tran.png";

class Propoties extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div className="PropotyStyle">
        <Form>
            <Container>
                <Row>
                    <Col>
                        <h1>Find to:</h1>
                        <hr />
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
                        <p>
                        Bangkok, Ayutthaya, Pathumthani, Nonthaburi, Chonburi, Rayong,
                        Samutprakarn, Samutsakorn, Other.
                        </p>
                    </Col>
                </Row>

            </Container>
            <div className="searchNav">
                <Nav tabs>
                    <NavItem>
                        <NavLink
                        className={classnames({
                            active: this.state.activeTab === "1"
                        })}
                        onClick={() => {
                            this.toggle("1");
                        }}
                        >
                        Buy
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        className={classnames({
                            active: this.state.activeTab === "2"
                        })}
                        onClick={() => {
                            this.toggle("2");
                        }}
                        >
                        Rent
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <h2 className="mx-auto">Buy</h2>
                        </Row>
                        <Row>
                            <FormGroup row className="SearchGrp">
                                <Col sm="5">
                                    <Input
                                        type="search"
                                        name="searchBox"
                                        id="searchBox"
                                        placeholder="Enter Property Name, Location, or Ref. No."
                                    />
                                </Col>
                                <Col>
                                    <Button color="primary">Search</Button>
                                </Col>
                            </FormGroup>
                        </Row>
                        <Row>
                            <Col sm="3">
                                <Input type="select" name="select" id="exampleSelect">
                                    <option disabled selected hidden>Properties</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </Col>
                            <Col sm="3">
                                <Input type="select" name="select" id="exampleSelect">
                                    <option disabled selected hidden>Industrial</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </Col>
                            <Col sm="3">
                                <Input type="select" name="select" id="exampleSelect">
                                    <option disabled selected hidden>Location</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </Col>
                            <Col sm="3">
                                <Button color="primary">Search</Button>
                            </Col>
                        </Row>
                    </TabPane>

                    <TabPane tabId="2">
                        <Row>
                            <h2 className="mx-auto">Rent</h2>
                        </Row>
                        <Row>
                            <FormGroup row className="SearchGrp">
                                <Col sm="5">
                                    <Input
                                        type="search"
                                        name="searchBox"
                                        id="searchBox"
                                        placeholder="Enter Property Name, Location, or Ref. No."
                                    />
                                </Col>
                                <Col>
                                    <Button color="primary">Search</Button>
                                </Col>
                            </FormGroup>
                        </Row>
                        <Row>
                            <Col sm="3">
                                <Input type="select" name="select" id="exampleSelect">
                                    <option disabled selected hidden>Properties</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </Col>
                            <Col sm="3">
                                <Input type="select" name="select" id="exampleSelect">
                                    <option disabled selected hidden>Industrial</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </Col>
                            <Col sm="3">
                                <Input type="select" name="select" id="exampleSelect">
                                    <option disabled selected hidden>Location</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </Col>
                            <Col sm="3">
                                <Button color="primary">Search</Button>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>

          <Row className="cardContainer">
            <Card>
              <CardImg
                top
                width="100%"
                src={transPic}
              />
              <CardBody>
                <CardTitle>6,700,00 บาท</CardTitle>
                <CardText>ที่นี่ที่ไหนเอ่ย</CardText>
                <Button>More...</Button>
              </CardBody>
            </Card>

            <Card>
              <CardImg
                top
                width="100%"
                src={transPic}
              />
              <CardBody>
                <CardTitle>6,700,00 บาท</CardTitle>
                <CardText>ที่นี่ที่ไหนเอ่ย</CardText>
                <Button>More...</Button>
              </CardBody>
            </Card>

            <Card>
              <CardImg
                top
                width="100%"
                src={transPic}
              />
              <CardBody>
                <CardTitle>6,700,00 บาท</CardTitle>
                <CardText>ที่นี่ที่ไหนเอ่ย</CardText>
                <Button>More...</Button>
              </CardBody>
            </Card>

            <Card>
              <CardImg
                top
                width="100%"
                src={transPic}
              />
              <CardBody>
                <CardTitle>6,700,00 บาท</CardTitle>
                <CardText>ที่นี่ที่ไหนเอ่ย</CardText>
                <Button>More...</Button>
              </CardBody>
            </Card>

            <Card>
              <CardImg
                top
                width="100%"
                src={transPic}
              />
              <CardBody>
                <CardTitle>6,700,00 บาท</CardTitle>
                <CardText>ที่นี่ที่ไหนเอ่ย</CardText>
                <Button>More...</Button>
              </CardBody>
            </Card>

            <Card>
              <CardImg
                top
                width="100%"
                src={transPic}
              />
              <CardBody>
                <CardTitle>6,700,00 บาท</CardTitle>
                <CardText>ที่นี่ที่ไหนเอ่ย</CardText>
                <Button>More...</Button>
              </CardBody>
            </Card>

            <Card>
              <CardImg
                top
                width="100%"
                src={transPic}
              />
              <CardBody>
                <CardTitle>6,700,00 บาท</CardTitle>
                <CardText>ที่นี่ที่ไหนเอ่ย</CardText>
                <Button>More...</Button>
              </CardBody>
            </Card>

            <Card>
              <CardImg
                top
                width="100%"
                src={transPic}
              />
              <CardBody>
                <CardTitle>6,700,00 บาท</CardTitle>
                <CardText>ที่นี่ที่ไหนเอ่ย</CardText>
                <Button>More...</Button>
              </CardBody>
            </Card>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Propoties;
