import React, {Component, useEffect, useState} from 'react';
import '../css/LoginPage.css';
import {Container, Row, Col, NavbarBrand, Input, Button, Form,  Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import TopBar from "../../defaultDiv/js/TopBar";
import useLocalStorage from 'react-use-localstorage';
import SearchService from "../../services/SearchService";

const imageResources = require('../../util/ImageResources');

const LoginPage = () => {

    const [modal, setModal] = useState(false);

    const [modalOK, setModalOK] = useState(false);
    const [modalPWOK, setModalPWOK] = useState(false);
    const [modalFail, setModalFail] = useState(false);
    const [modalPW, setModalPW] = useState(false);

    const toggle = () => setModal(!modal);
    const togglePW = () => setModalPW(!modalPW);
    const toggleOK = () => {
        setModalOK(!modalOK);
        setModal(!modal);
    };

    const togglePWOK = () => {
        setModalPWOK(!modalPWOK);
        setModalPW(!modalPW);
    };

    const toggleFail = () => {
        setModalFail(!modalFail);
        setModal(!modal);
    }

    const [selectedAllergy, setSelectedAllergy] = useState(["알러지없음"]);
    const [selectedDisease, setSelectedDisease] = useState(["질병없음"]);
    const [searchResults, setSearchResults] = useState("");

    const [id, setID] = useState("");
    const [pw, setPW] = useState("");
    const [loginOK, setLoginOK] = useState("OK");

    let [loginCertificate, setLoginCertificate] = useState("");

    const [loginInfo, setLoginInfo] = useState({
        name: "",
        password: ""
    });

    const [findID, setFindID] = useState({
        name: "",
        email: ""
    });

    const [findPW, setFindPW] = useState( {
        name1: "",
        email1: "",
        nickname1: ""
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

    const onClickSendEmailForName = () => {
        SearchService.findNickname(findID)
            .then(response => {
                if (response.status === 200) {
                    setModalOK(true);
                }
                else {
                    console.log("ㅎㅎㅎㅎㅎㅎㅎ")
                }
            })
            .catch(e => {
                console.log(e.status);
            })
    };

    const onClickSendEmailForPassword = () => {
        SearchService.findPassword(findPW)
            .then(response => {
                if (response.status === 200) {
                    setModalPWOK(true);
                }
                else {
                    console.log("ㅎㅎㅎㅎㅎㅎㅎ")
                }
            })
            .catch(e => {
                console.log(e.status);
            })

    };



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

    const onChangeFindIDName = (event) => {
        const name = event.target.value;
        findID.name = name;
    };

    const onChangeFindIDEmail= (event) => {
        const email = event.target.value;
        findID.email = email;
    };

    const onChangeFindPWName = (event) => {
        const name1 = event.target.value;
        findPW.name = name1;
    };

    const onChangeFindPWEmail= (event) => {
        const email1 = event.target.value;
        findPW.email = email1;
    };

    const onChangeFindPWID= (event) => {
        const nickname1 = event.target.value;
        findPW.nickname = nickname1;
    };

    return (
        <div className="LoginPage">
            <TopBar selectedAllergy={selectedAllergy} searchResults={searchResults} selectedDisease={selectedDisease}/>
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
                        <span > <Button href={'/signUp'} id={"signupButton"}> 회원 가입 </Button> </span>

                    </Col>
                    <Col xl={2}>
                        <span > <Button onClick={toggle} id={"findIDButton"}> 아이디 찾기 </Button> </span>

                    </Col>
                    <Col xl={2}>

                        <span > <Button onClick={togglePW} id={"findPWButton"}>비밀번호 찾기 </Button> </span>
                    </Col>
                </Row>
            </Container>


            <Modal isOpen={modal} toggle={toggle} className={"abc"}>
                <ModalHeader toggle={toggle}> 아이디 찾기 </ModalHeader>
                <ModalBody>
                    <Row className={"findID"}>
                        <Col xl={{size:2, offset:1}} className={"findIDText"}>
                            <span className={"findIDText"}>
                                이메일 :
                            </span>
                        </Col>
                        <Col>
                            <Input type={"text"} placeholder={"등록된 이메일을 입력하세요."} onChange={onChangeFindIDEmail}> </Input>
                        </Col>
                        <Col xl={1}></Col>
                    </Row>

                    <Row className={"findID"}>
                        <Col xl={{size:2, offset:1}} className={"findIDText"}>
                            <span >
                                이름 :
                            </span>
                        </Col>
                        <Col>
                            <Input type={"text"} placeholder={"이름을 입력하세요."} onChange={onChangeFindIDName}> </Input>
                        </Col>
                        <Col xl={1}></Col>
                    </Row>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onClickSendEmailForName}> 확인 </Button>{' '}
                    <Button color="danger" onClick={toggle}> 취소 </Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={modalPW} toggle={togglePW} className={"abc"}>
                <ModalHeader toggle={togglePW}> 비밀번호 찾기 </ModalHeader>
                <ModalBody>
                    <Row className={"findID"}>
                        <Col xl={{size:2, offset:1}} className={"findIDText"}>
                            <span className={"findIDText"}>
                                이메일 :
                            </span>
                        </Col>
                        <Col>
                            <Input type={"text"} placeholder={"등록된 이메일을 입력하세요."} onChange={(onChangeFindPWEmail)}> </Input>
                        </Col>
                        <Col xl={1}></Col>
                    </Row>

                    <Row className={"findID"}>
                        <Col xl={{size:2, offset:1}} className={"findIDText"}>
                            <span >
                                이름 :
                            </span>
                        </Col>
                        <Col>
                            <Input type={"text"} placeholder={"이름을 입력하세요."} onChange={onChangeFindPWName}> </Input>
                        </Col>
                        <Col xl={1}></Col>
                    </Row>

                    <Row className={"findID"}>
                        <Col xl={{size:2, offset:1}} className={"findIDText"}>
                            <span >
                                아이디 :
                            </span>
                        </Col>
                        <Col>
                            <Input type={"text"} placeholder={"아이디를 입력하세요."} onChange={onChangeFindPWID}> </Input>
                        </Col>
                        <Col xl={1}></Col>
                    </Row>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onClickSendEmailForPassword}> 확인 </Button>{' '}
                    <Button color="danger" onClick={togglePW}> 취소 </Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={modalOK} toggle={toggleOK} className={"abc"}>
                <ModalHeader toggle={toggleOK}> 이메일 전송 성공 </ModalHeader>
                <ModalBody>
                    <Row id={"okSign"}> 입력한 이메일로 회원님의 아이디가 발송되었습니다. </Row>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggleOK}> 확인 </Button>{' '}
                    <Button color="danger" onClick={toggleOK}> 취소 </Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={modalPWOK} toggle={togglePWOK} className={"abc"}>
                <ModalHeader toggle={togglePWOK}> 이메일 전송 성공 </ModalHeader>
                <ModalBody>
                    <Row id={"okSign"}> 입력한 이메일로 회원님의 비밀번호가 발송되었습니다. </Row>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={togglePWOK}> 확인 </Button>{' '}
                    <Button color="danger" onClick={togglePWOK}> 취소 </Button>
                </ModalFooter>
            </Modal>


        </div>
    );

}
export default LoginPage;
