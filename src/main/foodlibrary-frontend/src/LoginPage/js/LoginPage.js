import React, {Component} from 'react';
import '../css/LoginPage.css';
import {Container, Row, Col, NavbarBrand, Input, Button} from 'reactstrap';
import TopBar from "../../defaultDiv/js/TopBar";

const imageResources = require('../../util/ImageResources');

const LoginPage = () => {
    return (
        <div className="LoginPage">
            <TopBar/>
            <Container>
                <Row>
                    <Col xl={1}></Col>
                    <Col md={{size:2, offset:1}} xl={{size:2, offset:1}}>
                        <NavbarBrand href="/" className="mr-auto" > <img id={"title"} src={imageResources.logoImg}/> </NavbarBrand>
                    </Col >
                    <Col xl={{size:1, offset:2}}></Col>
                </Row>
                <Row>
                    <Col xl={{size:6, offset:3}}>
                        <Input type="text" placeholder="아이디" id={"loginID"} />
                    </Col>
                </Row>
                <Row>
                    <Col xl={{size:6, offset:3}}>
                        <Input type="password" placeholder="비밀번호" id={"loginPW"} />
                    </Col>
                </Row>
                <Row>
                    <Col xl={{size:6, offset:3}}>
                        <Button id={"loginBtn"} > 로그인 </Button>
                    </Col>
                </Row>
                <Row className={"findIdPw"}>
                    <Col xl={{size:2, offset:4}}>
                        <span className={"findIdPw"}> <a href={'/'} > 아이디 찾기 </a> </span>
                    </Col>
                    <Col xl={2}>
                        <span className={"findIdPw"}> <a href={'/'} > 비밀번호 찾기 </a> </span>
                    </Col>
                </Row>
            </Container>

        </div>
    );

}
export default LoginPage;
