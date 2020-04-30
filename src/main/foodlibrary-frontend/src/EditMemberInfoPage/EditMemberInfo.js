import React from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Filtering from "../defaultDiv/js/Filtering";
import './EditMemberInfo.css';
const imageResources = require('../util/ImageResources.js');

class EditMemberInfo extends React.Component {
    render() {
        return (
            <Container>
                <Row className={"signUpTitleArea"}>
                    <Col xs={12} id={"signUpTitle"}>
                        <span > 회원 정보 수정 </span>
                    </Col>
                </Row>
                <Form id={"signUpForm"}>
                    <FormGroup row xs={3}>
                        <Col xs={4} className={"signUpText"}> <Label  id={"userId"}> 아이디 : </Label> </Col>
                        <Col xs={8} > UserId </Col>
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
                        <Col xs={8}> UserName</Col>
                    </FormGroup>
                    <FormGroup row xs={2}>
                        <Col xs={4}> <Label className={"inputEmail"}>E-mail : </Label> </Col>
                        <Col xs={8}> <Input type="email" name="email" id="inputEmail"/> </Col>
                    </FormGroup>
                    <FormGroup row xs={3}>
                        <Col xs={5}> <Label className={"inputSex"}> 성별 : </Label> </Col>
                        <Col xs={3}> <Input type="radio" disabled/> 남자 </Col>
                        <Col xs={3}> <Input type="radio" checked disabled/> 여자 </Col>
                    </FormGroup>
                    <FormGroup row xs={2}>
                        <Col xs={4}> <Label className={"inputBirthDay"}>생년 월일 : </Label> </Col>
                        <Col  xs={8}>
                            User Birthday
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Col sm={12}> <Label className={"saveInfo"}> 내 정보 저장 :  </Label> </Col>
                    </FormGroup>
                    <Row> <Filtering/> </Row>
                    <FormGroup row xs={1}>
                        <Col xs={{size: 8, offset:3}} id={"signUpButtonArea"}> <Button className={"signUpButton"}> 회원 정보 수정 </Button> </Col>
                    </FormGroup>
                </Form>
            </Container>
        );
    }
}

export default EditMemberInfo;