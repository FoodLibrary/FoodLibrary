import React, {useEffect, useState} from 'react';
import '../css/SearchResult.css';
import {Button, Col, Container, Popover, PopoverBody, PopoverHeader, Row} from 'reactstrap';
import ProductList from "./ProductList";
import Input from "reactstrap/es/Input";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import SearchService from "../../services/SearchService";

const imageResources = require('../../util/ImageResources');

const SearchResult = (props) => {
    const [category, setCategory] = useState(props.selectedCategory);

    const allergyForReSearch = props.selectedAllergy;
    const diseaseForReSearch = props.selectedDisease;

    let [selectedAllergies, setSelectedAllergy] = useState(props.selectedAllergy);
    let [selectedDiseases, setSelectedDisease] = useState([props.selectedDisease]);

    const [searchProduct, setSearchProduct] = useState(props.searchResults);
    const [searchResults, setResults] = useState([]);

    const [reSelectedAllergies, setReSelectedAllergy] = useState([]);
    const [reSelectedDisease, setReSelectedDisease] = useState([]);

    const onChangeAllergyInput = (event, value) => {
        setReSelectedAllergy(value);
    };

    const onChangeDiseaseInput = (event, value) => {
        setReSelectedDisease(value);
    };


    function initialAllergy() {
        setSelectedAllergy(selectedAllergies);
        let selectedAllergyArray = [];
        selectedAllergyArray = props.selectedAllergy.split(",");
        for (let i = 0; i < selectedAllergyArray.length; i++) {
            reSelectedAllergies[i] = {allergy: selectedAllergyArray[i]};
        }
        return reSelectedAllergies;
    }

    function initialDisease() {
        setSelectedDisease(selectedDiseases);
        let selectedDiseaseArray = [];
        selectedDiseaseArray = props.selectedDisease.split(",");
        for (let i = 0; i < selectedDiseaseArray.length; i++) {
            reSelectedDisease[i] = {disease: selectedDiseaseArray[i]};
        }
        return reSelectedDisease;
    }

    const [allergyAndDisease, setAllergyAndDisease] = useState([]);

    function initialAllergyAndDisease() {
        let allergyAndDisease = [];
        for (let i = 0; i < reSelectedAllergies.length; i++) {
            allergyAndDisease[i] = reSelectedAllergies[i];
        }
        for (let j = reSelectedAllergies.length; j < reSelectedAllergies.length + reSelectedDisease.length; j++) {
            allergyAndDisease[j] = reSelectedDisease[j - reSelectedAllergies.length];
        }
        return allergyAndDisease;
    }

    const [inputValue, setInputValue] = useState("좋아요");
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggleInfo = () => setPopoverOpen(!popoverOpen);

    const nickname = localStorage.getItem('id');


    useEffect(() => {
        setReSelectedAllergy(initialAllergy);
        setReSelectedDisease(initialDisease);
    },[]);


    useEffect(() => {
        SearchService.findByProductName(searchProduct, category, inputValue , allergyAndDisease , nickname)
            .then(response => {
                setSearchProduct(props.searchResults);
                setAllergyAndDisease(initialAllergyAndDisease);
                setResults(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    },[allergyAndDisease]);



    return (
        <Container>
            <Row>
                <Col>
                    <div id={"ResultTitle"}> 검색 결과</div>
                </Col>
            </Row>

            <hr id={"searchResultHR"}/>
            <Row xl={2}>
                <Col xl={5}>
                    <Autocomplete
                        multiple
                        className={"allergyFiltering"}
                        size="small"
                        options={allergy}
                        getOptionLabel={(option) => option.allergy}
                        onChange={onChangeAllergyInput}
                        onInputChange={onChangeAllergyInput}
                        onClick={onChangeAllergyInput}
                        defaultValue={reSelectedAllergies}
                        renderInput={allergy => (
                            <TextField {...allergy}  variant="outlined" label={"알러지 선택"}/>
                        )}
                    />
                </Col>
                <Col xl={5}>
                    <Autocomplete
                        multiple
                        className={"diseaseFiltering"}
                        size="small"
                        options={disease}
                        getOptionLabel={(option) => option.disease}
                        onChange={onChangeDiseaseInput}
                        onInputChange={onChangeDiseaseInput}
                        onClick={onChangeDiseaseInput}
                        defaultValue={reSelectedDisease}
                        renderInput={disease => (
                            <TextField {...disease}  variant="outlined" label={"질병 선택"}/>
                        )}
                    />
                </Col>
                <Col xl={2}>
                    <Button id="infoImgButton" type="button">
                        <img src={imageResources.info} id={"infoImg"}/>
                    </Button>
                    <Popover placement="bottom" isOpen={popoverOpen} target="infoImgButton" toggle={toggleInfo}>
                        <PopoverHeader> 필터링 설명 </PopoverHeader>
                        <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                    </Popover>
                </Col>

            </Row>

            <Row className="classificationRow">
                <Col xl={7} id={"productResultMessage"}>
                    총 <span id={"productCount"}> {searchResults.length} </span>개의 식품이 검색되었습니다.
                </Col>
                <Col xl={1} id={"sortingTitle"}> 정렬 : </Col>
                <Col xl={1} id={"sortingArea"}>
                    <Input type="select" className={"selectSort"} onChange={e => setInputValue(e.target.value)}
                           value={inputValue}>
                        <option className={"selectSort"} value={"좋아요"} > 좋아요순 </option>
                        <option className={"selectSort"} value={"별점"}> 별점순 </option>
                        <option className={"selectSort"} value={"리뷰량"}> 리뷰순 </option>
                    </Input>
                </Col>

            </Row>

            <Row xl={3}>

                {searchResults.map((result, index) => (
                    <ProductList {...result} searchProduct={searchProduct} allergyForReSearch={allergyForReSearch} diseaseForReSearch={diseaseForReSearch} key={index}/>
                ))}

            </Row>


        </Container>
    );
}

export default SearchResult;



const allergy = [
    {allergy: '내 알러지'},
    {allergy: '새우'},
    {allergy: '굴'},
    {allergy: '게'},
    {allergy: '복숭아'},
    {allergy: '홍합'},
    {allergy: '오징어'},
    {allergy: '전복'},
    {allergy: '고등어'},
    {allergy: '전복'},
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
    {disease: '내 질병'},
    {disease: '고혈압'},
    {disease: '요로결석'},
    {disease: '신부전증'},
    {disease: '위염'},
    {disease: '복부비만'},
    {disease: '이상지혈증'},
    {disease: '비만'},
    {disease: '간부전'},
    {disease: '신장질환'},
    {disease: '심근경색'},
    {disease: '변비'},
    {disease: '동맥경화증'},
    {disease: '협십증'},
    {disease: '암'},
    {disease: '심장병'},
];

