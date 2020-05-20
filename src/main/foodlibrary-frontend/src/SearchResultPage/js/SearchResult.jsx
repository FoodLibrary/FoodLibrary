import React, {useEffect, useState} from 'react';
import '../css/SearchResult.css';
import {Container, Row, Col, Label} from 'reactstrap';
import ProductList from "./ProductList";
import Input from "reactstrap/es/Input";
import SearchService from "../../services/SearchService";
import TopBar from "../../defaultDiv/js/TopBar";
function SearchResult() {
    const initialSearchState = {
        prdlstnm: ""
    }

    const [productSearch, setProductSearch] = useState (initialSearchState);
    const [submitted, setSubmitted] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const handleInputChange = event => {
        const { name, value } = event.target;
        setProductSearch({...productSearch, [name]: value });
    };

    const saveSearch = () => {
        var data = {
            prdlstnm: productSearch.prdlstnm
        };

        SearchService.create(data)
            .then(response => {
                setProductSearch({
                    prdlstnm: response.data.prdlstnm
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const newSearchInput = () => {
        setProductSearch(initialSearchState);
        setSubmitted(false);
    }

        return (
            <Container>
                <Row  id={"resultTitle"}>
                    <Col xl={{size:6, offset:5}}>  검색 결과 </Col>

                </Row>
                <hr/>
                <Row className="classificationRow">
                    <Col xl={4} id={"productResultMessage"}>
                        총 <span id={"productCount"}> {searchResults.length} </span>개의 식품이 검색되었습니다.
                    </Col>
                    <Col xl={{size:5, offset:10}}>
                        <Row id={"sort"}>
                            <span id={"sortTitle"}>
                                정렬 :
                            </span>
                            <Col >
                                <Input type="select" className={"selectSort"}>
                                    <option className={"selectSort"}> 좋아요순 </option>
                                    <option className={"selectSort"}> 별점순 </option>
                                    <option className={"selectSort"}> 리뷰순 </option>
                                </Input>
                            </Col>

                        </Row>

                    </Col>
                </Row>
                <Row>

                </Row>

                <Row className="moreResult">
                    <button className="moreResultBtn"> 더 보 기</button>
                </Row>
            </Container>
        );
}

export default SearchResult;
