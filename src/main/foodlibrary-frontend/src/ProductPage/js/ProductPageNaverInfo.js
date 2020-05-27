import React,{Component} from 'react';
import '../css/ProductPageNaverInfo.css';
import { Col, Row } from 'reactstrap';

const ProductPageNaverInfo = () =>{
        return(
            <Col className="ProductPageNaverInfoCol">
                <Row md="2" xs="2">
                    <Col md="auto" xs="auto">
                        <img className="ProductPageNaverInfoImg" src="https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/7B6BC82F-398B-4399-A0C7-3F0BB639B5E7.png"/>
                    </Col>
                    <Col>
                        <Row md="1" xs="1">
                            <Col className="ProductPageNaverInfoDesc"><div className="ProductPageNaberInfoDescSpan">블로그제목: dlifjldjklfjdslfjldksjflkdsjlkfjlkdfsjlkfdjslkfdjsljfdl</div></Col>
                            <Col className="ProductPageNaverInfoDesc"><div className="ProductPageNaberInfoDescSpan">안녕하세요 고석준이에요 오늘은 맛있는 그라탕을 만들어볼꺼에요 그라샤 내가 너무 설래 잠못들게 만들꺼야fdfdsf</div></Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        );
    
}
export default ProductPageNaverInfo;