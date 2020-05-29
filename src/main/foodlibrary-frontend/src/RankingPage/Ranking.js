import React, {Component} from 'react';
import './Ranking.css';
import {Container, Row, Col, ButtonDropdown, ButtonGroup} from 'reactstrap';
import RankingList from "./RankingList";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import TopBar from "../defaultDiv/js/TopBar";

class Ranking extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);

        this.state = {
            rankingName: 'resultRanking',
            rankingKind: '실시간 검색 순위',
            dropdownOpen: false,
        }

    }

    state1 = {
        rankingName: 'resultRanking',
        rankingKind: '실시간 검색 순위',
    }
    state2 = {
        rankingName: 'reviewRanking',
        rankingKind: '리뷰량 순위',
    }
    state3 = {
        rankingName: 'sexRanking',
        rankingKind: '성별 순위',
    }
    state4 = {
        rankingName: 'ageRanking',
        rankingKind: '나이별 순위',
    }
    handle = (e) => {
        if (e.target.className === this.state1.rankingName) {
            this.setState({
                rankingKind: this.state1.rankingKind,
                rankingName: this.state1.rankingName
            });
        } else if (e.target.className === this.state2.rankingName) {
            this.setState({
                rankingKind: this.state2.rankingKind,
                rankingName: this.state2.rankingName
            });
        } else if (e.target.className === this.state3.rankingName) {
            this.setState({
                rankingKind: this.state3.rankingKind,
                rankingName: this.state3.rankingName
            });
        } else if (e.target.className === this.state4.rankingName) {
            this.setState({
                rankingKind: this.state4.rankingKind,
                rankingName: this.state4.rankingName
            });
        }
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <div className="ranking">
                <TopBar />
                <div className="rankingSub">
                    <div className="rankingLogo">
                        BEST 10
                    </div>

                    <div className="kindOfRanking">
                        <a>{this.state.rankingKind}</a>
                        <ButtonGroup className={"sortToggleMenu"}>
                            <ButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle caret className={"sortToggle"}>
                                    실시간 검색어 순위
                                </DropdownToggle>
                                <DropdownMenu className={"sortMenu"}>
                                    <DropdownItem> 실시간 검색어 순위 </DropdownItem>
                                    <DropdownItem> 리뷰량 순위 </DropdownItem>
                                    <DropdownItem> 성별 순위 </DropdownItem>
                                    <DropdownItem> 나이 순위 </DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </ButtonGroup>
                    </div>
                    <div>
                        <RankingList/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ranking;
