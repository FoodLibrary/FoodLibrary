import React, {useEffect, useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    ButtonDropdown,
    Button, Container, Row, Col, DropdownToggle, DropdownMenu, DropdownItem, Form, Input
} from 'reactstrap';
import './Main.css';
import Route from "react-router-dom/es/Route";
import {Link} from "react-router-dom";

import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

const imageResources = require('../util/ImageResources.js');

const Main = () => {
    const [collapsed, setCollapsed, dropdownOpen, setOpen] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    let [selectedAllergies, setSelectedAllergy] = useState(["알러지없음"]);
    const [searchProduct, setSearchProduct] = useState("");

    const onChangeSearchProduct = e => {
        const searchProduct = e.target.value;
        setSearchProduct(searchProduct);
    };

    const onClickSearchButtonAlert = () => {
        if (searchProduct === "") {
            window.confirm("검색어를 입력하세요.");
            window.location = '/';
        }
    }

    const onChangeAllergyInput = (event, value) => {
        const selectedAllergy = value;
        console.log(value);
        let selectedAllergyArray = [];
        for (let i = 0; i < selectedAllergy.length; i++) {
            selectedAllergyArray[i] = selectedAllergy[i].allergy;
        }
        setSelectedAllergy(selectedAllergyArray);
        console.log(selectedAllergies);
    };

    const toggle = () => setOpen(!dropdownOpen);
    return (
        <div>
            <Navbar id={"topBar"}>
                <NavbarToggler onClick={toggleNavbar} id={"navBar"}> <img id={"categoryImg"}
                                                                          src={imageResources.categoryImg}/>
                </NavbarToggler>
                <Nav>
                    <Button id={"loginButton"}>
                        <Link to={"/login"}> Login </Link>
                    </Button>
                    <Button id={"myPageButton"}>
                        <Link to={"/myPage"}> MyPage </Link>
                    </Button>
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
                    <Col md={{size: 2, offset: 1}} xl={{size: 2, offset: 1}}>
                        <NavbarBrand href="/" className="mr-auto"> <img id={"title"} src={imageResources.logoImg}/>
                        </NavbarBrand>
                    </Col>
                    <Col xl={{size: 1, offset: 2}}></Col>
                </Row>
                <Row id={"searchArea"}>
                    <Col xs={10} sm={{size: 8, offset: 1}} md={{size: 7, offset: 2}} lg={{size: 7, offset: 2}}>
                        <Input type="text" placeholder="검색할 식품을 입력하세요." className="mr-sm-2" id={"mainSearchArea"}
                               value={searchProduct} onChange={onChangeSearchProduct}/> </Col>

                    <Col xs={2} sm={3} md={4} lg={3}>
                        <Route>


                            <Button className={"mainSearchButton"} onClick={onClickSearchButtonAlert}>
                                <Link to={`/searchResult/${searchProduct}/${selectedAllergies}`}>
                                    <img src={imageResources.searchButtonImg} id={"mainSearchButton"}/>
                                </Link>
                            </Button>

                        </Route>
                    </Col>
                </Row>

                <Row>
                    <Col xl={{size: 3, offset: 2}}>
                        <Autocomplete
                            multiple
                            className={"allergyFilteringMain"}
                            size="small"
                            options={allergy}
                            getOptionLabel={(option) => option.allergy}
                            onChange={onChangeAllergyInput}
                            onInputChange={onChangeAllergyInput}
                            onClick={onChangeAllergyInput}
                            renderInput={allergy => (
                                <TextField {...allergy} variant="outlined" label={"알러지 유발 요소"}/>
                            )}
                        />
                    </Col>
                    <Col xl={3}>
                        <Autocomplete
                            multiple
                            className={"diseaseFilteringMain"}
                            size="small"
                            options={disease}
                            getOptionLabel={(option) => option.disease}
                            renderInput={disease => (
                                <TextField {...disease} variant="outlined" label={"질병 정보"}/>
                            )}
                        />
                    </Col>
                </Row>
            </Container>

        </div>
    );

}

export default Main;


const allergy = [
    {allergy: '새우'},
    {allergy: '굴'},
    {allergy: '게'},
    {allergy: '복숭아'},
    {allergy: '홍합'},
    {allergy: '오징어'},
    {allergy: '전복'},
    {allergy: '고등어'},
    {allergy: '전복'},
    {allergy: '고등어'},
    {allergy: '조개류'},
    {allergy: '토마토'},
    {allergy: '메밀'},
    {allergy: '밀'},
    {allergy: '대두'},
    {allergy: '호두'},
    {allergy: '땅콩'},
    {allergy: '난류(가금류)'},
    {allergy: '우유'},
    {allergy: '쇠고기'},
    {allergy: '돼지고기'},
    {allergy: '아황산류'},
];


const disease = [
    {disease: '당뇨'},
    {disease: '고혈압 '},
    {disease: '비만'}
];
