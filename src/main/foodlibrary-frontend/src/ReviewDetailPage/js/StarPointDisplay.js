import React, {Component} from 'react';
import './StarPoint.css';
import { Container, Row, Col, Button } from 'reactstrap';
import ImageResources from '../../util/ImageResources';


class StartPoint extends Component {

    render() {
        return (
            <Container>
                <Row className={"Row"} xs={2} md={2}>
                    <Col xs={"auto"} md={"auto"}>
                        <p className={"TitleButton"}>
                            <img className={"StartPointImage"} src={ImageResources.filledStar} alt="StarPoint"/>
                            &nbsp; &nbsp;별점
                        </p>
                    </Col>
                    <Col>
                        <Row>
                            <Col xs={{size:1, offset:1}} md={{size:1, offset:1}} >
                                <img className={"StarPointImage"} src={ImageResources.filledStar} alt="StarPoint"/>
                            </Col>
                            <Col xs={1} md={1} >
                                <img className={"StarPointImage"} src={ImageResources.filledStar} alt="StarPoint"/>
                            </Col>
                            <Col xs={1} md={1} >
                                <img className={"StarPointImage"} src={ImageResources.filledStar} alt="StarPoint"/>
                            </Col>
                            <Col xs={1} md={1} >
                                <img className={"StarPointImage"} src={ImageResources.filledStar} alt="StarPoint"/>
                            </Col>
                            <Col xs={1} md={1} >
                                <img className={"StarPointImage"} src={ImageResources.filledStar} alt="StarPoint"/>
                            </Col>
                        </Row>

                    </Col>
                </Row>
                <hr/>
            </Container>
        );
    }

}

export default StartPoint;
