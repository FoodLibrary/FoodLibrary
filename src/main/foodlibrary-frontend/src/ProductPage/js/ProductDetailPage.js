import React, {useEffect, useState} from 'react';
import '../css/ProductDetailPage.css'
import {Container,Row,Col} from 'reactstrap';
import Tabbar from './Tabbar';
import ProductService from '../js/ProductService';

const ProductDetailPage = props => {


    const [product, setproduct] = useState({
        prdlstreportno:props.productInfo,
        prdlstnm:'',
        manufacture:'',
        category:'',
        img:'',
        rawmtrl:'',
        nutrient:'',
        allergy:'',
        productHashtag:'',
        likecount:0,
        zzimcount:0
    });

    useEffect(() => {
        getProductInfo();
    }, []);

    const getProductInfo = () =>{
        ProductService.getProductInfo(props.productInfo)
            .then(foundProduct => {
                setproduct(foundProduct.data);
                console.log(foundProduct.data);
            }).catch(e => {
            console.log(e);
        });
    }
    //
    // const setZzim = () =>{
    //     ZzimLikeService.addZzim(productUserInfo)
    //         .then(zzim =>{
    //             console.log(zzim.data);
    //         }).catch(e => {
    //         console.log(e);
    //     });
    // }
    //
    // const setLike = () =>{
    //     ZzimLikeService.addLike(productUserInfo)
    //         .then(like =>{
    //             console.log(like.data);
    //         }).catch(e => {
    //         console.log(e);
    //     });
    // }
    return(
        <Container>
            <Row>
                <Col sm={{size:5}}>
                    <img className="ProductImage" src={product.img} alt="none"/>
                </Col>
                <Col sm={{size:7}}>
                    <Row className="ProductPageRow1" md="4">
                        <Col md={{size:6,offset:1}}className="ProducPageColTitle">{product.prdlstnm}</Col>
                        <Col md={{size:1}}>
                            <img className="ProductPageLZButtons" src="https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/80406245-72B8-455B-BA53-B836563235E2.png" alt="hello world"
                                 />
                        </Col>
                        <Col md={{size:1}}>
                            <img className="ProductPageLZButtons" src="https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/2F3ECBE2-8BFE-4633-8D6D-04C11E07A486.png" alt="thank you"
                                 />
                        </Col>
                        <Col md={{size:3}}>
                            <button className="ProductPageBuyButton">구매하기</button>
                        </Col>

                    </Row>
                    <hr/>
                    <Row className="ProductPageRow1">
                        <Col md={{size:3}} className="ProducPageCol1">생상지 및 소재지</Col>
                        <Col className="ProducPageCol2">{product.manufacture}</Col>
                    </Row>
                    <hr/>
                    <Row className="ProductPageRow1">
                        <Col md={{size:3}} className="ProducPageCol1">원산지 정보</Col>
                        <Col className="ProducPageCol2">{product.rawmtrl}</Col>
                    </Row>
                    <hr/>
                    <Row className="ProductPageRow1">
                        <Col md={{size:3}} className="ProducPageCol1">알러지</Col>
                        <Col className="ProducPageCol2">{product.allergy}</Col>
                    </Row>
                    <hr/>
                    <Row className="ProductPageRow1">
                        <Col md={{size:3}} className="ProducPageCol1">지병</Col>
                        <Col className="ProducPageCol2">알수없음</Col>
                    </Row>
                    <hr/>
                    <Row className="ProductPageRow1">
                        <Col md={{size:3}} className="ProducPageCol1">제품 키워드</Col>
                        <Col className="ProducPageCol2">{product.productHashtag}</Col>
                    </Row>
                </Col>
            </Row>
            <Tabbar {...product}/>
        </Container>
    );
};

export default ProductDetailPage;