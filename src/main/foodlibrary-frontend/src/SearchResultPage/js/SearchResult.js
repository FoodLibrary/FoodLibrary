import React, {Component} from 'react';
import '../css/SearchResult.css';
import {Container, Row, Col, Label} from 'reactstrap';
import ProductList from "./ProductList";
import ProductDesc from "../../ProductPage/js/ProductDesc";


class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state={
            prdlstreportno:'',
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

        }
    }
    callApi = () =>{
        fetch('api/product/닥터다잇 소고기 스테이크')
            .then(res=>res.json())
            .then(json=>{
                this.setState({
                    prdlstreportno:json.prdlstreportno,
                    prdlstnm:json.prdlstnm,
                    manufacture:json.manufacture,
                    category:json.category,
                    img:json.img,
                    rawmtrl:json.rawmtrl,
                    nutrient:json.nutrient,
                    allergy:json.allergy,
                    productHashtag:json.productHashtag,
                    likecount:json.likecount,
                    zzimcount:json.zzimcount
                })
            })
    }
    componentDidMount() {
        this.callApi();
    }


    render() {
        return (
            <Container>
                <Row className="searchResult" >
                    <p className="searchResultLogo">
                        <img
                            src="https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/5B01E484-17CF-4D9B-AB70-EC166E77CE79.png"
                            className = "searchResultImg"/>
                        검색 결과</p>
                </Row>
                <Row className="classificationRow">
                    <p className="classification"> 대분류 > 소분류</p>
                </Row>
                <Row className="resultSort">
                    정렬 :
                    <button className="likeSort"> 좋아요순 |</button>
                    <button className="starSort"> 별점순 |</button>
                    <button className="reviewSort"> 리뷰순</button>
                </Row>
                <Row className="productList">
                    <ProductList prdlstnm={this.state.prdlstnm} img={this.state.img} manufacture={this.state.manufacture} allergy={this.state.allergy}/>

                </Row>

                <Row className="moreResult">
                    <button className="moreResultBtn"> 더 보 기</button>
                </Row>
            </Container>
        );
    }
}

export default SearchResult;
