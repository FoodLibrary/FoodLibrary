import React, {Component} from 'react';
import '../css/SearchResult.css';
import {Container, Row, Col, Label} from 'reactstrap';
import ProductList from "./ProductList";


class SearchResult extends Component {
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
                    <ProductList/>
                </Row>

                <Row className="moreResult">
                    <button className="moreResultBtn"> 더 보 기</button>
                </Row>
            </Container>
        );
    }
}

export default SearchResult;
