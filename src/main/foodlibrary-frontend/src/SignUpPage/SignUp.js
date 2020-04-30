import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Filtering from "../defaultDiv/js/Filtering";
import './SignUpStyle.css';
const imageResources = require('../util/ImageResources.js');

class SignUp extends React.Component {
    render() {
        return (
            <Container>
                <Row className={"signUpTitleArea"}>
                <Col xs={12} id={"signUpTitle"}>
                    <span > 회원 가입 </span>
                </Col>
            </Row>
                <Form id={"signUpForm"}>
                    <FormGroup row xs={3}>
                        <Col xs={4} className={"signUpText"}> <Label  id={"id"}> 아이디 : </Label> </Col>
                        <Col xs={8} >
                            <Row xs={2}>
                                <Col xs={7} className={"idInputCol"}> <Input type="text" name="id" id="idInput"/> </Col>
                                <Col xs={5} > <Button id={"checkDup"}> 중복확인 </Button> </Col>
                            </Row>

                    </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col xs={4}> <Label for="examplePassword" className={"passwordInput"}>비밀번호 : </Label> </Col>
                        <Col xs={8}>
                            <Input valid type="password" name="password" id="passwordInput" />
                        </Col>
                    </FormGroup>
                    <FormGroup row xs={2}>
                        <Col xs={4}> <Label for="examplePassword" className={"checkPassword"}>비밀번호 확인 : </Label> </Col>
                        <Col xs={8}>
                            <Input valid type="password" name="password" id="checkPassword"  />
                        </Col>
                    </FormGroup>
                    <FormGroup row xs={2}>
                        <Col xs={4}> <Label className={"inputName"}> 이름 : </Label> </Col>
                        <Col xs={8}> <Input type="text" name="userName" id="inputName" /></Col>
                    </FormGroup>
                    <FormGroup row xs={2}>
                        <Col xs={4}> <Label className={"inputEmail"}>E-mail : </Label> </Col>
                        <Col xs={8}> <Input type="email" name="email" id="inputEmail"/> </Col>
                    </FormGroup>
                    <FormGroup row xs={3}>
                        <Col xs={5}> <Label className={"inputSex"}> 성별 : </Label> </Col>
                        <Col xs={3}> <Input type="radio" /> 남자 </Col>
                        <Col xs={3}> <Input type="radio" /> 여자 </Col>
                    </FormGroup>
                    <FormGroup row xs={2}>
                        <Col xs={4}> <Label className={"inputBirthDay"}>생년 월일 : </Label> </Col>
                        <Col  xs={8}>
                            <Input
                                type="date"
                                name="date"
                                id="inputBirthDay" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Col sm={3}> <Label className={"saveInfo"}> 내 정보 저장 :  </Label> </Col>
                        <Col  sm={9}> <Label>

                        </Label> </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Filtering/>
                    </FormGroup>

                    <FormGroup row xs={1}>
                        <Col xs={{size: 8, offset:3}} id={"signUpButtonArea"}> <Button className={"signUpButton"}> 회원 가입 </Button> </Col>
                    </FormGroup>
                </Form>
            </Container>


        );
    }
}

export default SignUp;