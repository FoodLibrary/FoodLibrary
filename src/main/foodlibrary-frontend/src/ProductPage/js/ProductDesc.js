import React, { Component } from 'react';
import '../css/ProductDesc.css';
import { Container, Row, Col } from 'reactstrap';

class ProdcutDesc extends Component {

    render() {
        var rawmtrl = this.props.rawmtrl;
        var manufacture = this.props.manufacture;
        var allergy = this.props.allergy;

        return (
            <Container>
                <Container className="ProductDescframe">
                    <Row xs="1" md="2">
                        <Col md='auto'>
                            <span className="ProdcutDescTitle">
                                <img className="ProdcutDescTitleImg" src="https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/47CB0ABA-BDEE-452A-A6C9-B57CCC9DDFBA.png"></img>
                                원산지정보</span></Col>
                        <Col md="8">
                            <Row xs="1">
                                <Col className="ProductDescDesc"><span>생산지및소재지 : {manufacture}</span></Col>
                                <Col className="ProductDescDesc"><span>원산지 : {rawmtrl}</span></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <hr></hr>
                <Container className="ProductDescframe">
                    <Row xs="1" md="2">
                        <Col md="auto">
                            <span className="ProdcutDescTitle">
                                <img className="ProdcutDescTitleImg" src="https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/7FCA9781-9E64-4F2B-B2A5-598821E43FD1.png"></img>
                                알러지 지병</span></Col>
                        <Col md="8">
                            <Row xs="1">
                                <Col className="ProductDescDesc"><span>알러지 유발 요소: {allergy}</span></Col>
                                <Col className="ProductDescDesc"><span>이 지병이 있다면 피하세요: fdsfdsfdsfdksuhfadsjoihdj</span></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <hr></hr>
                <Container className="ProductDescframe">
                    <Row xs="1" md="2">
                        <Col md="auto">
                            <span className="ProdcutDescTitle">
                                <img className="ProdcutDescTitleImg" src="https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/671C1BD1-8A16-42F6-A9A0-74A12A28D9A7.png"></img>
                                제품 키워드</span></Col>
                        <Col md="8">
                           제품키워드 들어갈 자리
                        </Col>
                    </Row>
                </Container>
                <hr></hr>
                </Container>
        );
    }
}

export default ProdcutDesc;