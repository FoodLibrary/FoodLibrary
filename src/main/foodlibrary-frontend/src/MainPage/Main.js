import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import './Main.css';
import Input from "reactstrap/es/Input";
import Button from "react-bootstrap/Button";
import RankingBar from "../defaultDiv/js/RankingBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import ButtonDropdown from "reactstrap/es/ButtonDropdown";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";

const imageResources = require('../util/ImageResources.js');

const Main  = (props) => {
    const [collapsed, setCollapsed,dropdownOpen, setOpen] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    const toggle = () => setOpen(!dropdownOpen);
    return (
        <div>
            <Navbar id={"topBar"}>
                <NavbarToggler onClick={toggleNavbar} id={"navBar"} > <img id={"categoryImg"} src={imageResources.categoryImg}/> </NavbarToggler>
                <Nav>
                    <Button id={"loginButton"}> Login </Button>
                    <Button id={"myPageButton"}> MyPage </Button>
                </Nav>
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
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

            <Container>
                <Row>
                    <Col xl={1}></Col>
                    <Col md={{size:2, offset:1}} xl={{size:2, offset:1}}>
                        <NavbarBrand href="/" className="mr-auto" > <img id={"title"} src={imageResources.logoImg}/> </NavbarBrand>
                    </Col >
                    <Col xl={{size:1, offset:2}}></Col>
                </Row>
                <Row id={"searchArea"}>
                    <Col xs={10} sm={{size:8,offset:1}} md={{size:7,offset:2}} lg={{size:7,offset:2}}> <FormControl type="text" placeholder="Search" className="mr-sm-2" id={"mainSearchArea"} /> </Col>
                    <Col xs={2} sm={3} md={4} lg={3}>
                        <Button className={"mainSearchButton"}><img src={imageResources.searchButtonImg} id={"mainSearchButton"}/></Button>
                    </Col>
                </Row>
                <Row>
                    <Col sm={{size:8, offset:1}} md={{size:7, offset:2}} lg={{size:7, offset:2}} xl={{size:7, offset:2}}>
                        <ButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggle} >
                            <DropdownToggle caret id={"filteringDropDown"}>
                                검색어 필터링
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>Header</DropdownItem>
                                <DropdownItem disabled>Action</DropdownItem>
                                <DropdownItem>Another Action</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Another Action</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                    </Col>
                    <Col sm={1} md={2} lg={2} xl={2}></Col>

                </Row>

            </Container>
        </div>
    );

}

export default Main;


/*
* <Container className ="main">
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
* */