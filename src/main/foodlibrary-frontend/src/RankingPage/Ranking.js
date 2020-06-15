
import React, {useEffect, useState} from 'react';
import './Ranking.css';
import { TabContent, TabPane, Nav, NavItem, NavLink,  Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Container from "reactstrap/es/Container";
import ProductList from "../SearchResultPage/js/ProductList";
import SearchService from "../services/SearchService";
import Input from "reactstrap/es/Input";

const Ranking = (props) => {
    const [activeTab, setActiveTab] = useState('1');
    let [allergyForReSearch, setAllergyForReSearch] = useState(["알러지없음"]);
    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    const [onTimeRanking, setOnTimeRanking] = useState([]);
    const [reviewRanking, setReviewRanking] = useState([]);
    const [sexRanking, setSexRanking] = useState([]);
    const [ageRanking, setAgeRanking] = useState([]);

    const [inputSexValue, setInputSexValue] = useState("남자");
    const [inputAgeValue, setInputAgeValue] = useState("20대");

    useEffect(() => {

        SearchService.onTimeRanking()
            .then(response => {

                setOnTimeRanking(response.data);
            })
            .catch(e => {
                console.log(e);
            });

    });

    useEffect(() => {
        SearchService.ageRanking(inputAgeValue)
            .then(response => {
                setInputAgeValue(inputAgeValue);
                setAgeRanking(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    },[inputAgeValue]);

    useEffect(() => {
        SearchService.sexRanking(inputSexValue)
            .then(response => {

                setInputSexValue(inputSexValue);
                setSexRanking(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    },[inputSexValue]);

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

    function onClickReview() {
        toggle('2');
        SearchService.reviewRanking()
            .then(response => {
                setReviewRanking(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    const onClickSexRanking = () => {
        toggle('3');
        SearchService.sexRanking(inputSexValue)
            .then(response => {

                setInputSexValue(inputSexValue);
                setSexRanking(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    const onClickAgeRanking = () => {
        toggle('4');

        SearchService.ageRanking(inputAgeValue)
            .then(response => {
                setInputAgeValue(inputAgeValue);
                setAgeRanking(response.data);
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
                        실시간 검색 순위
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink id={"reviewRanking"}
                        className={classnames({ active: activeTab === '2' })}
                        onClick={onClickReview}
                    >
                        리뷰량 순위
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink id={"sexRanking"}
                        className={classnames({ active: activeTab === '3' })}
                        onClick={onClickSexRanking}
                    >
                        성별 순위
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink id={"ageRanking"}
                        className={classnames({ active: activeTab === '4' })}
                        onClick={onClickAgeRanking}
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
                        <Row xl={3}>
                            {reviewRanking.map((result, index) => (
                                <ProductList {...result} searchProduct={result.prdlstnm} allergyForReSearch={allergyForReSearch} key={index}/>
                            ))}
                        </Row>
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <Row id={"sexRankingSelectArea"}>
                        <Col xl={8}></Col>
                        <Col xl={3}>
                            <span id={"sexRankingSelect"}> 성별 선택 : </span>
                        </Col>
                        <Col xl={1} >
                            <Input id={"sexSelect"} type={"select"} onChange={e => setInputSexValue(e.target.value)} value={inputSexValue}>
                                <option value={"남자"}> 남성 </option>
                                <option value={"여자"}> 여성 </option>
                            </Input>
                        </Col>
                    </Row>
                    <Row>
                        <Row xl={3}>
                            {sexRanking.map((result, index) => (
                                <ProductList {...result} searchProduct={result.prdlstnm} allergyForReSearch={allergyForReSearch} key={index}/>
                            ))}
                        </Row>
                    </Row>
                </TabPane>

                <TabPane tabId="4">
                    <Row id={"ageRankingSelectArea"}>
                        <Col xl={8}></Col>
                        <Col xl={2}>
                            <span id={"ageSelect"}> 연령 선택 : </span>
                        </Col>
                        <Col xl={1}>
                            <Input id={"ageInput"} type={"select"} onChange={e => setInputAgeValue(e.target.value)} value={inputAgeValue}>
                                <option value={"10대"}> 10대 </option>
                                <option value={"20대"} defaultChecked={true}> 20대 </option>
                                <option value={"30대"}> 30대 </option>
                                <option value={"40대"}> 40대 </option>
                                <option value={"50대"}> 50대 </option>
                                <option value={"60대이상"}> 60대 이상 </option>
                            </Input>
                        </Col>
                    </Row>
                    <Row>
                        <Row xl={3}>
                            {ageRanking.map((result, index) => (
                                <ProductList {...result} searchProduct={result.prdlstnm} allergyForReSearch={allergyForReSearch} key={index}/>
                            ))}
                        </Row>
                    </Row>
                </TabPane>
            </TabContent>
        </Container>
    );

}

export default Ranking;