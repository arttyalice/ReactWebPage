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
            <div className="block">
                <div className="comingContent">
                    <img className="logo" src={require('../../assets/img/logo/logo.png')}/>
                    <h2>Our Website Is</h2>
                    <h1>COMING SOON</h1>
                    <div>
                        <a><img src={require('../../assets/img/logo/fc.png')}/></a> 
                        <a><img src={require('../../assets/img/logo/line.png')}/></a> 
                    </div>
                </div>
            </div>
        );
    }
}

export default Propoties;
