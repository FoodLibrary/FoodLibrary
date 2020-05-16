import React, {useState} from 'react';
import {Container, Row, Col, Label} from 'reactstrap';
import '../css/ProductListStyle.css';
import {Chip} from 'react-md';

const ProductList = (props) => {

    const imageResources = require('../../util/ImageResources.js');


    const[thumbEmpty, setEmptyThumb] = useState(imageResources.emptyThumb);
    const[thumbColor, setColorThumb] = useState(imageResources.thumb);
    const[heartEmpty, setEmptyHeart] = useState(imageResources.emptyHeart);
    const[heartColor, setColorHeart] = useState(imageResources.heart);

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

            <Row>
                <Col xl={{size:3, offset:1}} lg={3}  className={"productListImg"}>
                    <img src={"https://www.tlj.co.kr:7008/data/product/2019-10-31_event(1).jpg"} id={"productImg"}/>
                    <button id={"likeButton"} onClick={thumbButtonClick}>

                        <img id={"likeButtonImage"} src={thumbEmpty}/>
                    </button>
                    <button id={"heartButton"} onClick={heartButtonClick} >
                        <img id={"heartButtonImage"} src={heartEmpty}/>
                    </button>
                </Col>
            </Row>

            <Row >
                <Col xl={{size:4, offset:1}}>
                    <Row>
                        <Col id={"manufacturerAndName"} >
                            <span id={"productManufacturer"}> [뚜레쥬르] </span>
                            <span id={"productName"}> 참 맛있는 식빵 </span>
                        </Col>
                    </Row>

                </Col>
            </Row>
            <Row >
                <Col xl={{size:4, offset:1}}>
                    <Row>
                        <Col xl={4} id={"allergyArea"} > 알러지  유발 요소  </Col>
                        <Col xl={7} id={"allergyChipArea"}>
                            <Chip className={"allergyChip"} label="대두 " />
                            <Chip className={"allergyChip"} label="밀  " />
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={4} id={"diseaseArea"} > 지병 위험군  </Col>
                        <Col xl={7} id={"diseaseChipArea"}>
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
