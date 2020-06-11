import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Label, Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap';

import '../css/ProductListStyle.css';
import Chip from "@material-ui/core/Chip";
import SearchService from "../../services/SearchService";

const ProductList = (props) => {
    const imageResources = require('../../util/ImageResources.js');

    const[thumbEmpty, setEmptyThumb] = useState(imageResources.emptyThumb);
    const[thumbColor, setColorThumb] = useState(imageResources.thumb);
    const[heartEmpty, setEmptyHeart] = useState(imageResources.emptyHeart);
    const[heartColor, setColorHeart] = useState(imageResources.heart);

    function thumb() {
        if (thumbEmpty) {
            setEmptyThumb(thumbEmpty => thumbColor);
        }
        else {
            setColorThumb(thumbColor => thumbEmpty);
        }
    }

    const [searchResults, setResults]  = useState(props);

    const allergyResult = searchResults.allergy.split(",");
    const [allergyInfo, setAllergyInfo] = useState(props.allergyForReSearch);
    const diseaseResult = searchResults.disease.split(",");
    const [diseaseInfo, setDiseaseInfo] = useState(props.diseaseForReSearch);
    const [like, setLike] = useState({
        prdlstreportno:'',
        nickname:''
    });

    const [zzim, setZzim] = useState({
        prdlstreportno:'',
        nickname:''
    });

    useEffect(() => {
        setResults(props);
    }, [props]);

    useEffect(() => {
        SearchService.getLikeUsers(searchResults.prdlstreportno)
            .then(response => {
                if (response.data.includes(localStorage.getItem('id'))) {
                    setEmptyThumb(thumbEmpty => thumbColor);
                    setColorThumb(thumbColor => thumbEmpty);
                }
            });

        SearchService.getZzimUsers(searchResults.prdlstreportno)
            .then(response => {
                if (response.data.includes(localStorage.getItem('id'))) {
                    setEmptyHeart(heartEmpty => heartColor);
                }
            });

    },[]);

    function thumbButtonClick() {
        like.nickname=localStorage.getItem('id');
        like.prdlstreportno = searchResults.prdlstreportno;
        if (setEmptyThumb && localStorage.getItem('loginOK') === "OK") {
            setEmptyThumb(thumbEmpty => thumbColor);
            setColorThumb(thumbColor => thumbEmpty);
            SearchService.addLike(like)
                .then(response => {
                    console.log(like);
            });
        }
        else {
            setModalClickOK(!modalClickOK);
        }
    }

    function heartButtonClick() {
        zzim.nickname=localStorage.getItem('id');
        zzim.prdlstreportno = searchResults.prdlstreportno;
        if (setEmptyHeart && localStorage.getItem('loginOK') === "OK") {
            setEmptyHeart(heartEmpty => heartColor);
            setColorHeart(heartColor => heartEmpty);
            SearchService.addZzim(zzim)
                .then(response => {
                    console.log(zzim);
                });
        }
        else {
            setModalClickOK(!modalClickOK);
        }
    }

    function productOnClick() {
        window.location.replace(`/productPage/${props.searchProduct}/${allergyInfo}/${diseaseInfo}/${searchResults.prdlstreportno}`);
    }

    const [modalClickOK, setModalClickOK] = useState(false);

    const toggleClickOK = () => {
        setModalClickOK(!modalClickOK);
    };

    return (

            <Row id={"productList"}>
                <Col xl={12} >
                    <Row id={"productResult"}>
                        <Col>
                            <img src={searchResults.img}  id={"productImg"} onClick={productOnClick}/>

                        </Col>
                        <Col>

                        </Col>

                    </Row>

                    <Row id={"manufacturerAndName"} >
                        <Col xl={12}>
                            <button id={"heartButton"} onClick={heartButtonClick} >
                                <img id={"heartButtonImage"} src={heartEmpty}/>
                            </button>
                            <button id={"likeButton"} onClick={thumbButtonClick}>
                                <img id={"likeButtonImage"} src={thumbEmpty}/>
                            </button>
                            <span id={"productName"} onClick={productOnClick}> {searchResults.prdlstnm}  </span>

                        </Col>
                    </Row>
                    <Row>
                        <Col xl={4} id={"allergyArea"} > 알러지 성분</Col>
                        <Col xl={8} id={"allergyChipArea"}>
                            {allergyResult.map((result,index) => (
                                <Chip className={"allergyChip"} label={result}/>
                            ))}
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={4} id={"diseaseArea"} > 지병 위험군 </Col>
                        <Col xl={8} id={"diseaseChipArea"}>
                            {diseaseResult.map((result,index) => (
                                <Chip className={"diseaseChip"} label={result}/>
                            ))}
                        </Col>
                    </Row>
                </Col>

                <Modal isOpen={modalClickOK} toggle={toggleClickOK} className={"abc"}>
                    <ModalHeader toggle={toggleClickOK}> 실패 </ModalHeader>
                    <ModalBody>
                        <Row id={"okSign"}> 찜, 좋아요 기능을 이용하기 위해서는 로그인을 하세요! </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggleClickOK}> 확인 </Button>{' '}
                        <Button color="danger" onClick={toggleClickOK}> 취소 </Button>
                    </ModalFooter>
                </Modal>

            </Row>


    );
}

export default ProductList;
