import React from 'react';
import axios from 'axios';
import {Container, Row, Col, Label} from 'reactstrap';
import '../css/ProductListStyle.css';
import {Image} from "react-bootstrap";
import ImageChart from "../../ProductDefaultDiv/js/ImageChart";

const imageResources = require('../../util/ImageResources.js');

class ProductList extends React.Component {

    render() {
        var prdlstnm = this.props.prdlstnm;
        var img = this.props.img;
        var manufacture = this.props.manufacture;
        var allergy = this.props.allergy;
        return (
            <Container>
                <Row>
                <table className={"productList"}>
                    <tbody>
                    <th className={"indexAndButtons"}>
                        <Container className={"indexAndButtonsContainer"}>
                            <Row>
                                <Col className={"index"}> 1. </Col>
                            </Row>
                            <Row>
                                <Col className={"heart"}>
                                    <Image src={imageResources.myHeart}
                                           className={"heartAndThumbImages"}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col className={"thumb"}>
                                    <Image src={imageResources.thumb}
                                           className={"heartAndThumbImages"}/>
                                </Col>
                            </Row>
                        </Container>
                    </th>
                    <td className="foodPictureAreaCol">

                        <img src={img} width={300} height={250}/>
                    </td>

                    <td className="foodInfoAreaCol">
                        <div> {manufacture} </div>
                        <div> {prdlstnm} </div>
                        <div> 알러지 유발 요소 : {allergy}</div>

                    </td>
                    </tbody>
                </table>
            </Row>
            </Container>
        );
    }
}

export default ProductList;