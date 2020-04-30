import React, { Component, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Form, FormControl, Image} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import RankingBar from "./RankingBar";
import '../css/TopBarStyle.css';
const imageResources = require('../../util/ImageResources.js');

export default class TopBar extends Component {
    render() {

        return (
            <Navbar expand="md" className={"topBar"}>
                <button className={"categoryImgArea"}> <img src={imageResources.categoryImg} className={"categoryImgArea"}/> </button>
                <Navbar.Brand href="#home" className={"title"}> <img src={imageResources.logoImg} id={"logoImg"}/> <span id={"title"}> 음식도서관 </span> </Navbar.Brand>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" id={"searchArea"} />
                        <Button className={"searchButton"}><img src={imageResources.searchButtonImg} id={"searchButton"}/></Button>
                    </Form>
                </Navbar.Collapse>
                <Nav> <RankingBar/> </Nav>
                    <Nav.Link id={"loginButton"}> <span id={"login"}> 로그인 </span> </Nav.Link>
                    <Nav.Link> <span id={"memberImageArea"}> <img src={imageResources.notMemberImage} className={"memberImage"}/> </span> </Nav.Link>
            </Navbar>
        );
    }
}
