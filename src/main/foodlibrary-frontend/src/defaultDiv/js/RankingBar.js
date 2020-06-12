import React, {useEffect, useState} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, ButtonGroup, Col, ButtonDropdown} from 'reactstrap';
import '../css/RankingBarStyle.css';
import TopBar from "./TopBar";
import Container from "reactstrap/es/Container";
import {Link} from "react-router-dom";
import SearchService from "../../services/SearchService";
import ProductService from "../../ProductPage/js/ProductService";
import ProductList from "../../SearchResultPage/js/ProductList";


const RankingBar = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [selectedAllergy, setSelectedAllergy] = useState(["알러지없음"]);
    const [selectedDisease, setSelectedDisease] = useState(["질병없음"]);
    const [category, setCategory] = useState("없음");
    const [searchResults, setResults] = useState([]);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const [onTimeRankingToggle, setOnTimeRankingToggle] = useState([]);

    function getOnclickRankingToggle() {
        SearchService.onTimeRankingToggleBar()
            .then(response => {
                console.log(response.data.length)
                setOnTimeRankingToggle(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

        return (
            <Container>
                <Col xl={{size:1, offset:4}} id={"rankingToggleBar"}>
                    <ButtonGroup className={"rankingToggleMenu"}>
                        <Link to={'/ranking'}>
                            <Button className={"rankingButton"}>
                                    랭킹
                            </Button>
                        </Link>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle} >
                            <DropdownToggle caret className={"rankingToggle"} onClick={getOnclickRankingToggle}>
                                실시간 검색어 순위
                            </DropdownToggle>
                            <DropdownMenu id={"rankingToggle"} >
                                {onTimeRankingToggle.map((ranking,i) => {
                                    return (
                                        <Link to={`/searchResult/${category}/${onTimeRankingToggle[i]}/${selectedAllergy}/${selectedDisease}`}>
                                            <DropdownItem key={i} className={"rankingToggleMenu"}>
                                            {i+1}.  {onTimeRankingToggle[i]}
                                            </DropdownItem>
                                        </Link>
                                    );
                                    })}
                            </DropdownMenu>
                        </Dropdown>
                    </ButtonGroup>
                </Col>

            </Container>

        );

}

export default RankingBar;