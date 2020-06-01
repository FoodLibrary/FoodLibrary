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
                                {onTimeRankingToggle.map((ranking,i) => {
                                    return (<DropdownItem key={i}>
                                        <Link to={"/productPage"}>
                                            {i+1}.  {onTimeRankingToggle[i]}

                                        </Link>

                                    </DropdownItem>);
                                    })}
                            </DropdownMenu>
                        </Dropdown>
                    </ButtonGroup>
                </Col>

            </Container>

        );

}

export default RankingBar;