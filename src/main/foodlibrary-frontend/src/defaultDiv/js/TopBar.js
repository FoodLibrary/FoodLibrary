import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Button,
    ButtonDropdown, ButtonGroup
} from 'reactstrap';
import '../css/TopBarStyle.css';
import Input from "reactstrap/es/Input";
import RankingBar from "./RankingBar";

const imageResources = require('../../util/ImageResources.js');


const TopBar = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
            <Navbar>

                <Nav >
                    <NavbarToggler onClick={toggleNavbar} id={"navBar"} > <img id={"categoryImg"} src={imageResources.categoryImg}/> </NavbarToggler>
                    <NavbarBrand href="/"> <img id={"logo"} src={imageResources.logoImg}/> </NavbarBrand>
                    <NavItem >
                        <Input id ={"searchInput"} type={"text"} />
                    </NavItem>
                    <NavItem>
                        <Button id={"searchButton"} > <img id={"searchButtonImg"} src={imageResources.searchButtonImg}/></Button>
                    </NavItem>
                    <NavItem>
                        <RankingBar/>
                    </NavItem>
                    <NavItem>
                        <Button id={"loginButton"}> Login </Button>
                        <Button id={"myPageButton"}> MyPage </Button>
                    </NavItem>
                </Nav>


                <Collapse isOpen={!collapsed} navbar >
                    <Nav navbar id={"collapse"}>
                        <NavItem>
                            <span> 대분류 </span>
                            <NavLink> 소분류1 </NavLink>
                            <NavLink> 소분류2 </NavLink>
                            <NavLink> 소분류3 </NavLink>
                            <NavLink> 소분류4 </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

        );

}

export default TopBar;

/*
*  <Row xl={12} id={"topBar"}>
                        <Col xl={1} lg={1} md={1} sm={1} xs={1}>  </Col>
                        <Col xl={2} lg={2} md={2} sm={2} xs={2}> </Col>
                        <Col xl={3} lg={3} md={3} sm={3} xs={3}> </Col>
                        <Col xl={1} lg={1} md={1} sm={1} xs={1}>  </Col>
                        <Col> <RankingBar/> </Col>
                        <Col xl={3} lg={3} md={3} sm={3} xs={3}>
                            <Button id={"loginButton"}> Login </Button>
                            <Button id={"myPageButton"}> MyPage </Button>
                        </Col>
                    </Row>


* */