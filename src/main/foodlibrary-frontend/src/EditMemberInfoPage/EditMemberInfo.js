import React from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Filtering from "../defaultDiv/js/Filtering";
import './EditMemberInfo.css';

const imageResources = require('../util/ImageResources.js');

const EditMemberInfo = () => {
        return (
            <Container id={"editMemberInfo"}>
                <Row >
                    <Col xl={12} id={"editMemberInfoArea"}>
                        <span id={"editMemberInfoTitle"}> 회원 정보 수정 </span>
                    </Col>
                </Row>
                <Form id={"editMemberInfoForm"} >
                    <FormGroup row >
                        <Col xl={{size:1, offset:2}}  lg={{size:1, offset:2}}  md={{size:1, offset:2}}  sm={{size:2, offset:1}} xs={12} className={"signUpText"}> <Label  id={"id"}> 아이디 </Label> </Col>
                        <Col xl={4} lg={5} md={5} sm={5} xs={8}  className={"idInputCol"}> <Input type="text" name="id" id="idInput"/> </Col>
                        <Col xl={4} lg={3} md={3} sm={3} xs={4}> <Button id={"checkDup"}> 중복확인 </Button> </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col xl={{size:1, offset:2}} lg={{size:1, offset:2}} md={{size:1, offset:2}} sm={{size:2, offset:1}} xs={12} className={"signUpText"}> <Label for="examplePassword" >비밀번호 </Label> </Col>
                        <Col xl={4} lg={5} md={5} sm={5} xs={12} >
                            <Input valid type="password" name="password" id="passwordInput" />
                        </Col>
                        <Col xl={4} lg={3} md={3} sm={3} xs={3}></Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col xl={{size:1, offset:2}} lg={{size:1, offset:2}} md={{size:1, offset:2}} sm={{size:2, offset:1}} xs={12} className={"signUpText"}> <Label for="examplePassword" >비밀번호 확인</Label> </Col>
                        <Col xl={4} lg={5} md={5} sm={5} xs={12}>
                            <Input valid type="password" name="password" id="checkPassword"  />
                        </Col>
                        <Col xl={4} lg={3} md={3} sm={3} xs={3}></Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col xl={{size:1, offset:2}} lg={{size:1, offset:2}} md={{size:1, offset:2}} sm={{size:2, offset:1}} xs={12} className={"signUpText"}> <Label className={"inputName"}> 이름 </Label> </Col>
                        <Col  xl={4} lg={5} md={5} sm={5} xs={12}> <Input type="text" name="userName" id="inputName" /></Col>
                        <Col xl={4} lg={3} md={3} sm={3} xs={3}></Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col xl={{size:1, offset:2}} lg={{size:1, offset:2}} md={{size:1, offset:2}} sm={{size:2, offset:1}} xs={12}  className={"signUpText"}> <Label className={"inputEmail"}>E-mail </Label> </Col>
                        <Col xl={4} lg={5} md={5} sm={5} xs={12}> <Input type="email" name="email" id="inputEmail"/> </Col>
                        <Col xl={4} lg={3} md={3} sm={3} xs={3}></Col>
                    </FormGroup>
                    <FormGroup row >
                        <Col xl={{size:3, offset:2}} lg={{size:1, offset:2}} md={{size:1, offset:2}} sm={{size:2, offset:1}} xs={12}  className={"signUpText"}> <Label className={"inputSex"}> 성별 : </Label> </Col>
                        <Col xl={2} lg={{size:3, offset:1}} md={{size:3, offset:1}} sm={{size:3, offset:1}} xs={{size:5, offset:3}} className={"signUpText"}> <Input type="radio" /> 남자 </Col>
                        <Col xl={2} lg={{size:3, offset:0}} md={{size:3, offset:0}} sm={{size:3, offset:0}} xs={{size:3, offset:0}} className={"signUpText"}> <Input type="radio" /> 여자 </Col>
                        <Col xl={3} lg={2} xs={3} > </Col>
                    </FormGroup>
                    <FormGroup row xs={2}>
                        <Col xl={{size:3, offset:2}} lg={{size:1, offset:2}} md={{size:1, offset:2}} sm={{size:2, offset:1}} xs={12} className={"signUpText"}> <Label className={"inputBirthDay"}>생년 월일</Label> </Col>
                        <Col xl={4} lg={5} md={5} sm={5} xs={12}>
                            <Input
                                type="date"
                                name="date"
                                id="inputBirthDay" />
                        </Col>
                        <Col xl={4} lg={3} md={3} sm={3} xs={3}></Col>
                    </FormGroup>
                    <hr/>
                    <FormGroup row>
                        <Col xl={{size:4, offset:2}} lg={{size:1, offset:2}} md={{size:1, offset:2}} sm={{size:2, offset:1}} xs={12} className={"signUpText"}> <Label className={"saveInfo"}> 내 정보 저장</Label> </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Filtering/>
                    </FormGroup>

                    <FormGroup row>
                        <Col xs={{size:4, offset:4}} sm={{size:4, offset:4}} md={{size:4, offset:4}} lg={{size:5, offset:5}}>
                            <Button id={"editMemberInfoButton"}> 회원 정보 수정 </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Container>
        );

}

export default EditMemberInfo;