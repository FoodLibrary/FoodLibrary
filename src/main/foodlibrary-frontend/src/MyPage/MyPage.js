import React from 'react';
import { Button } from 'reactstrap';
import Filtering from "../defaultDiv/js/Filtering";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './MyPageStyles.css';

const imageResources = require('../util/ImageResources.js');


class MyPage extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={{size:4, offset:4}} md={{size:4,offset:4}} lg={{size:4,offset:4}}> <span id={"myPageTitle"}> 마이페이지 </span> </Col>
                </Row>
                <Row> <Col xs={{size:5, offset:4}} className={"memberImageEdit"}> <span> <img src={imageResources.memberImage} id={"memberImage"}/> </span> </Col> </Row>
                <Row>
                    <Col xs={{size:3, offset:1}} md={{size:3, offset:3}} className={"ageAndSexInfoText"}> <span id={"ageAndSexInfoText"}> 20대/여자 </span> </Col>
                    <Col xs={{size:6}} md={{size:3, offset:3}} className={"editMemberInfoButton"}> <span> <Button id={"editMemberInfoButton"}> 회원  정보 수정 </Button> </span> </Col>
                </Row>
                <Row>
                    <Button className={"myFilter"}>
                        <img src={imageResources.myFilter} id={"myFilterLogo"}/>
                        내 필터링
                    </Button>
                </Row>
                <Filtering/>
                <Row>
                    <Button className={"myHeart"}>
                        <img src={imageResources.myHeart} id={"myHeartLogo"}/>
                        내 찜목록
                    </Button>
                </Row>
            </Container>


        );
    }
}

export default MyPage;