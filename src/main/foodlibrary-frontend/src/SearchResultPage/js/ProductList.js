import React, {useState} from 'react';
import {Container, Row, Col, Label} from 'reactstrap';
import '../css/ProductListStyle.css';
import {Chip} from 'react-md'

const imageResources = require('../../util/ImageResources.js');


const ProductList = (props) => {
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
                            <span id={"productName"}> 까르보나라 불닭볶음면 </span>
                        </Col>
                    </Row>

                </Col>
            </Row>

            <Row >
                <Col xl={{size:4, offset:1}}>
                    <Row>
                        <Col xl={4} id={"allergyArea"} > 알러지  유발 요소  </Col>
                        <Col >  </Col>
                    </Row>
                    <Row>
                        <Col xl={4} id={"diseaseArea"} > 이 병이 있다면 피하세요 </Col>
                        <Col >
                            <div className="chips__list">
                                <Chip label="Hello, World" />

                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default ProductList;
