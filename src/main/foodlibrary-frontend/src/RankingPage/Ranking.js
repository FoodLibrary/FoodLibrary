import React, {Component} from 'react';
import './Ranking.css';
import {Container, Row, Col} from 'reactstrap';
import {Button} from "react-bootstrap";

class Ranking extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rankingName: 'resultRanking',
            rankingKind: '실시간 검색 순위',
            rankingImage: 'https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/6399E055-ACA5-438A-AEFD-406B4F531372.png'
        }
    }

    state1 = {
        rankingName: 'resultRanking',
        rankingKind: '실시간 검색 순위',
        rankingImage: 'https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/6399E055-ACA5-438A-AEFD-406B4F531372.png'
    }
    state2 = {
        rankingName: 'reviewRanking',
        rankingKind: '리뷰량 순위',
        rankingImage: 'https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/ED33B7B2-771C-4141-AF3A-1FCD3A36AB86.png'
    }
    state3 = {
        rankingName: 'sexRanking',
        rankingKind: '성별 순위',
        rankingImage: 'https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/06A83087-E0DD-429F-978F-9976D61E7C0A.png'
    }
    state4 = {
        rankingName: 'ageRanking',
        rankingKind: '나이별 순위',
        rankingImage: 'https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/702B2C61-98FB-4228-8086-F08992A26BFE.png'
    }
    handle = (e) => {
        if (e.target.className === this.state1.rankingName) {
            this.setState({
                rankingImage: this.state1.rankingImage,
                rankingKind: this.state1.rankingKind,
                rankingName: this.state1.rankingName
            });
        } else if (e.target.className === this.state2.rankingName) {
            this.setState({
                rankingImage: this.state2.rankingImage,
                rankingKind: this.state2.rankingKind,
                rankingName: this.state2.rankingName
            });
        } else if (e.target.className === this.state3.rankingName) {
            this.setState({
                rankingImage: this.state3.rankingImage,
                rankingKind: this.state3.rankingKind,
                rankingName: this.state3.rankingName
            });
        } else if (e.target.className === this.state4.rankingName) {
            this.setState({
                rankingImage: this.state4.rankingImage,
                rankingKind: this.state4.rankingKind,
                rankingName: this.state4.rankingName
            });
        }
    }

    render() {
        return (
            <Container>
                <Row className="rankingLogo" >
                    <Col>
                        <img
                            src="https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/EEEF53B2-9211-440D-853D-15128F3973EB.png"
                            className="rankingImage"/>
                        음식 도서관 랭킹
                    </Col>
                </Row>
                <hr/>
                <Row className={"rankingKind"} xs="4">
                    <button className={"resultRanking"} id="resultRanking" onClick={this.handle}>
                        <img
                            src="https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/6399E055-ACA5-438A-AEFD-406B4F531372.png"
                            className="logoImage"/>
                        실검 순위
                    </button>
                    <button className={"reviewRanking"} id="reviewRanking" onClick={this.handle}>
                        <img
                            src="https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/ED33B7B2-771C-4141-AF3A-1FCD3A36AB86.png"
                            className="logoImage"/>
                        리뷰량 순위
                    </button>
                    <button className={"sexRanking"} id="sexRanking" onClick={this.handle}>
                        <img
                            src="https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/06A83087-E0DD-429F-978F-9976D61E7C0A.png"
                            className="logoImage"/>
                        성별 순위
                    </button>
                    <button className={"ageRanking"} id="ageRanking" onClick={this.handle}>
                        <img
                            src="https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/702B2C61-98FB-4228-8086-F08992A26BFE.png"
                            className="logoImage"/>
                        나이별 순위
                    </button>
                </Row>
                <hr/>
                <Row className="rankingResult">
                    <Col className="kind" xs={5.5}>
                        <img src={this.state.rankingImage} className="nowRanking"/>
                        {this.state.rankingKind}
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Ranking;
