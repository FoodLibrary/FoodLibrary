import React, {useEffect, useState} from 'react';

import {Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import Filtering from "../defaultDiv/js/Filtering";
import './SignUpStyle.css';
import moment from "moment";
import ReviewService from "../ProductPage/js/ReviewService";
import UserService from "../services/UserService";
import {func} from "prop-types";

const imageResources = require('../util/ImageResources.js');

const SignUp = (props) => {
    const [userInfo, setUserInfo] = useState({
        birthday: "",
        email: "",
        name: "",
        nickname: "",
        password: "",
        passwordConfirm:"",
        sex: "",
        useralergy: "",
        userdisease: ""
    });

    //비밀번호, 비밀번호확인 빼고 나머지 input여기서 userInfo에 넣음.
    const handleInputChange = event => {
        const {name, value} = event.target;
        if (name === "useralergy") {
            if (userInfo.useralergy.includes(value))
                setUserInfo({...userInfo, [name]: (userInfo.useralergy.replace("," + value, ""))})
            else if(userInfo.useralergy === "")
                setUserInfo({...userInfo, [name]: (userInfo.useralergy.concat('', value))})
            else
                setUserInfo({...userInfo, [name]: (userInfo.useralergy.concat(',', value))})
            console.log(userInfo);
            return;
        }
        if (name === "userdisease") {
            if (userInfo.userdisease.includes(value))
                setUserInfo({...userInfo, [name]: (userInfo.userdisease.replace("," + value, ""))})
            else if(userInfo.userdisease === "")
                setUserInfo({...userInfo, [name]: (userInfo.userdisease.concat('', value))})
            else
                setUserInfo({...userInfo, [name]: (userInfo.userdisease.concat(',', value))})
            console.log(userInfo);
            return;
        }
        setUserInfo({...userInfo, [name]: value});
        console.log(userInfo);
    };

    //아이디 중복 체크 메소드.
    const checkNickname = () => {
        if (userInfo.nickname === "") {
            alert("아이디를 입력하세요");
        } else {
            UserService.checkNickname(userInfo.nickname)
                .then(response => {
                    console.log(response);
                    if(response.status === 200)
                        alert("아이디 있어연");
                    else if(response.status === 204)
                        alert("사용가능");
                })
                .catch(e => {
                    console.log(e);
                });
        }
    }

    const saveUser = () => {
        if(isInputCorrect())
            return;
        var data = {
            birthday: userInfo.birthday,
            email: userInfo.email,
            name: userInfo.name,
            nickname: userInfo.nickname,
            password: userInfo.password,
            sex: userInfo.sex,
            useralergy: userInfo.useralergy,
            userdisease: userInfo.userdisease
        };
        UserService.create(data)
            .then(response => {
                console.log(data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    // 비밀번호, 비밀번호확인 UserInfo에 넣고 valid설정해줄라고 했던 부분
    const isPasswordSame = (event) => {
        const {name, value} = event.target;
        setUserInfo({...userInfo, [name]: value});
        const password = document.getElementById("passwordInput");
        const passwordConfirm = document.getElementById("checkPassword");
        if(userInfo.password === userInfo.passwordConfirm) {
            password.valid = true;
            passwordConfirm.valid = true;
        }else{
            password.valid = false;
            passwordConfirm.valid = false;
        }
        console.log(userInfo);
    }

    //위에 saveUser에서 서버로 값들 넘기기전에 빈값이 있는지 비밀번호, 비밀번호 확인 같은지
    //여기에 alert(modal)추가하면댐. 그럼 맨밑에 버튼누르면 뭐가 잘못됐는지 뜰듯
    const isInputCorrect = () => {
        console.log(userInfo);
        var flag = false;
        if(userInfo.password !== userInfo.passwordConfirm){
            const password = document.getElementById("passwordInput");
            const passwordConfirm = document.getElementById("checkPassword");
            password.value="";
            passwordConfirm.value="";
            console.log("비번다름");
            return true;
        }
        Object.keys(userInfo).forEach(function(key) {
            if (userInfo[key] === "" && key != "userdisease" && key != "useralergy") {
                console.log(key);
                console.log(userInfo);
                console.log(flag);
                flag = true;
            }
        });
        console.log(flag);
        return flag;
    }

    return (
        <Container id={"signUp"}>
            <Row>
                <Col xl={12} id={"signUpTitleArea"}>
                    <span id={"signUpTitle"}> 회원 가입 </span>
                </Col>
            </Row>
            <Form id={"signUpForm"}>
                <FormGroup row>
                    <Col xl={{size: 1, offset: 2}} lg={{size: 2, offset: 2}} md={2} sm={{size: 2, offset: 2}} xs={12}
                         className={"signUpText"}>
                        <Label id={"id"}> 아이디 </Label>
                    </Col>
                    <Col xl={{size: 4, offset: 1}} lg={5} md={5} sm={5} xs={8} className={"idInputCol"}>
                        <Input type="text" name="nickname" id="idInput" onChange={handleInputChange}/>
                    </Col>
                    <Col xl={4} lg={3} md={3} sm={3} xs={4}>
                        <Button id={"checkDup"} onClick={checkNickname}> 중복확인 </Button>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col xl={{size: 2, offset: 2}} lg={{size: 2, offset: 2}} md={2} sm={{size: 2, offset: 2}} xs={12}
                         className={"signUpText"}>
                        <Label for="examplePassword">비밀번호 </Label>
                    </Col>
                    <Col xl={4} lg={5} md={5} sm={5} xs={12}>
                        <Input valid  type="password" name="password" id="passwordInput" onChange={isPasswordSame}/>
                    </Col>
                    <Col xl={4} lg={3} md={3} sm={3} xs={3}></Col>
                </FormGroup>
                <FormGroup row>
                    <Col xl={{size: 2, offset: 2}} lg={{size: 2, offset: 2}} md={2} sm={{size: 2, offset: 2}} xs={12}
                         className={"signUpText"}>
                        <Label for="examplePassword">비밀번호 확인</Label>
                    </Col>
                    <Col xl={4} lg={5} md={5} sm={5} xs={12}>
                        <Input valid  type="password" name="passwordConfirm" id="checkPassword" onChange={isPasswordSame}/>
                    </Col>
                    <Col xl={4} lg={3} md={3} sm={3} xs={3}></Col>
                </FormGroup>
                <FormGroup row>
                    <Col xl={{size: 2, offset: 2}} lg={{size: 2, offset: 2}} md={2} sm={{size: 2, offset: 1}} xs={12}
                         className={"signUpText"}>
                        <Label className={"inputName"}> 이름 </Label>
                    </Col>
                    <Col xl={4} lg={5} md={5} sm={5} xs={12}>
                        <Input type="text" name="name" id="inputName" onChange={handleInputChange}/>
                    </Col>
                    <Col xl={4} lg={3} md={3} sm={3} xs={3}></Col>
                </FormGroup>
                <FormGroup row>
                    <Col xl={{size: 2, offset: 2}} lg={{size: 2, offset: 2}} md={2} sm={{size: 2, offset: 2}} xs={12}
                         className={"signUpText"}>
                        <Label className={"inputEmail"} onChange={handleInputChange}>E-mail : </Label>
                    </Col>
                    <Col xl={4} lg={5} md={5} sm={5} xs={12}>
                        <Input type="email" name="email" id="inputEmail" onChange={handleInputChange}/>
                    </Col>
                    <Col xl={4} lg={3} md={3} sm={3} xs={3}></Col>
                </FormGroup>
                <FormGroup row>
                    <Col xl={{size: 3, offset: 2}} lg={{size: 1, offset: 2}} md={{size: 1, offset: 2}}
                         sm={{size: 2, offset: 1}} xs={12} className={"signUpText"}>
                        <Label className={"inputSex"}> 성별 : </Label>
                    </Col>
                    <Col xl={2} lg={{size: 3, offset: 0}} md={{size: 3, offset: 1}} sm={{size: 3, offset: 1}}
                         xs={{size: 5, offset: 3}} className={"signUpText"}>
                        <Input type="radio" onChange={handleInputChange} name="sex" value="남자">남자</Input> 남자
                    </Col>
                    <Col xl={2} lg={{size: 3, offset: 0}} md={{size: 3, offset: 0}} sm={{size: 3, offset: 0}}
                         xs={{size: 3, offset: 0}} className={"signUpText"}>
                        <Input type="radio" onChange={handleInputChange} name="sex" value="여자">여자</Input> 여자
                    </Col>
                    <Col xl={3} lg={2} xs={3}></Col>
                </FormGroup>
                <FormGroup row xs={2}>
                    <Col xl={{size: 2, offset: 2}} lg={{size: 1, offset: 2}} md={{size: 1, offset: 2}}
                         sm={{size: 2, offset: 1}} xs={12} className={"signUpText"}>
                        <Label className={"inputBirthDay"}>생년 월일 : </Label>
                    </Col>
                    <Col xl={4} lg={5} md={5} sm={5} xs={12}>
                        <Input
                            type="date"
                            name="birthday"
                            id="inputBirthDay"
                            onChange={handleInputChange}/>
                    </Col>
                    <Col xl={4} lg={3} md={3} sm={3} xs={3}></Col>
                </FormGroup>
                <hr/>
                <FormGroup row>
                    <Col xl={{size: 4, offset: 2}} lg={{size: 1, offset: 2}} md={{size: 1, offset: 2}}
                         sm={{size: 2, offset: 1}} xs={12} className={"signUpText"}>
                        <Label className={"saveInfo"}> 내 정보 저장 : </Label>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Filtering handleInputChange={handleInputChange} setUserInfo={setUserInfo}/>
                </FormGroup>

                <FormGroup row>
                    <Col xs={{size: 4, offset: 4}} sm={{size: 4, offset: 4}} md={{size: 4, offset: 4}}
                         lg={{size: 5, offset: 5}}>
                        <Button id={"signUpButton"} onClick={saveUser}> 회원 가입 </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Container>
    );
}

export default SignUp;