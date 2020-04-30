import React,{Component} from 'react';
import '../css/ProductPageNaver.css';
import ProductPageNaverInfo from './ProductPageNaverInfo';
import { Container, Col,Row } from 'reactstrap';

class ProductPageNaver extends Component{
    render(){
        return(
            <Container>
            <Container className="ProductPageNaverframe1">
                <Row className="ProductPageNaverframe2">
                    <Col  md="auto">
                        <span className="ProductPageNaverTitle">
                        <img className="ProductPageNaverTitleImg"src="https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/F27F9B10-6585-468C-831A-16C69259C2FE.png"/>
                        네이버블로그리뷰
                        </span>
                    </Col>
                </Row>
            </Container>
            <Container className="ProductPageNaverframe1">
                <Row md="2" xs="1">
                    <ProductPageNaverInfo/>
                    <ProductPageNaverInfo/>
                    <ProductPageNaverInfo/>
                    <ProductPageNaverInfo/>
                    <ProductPageNaverInfo/>
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

export default ProductPageNaver;