import React,{Component} from 'react';
import '../css/LoginPageFoot.css';
import {Container, Row, Col} from 'reactstrap';

const LoginPageFoot = () => {
        return(
            <Container>
                <Row className="LoginPageFootRow" >
                    <Col className="LoginPageFootTitle" >아이디 :</Col>
                    <Col className="LoginPageFootInputCol"><input className="LoginPageFootInput"></input></Col>
                </Row >
                <Row className="LoginPageFootRow" >
                    <Col className="LoginPageFootTitle" >비밀번호 :</Col>
                    <Col className="LoginPageFootInputCol"><input className="LoginPageFootInput"></input></Col>
                </Row >
                <Row className="LoginPageFootRow" >
                    <Col >
                        <button id="LoginPageFootButtonLogin">로그인</button>
                    </Col>
                </Row >
                <Row className="LoginPageFootRow" md="6"xs="1">
                    <Col md={{size:6, offset:3}} id="LoginPageFootButtonCol">
                        <button className="LoginPageFootButtons">아이디찾기 |</button>
                        <button className="LoginPageFootButtons">비밀번호찾기 |</button>
                        <button className="LoginPageFootButtons">회원가입</button>
                    </Col>
                </Row>
            </Container>
        );

}

export default LoginPageFoot;