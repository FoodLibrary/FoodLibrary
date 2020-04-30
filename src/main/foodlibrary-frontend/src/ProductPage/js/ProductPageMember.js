import React, { Component } from 'react';
import '../css/ProductPageMember.css'
import { Container, Row, Col } from 'reactstrap';
import ProductPageMemberInfo from './ProductPageMemberInfo';

class PRoductPageMember extends Component {
    render() {
        return (
            <Container>
                <Container className="ProductPageMemberframe">
                    <Row md="2" xs="1">
                        <Col md="auto" >
                            <span className="ProductPageMemberTitle">
                                <img className="ProductPageMemberTitleImg" src="https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/4881970C-494C-43E8-90B3-B7E2E41EF263.png"></img>
                                회원리뷰</span>
                        </Col>
                        <Col md={{ size: 5, offset: 4 }}>
                            <Row md="3" xs="3">
                                <Col md="auto" xs="auto"><span className="ProductPageMemberStarTitle">별점: </span></Col>
                                <Col md="auto" xs="auto">
                                    <img className="ProductPageMemberStar" src="https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/50EEE4D2-67B0-45DA-AA5A-0FC2214F5A80.png" />
                                    <img className="ProductPageMemberStar" src="https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/50EEE4D2-67B0-45DA-AA5A-0FC2214F5A80.png" />
                                    <img className="ProductPageMemberStar" src="https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/50EEE4D2-67B0-45DA-AA5A-0FC2214F5A80.png" />
                                </Col>
                                <Col md="auto" xs="auto">
                                    <button className="ProductPageMemberButton">리뷰쓰러가기</button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Container className="ProductPageMemberframe">
                    <Row md="2" xs="1">
                        <ProductPageMemberInfo/>
                        <ProductPageMemberInfo/>
                        <ProductPageMemberInfo/>
                    </Row>
                    <Row md="1" xs="1">
                    <Col md="12"><button className="ProductPageMemberShowmore">더보기</button></Col>
                    </Row>
                </Container>
                <hr></hr>
                </Container>
        );
    }
}
//더보기 버튼만 유일하게 width:100% %를 사용함 ㅈㅅㅈㅅ
export default PRoductPageMember;