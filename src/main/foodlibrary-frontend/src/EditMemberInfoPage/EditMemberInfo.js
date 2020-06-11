import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Button, Form, FormGroup, Input, Label} from "reactstrap";

import Filtering from "../defaultDiv/js/Filtering";
import './EditMemberInfo.css';
import UserService from "../services/UserService";

const imageResources = require('../util/ImageResources.js');

const EditMemberInfo = () => {
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

    useEffect(() => {
        getUserInfo();

    }, []);

    //**여기서 현재 로그인된 사용자 nickname넣어주면댐
    const getUserInfo = () => {
        UserService.getUser(localStorage.getItem('id'))//**요기
            .then(response => {
                setUserInfo(response.data);
                console.log(response.data);
                setComponent(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    //위에 getUserInfo로 가져오면 컴포넌트에 값들 넣어주는 메소드
    const setComponent = (data) =>{
        console.log(data);
        console.log(data);
        const male = document.getElementById("male");
        const female = document.getElementById("female");
        const birth = document.getElementById("inputBirthDay");
        const email = document.getElementById("inputEmail");
        const alergys = data.useralergy.split(",");
        const disease = data.userdisease.split(",");
        setChecked(alergys);
        setChecked(disease);
        console.log("-----")
        if(data.sex === "남자") {
            male.checked = true;
        } else if(data.sex === "여자") {
            female.checked = true;
        }
        email.value = data.email;
        birth.value = data.birthday;
        console.log(male.value);
        console.log(female.value);
        console.log(birth.value);
        console.log(email.value);
        console.log(alergys);
        console.log(disease);

    };

    //위에 내 알러지랑 질병 체크해주는 메소드
    const setChecked = (list) => {
        console.log(list)
        if(list[0] === "")
            return;
        list.map((item, index) => {
            console.log(item);
            const tmp = document.getElementById(item);
            tmp.checked = true;
        });
    }

    //비밀번호, 비밀번호확인 빼고 나머지 input여기서 userInfo에 넣음.
    //signup이랑 똑같음.
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

    const updateUser = () => {
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
        UserService.update(data)
            .then(response => {
                console.log(data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    //위에 updateUser에서 서버로 값들 넘기기전에 빈값이 있는지 비밀번호, 비밀번호 확인 같은지
    //여기에 alert(modal)추가하면댐. 그럼 맨밑에 버튼누르면 뭐가 잘못됐는지 뜰듯
    //signup이랑 똑같음
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
                flag = true;
            }
        });
        return flag;
    }

    // 비밀번호, 비밀번호확인 UserInfo에 넣고 valid설정해줄라고 했던 부분
    //signup이랑 똑같음
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

    return (
        <Container id={"editMemberInfo"}>

            <Form id={"editMemberInfoForm"}>
                <FormGroup row>
                    <Col xl={{size: 2, offset: 3}} lg={{size: 1, offset: 2}} md={{size: 1, offset: 2}}
                         sm={{size: 2, offset: 1}} xs={12} className={"signUpText"}> <Label id={"id"}> 아이디 </Label>
                    </Col>
                    <Col xl={4} lg={5} md={5} sm={5} xs={8} className={"idInputCol"}>
                        <span className={"defaultValue"}> {userInfo.nickname}  </span>
                    </Col>

                </FormGroup>
                <FormGroup row>
                    <Col xl={{size: 2, offset: 3}} lg={{size: 1, offset: 2}} md={{size: 1, offset: 2}}
                         sm={{size: 2, offset: 1}} xs={12} className={"signUpText"}> <Label
                        for="examplePassword">비밀번호 </Label> </Col>
                    <Col xl={4} lg={5} md={5} sm={5} xs={12}>
                        <Input valid type="password" name="password" id="passwordInput" onChange={isPasswordSame}/>
                    </Col>
                    <Col xl={4} lg={3} md={3} sm={3} xs={3}></Col>
                </FormGroup>
                <FormGroup row>
                    <Col xl={{size: 2, offset: 3}} lg={{size: 1, offset: 2}} md={{size: 1, offset: 2}}
                         sm={{size: 2, offset: 1}} xs={12} className={"signUpText"}> <Label for="examplePassword" >비밀번호
                        확인</Label> </Col>
                    <Col xl={4} lg={5} md={5} sm={5} xs={12}>
                        <Input valid alid type="password" name="passwordConfirm" id="checkPassword" onChange={isPasswordSame}/>
                    </Col>
                    <Col xl={4} lg={3} md={3} sm={3} xs={3}></Col>
                </FormGroup>
                <FormGroup row>
                    <Col xl={{size: 2, offset: 3}} lg={{size: 1, offset: 2}} md={{size: 1, offset: 2}}
                         sm={{size: 2, offset: 1}} xs={12} className={"signUpText"}> <Label
                        className={"inputName"}> 이름 </Label> </Col>
                    <Col xl={4} lg={5} md={5} sm={5} xs={12}>
                        <span className={"defaultValue"}> {userInfo.name} </span>
                    </Col>
                    <Col xl={4} lg={3} md={3} sm={3} xs={3}></Col>
                </FormGroup>
                <FormGroup row>
                    <Col xl={{size: 2, offset: 3}} lg={{size: 1, offset: 2}} md={{size: 1, offset: 2}}
                         sm={{size: 2, offset: 1}} xs={12} className={"signUpText"}> <Label
                        className={"inputEmail"}>E-mail </Label> </Col>
                    <Col xl={4} lg={5} md={5} sm={5} xs={12}>
                        <Input type="email" name="email" id="inputEmail" onChange={handleInputChange}/>
                    </Col>
                    <Col xl={4} lg={3} md={3} sm={3} xs={3}></Col>
                </FormGroup>
                <FormGroup row>
                    <Col xl={{size: 2, offset: 3}} lg={{size: 1, offset: 2}} md={{size: 1, offset: 2}}
                         sm={{size: 2, offset: 1}} xs={12} className={"signUpText"}> <Label className={"inputSex"}> 성별
                        : </Label> </Col>
                    <Col xl={2} lg={{size: 3, offset: 1}} md={{size: 3, offset: 1}} sm={{size: 3, offset: 1}}
                         xs={{size: 5, offset: 3}} className={"signUpText"}>
                        <Input id="male" type="radio" disabled/> 남자 </Col>
                    <Col xl={2} lg={{size: 3, offset: 0}} md={{size: 3, offset: 0}} sm={{size: 3, offset: 0}}
                         xs={{size: 3, offset: 0}} className={"signUpText"}>
                        <Input id="female" type="radio" disabled/> 여자 </Col>
                    <Col xl={3} lg={2} xs={3}> </Col>
                </FormGroup>
                <FormGroup row xs={2}>
                    <Col xl={{size: 2, offset: 3}} lg={{size: 1, offset: 2}} md={{size: 1, offset: 2}}
                         sm={{size: 2, offset: 1}} xs={12} className={"signUpText"}>
                        <Label className={"inputBirthDay"}>생년
                            월일</Label> </Col>
                    <Col xl={4} lg={5} md={5} sm={5} xs={12}>
                        <Input
                            type="date"
                            name="date"
                            id="inputBirthDay" disabled/>
                    </Col>
                    <Col xl={4} lg={3} md={3} sm={3} xs={3}></Col>
                </FormGroup>
                <hr/>
                <FormGroup row id={"filtering"}>
                    <Filtering handleInputChange={handleInputChange} setUserInfo={setUserInfo}/>
                </FormGroup>

                <FormGroup row>
                    <Col xs={{size: 4, offset: 4}} sm={{size: 4, offset: 4}} md={{size: 4, offset: 4}}
                         lg={{size: 5, offset: 5}}>
                        <Button id={"editMemberInfoButton"} onClick={updateUser}> 회원 정보 수정 </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Container>
    );

}

export default EditMemberInfo;