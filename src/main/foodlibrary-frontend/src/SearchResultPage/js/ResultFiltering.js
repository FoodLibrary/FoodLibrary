import React, {Component, useState} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import '../css/ResultFiltering.css';
import '../../defaultDiv/css/FilteringStyle.css';
import axios from 'axios';
import Autocomplete from "@material-ui/lab/Autocomplete";


export default function  ResultFiltering(){
    return (
        <div></div>
    );
}



/*constructor(props) {
        super(props);
        this.state = {
            hidden: false,
        };
        this.handle = this.handle.bind(this);
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
                    <Row className="ResultFiltering">
                        <button className="ResultFilteringButton" onClick={this.handle}>
                                <img
                                    src="https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/117F0361-1F9E-40CD-82A1-C56C3E114CEF.png"
                                    className="ResultFilteringLogo"/>
                                검색어 필터링</button>
                    </Row>
                    <Row>
                    {this.state.hidden && <table className="Filtering" content="width= device-width">
                        <thead>
                        <tr>
                            <th scope="row" className="th">구분</th>
                            <th>Check List</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">알레르기</th>
                            <td>
                                <form id="allergyFiltering" className="allergyFiltering" method="post">
                                    <Container>
                                    <Row xs={12} md={12} lg={12} id={"allergyRow"}>
                                        <Col xs={4} md={3} lg={2}>
                                            <FormGroup check inline className={"allergyCheck"}>
                                                <Label check className={"allergy"}>
                                                    <Input type="checkbox" />
                                                    <span className={"allergyNames"} id={"shrimp"}> 새우 </span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col xs={4} md={3} lg={2}>
                                            <FormGroup check inline className={"allergyCheck"}>
                                                <Label check className={"allergy"}>
                                                    <Input type="checkbox" />
                                                    <span className={"allergyNames"} id={"oyster"}> 굴 </span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col xs={4} md={3} lg={2}>
                                            <FormGroup check inline className={"allergyCheck"}>
                                                <Label check className={"allergy"}>
                                                    <Input type="checkbox" />
                                                    <span className={"allergyNames"} id={"crab"}> 게 </span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col xs={4} md={3} lg={2}>
                                            <FormGroup check inline className={"allergyCheck"}>
                                                <Label check className={"allergy"}>
                                                    <Input type="checkbox" />
                                                    <span className={"allergyNames"} id={"peach"}> 복숭아 </span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col xs={4} md={3} lg={2}>
                                            <FormGroup check inline className={"allergyCheck"}>
                                                <Label check className={"allergy"}>
                                                    <Input type="checkbox" />
                                                    <span className={"allergyNames"} id={"mussel"}> 홍합 </span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col xs={4} md={3} lg={2}>
                                            <FormGroup check inline className={"allergyCheck"}>
                                                <Label check className={"allergy"}>
                                                    <Input type="checkbox" />
                                                    <span className={"allergyNames"} id={"squid"}> 오징어 </span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col xs={4} md={3} lg={2}>
                                            <FormGroup check inline className={"allergyCheck"}>
                                                <Label check className={"allergy"}>
                                                    <Input type="checkbox" />
                                                    <span className={"allergyNames"} id={"abalone"}> 전복 </span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col xs={4} md={3} lg={2}>
                                            <FormGroup check inline className={"allergyCheck"}>
                                                <Label check className={"allergy"}>
                                                    <Input type="checkbox" />
                                                    <span className={"allergyNames"} id={"mackerel"}> 고등어 </span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col xs={4} md={3} lg={2}>
                                            <FormGroup check inline className={"allergyCheck"}>
                                                <Label check className={"allergy"}>
                                                    <Input type="checkbox" />
                                                    <span className={"allergyNames"} id={"shell"}> 조개류 </span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col xs={4} md={3} lg={2}>
                                            <FormGroup check inline className={"allergyCheck"}>
                                                <Label check className={"allergy"}>
                                                    <Input type="checkbox" />
                                                    <span className={"allergyNames"} id={"tomato"}> 토마토 </span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col xs={4} md={3} lg={2}>
                                            <FormGroup check inline className={"allergyCheck"}>
                                                <Label check className={"allergy"}>
                                                    <Input type="checkbox" />
                                                    <span className={"allergyNames"} id={"buckwheat"}> 메밀 </span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col xs={4} md={3} lg={2}>
                                            <FormGroup check inline className={"allergyCheck"}>
                                                <Label check className={"allergy"}>
                                                    <Input type="checkbox" />
                                                    <span className={"allergyNames"} id={"soybean"}> 대두 </span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col xs={4} md={3} lg={2}>
                                            <FormGroup check inline className={"allergyCheck"}>
                                                <Label check className={"allergy"}>
                                                    <Input type="checkbox" />
                                                    <span className={"allergyNames"} id={"walnut"}> 호두 </span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col xs={4} md={3} lg={2}>
                                            <FormGroup check inline className={"allergyCheck"}>
                                                <Label check className={"allergy"}>
                                                    <Input type="checkbox" />
                                                    <span className={"allergyNames"} id={"peanut"}> 땅콩 </span>
                                                </Label>
                                            </FormGroup>
                                        </Col>

                                        <Col xs={4} md={3} lg={2}>
                                            <FormGroup check inline className={"allergyCheck"}>
                                                <Label check className={"allergy"}>
                                                    <Input type="checkbox" />
                                                    <span className={"allergyNames"} id={"milk"}> 우유 </span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col xs={4} md={3} lg={2}>
                                            <FormGroup check inline className={"allergyCheck"}>
                                                <Label check className={"allergy"}>
                                                    <Input type="checkbox" />
                                                    <span className={"allergyNames"} id={"beef"}> 쇠고기 </span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col xs={4} md={3} lg={2}>
                                            <FormGroup check inline className={"allergyCheck"}>
                                                <Label check className={"allergy"}>
                                                    <Input type="checkbox" />
                                                    <span className={"allergyNames"} id={"pork"}> 돼지고기 </span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col xs={4} md={3} lg={2}>
                                            <FormGroup check inline className={"allergyCheck"}>
                                                <Label check className={"allergy"}>
                                                    <Input type="checkbox" />
                                                    <span className={"allergyNames"} id={"sulfurousAcid"}> 아황산류 </span>
                                                </Label>
                                            </FormGroup>

                                        </Col>

                                        <Col xs={5} md={3} lg={2}>
                                            <FormGroup check inline className={"allergyCheck"}>
                                                <Label check className={"allergy"}>
                                                    <Input type="checkbox" />
                                                    <span className={"allergyNames"} id={"egg"}> 난류(가금류) </span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    </Container>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">지병 <span title="자신의 지병을 체크하면, 해당 질병에 좋지 않은 음식들은 제외하고 검색됩니다.">!</span></th>
                            <td>
                                <form id="diseaseFiltering" className="diseaseFiltering" method="post">
                                    <input type="checkbox" className="diseaseCheck" value="myDisease"/> 내정보
                                    <input type="checkbox" className="diseaseCheck" value="ex1"/> 질병a
                                    <input type="checkbox" className="diseaseCheck" value="ex2"/> 질병b
                                </form>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    }
                </Row>
            </Container>
    )
        ;
    }
* */