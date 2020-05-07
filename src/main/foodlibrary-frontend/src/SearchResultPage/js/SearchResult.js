import React, {Component} from 'react';
import '../css/SearchResult.css';
import {Container, Row, Col, Label} from 'reactstrap';
import ProductList from "./ProductList";


class SearchResult extends Component {
    render() {
        return (
            <div>
                <div className="searchResult" >
                    <p className="searchResultLogo">
                        검색 결과</p>
                </div>
                <div className="classificationRow">
                    <p className="classification"> 대분류 > 소분류</p>
                </div>
                <div className="resultSort">
                    정렬 :
                    <button className="likeSort"> 좋아요순 |</button>
                    <button className="starSort"> 별점순 |</button>
                    <button className="reviewSort"> 리뷰순</button>
                </div>
                <div className="productList">
                    <ProductList/>
                </div>

                <div className="moreResult">
                    <button className="moreResultBtn"> 더 보 기</button>
                </div>
            </div>
        );
    }
}

export default SearchResult;
