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
    ButtonDropdown, ButtonGroup
} from 'reactstrap';
import '../css/TopBarStyle.css';
import Input from "reactstrap/es/Input";
import Button from "react-bootstrap/Button";
import RankingBar from "./RankingBar";

const imageResources = require('../../util/ImageResources.js');

const TopBar  = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
        return (
            <div>
                <Navbar id={"topBar"}>

                    <NavbarToggler onClick={toggleNavbar} id={"navBar"} > <img id={"categoryImg"} src={imageResources.categoryImg}/> </NavbarToggler>
                    <NavbarBrand href="/" className="mr-auto"> <img id={"logo"} src={imageResources.logoImg}/> </NavbarBrand>
                    <Nav>
                        <NavItem> <Input id ={"searchInput"} type={"text"} > </Input></NavItem>
                        <NavItem> <Button id={"searchButton"} > <img id={"searchButtonImg"} src={imageResources.searchButtonImg}/></Button> </NavItem>
                        <RankingBar/>
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
            </div>
        );

}

export default TopBar;