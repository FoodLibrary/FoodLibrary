import React, {useEffect, useState} from 'react';
import '../css/ProductDetailPage.css'
import {Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap';
import Tabbar from './Tabbar';
import ProductService from '../js/ProductService';
import Chip from "@material-ui/core/Chip";
import ReactWordcloud from 'react-wordcloud';
import SearchService from "../../services/SearchService";

const imageResources = require('../../util/ImageResources.js');

const options = {
    colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'],
    fontFamily: 'Gothic',
    fontSizes: [15, 60],
    fontStyle: 'normal',
    fontWeight: 'normal',
    padding: 2,
    rotations: 3,
    scale: 'sqrt',
    transitionDuration: 1000,
    rotationAngles: [0, 0],
};


const ProductDetailPage = (props) => {

    const [nutrient, setNutrient] = useState("");
    const [productHashtag, setProductHashTag] = useState([]);
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
        producthashtag:'',
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
                getWordCloud(foundProduct.data.producthashtag)
            }).catch(e => {
            console.log(e);
        });
    };
    
    function getWordCloud(str) {
        const hashtag = str.split(",");
        const productHashtag = [];
        for (let i = 0; i < hashtag.length; i++) {
            productHashtag[i] =
                {
                    text: hashtag[i],
                    value: i+1
                }
        }
        setProductHashTag(productHashtag);

    }

    const allergyChip = product.allergy.split(",");
    const diseaseChip = product.disease.split(",");

    const buyProduct = () => {
        const url = product.buylink;
        window.open(url, '_blank');
    };


    const[thumbEmpty, setEmptyThumb] = useState(imageResources.emptyThumb);
    const[thumbColor, setColorThumb] = useState(imageResources.thumb);
    const[heartEmpty, setEmptyHeart] = useState(imageResources.emptyHeart);
    const[heartColor, setColorHeart] = useState(imageResources.heart);


    const [like, setLike] = useState({
        prdlstreportno:props.productInfo.productNumber,
        nickname:localStorage.getItem('id')
    });

    const [zzim, setZzim] = useState({
        prdlstreportno:props.productInfo.productNumber,
        nickname:localStorage.getItem('id')
    });


    const clickZZim = () =>{
        if (setEmptyHeart && localStorage.getItem('loginOK') === "OK") {
            setEmptyHeart(heartEmpty => heartColor);
            setColorHeart(heartColor => heartEmpty);
            SearchService.addZzim(zzim)
                .then(response =>{
                    setZzim(zzim);
                }).catch(e => {
                console.log(e);
            });

        }
        else {
            setModalClickOK(!modalClickOK);
        }

    };

    const clickLike = () =>{
        if (setEmptyThumb && localStorage.getItem('loginOK') === "OK") {
            setEmptyThumb(thumbEmpty => thumbColor);
            setColorThumb(thumbColor => thumbEmpty);
            SearchService.addLike(like)
                .then(response =>{
                    setLike(like);
                }).catch(e => {
                console.log(e);
            });
        }
        else {
            setModalClickOK(!modalClickOK);
        }

    };

    const [modalClickOK, setModalClickOK] = useState(false);

    const toggleClickOK = () => {
        setModalClickOK(!modalClickOK);
    };

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
                            <img id="productPageZButton" src={heartEmpty}
                            onClick={clickZZim}/>
                        </Col>
                        <Col xl={{size:1}}>
                            <img id="productPageBButton" src={thumbEmpty}
                            onClick={clickLike}/>
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
                        <Col className="ProducPageCol2" id={"wordcloud"}>
                            <ReactWordcloud words={productHashtag} options={options}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Tabbar {...props.productInfo} productName={product.prdlstnm} nutrient={nutrient} />

            <Modal isOpen={modalClickOK} toggle={toggleClickOK} className={"abc"}>
                <ModalHeader toggle={toggleClickOK}> 실패 </ModalHeader>
                <ModalBody>
                    <Row id={"okSign"}> 찜, 좋아요 기능을 이용하기 위해서는 로그인을 하세요! </Row>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggleClickOK}> 확인 </Button>{' '}
                </ModalFooter>
            </Modal>
        </Container>
    );
};

export default ProductDetailPage;