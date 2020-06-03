import React, {Component, useEffect, useState} from 'react';
import '../css/LoginPage.css';
import {Container, Row, Col, NavbarBrand, Input, Button, Form} from 'reactstrap';
import TopBar from "../../defaultDiv/js/TopBar";
import useLocalStorage from 'react-use-localstorage';
import SearchService from "../../services/SearchService";

const imageResources = require('../../util/ImageResources');

const LoginPage = () => {
    const [selectedAllergy, setSelectedAllergy] = useState(["알러지없음"]);
    const [searchResults, setSearchResults] = useState("");

    const [id, setID] = useState("");
    const [pw, setPW] = useState("");
    const [loginOK, setLoginOK] = useState("OK");
    let [loginCertificate, setLoginCertificate] = useState("");

    const [loginInfo, setLoginInfo] = useState({
        name: "",
        password: ""
    });

    useEffect(() => {
        SearchService.loginCertification(loginInfo)
            .then(response => {
                setLoginCertificate(response.status.toString());
            })
            .catch(e => {
                console.log(e.status);
            })
    });


    const onClickLoginBtn = () => {
        if (loginCertificate === "200") {
            localStorage.setItem('loginOK', "OK");
            window.location.replace('/');
        }
        else {
            localStorage.setItem('id',"");
            localStorage.setItem('pw',"");
            localStorage.setItem('loginOK',null);
            window.alert("로그인 실패");
        }
    }

    const idChange = (event) => {
        const id = event.target.value;
        setID(id);
        loginInfo.name = id;
        localStorage.setItem('id', id);
    };

    const pwChange = (event) => {
        const pw = event.target.value;
        setPW(pw);
        loginInfo.password = pw;
        localStorage.setItem('pw', pw);
    };

    return (
        <div className="LoginPage">
            <TopBar selectedAllergy={selectedAllergy} searchResults={searchResults}/>
            <Container>
                <Row>
                    <Col xl={1}></Col>
                    <Col md={{size: 2, offset: 1}} xl={{size: 2, offset: 1}}>
                        <NavbarBrand href="/" className="mr-auto"> <img id={"title"} src={imageResources.logoImg}/>
                        </NavbarBrand>
                    </Col>
                    <Col xl={{size: 1, offset: 2}}></Col>
                </Row>
                    <Row>
                        <Col xl={{size: 6, offset: 3}}>
                            <Input type="text" placeholder="아이디" id={"loginID"} onChange={idChange}/>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={{size: 6, offset: 3}}>
                            <Input type="password" placeholder="비밀번호" id={"loginPW"} onChange={pwChange}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={{size: 6, offset: 3}}>
                            <Button id={"loginBtn"} onClick={onClickLoginBtn}> 로그인 </Button>
                        </Col>
                    </Row>


                <Row className={"findIdPw"}>
                    <Col xl={{size: 2, offset: 3}}>
                        <span id={"signUpGoButton"}> <a href={'/signUp'}> 회원 가입 </a> </span>

                    </Col>
                    <Col xl={2}>
                        <span className={"findIdPw"}> <a href={'/'}> 아이디 찾기 </a> </span>
                    </Col>
                    <Col xl={2}>

                        <span className={"findIdPw"}> <a href={'/'}> 비밀번호 찾기 </a> </span>
                    </Col>
                </Row>
            </Container>

        </div>
    );

}
export default LoginPage;
