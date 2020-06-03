
import React, {useEffect, useState} from 'react';
import './Ranking.css';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Container from "reactstrap/es/Container";
import ProductList from "../SearchResultPage/js/ProductList";
import SearchService from "../services/SearchService";

const Ranking = (props) => {
    const [activeTab, setActiveTab] = useState('1');
    let [allergyForReSearch, setAllergyForReSearch] = useState(["알러지없음"]);
    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    const [onTimeRanking, setOnTimeRanking] = useState([]);

    useEffect(() => {
        SearchService.onTimeRanking()
            .then(response => {
                setOnTimeRanking(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    });

    function onclickRankingOnTime() {
        toggle('1');
        SearchService.onTimeRanking()
            .then(response => {
                setOnTimeRanking(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }
    return (
        <Container>
            <Row>
                <Col xl={{size:6, offset:6}} id={"rankingTitle"}> 랭킹 </Col>
            </Row>

            <Nav tabs className={"rankingTab"} >
                <NavItem>
                    <NavLink  id={"resultRanking"}
                        className={classnames({ active: activeTab === '1' })}
                        onClick={onclickRankingOnTime}
                    >
                        실시간 검색어 순위
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink id={"reviewRanking"}
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        리뷰량 순위
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink id={"sexRanking"}
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => { toggle('3'); }}
                    >
                        성별 순위
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink id={"ageRanking"}
                        className={classnames({ active: activeTab === '4' })}
                        onClick={() => { toggle('4'); }}
                    >
                        나이별 순위
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row xl={3}>
                        {onTimeRanking.map((result, index) => (
                            <ProductList {...result} searchProduct={result.prdlstnm} allergyForReSearch={allergyForReSearch} key={index}/>
                        ))}
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>

                    </Row>
                </TabPane>
            </TabContent>
        </Container>
    );

}

export default Ranking;