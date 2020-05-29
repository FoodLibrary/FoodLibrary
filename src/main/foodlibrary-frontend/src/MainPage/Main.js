import React, {Component} from 'react';
import './Main.css';
import Navbar from "react-bootstrap/Navbar";
import {Container, Row, Col, Form, FormControl} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import RankingBar from "../defaultDiv/js/RankingBar";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import {ButtonDropdown} from "reactstrap";
import axios from "axios";
import {Link, Route} from "react-router-dom";

const imageResources = require('../util/ImageResources.js');

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hidden: false,
            ranking1: '',
            ranking2: '',
            ranking3: '',
            ranking4: '',
            ranking5: '',
        };
        this.handle = this.handle.bind(this);
    }

    callApi = () => {
        axios.post("http://localhost:8081/api/productLikeRanking")
            .then(res => {
                this.setState({
                    ranking1: res.data[0].prdlstreportno,
                    ranking2: res.data[1].prdlstreportno,
                    ranking3: res.data[2].prdlstreportno,
                    ranking4: res.data[3].prdlstreportno,
                    ranking5: res.data[4].prdlstreportno,
                })
            })

    }


    componentDidMount() {
        this.callApi();
    }

    handle = () => {
        if (!this.state.hidden) {
            this.setState((Filtering) => ({hidden: true}));
        } else {
            this.setState((Filtering) => ({hidden: false}));
        }
    }


    render() {
        return (
            <Container>

                <Navbar expand="md" className={"topBar"}>
                    <button className={"categoryImgArea"}><img src={imageResources.categoryImg}
                                                               className={"categoryImgArea"}/></button>
                    <Nav> <RankingBar/> </Nav>
                    <Nav.Link id={"loginButton"}> <span id={"login"}> 로그인 </span> </Nav.Link>
                    <Nav.Link> <span id={"memberImageArea"}> <img src={imageResources.notMemberImage}
                                                                  className={"memberImage"}/> </span> </Nav.Link>
                </Navbar>
                <Route>
                    <a><Link to={"/ProductPage"}>product </Link></a>
                    <a><Link to={"/SearchResultPage"}>searchResult </Link></a>
                </Route>
                <div>{this.state.ranking1}</div>
                <div>{this.state.ranking2}</div>
                <div>{this.state.ranking3}</div>
                <div>{this.state.ranking4}</div>
                <div>{this.state.ranking5}</div>

                {/*<Container className ="main">
                    <Navbar.Brand href="#home" className={"title"}> <img src={imageResources.logoImg} id={"logoImg"}/> <span id={"title"}> 음식도서관 </span> </Navbar.Brand>

                    <Navbar id="basic-navbar-nav">
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" id={"mainSearchArea"} />
                            <Button className={"mainSearchButton"}><img src={imageResources.searchButtonImg} id={"mainSearchButton"}/></Button>
                    </Navbar>
                    <ButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggle} className ={"FilteringDropdown"}>
                        <DropdownToggle caret className={"FilteringToggle"}>
                            검색어 필터링
                        </DropdownToggle>
                        <DropdownMenu className={"FilteringMenu"}>

                        </DropdownMenu>
                    </ButtonDropdown>
                </Container>*/}

            </Container>
        );
    }
}


export default Main;