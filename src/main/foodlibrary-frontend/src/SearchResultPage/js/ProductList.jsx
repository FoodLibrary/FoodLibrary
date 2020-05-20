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

    return (

        <Container>
            <Row xl={1} >
                <Col xl={12} >
                    <Row id={"productResult"}>
                        <img src={"https://www.tlj.co.kr:7008/data/product/2019-10-31_event(1).jpg"} id={"productImg"}/>
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
                            <span id={"productName"}> {searchResults.prdlstnm}  </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={4} id={"allergyArea"} > 알러지 성분</Col>
                        <Col xl={8} id={"allergyChipArea"}>
                            <Chip className={"allergyChip"} label="대두 " />
                            <Chip className={"allergyChip"} label="밀  " />
                            <Chip className={"allergyChip"} label="오징어  " />
                            <Chip className={"allergyChip"} label="아황산류  " />
                            <Chip className={"allergyChip"} label="아황산류  " />
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={4} id={"diseaseArea"} > 지병 위험군 </Col>
                        <Col xl={8} id={"diseaseChipArea"}>
                            <Chip className={"diseaseChip"} label="고혈압" />
                            <Chip className={"diseaseChip"} label="당뇨" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default ProductList;
