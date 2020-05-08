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
            <Container id={"myPage"}>
                <Row>
                    <Col xs={{size:4, offset:3}} md={{size:3,offset:5}} lg={{size:4,offset:4}} xl={{size:3,offset:5}}> <span id={"myPageTitle"}> My Page </span> </Col>
                </Row>
                <hr/>
                <Row>
                   <Filtering/>
                </Row>
                <Row id={"myHeartTitle"}>  <Col xs={12} md={12}> <span className={"myHeart"} id={"myHeartText"}> 내 찜목록  </span> </Col> </Row>
            </Container>


        );
    }
}

export default MyPage;