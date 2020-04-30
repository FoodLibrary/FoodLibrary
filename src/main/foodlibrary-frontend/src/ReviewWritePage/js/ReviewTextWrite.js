import React, { Component } from 'react';
import '../../ReviewDefaultDiv/css/Review.css';
import { Container, Row, Col, Label, Input, FormGroup } from 'reactstrap';
import ImageResources from "../../util/ImageResources";


class ReviewTextWrite extends Component {
    render() {
        return (
            <Container className={"Row"}>
                <Row xs={1} md={1}>
                    <Col xs={"auto"} md={"auto"}>
                        <p className={"TitleButton"}>
                            <img className={"ReviewImage"} src={ImageResources.reviewImage} alt="reviewImage" />
                            &nbsp; &nbsp;식품 후기
                        </p>
                    </Col>
                </Row>
                <Row xs={2}>
                    <Col xs={{ size: 4, offset: 1 }} md={{ size: 2, offset: 1 }}>
                        <p className={"ReviewTitleBody"}>
                            제목
                        </p>
                    </Col>
                    <Col className={"ReviewText"} xs={7} md={8}>
                        <FormGroup>
                            <Input className={"ReviewTextArea"} type="text" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row xs={2}>
                    <Col xs={{ size: 4, offset: 1 }} md={{ size: 2, offset: 1 }}>
                        <p className={"ReviewTitleBody"}>
                            내용
                        </p>
                    </Col>
                    <Col className={"ReviewText"} xs={7} md={8}>
                        <FormGroup>
                            <Input className={"ReviewTextArea"} type="textarea" />
                        </FormGroup>
                    </Col>
                </Row>
                <hr />
            </Container>
        );
    }
}

export default ReviewTextWrite;