import React, {useEffect, useState} from 'react';
import '../css/ProductDetailPage.css'
import {Container,Row,Col} from 'reactstrap';
import Tabbar from './Tabbar';
import ProductService from '../js/ProductService';
import Chip from "@material-ui/core/Chip";
const ProductDetailPage = props => {
    const [nutrient, setNutrient] = useState("");
    const [product, setproduct] = useState({
        prdlstreportno:props.productInfo.productNumber,
        prdlstnm: '',
        manufacture: '',
        category:'',
        img:'',
        rawmtrl:'',
        nutrient:'',
        allergy:'',
        disease:'',
        productHashtag:'',
        likecount:0,
        zzimcount:0
    });

    useEffect(() => {
        getProductInfo();
    }, []);

    const getProductInfo = () =>{
        ProductService.getProductInfo(product.prdlstreportno)
            .then(foundProduct => {
                setproduct(foundProduct.data);
                setNutrient(foundProduct.data.nutrient);
                console.log(foundProduct.data)
            }).catch(e => {
            console.log(e);
        });
    }

    const allergyChip = product.allergy.split(",");
    const diseaseChip = product.disease.split(",");

    const buyProduct = () => {
        const url = product.buylink;
        window.open(url, '_blank');
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
        <Container id={"productChart"}>
            <Row>
                <Col xl={{size:5}}>
                    <img className="ProductImage" src={product.img} alt="none"/>
                </Col>
                <Col xl={{size:7}}>
                    <Row className="ProductPageRow1" md="4">
                        <Col xl={{size:6,offset:1}}className="ProducPageColTitle">{product.prdlstnm}</Col>
                        <Col xl={{size:1}}>
                            <img id="productPageZButton" src="https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/80406245-72B8-455B-BA53-B836563235E2.png" alt="hello world"
                                 />
                        </Col>
                        <Col xl={{size:1}}>
                            <img id="productPageBButton" src="https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/2F3ECBE2-8BFE-4633-8D6D-04C11E07A486.png" alt="thank you"
                                 />
                        </Col>
                        <Col xl={{size:3}} id={"ProductPageBuyButtonArea"}>
                            <button className="ProductPageBuyButton" onClick={buyProduct}>구매하기</button>
                        </Col>
                    </Row>
                    <hr/>
                    <Row className="ProductPageRow1">
                        <Col xl={{size:3}} className="ProducPageCol1">생산자 및 소재지</Col>
                        <Col className="ProducPageCol2">{product.manufacture}</Col>
                    </Row>
                    <hr/>
                    <Row className="ProductPageRow1">
                        <Col xl={{size:3}} className="ProducPageCol1">원산지 정보</Col>
                        <Col className="ProducPageCol2">{product.rawmtrl}</Col>
                    </Row>
                    <hr/>
                    <Row className="ProductPageRow1">
                        <Col xl={{size:3}} className="ProducPageCol1">알러지</Col>

                        <Col className="ProducPageCol2">
                            {allergyChip.map((result,index) => (
                                <Chip className={"allergyChip"} label={result}/>
                            ))}

                        </Col>
                    </Row>
                    <hr/>
                    <Row className="ProductPageRow1">
                        <Col xl={{size:3}} className="ProducPageCol1">지병</Col>
                        <Col className="ProducPageCol2">
                            {diseaseChip.map((result,index) => (
                                <Chip className={"allergyChip"} label={result}/>
                            ))}
                        </Col>
                    </Row>
                    <hr/>
                    <Row className="ProductPageRow1">
                        <Col xl={{size:3}} className="ProducPageCol1">제품 키워드</Col>
                        <Col className="ProducPageCol2">{product.productHashtag}</Col>
                    </Row>
                </Col>
            </Row>
            <Tabbar {...props.productInfo} nutrient={nutrient}/>
        </Container>
    );
};

export default ProductDetailPage;