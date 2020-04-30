import React, {Component} from 'react';
import './Main.css';
import Navbar from "react-bootstrap/Navbar";
import {Container, Row, Col, Form, FormControl} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import RankingBar from "../defaultDiv/js/RankingBar";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import {ButtonDropdown} from "reactstrap";

const imageResources = require('../util/ImageResources.js');

class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hidden: false,
        };
        this.handle = this.handle.bind(this);
    }

    handle = () => {
        if(!this.state.hidden){
            this.setState((Filtering) => ({ hidden: true }));
        }
        else{
            this.setState((Filtering) => ({ hidden: false }));
        }
    }
    

    render(){
        return(
            <Container>
                <Navbar expand="md" className={"topBar"}>
                    <button className={"categoryImgArea"}> <img src={imageResources.categoryImg} className={"categoryImgArea"}/> </button>
                    <Nav> <RankingBar/> </Nav>
                    <Nav.Link id={"loginButton"}> <span id={"login"}> 로그인 </span> </Nav.Link>
                    <Nav.Link> <span id={"memberImageArea"}> <img src={imageResources.notMemberImage} className={"memberImage"}/> </span> </Nav.Link>
                </Navbar>

                <Container className ="main">
                    <Navbar.Brand href="#home" className={"title"}> <img src={imageResources.logoImg} id={"logoImg"}/> <span id={"title"}> 음식도서관 </span> </Navbar.Brand>

                    <Navbar id="basic-navbar-nav">
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" id={"mainSearchArea"} />
                            <Button className={"mainSearchButton"}><img src={imageResources.searchButtonImg} id={"mainSearchButton"}/></Button>
                    </Navbar>
                    <ButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggle} className ={"FilteringDropdown"}>
                        <DropdownToggle caret className={"FilteringToggle"}>
                            검색어 필터링
                        </DropdownToggle>
                        <DropdownMenu className={"FilteringMenu"}>

                        </DropdownMenu>
                    </ButtonDropdown>
                </Container>
            </Container>
        );
    }
}
export default Main;