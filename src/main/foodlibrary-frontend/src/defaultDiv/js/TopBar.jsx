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

const TopBar = ({match}) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    const a = match.params;
    console.log(a);

    let [selectedAllergy, setSelectedAllergy] = useState([]);
    const [searchProduct, setSearchProduct] = useState(match.params.searchKeyword);
    const [searchResults, setResults] = useState([]);

    const onChangeSearchProduct = e => {
        const searchProduct = e.target.value;
        setSearchProduct(searchProduct);
    };


    // const onChangeAllergyInput = (event, value) => {
    //     setSelectedAllergy(value);
    //     console.log(value);
    //
    // };

    useEffect(() => {
        const searchProduct = match.params.searchKeyword

        console.log(searchProduct);
        SearchService.findByProductName(searchProduct, selectedAllergy)
            .then(response => {
                setResults(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });

    });

    const findByProductName = () => {
        SearchService.findByProductName(searchProduct, selectedAllergy)
            .then(response => {
                setResults(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
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
                        <Button id={"searchButton"} onClick={findByProductName}>
                            <Link to={`/searchResult/${searchProduct}`}>
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

                <SearchResult searchResults = {searchResults}/>

            </Navbar>
        );

}

export default TopBar;
//
// const allergy = [
//     { allergy: '새우'},
//     { allergy: '굴'},
//     { allergy: '게'},
//     { allergy: '복숭아'},
//     { allergy: '홍합'},
//     { allergy: '오징어'},
//     { allergy: '전복'},
//     { allergy: '고등어'},
//     { allergy: '전복'},
//     { allergy: '고등어'},
//     { allergy: '조개류'},
//     { allergy: '토마토'},
//     { allergy: '메밀'},
//     { allergy: '밀'},
//     { allergy: '대두'},
//     { allergy: '호두'},
//     { allergy: '땅콩'},
//     { allergy: '난류(가금류)'},
//     { allergy: '우유'},
//     { allergy: '쇠고기'},
//     { allergy: '돼지고기'},
//     { allergy: '아황산류'},
// ];
//
//
// const disease = [
//     {disease: '당뇨'},
//     {disease: '고혈압 '},
//     {disease: '비만'}
// ];
