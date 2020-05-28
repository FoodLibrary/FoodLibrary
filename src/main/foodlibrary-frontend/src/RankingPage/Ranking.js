
import React, { useState } from 'react';
import './Ranking.css';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Container from "reactstrap/es/Container";
import ProductList from "../SearchResultPage/js/ProductList";

const Ranking = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
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
                        onClick={() => { toggle('1'); }}
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
                    <Row>

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

// <Row className="rankingLogo">
//     <Col>
//         음식 도서관 랭킹
//     </Col>
// </Row>
// <hr/>
// <Row className={"rankingKind"} xs="4">
//     <button className={"resultRanking"} id="resultRanking" >
//     <img
// src="https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/6399E055-ACA5-438A-AEFD-406B4F531372.png"
// className="logoImage"/>
//     실검 순위
// </button>
// <button className={"reviewRanking"} id="reviewRanking" >
//     <img
//         src="https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/ED33B7B2-771C-4141-AF3A-1FCD3A36AB86.png"
//         className="logoImage"/>
//     리뷰량 순위
// </button>
// <button className={"sexRanking"} id="sexRanking" onClick={this.handle}>
//     <img
// src="https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/06A83087-E0DD-429F-978F-9976D61E7C0A.png"
// className="logoImage"/>
//     성별 순위
// </button>
// <button className={"ageRanking"} id="ageRanking" onClick={this.handle}>
//     <img
//         src="https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/702B2C61-98FB-4228-8086-F08992A26BFE.png"
//         className="logoImage"/>
//     나이별 순위
// </button>
// </Row>
// <hr/>
// <Row className="rankingResult">
//     <Col className="kind" xs={5.5}>
//     <img src={this.state.rankingImage} className="nowRanking"/>
//     {this.state.rankingKind}
// </Col>
// </Row>

//
// constructor(props) {
//     super(props);
//
//     this.state = {
//         rankingName: 'resultRanking',
//         rankingKind: '실시간 검색 순위',
//         rankingImage: 'https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/6399E055-ACA5-438A-AEFD-406B4F531372.png'
//     }
// }
//
// state1 = {
//     rankingName: 'resultRanking',
//     rankingKind: '실시간 검색 순위',
//     rankingImage: 'https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/6399E055-ACA5-438A-AEFD-406B4F531372.png'
// }
// state2 = {
//     rankingName: 'reviewRanking',
//     rankingKind: '리뷰량 순위',
//     rankingImage: 'https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/ED33B7B2-771C-4141-AF3A-1FCD3A36AB86.png'
// }
// state3 = {
//     rankingName: 'sexRanking',
//     rankingKind: '성별 순위',
//     rankingImage: 'https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/06A83087-E0DD-429F-978F-9976D61E7C0A.png'
// }
// state4 = {
//     rankingName: 'ageRanking',
//     rankingKind: '나이별 순위',
//     rankingImage: 'https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/702B2C61-98FB-4228-8086-F08992A26BFE.png'
// }
// handle = (e) => {
//     if (e.target.className === this.state1.rankingName) {
//         this.setState({
//             rankingImage: this.state1.rankingImage,
//             rankingKind: this.state1.rankingKind,
//             rankingName: this.state1.rankingName
//         });
//     } else if (e.target.className === this.state2.rankingName) {
//         this.setState({
//             rankingImage: this.state2.rankingImage,
//             rankingKind: this.state2.rankingKind,
//             rankingName: this.state2.rankingName
//         });
//     } else if (e.target.className === this.state3.rankingName) {
//         this.setState({
//             rankingImage: this.state3.rankingImage,
//             rankingKind: this.state3.rankingKind,
//             rankingName: this.state3.rankingName
//         });
//     } else if (e.target.className === this.state4.rankingName) {
//         this.setState({
//             rankingImage: this.state4.rankingImage,
//             rankingKind: this.state4.rankingKind,
//             rankingName: this.state4.rankingName
//         });
//     }
// }
//
