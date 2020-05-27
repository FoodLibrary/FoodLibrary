import React, { Component } from 'react';
import '../css/ProductPageMemberInfo.css';
import { Col, Row } from 'reactstrap';

const ProductPageMemberInfo = () => {
        return (
            <Col className="ProductPageMemberInfoframe1">
                <Row md="2" xs="2">
                    <Col md="auto" xs="auto">
                        <img className="ProductPageMemberInfoImg" src="https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/7B6BC82F-398B-4399-A0C7-3F0BB639B5E7.png"/>
                    </Col>
                    <Col md={{size:9}}>
                        <Row >
                            <Col className="ProductPageMemberInfoCol"><div className="ProductPageMemberInfoHashTag">#매워요 #시큼 #맛없어</div></Col>
                            <Col className="ProductPageMemberInfoCol" xs="auto">
                                <img className="ProductPageMemberInfoStar" src="https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/50EEE4D2-67B0-45DA-AA5A-0FC2214F5A80.png"/>
                                <img className="ProductPageMemberInfoStar" src="https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/50EEE4D2-67B0-45DA-AA5A-0FC2214F5A80.png"/>
                                <img className="ProductPageMemberInfoStar" src="https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/50EEE4D2-67B0-45DA-AA5A-0FC2214F5A80.png"/>
                                <img className="ProductPageMemberInfoStar" src="https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/50EEE4D2-67B0-45DA-AA5A-0FC2214F5A80.png"/>
                                <img className="ProductPageMemberInfoStar" src="https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/50EEE4D2-67B0-45DA-AA5A-0FC2214F5A80.png"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="ProductPageMemberInfoCol"><div className="ProductPageMemberInfoText">제목: 이거 진짜 맛있어요</div></Col>
                            <Col className="ProductPageMemberInfoCol"><div className="ProductPageMemberInfoText">작성자: 개살토끼</div></Col>
                        </Row>
                        <Row>
                            <Col className="ProductPageMemberInfoCol">
                                <div className="ProductPageMemberInfoDesc">
                                    내용내용내용해~안녕하셍랑ㅁ누라ㅣㄴ무리ㅏ언미ㅏ런마ㅣ러;ㅁ얼;ㅣㅏ머
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        );

}

export default ProductPageMemberInfo;