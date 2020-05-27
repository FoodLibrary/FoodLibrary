import React,{Component} from 'react';
import {Container,Row,Col} from 'reactstrap';
import '../css/ProductPageHead.css';

const ProductPageHead = () => {
        var title = this.props.prdlstnm;
        return(
            <Container>
                <Container className="ProductPageHeadframe1">
                    <Row md="2" xs="1">
                        <Col className="ProductPageHeadTitle" md="auto">{title}</Col>
                        <Col>
                        <Row md="1" xs="1">
                            <Col xs="auto">
                                <img className="ProductPageHeadImg" src="https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/80406245-72B8-455B-BA53-B836563235E2.png"></img>
                                <img className="ProductPageHeadImg" src="https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/2F3ECBE2-8BFE-4633-8D6D-04C11E07A486.png"></img>
                            </Col>
                            <Col xs="auto">
                                <button className="ProductPageHeadButton">구매하러가기</button>
                            </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                
            </Container>
        );

}

export default ProductPageHead;