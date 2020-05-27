import React, {Component} from 'react';
import '../css/ReviewPhoto.css';
import {Container, Row, Col, Button} from 'reactstrap';
import ImageResources from '../../util/ImageResources';

const PhotoDisplay = () => {
        return (
            <Container>
                <Row className={"Row"} xs={2} md={2}>
                    <Col xs={"auto"} md={"auto"}>
                        <p className={"TitleButton"}>
                            <img className={"ReviewPhotoImage"} src={ImageResources.camera} alt="ReviewPhotoImage"/>
                            &nbsp; &nbsp;사진 첨부
                        </p>
                    </Col>
                    <Col>
                        <Row xs={5} md={5}>
                            <Col className={"Photo"} xs={"auto"} md={"auto"}>
                            </Col>
                            <Col className={"Photo"} xs={"auto"} md={"auto"}>
                            </Col>
                            <Col className={"Photo"} xs={"auto"} md={"auto"}>
                            </Col>
                            <Col className={"Photo"} xs={"auto"} md={"auto"}>
                            </Col>
                            <Col className={"Photo"} xs={"auto"} md={"auto"}>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr/>
            </Container>
        );
}

export default PhotoDisplay;
