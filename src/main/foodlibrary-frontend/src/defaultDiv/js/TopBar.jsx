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
    Input, Table, Form, ModalHeader, ModalBody, ModalFooter, Modal
} from 'reactstrap';
import '../css/TopBarStyle.css';

import RankingBar from "./RankingBar";
import {Link, Route} from "react-router-dom";
import SearchService from "../../services/SearchService";

const imageResources = require('../../util/ImageResources.js');

const TopBar = (props) => {
    const [category, setCategory] = useState("없음");
    const categories = ['과자', '탄산음료', '즉석식품', '축산가공식품', '가공식품', '사탕', '이유식', '소스', '장류', '라면', '음료', '커피'];

    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    const [searchProduct, setSearchProduct] = useState(props.searchResults);
    let [selectedAllergy, setSelectedAllergy] = useState(props.selectedAllergy);
    let [selectedDisease, setSelectedDisease] = useState(props.selectedDisease);

    const [loginOrNotA, setLoginOrNotA] = useState("Login");

    const [modalSearchTop, setModalSearchTop] = useState(false);

    const toggleSearchTop = () => {
        setModalSearchTop(!modalSearchTop);
    };


    function loginOrNotShow() {
        if (localStorage.getItem('loginOK') === "OK") {
            const loginOrNotA = "Logout";
            setLoginOrNotA(loginOrNotA);
        } else {
            const loginOrNotA = "Login";
            setLoginOrNotA(loginOrNotA);
        }
    }

    const allowSearchTop = () => {
        if (searchProduct === "") {
            setModalSearchTop(true);
        } else {
            window.location.reload();
            SearchService.searchCount(props.searchResults)
                .then(response => {
                    console.log(response);
                })
                .catch(response => {
                    console.log(response);
                })

        }
    }

    useEffect(() => {
        loginOrNotShow();
    });

    useEffect(() => {
        if (props.searchResults === "없음") {
            setSearchProduct("");
        }
        if (props.searchResults !== "없음") {
            setCategory("없음");
        }
        if (props.selectedCategory !== "없음") {
            setSearchProduct("");
        }
    }, []);

    function loginOrOutButton() {
        if (loginOrNotA === "Logout") {
            localStorage.setItem('id', "");
            localStorage.setItem('pw', "");
            localStorage.setItem('loginOK', null);
            setLoginOrNotA("Login");
        } else {
            window.location.replace('/login');
        }
    }

    function notLoginMyPageOnClick() {
        if (loginOrNotA === "Login") {
            window.location.replace('/login');
        } else {
            window.location.replace('/myPage');
        }
    }

    const onChangeSearchProduct = e => {
        const searchProduct = e.target.value;
        setSearchProduct(searchProduct);

        if (props.selectedAllergy === null) {
            console.log(selectedAllergy)
        } else {
            setSelectedAllergy(selectedAllergy);
        }

        if (props.selectedDisease === null) {
            console.log(selectedDisease)
        } else {
            setSelectedDisease(selectedDisease);
        }

    };


    return (
        <Navbar>
            <Nav>
                <NavbarToggler onClick={toggleNavbar} id={"navBar"}> <img id={"categoryImg"}
                                                                          src={imageResources.categoryImg}/>
                </NavbarToggler>
                <NavbarBrand href="/"> <img id={"logo"} src={imageResources.logoImg}/> </NavbarBrand>
                <NavItem>
                    <Input id={"searchInput"} type={"text"} placeholder={"검색할 식품을 입력하세요."} value={searchProduct}
                           onChange={onChangeSearchProduct}/>
                </NavItem>
                <NavItem>
                    <Route>
                        <Button id={"searchButton"} onClick= {() => {allowSearchTop()}}>
                            <Link
                                to={`/searchResult/${category}/${searchProduct}/${selectedAllergy}/${selectedDisease}`}
                                onClick= {() => {allowSearchTop()}}>
                                <img  id={"searchButtonImg"}
                                     src={imageResources.searchButtonImg}/>
                            </Link>
                        </Button>
                    </Route>

                </NavItem>
                <NavItem>
                    <RankingBar/>
                </NavItem>
                <NavItem>
                    <Button id={"loginButton"} onClick={loginOrOutButton}>
                        <Link to={"/login"}>  {loginOrNotA} </Link>
                    </Button>
                </NavItem>
                <NavItem>
                    <Button id={"myPageButton"} onClick={notLoginMyPageOnClick}>
                        MyPage
                    </Button>
                </NavItem>

            </Nav>

            <Collapse isOpen={!collapsed} navbar>
                <Nav navbar id={"collapse"}>
                    <NavItem>
                        {categories.map((result, i) => (
                            <NavLink className={"categoryName"}
                                     href={`/searchResult/${categories[i]}/없음/${selectedAllergy}/${selectedDisease}`}> {result} </NavLink>
                        ))}
                    </NavItem>
                </Nav>
            </Collapse>

            <Modal isOpen={modalSearchTop} toggle={toggleSearchTop} className={"abc"}>
                <ModalHeader toggle={toggleSearchTop}> 검색 실패 </ModalHeader>
                <ModalBody>
                    <Row id={"okSign"}> 검색어를 입력하세요. </Row>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggleSearchTop}> 확인 </Button>
                </ModalFooter>
            </Modal>
        </Navbar>
    );

}

export default TopBar;
