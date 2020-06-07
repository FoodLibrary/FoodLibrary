import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Label} from 'reactstrap';

import '../css/ProductListStyle.css';
import Chip from "@material-ui/core/Chip";

const ProductList = (props) => {
    const imageResources = require('../../util/ImageResources.js');
    const[thumbEmpty, setEmptyThumb] = useState(imageResources.emptyThumb);
    const[thumbColor, setColorThumb] = useState(imageResources.thumb);
    const[heartEmpty, setEmptyHeart] = useState(imageResources.emptyHeart);
    const[heartColor, setColorHeart] = useState(imageResources.heart);

    const [searchResults, setResults]  = useState(props);

    const allergyResult = searchResults.allergy.split(",");
    const [allergyInfo, setAllergyInfo] = useState(props.allergyForReSearch);

    const diseaseResult = searchResults.disease.split(",");
    const [diseaseInfo, setDiseaseInfo] = useState(props.diseaseForReSearch);

    useEffect(() => {
        setResults(props);
    }, [props]);

    function thumbButtonClick() {
        setEmptyThumb(thumbEmpty => thumbColor);
        setColorThumb(thumbColor => thumbEmpty);
        if (setEmptyThumb) {
            console.log("뿅?")
        }
    }

    function heartButtonClick() {
        setEmptyHeart(heartEmpty => heartColor);
        setColorHeart(heartColor => heartEmpty);
    }

    function productOnClick() {
        window.location.replace(`/productPage/${props.searchProduct}/${allergyInfo}/${diseaseInfo}/${searchResults.prdlstreportno}`);
    }

    return (

            <Row id={"productList"}>
                <Col xl={12} >
                    <Row id={"productResult"}>
                        <img src={searchResults.img}  id={"productImg"}/>

                    </Row>
                    {/*<Row>*/}
                    {/*    <button id={"heartButton"} onClick={heartButtonClick} >*/}
                    {/*        <img id={"heartButtonImage"} src={heartEmpty}/>*/}
                    {/*    </button>*/}
                    {/*    <button id={"likeButton"} onClick={thumbButtonClick}>*/}
                    {/*        <img id={"likeButtonImage"} src={thumbEmpty}/>*/}
                    {/*    </button>*/}
                    {/*</Row>*/}
                    <Row id={"manufacturerAndName"} >
                        <Col xl={12}>
                            <span id={"productManufacturer"}> [{searchResults.manufacture}] </span>
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
            </Row>


    );
}

export default ProductList;
