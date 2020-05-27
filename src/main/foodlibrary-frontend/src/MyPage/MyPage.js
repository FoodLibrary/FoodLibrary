import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Filtering from "../defaultDiv/js/Filtering";

import './MyPageStyles.css';

const imageResources = require('../util/ImageResources.js');


const MyPage = () =>  {
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

export default MyPage;