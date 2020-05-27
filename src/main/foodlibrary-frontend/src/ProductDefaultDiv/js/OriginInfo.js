import React, {Component} from 'react';
import '../css/OriginInfo.css';
import {Container, Row, Col, Button} from 'reactstrap';
import ImageResources from '../../util/ImageResources';

const OriginInfo = () => {
        return (
            <Container>
                <Row className={"Row"} xs={1} md={2}>
                    <Col xs={"auto"} md={"auto"}>
                        <p className={"TitleButton"}>
                            <img className={"OriginTitleImage"} src={ImageResources.origin} alt="origin"/>
                            &nbsp; &nbsp;원산지 정보
                        </p>
                    </Col>
                            <span>
                            <Col className={"OriginText"} >
                                소맥분 (밀 :호주산, 미국산) , 감자전분 (외국산 : 덴마크, 프랑스, 독일 등) , 쌀(국산), 태양초고추장 (쌀(국산), 물엿, 고추양념(중국산), 천일염, 태양초, 고춧가루)
                            </Col>
                            </span>
                </Row>
                <hr/>
            </Container>
        );


}

export default OriginInfo;
