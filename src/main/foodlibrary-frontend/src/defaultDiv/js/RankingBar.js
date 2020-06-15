import React, {useEffect, useState} from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button,
    ButtonGroup,
    Col,
    ButtonDropdown
} from 'reactstrap';
import '../css/RankingBarStyle.css';
import TopBar from "./TopBar";
import Container from "reactstrap/es/Container";
import {Link} from "react-router-dom";
import SearchService from "../../services/SearchService";
import ProductService from "../../ProductPage/js/ProductService";
import ProductList from "../../SearchResultPage/js/ProductList";
import {func} from "prop-types";


const RankingBar = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [selectedAllergy, setSelectedAllergy] = useState(["알러지없음"]);
    const [selectedDisease, setSelectedDisease] = useState(["질병없음"]);
    const [category, setCategory] = useState("없음");

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const [onTimeRankingToggle, setOnTimeRankingToggle] = useState([]);

    const getOnclickRankingToggle = () => {
        SearchService.onTimeRankingToggleBar()
            .then(response => {
                setOnTimeRankingToggle(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    const goToSearchPage = (rankingProduct) => {
        window.location.replace(`/searchResult/${category}/${rankingProduct}/${selectedAllergy}/${selectedDisease}`)
    };

    return (
        <Container>
            <Col xl={{size: 1, offset: 4}} id={"rankingToggleBar"}>
                <ButtonGroup className={"rankingToggleMenu"}>
                    <Link to={'/ranking'}>
                        <Button className={"rankingButton"}>
                            랭킹
                        </Button>
                    </Link>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret className={"rankingToggle"} onClick={getOnclickRankingToggle}>
                            실시간 검색어 순위
                        </DropdownToggle>
                        <DropdownMenu id={"rankingToggle"}>
                            {onTimeRankingToggle.map((ranking, i) => {
                                return (

                                    <DropdownItem key={i} className={"rankingToggleMenu"} onClick={() => {
                                        goToSearchPage(onTimeRankingToggle[i])
                                    }}>
                                        <span> {i + 1}. {onTimeRankingToggle[i]}</span>
                                    </DropdownItem>
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