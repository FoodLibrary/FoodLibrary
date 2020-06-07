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
    Button, Container, Row, Col, DropdownToggle, DropdownMenu, DropdownItem, Form, Input,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Popover, PopoverHeader, PopoverBody

} from 'reactstrap';
import './Main.css';
import Route from "react-router-dom/es/Route";
import {Link} from "react-router-dom";

import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Chip from "@material-ui/core/Chip";

const imageResources = require('../util/ImageResources.js');

const Main = (props) => {
    const [category, setCategory] = useState("없음");
    const categories = ['과자', '탄산음료', '즉석식품' , '축산가공식품', '가공식품', '사탕', '이유식' , '소스' , '장류' , '라면' , '음료' , '커피' ];


    const [collapsed, setCollapsed, dropdownOpen, setOpen] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    let [selectedAllergies, setSelectedAllergy] = useState(["알러지없음"]);
    let [selectedDisease, setSelectedDiseases] = useState(["질병없음"]);
    const [searchProduct, setSearchProduct] = useState("");

    const onChangeSearchProduct = e => {
        const searchProduct = e.target.value;
        setSearchProduct(searchProduct);
    };



    const [loginOrNot, setLoginOrNot] = useState("Login");

    function loginOrNotShow(){
        if (localStorage.getItem('loginOK') === "OK") {
            const loginOrNot = "Logout";
            setLoginOrNot(loginOrNot);
        }
        else {
            const loginOrNot = "Login";
            setLoginOrNot(loginOrNot);
        }
    }

    useEffect(() => {
        loginOrNotShow();
    });

    function loginOrOutButton() {
        if (loginOrNot === "Logout") {
            localStorage.setItem('id',"");
            localStorage.setItem('pw',"");
            localStorage.setItem('loginOK', null);
            setLoginOrNot("Login");
        }
        else {
            window.location.replace('/login');
        }
    }

    function notLoginMyPageOnClick() {
        if (loginOrNot === "Login") {
            window.location.replace('/login');
        }
        else {
            window.location.replace('/myPage');
        }
    }

    const onChangeAllergyInput = (event, value) => {
        const selectedAllergy = value;
        let selectedAllergyArray = [];
        for (let i = 0; i < selectedAllergy.length; i++) {
            selectedAllergyArray[i] = selectedAllergy[i].allergy;
        }
        setSelectedAllergy(selectedAllergyArray);
    };

    const onChangeDiseaseInput = (event, value) => {
        const selectedDisease = value;
        let selectedDiseaseArray = [];
        for (let i = 0; i < selectedDisease.length; i++) {
            selectedDiseaseArray[i] = selectedDisease[i].disease;
        }
        setSelectedDiseases(selectedDiseaseArray);
    };


    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const allowSearch = () => {
        if (searchProduct === "") {
            window.confirm("검색어를 입력하세요.");
            window.location.replace('/');
        }
    }

    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggleInfo = () => setPopoverOpen(!popoverOpen);

    return (
        <div>
            <Navbar id={"topBar"}>
                <NavbarToggler onClick={toggleNavbar} id={"navBar"}> <img id={"categoryImg"}
                                                                          src={imageResources.categoryImg}/>
                </NavbarToggler>
                <Nav>
                    <Button id={"loginButton"} onClick={loginOrOutButton}>
                        <Link to={"/login"}> <span> {loginOrNot} </span> </Link>
                    </Button>
                    <Button id={"myPageButton"} onClick={notLoginMyPageOnClick}>
                        My Page
                    </Button>
                </Nav>

                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            {categories.map((result, i) => (
                                <NavLink className={"categoryName"} href={`/searchResult/${categories[i]}/없음/${selectedAllergies}/${selectedDisease}`}> {result} </NavLink>
                             ))}
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
                            <Link to={`/searchResult/${category}/${searchProduct}/${selectedAllergies}/${selectedDisease}`}>
                                <Button className={"mainSearchButton"}  onClick={allowSearch}>
                                    <img src={imageResources.searchButtonImg} id={"mainSearchButton"} />

                                </Button>
                            </Link>

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
                            onChange={onChangeDiseaseInput}
                            onInputChange={onChangeDiseaseInput}
                            onClick={onChangeDiseaseInput}
                            renderInput={disease => (
                                <TextField {...disease} variant="outlined" label={"질병 정보"}/>
                            )}
                        />
                    </Col>
                    <Col>
                        <Button id="infoImgButtonMain" type="button">
                            <img src={imageResources.info} id={"infoImg"}/>
                        </Button>
                        <Popover placement="bottom" isOpen={popoverOpen} target="infoImgButtonMain" toggle={toggleInfo}>
                            <PopoverHeader> 필터링 설명 </PopoverHeader>
                            <PopoverBody> </PopoverBody>
                        </Popover>
                    </Col>
                </Row>


            </Container>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                </ModalFooter>
            </Modal>

        </div>
    );

}

export default Main;


const allergy = [
    {allergy: '내 알러지'},
    {allergy: '새우'},
    {allergy: '굴'},
    {allergy: '게'},
    {allergy: '복숭아'},
    {allergy: '홍합'},
    {allergy: '오징어'},
    {allergy: '전복'},
    {allergy: '고등어'},
    {allergy: '전복'},
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
    {disease: '내 질병'},
    {disease: '고혈압'},
    {disease: '요로결석'},
    {disease: '신부전증'},
    {disease: '위염'},
    {disease: '복부비만'},
    {disease: '이상지혈증'},
    {disease: '비만'},
    {disease: '간부전'},
    {disease: '신장질환'},
    {disease: '심근경색'},
    {disease: '변비'},
    {disease: '동맥경화증'},
    {disease: '협십증'},
    {disease: '암'},
    {disease: '심장병'},
    {disease: '심근경색'},
];
