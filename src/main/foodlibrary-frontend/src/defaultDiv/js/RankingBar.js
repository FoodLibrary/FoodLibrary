import React, {useEffect, useState} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, ButtonGroup, Col, ButtonDropdown} from 'reactstrap';
import '../css/RankingBarStyle.css';
import TopBar from "./TopBar";
import Container from "reactstrap/es/Container";
import {Link} from "react-router-dom";
import SearchService from "../../services/SearchService";
import ProductList from "../../SearchResultPage/js/ProductList";


const RankingBar = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const [onTimeRankingToggle, setOnTimeRankingToggle] = useState([]);
    useEffect(() => {
        SearchService.onTimeRankingToggle()
            .then(response => {
                setOnTimeRankingToggle(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    });

    function getOnclickRankingToggle() {
        SearchService.onTimeRankingToggle()
            .then(response => {
                setOnTimeRankingToggle(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }
        return (
            <Container>
                <Col xl={{size:1, offset:4}}>
                    <ButtonGroup className={"rankingToggleMenu"}>
                        <Link to={'/ranking'}>
                            <Button className={"rankingButton"}>
                                    랭킹
                            </Button>
                        </Link>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle caret className={"rankingToggle"}>
                                실시간 검색어 순위
                            </DropdownToggle>
                            <DropdownMenu id={"rankingToggle"} onClick={getOnclickRankingToggle}>
                                {/*{onTimeRankingToggle.map(() => (*/}
                                {/*    <DropdownItem id={"rankingToggleItem"}/>*/}
                                {/*))}*/}
                                <DropdownItem> 1. {onTimeRankingToggle[0]} </DropdownItem>
                                <DropdownItem> 2. {onTimeRankingToggle[1]} </DropdownItem>
                                <DropdownItem> 3. {onTimeRankingToggle[2]} </DropdownItem>
                                <DropdownItem> 4. {onTimeRankingToggle[3]} </DropdownItem>
                                <DropdownItem> 5. {onTimeRankingToggle[4]} </DropdownItem>
                                <DropdownItem> 6. {onTimeRankingToggle[5]} </DropdownItem>
                                <DropdownItem> 7. {onTimeRankingToggle[6]} </DropdownItem>
                                <DropdownItem> 8. {onTimeRankingToggle[7]} </DropdownItem>
                                <DropdownItem> 9. {onTimeRankingToggle[8]} </DropdownItem>
                                <DropdownItem> 10. {onTimeRankingToggle[9]} </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </ButtonGroup>
                </Col>

            </Container>

        );

}

export default RankingBar;