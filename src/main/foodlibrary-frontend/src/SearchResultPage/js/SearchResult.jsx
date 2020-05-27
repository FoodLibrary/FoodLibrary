import React, {useEffect, useState} from 'react';
import '../css/SearchResult.css';
import {Container, Row, Col, Label, Navbar} from 'reactstrap';
import ProductList from "./ProductList";
import Input from "reactstrap/es/Input";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import TopBar from "../../defaultDiv/js/TopBar";
import SearchService from "../../services/SearchService";


const SearchResult = (props) => {
    let [selectedAllergy, setSelectedAllergy] = useState([]);

    const onChangeAllergyInput = (event, value) => {
        setSelectedAllergy(value);
        console.log(value);
    };

    const [searchResults, setResults]  = useState(props);

    useEffect(() => {
        setResults(props);
        console.log(searchResults);
    }, [props]);

    return (
        <Container>
            <Row>
                <Col>
                    <div id={"ResultTitle"}> 검색 결과 </div>
                </Col>
            </Row>

            <hr/>
            <Row xl={2}>
                <Col xl={6}>
                    <Autocomplete
                        multiple
                        className={"allergyFiltering"}
                        size="small"
                        options={allergy}
                        getOptionLabel={(option) => option.allergy}
                        onChange={onChangeAllergyInput}
                        onInputChange={onChangeAllergyInput}
                        onClick={onChangeAllergyInput}
                        renderInput={allergy => (
                            <TextField {...allergy} variant="outlined" label={"알러지 유발 요소"}/>
                        )}
                    />
                </Col>
                <Col xl={6}>
                    <Autocomplete
                        multiple
                        className={"diseaseFiltering"}
                        size="small"
                        options={disease}
                        getOptionLabel={(option) => option.disease}
                        renderInput={disease => (
                            <TextField {...disease} variant="outlined" label={"질병 정보"}/>
                        )}
                    />
                </Col>
            </Row>

            <Row className="classificationRow">
                <Col xl={7} id={"productResultMessage"}>
                    총 <span id={"productCount"}> {searchResults.searchResults.length} </span>개의 식품이 검색되었습니다.
                </Col>
                <Col xl={1} id={"sortingTitle"}> 정렬 : </Col>
                <Col xl={1} id={"sortingArea"}>
                    <Input type="select" className={"selectSort"}>
                            <option className={"selectSort"}> 좋아요순</option>
                            <option className={"selectSort"}> 별점순</option>
                            <option className={"selectSort"}> 리뷰순</option>
                    </Input>
                </Col>
            </Row>

            <Row xl={3}>

                    {searchResults.searchResults.map((result, index) => (
                        <ProductList {...result} key={index}/>
                    ))}

            </Row>






        </Container>
    );
}

export default SearchResult;


const allergy = [
    {allergy: '새우'},
    {allergy: '굴'},
    {allergy: '게'},
    {allergy: '복숭아'},
    {allergy: '홍합'},
    {allergy: '오징어'},
    {allergy: '전복'},
    {allergy: '고등어'},
    {allergy: '전복'},
    {allergy: '고등어'},
    {allergy: '조개류'},
    {allergy: '토마토'},
    {allergy: '메밀'},
    {allergy: '밀'},
    {allergy: '대두'},
    {allergy: '호두'},
    {allergy: '땅콩'},
    {allergy: '난류(가금류)'},
    {allergy: '우유'},
    {allergy: '쇠고기'},
    {allergy: '돼지고기'},
    {allergy: '아황산류'},
];


const disease = [
    {disease: '당뇨'},
    {disease: '고혈압 '},
    {disease: '비만'}
];
