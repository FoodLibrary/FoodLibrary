import React, {useEffect, useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Col,
    Row,
    Button,
    Input, Table
} from 'reactstrap';
import '../css/TopBarStyle.css';

import RankingBar from "./RankingBar";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchService from "../../services/SearchService";
import ProductList from "../../SearchResultPage/js/ProductList";
import SearchResult from "../../SearchResultPage/js/SearchResult";
import Container from "reactstrap/lib/Container";
import {Link} from "react-router-dom";
import LoginPage from "../../LoginPage/js/LoginPage";

const imageResources = require('../../util/ImageResources.js');

const TopBar = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    const [searchProduct, setSearchProduct] = useState(props.searchResults);
    let [selectedAllergy, setSelectedAllergy] = useState(props.selectedAllergy);

    const onChangeSearchProduct = e => {
        const searchProduct = e.target.value;
        setSearchProduct(searchProduct);
        if (props.selectedAllergy === null) {
            console.log(selectedAllergy)
        }
        else {
            setSelectedAllergy(selectedAllergy);
        }

    };

    return (
            <Navbar>
                <Nav>
                    <NavbarToggler onClick={toggleNavbar} id={"navBar"} > <img id={"categoryImg"} src={imageResources.categoryImg}/> </NavbarToggler>
                    <NavbarBrand href="/"> <img id={"logo"} src={imageResources.logoImg}/> </NavbarBrand>
                    <NavItem >
                        <Input id ={"searchInput"} type={"text"} value={searchProduct}  onChange={onChangeSearchProduct}/>
                    </NavItem>
                    <NavItem>
                        <Button id={"searchButton"}>
                            <Link to={`/searchResult/${searchProduct}/${selectedAllergy}`}>
                                <img id={"searchButtonImg"} src={imageResources.searchButtonImg}/>
                            </Link>
                        </Button>
                    </NavItem>
                    <NavItem>
                        <RankingBar/>
                    </NavItem>
                    <NavItem>
                        <Button id={"loginButton"}>
                            <Link to={"/login"}>  Login </Link>
                        </Button>
                    </NavItem>
                    <NavItem>
                        <Button id={"myPageButton"}>
                            <Link to={"/myPage"}>  MyPage </Link>
                        </Button>
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
