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
    Input
} from 'reactstrap';
import '../css/TopBarStyle.css';

import RankingBar from "./RankingBar";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchService from "../../services/SearchService";
import ProductList from "../../SearchResultPage/js/ProductList";
import SearchResult from "../../SearchResultPage/js/SearchResult";

const imageResources = require('../../util/ImageResources.js');
const TopBar = () => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    const [selectedAllergy, setSelectedAllergy] = useState({
        allergy: ''
    });

    const allergyInput = (event, value) => {
        setSelectedAllergy(value);
        console.log(selectedAllergy);
    };

    const [searchProduct, setSearchProduct] = useState("");
    const [searchResults, setResults] = useState([]);

    const onChangeSearchProduct = e => {
        const searchProduct = e.target.value;
        setSearchProduct(searchProduct);
    };

    const findByProductName = () => {
        SearchService.findByProductName(searchProduct)
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
                <Nav >
                    <NavbarToggler onClick={toggleNavbar} id={"navBar"} > <img id={"categoryImg"} src={imageResources.categoryImg}/> </NavbarToggler>
                    <NavbarBrand href="/"> <img id={"logo"} src={imageResources.logoImg}/> </NavbarBrand>
                    <NavItem >
                        <Input id ={"searchInput"} type={"text"} value={searchProduct}  onChange={onChangeSearchProduct}/>
                        <Button id={"searchButton"} onClick={findByProductName}> <img id={"searchButtonImg"} src={imageResources.searchButtonImg}/></Button>
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
                <Col xl={{size:12, offset:3}}>
                    <Autocomplete
                        multiple
                        className={"allergyFiltering"}
                        size="small"
                        options={allergy}
                        getOptionLabel={(option) => option.allergy}
                        onChange={allergyInput}
                        onInputChange={allergyInput}
                        onClick={allergyInput}
                        renderInput={allergy => (
                            <TextField {...allergy} variant="outlined" label={"알러지 유발 요소"}  />
                        )}
                    />

                </Col>
                <Col xl={4}>
                    {searchResults.map((result, index) => (
                        <ProductList {...result} key={index}/>
                    ))}
                </Col>

            </Navbar>
        );

}

export default TopBar;

const allergy = [
    { allergy: '새우'},
    { allergy: '굴'},
    { allergy: '게'},
    { allergy: '복숭아'},
    { allergy: '홍합'},
    { allergy: '오징어'},
    { allergy: '전복'},
    { allergy: '고등어'},
    { allergy: '전복'},
    { allergy: '고등어'},
    { allergy: '조개류'},
    { allergy: '토마토'},
    { allergy: '메밀'},
    { allergy: '밀'},
    { allergy: '대두'},
    { allergy: '호두'},
    { allergy: '땅콩'},
    { allergy: '난류(가금류)'},
    { allergy: '우유'},
    { allergy: '쇠고기'},
    { allergy: '돼지고기'},
    { allergy: '아황산류'},
];

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