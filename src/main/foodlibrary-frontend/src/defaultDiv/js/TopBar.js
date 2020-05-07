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
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
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
            // <Navbar expand="md" className={"topBar"}>
            //     <button className={"categoryImgArea"}> <img src={imageResources.categoryImg} className={"categoryImgArea"}/> </button>
            //     <Navbar.Brand href="#home" className={"title"}> <img src={imageResources.logoImg} id={"logoImg"}/> <span id={"title"}> 음식도서관 </span> </Navbar.Brand>
            //
            //     <Navbar.Collapse id="basic-navbar-nav">
            //         <Form inline>
            //             <FormControl type="text" placeholder="Search" className="mr-sm-2" id={"searchArea"} />
            //             <Button className={"searchButton"}><img src={imageResources.searchButtonImg} id={"searchButton"}/></Button>
            //         </Form>
            //     </Navbar.Collapse>
            //     <Nav> <RankingBar/> </Nav>
            //         <Nav.Link id={"loginButton"}> <span id={"login"}> 로그인 </span> </Nav.Link>
            //         <Nav.Link> <span id={"memberImageArea"}> <img src={imageResources.notMemberImage} className={"memberImage"}/> </span> </Nav.Link>
            // </Navbar>
        );

}

export default TopBar;