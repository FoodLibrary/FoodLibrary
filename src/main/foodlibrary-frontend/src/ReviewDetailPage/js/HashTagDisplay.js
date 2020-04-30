import React, { Component } from 'react';
import '../css/HashTagDisplay.css';
import { Container, Row, Col, Button } from 'reactstrap';
import ImageResources from '../../util/ImageResources';

class HashTagDisplay extends Component {

    render() {
        return (
            <Container>
                <Row className={"Row"} xs={2} md={2}>
                    <Col md={4}>
                        <p className={"TitleButton"}>
                            <img className={"HashTagImage"} src={ImageResources.hashTag} alt="ReviewPhotoImage" />
                            &nbsp; &nbsp;해쉬태그
                        </p>
                    </Col>
                    <Col xs={{ size: 11, offset: 1 }} md={8}>
                        <Row>
                            <Col xs={12} md={12} className={"SelectedHashTagRow"}>
                                <Button className="SelectedHashTag">
                                    #맛있어요
                                </Button>
                                <Button className="SelectedHashTag">
                                    #매워요
                                </Button>
                            </Col>
                        </Row>
                        <Row className={"NotSelectedHashTagRow"}>
                            <Col xs={12} md={12}>
                                <Button className="SelectedHashTag">
                                    #맛있어요
                                </Button>
                                <Button className="SelectedHashTag">
                                    #맛없어요
                                </Button>
                                <Button className="SelectedHashTag">
                                    #달아요
                                </Button>
                                <Button className="SelectedHashTag">
                                    #매워요
                                </Button>
                                <Button className="SelectedHashTag">
                                    #싱거워요
                                </Button>
                                <Button className="SelectedHashTag">
                                    #써요
                                </Button>
                                <Button className="SelectedHashTag">
                                    #짜요
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr/>
            </Container>
        );
    }

}

export default HashTagDisplay;
