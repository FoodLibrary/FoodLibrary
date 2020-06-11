import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import '../css/FilteringStyle.css';
const imageResources = require('../../util/ImageResources.js');

const Filtering = (props) =>{
    return (
        <Container>
            <Form>
                <Row id={"allergyTitle"}>
                    <Col xs={12} sm={12} md={{size:3, offset:2}} lg={{size:2, offset:2}}>
                        <span className={"allergyCheck"} id={"allergyText"}> [ 내 알레르기 ] </span>
                    </Col>
                </Row>
                <Row xs={12} sm={2} md={12} lg={12} id={"allergyRow"}>
                    <Col xs={4} sm={3} md={{size:2, offset:2}} lg={{size:2, offset:2}}>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" name="useralergy" id="새우" value="새우" onChange={() =>props.handleInputChange}/>
                                <span className={"allergyNames"} id={"shrimp"}> 새우 </span>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs={4} sm={3} md={2} lg={2}>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" name="useralergy" id="굴" value="굴" onChange={props.handleInputChange}/>
                                <span className={"allergyNames"} id={"oyster"}> 굴 </span>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs={4} sm={3} md={2} lg={2}>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" name="useralergy" id="게" value="게" onChange={props.handleInputChange}/>
                                <span className={"allergyNames"} id={"crab"}> 게 </span>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs={4} sm={3} md={2} lg={2}>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" name="useralergy" id="복숭아" value="복숭아" onChange={props.handleInputChange}/>
                                <span className={"allergyNames"} id={"peach"}> 복숭아 </span>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs={4} sm={3} md={{size:2, offset:2}} lg={{size:2, offset:2}}>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" name="useralergy" id="홍합" value="홍합" onChange={props.handleInputChange}/>
                                <span className={"allergyNames"} id={"mussel"}> 홍합 </span>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs={4} sm={3} md={2} lg={2}>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" name="useralergy" id="오징어" value="오징어" onChange={props.handleInputChange}/>
                                <span className={"allergyNames"} id={"squid"}> 오징어 </span>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs={4} sm={3} md={2} lg={2}>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" name="useralergy" id="전복" value="전복" onChange={props.handleInputChange}/>
                                <span className={"allergyNames"} id={"abalone"}> 전복 </span>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs={4} sm={3} md={2} lg={2}>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" name="useralergy" id="고등어" value="고등어" onChange={props.handleInputChange}/>
                                <span className={"allergyNames"} id={"mackerel"}> 고등어 </span>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs={4} sm={3} md={{size:2, offset:2}} lg={{size:2, offset:2}}>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" name="useralergy" id="조개류" value="조개류" onChange={props.handleInputChange}/>
                                <span className={"allergyNames"} id={"shell"}> 조개류 </span>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs={4} sm={3} md={2} lg={2}>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" name="useralergy" id="토마토" value="토마토" onChange={props.handleInputChange}/>
                                <span className={"allergyNames"} id={"tomato"}> 토마토 </span>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs={4} sm={3} md={2} lg={2}>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" name="useralergy" id="메밀" value="메밀" onChange={props.handleInputChange}/>
                                <span className={"allergyNames"} id={"buckwheat"}> 메밀 </span>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs={4} sm={3} md={2} lg={2}>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" name="useralergy" id="대두" value="대두" onChange={props.handleInputChange}/>
                                <span className={"allergyNames"} id={"soybean"}> 대두 </span>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs={4} sm={3} md={{size:2, offset:2}} lg={{size:2, offset:2}}>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" name="useralergy" id="호두" value="호두" onChange={props.handleInputChange}/>
                                <span className={"allergyNames"} id={"walnut"}> 호두 </span>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs={4} sm={3} md={2} lg={2}>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" name="useralergy" id="땅콩" value="땅콩" onChange={props.handleInputChange}/>
                                <span className={"allergyNames"} id={"peanut"}> 땅콩 </span>
                            </Label>
                        </FormGroup>
                    </Col>

                    <Col xs={4} sm={3} md={2} lg={2}>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" name="useralergy" id="우유" value="우유" onChange={props.handleInputChange}/>
                                <span className={"allergyNames"} id={"milk"}> 우유 </span>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs={4} sm={3} md={2} lg={2}>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" name="useralergy" id="쇠고기" value="쇠고기" onChange={props.handleInputChange}/>
                                <span className={"allergyNames"} id={"beef"}> 쇠고기 </span>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs={4} sm={3} md={{size:2, offset:2}} lg={{size:2, offset:2}}>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" name="useralergy" id="돼지고기" value="돼지고기" onChange={props.handleInputChange}/>
                                <span className={"allergyNames"} id={"pork"}> 돼지고기 </span>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs={4} sm={3} md={2} lg={2}>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" name="useralergy" id="아황산류" value="아황산류" onChange={props.handleInputChange}/>
                                <span className={"allergyNames"} id={"sulfurousAcid"}> 아황산류 </span>
                            </Label>
                        </FormGroup>

                    </Col>

                    <Col xs={5} sm={4} md={2} lg={2}>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" name="useralergy" id="난류(가금류)" value="난류(가금류)" onChange={props.handleInputChange}/>
                                <span className={"allergyNames"} id={"egg"}> 난류(가금류) </span>
                            </Label>
                        </FormGroup>
                    </Col>
                </Row>

                <Row id={"diseaseTitle"}>
                    <Col xs={12} sm={4} md={{size:3, offset:2}} lg={{size:2, offset:2}}>
                        <span className={"diseaseCheck"} id={"diseaseText"}>  [ 내 지병 ]  </span>
                    </Col>
                </Row>
                <Row  xs={12} sm={2} md={12} lg={12}>
                    <Col xs={4} sm={3} md={{size:2, offset:2}} lg={{size:2, offset:2}}>
                        <FormGroup check inline className={"diseaseCheck"}>
                            <Label check className={"disease"}>
                                <Input type="checkbox" name="userdisease" id="고혈압" value="고혈압" onChange={props.handleInputChange}/>
                                <span className={"diseaseNames"} id={"osteoporosis"}> 고혈압 </span>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col  xs={4} sm={3} md={2} lg={2}>
                        <FormGroup check inline className={"diseaseCheck"}>
                            <Label check className={"disease"}>
                                <Input type="checkbox" name="userdisease" id="요로결석" value="요로결석" onChange={props.handleInputChange} />
                                <span className={"diseaseNames"} id={"disease"}> 요로결석 </span>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs={4} sm={3} md={2} lg={2}>
                        <FormGroup check inline className={"diseaseCheck"}>
                            <Label check className={"disease"}>
                                <Input type="checkbox" name="userdisease" id="신부전증" value="신부전증" onChange={props.handleInputChange} />
                                <span className={"diseaseNames"} id={"disease"}> 신부전증 </span>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs={4} sm={3} md={2} lg={2}>
                        <FormGroup check inline className={"diseaseCheck"}>
                            <Label check className={"disease"}>
                                <Input type="checkbox" name="userdisease" id="위염" value="위염" onChange={props.handleInputChange} />
                                <span className={"diseaseNames"} id={"disease"}> 위염 </span>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs={4} sm={3} md={{size:2, offset:2}} lg={{size:2, offset:2}}>
                        <FormGroup check inline className={"diseaseCheck"}>
                            <Label check className={"disease"}>
                                <Input type="checkbox" name="userdisease" id="복부비만" value="복부비만" onChange={props.handleInputChange} />
                                <span className={"diseaseNames"} id={"disease"}> 복부비만 </span>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs={4} sm={3} md={2} lg={2}>
                        <FormGroup check inline className={"diseaseCheck"}>
                            <Label check className={"disease"}>
                                <Input type="checkbox" name="userdisease" id="이상지혈증" value="이상지혈증" onChange={props.handleInputChange} />
                                <span className={"diseaseNames"} id={"disease"}> 이상지혈증 </span>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs={4} sm={3} md={2} lg={2}>
                        <FormGroup check inline className={"diseaseCheck"}>
                            <Label check className={"disease"}>
                                <Input type="checkbox" name="userdisease" id="비만" value="비만" onChange={props.handleInputChange} />
                                <span className={"diseaseNames"} id={"disease"}> 비만 </span>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs={4} sm={3} md={2} lg={2}>
                        <FormGroup check inline className={"diseaseCheck"}>
                            <Label check className={"disease"}>
                                <Input type="checkbox" name="userdisease" id="간부전" value="간부전" onChange={props.handleInputChange} />
                                <span className={"diseaseNames"} id={"disease"}> 간부전 </span>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs={4} sm={3} md={{size:2, offset:2}} lg={{size:2, offset:2}}>
                        <FormGroup check inline className={"diseaseCheck"}>
                            <Label check className={"disease"}>
                                <Input type="checkbox" name="userdisease" id="신장질환" value="신장질환" onChange={props.handleInputChange} />
                                <span className={"diseaseNames"} id={"disease"}> 신장질환 </span>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs={4} sm={3} md={2} lg={2}>
                        <FormGroup check inline className={"diseaseCheck"}>
                            <Label check className={"disease"}>
                                <Input type="checkbox" name="userdisease" id="심근경색" value="심근경색" onChange={props.handleInputChange} />
                                <span className={"diseaseNames"} id={"disease"}> 심근경색 </span>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs={4} sm={3} md={2} lg={2}>
                        <FormGroup check inline className={"diseaseCheck"}>
                            <Label check className={"disease"}>
                                <Input type="checkbox" name="userdisease" id="변비" value="변비" onChange={props.handleInputChange} />
                                <span className={"diseaseNames"} id={"disease"}> 변비 </span>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs={4} sm={3} md={2} lg={2}>
                        <FormGroup check inline className={"diseaseCheck"}>
                            <Label check className={"disease"}>
                                <Input type="checkbox" name="userdisease" id="동맥경화증" value="동맥경화증" onChange={props.handleInputChange} />
                                <span className={"diseaseNames"} id={"disease"}> 동맥경화증 </span>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs={4} sm={3} md={{size:2, offset:2}} lg={{size:2, offset:2}}>
                        <FormGroup check inline className={"diseaseCheck"}>
                            <Label check className={"disease"}>
                                <Input type="checkbox" name="userdisease" id="협십증" value="협십증" onChange={props.handleInputChange} />
                                <span className={"diseaseNames"} id={"disease"}> 협십증 </span>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs={4} sm={3} md={2} lg={2}>
                        <FormGroup check inline className={"diseaseCheck"}>
                            <Label check className={"disease"}>
                                <Input type="checkbox" name="userdisease" id="암" value="암" onChange={props.handleInputChange} />
                                <span className={"diseaseNames"} id={"disease"}> 암 </span>
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs={4} sm={3} md={2} lg={2}>
                        <FormGroup check inline className={"diseaseCheck"}>
                            <Label check className={"disease"}>
                                <Input type="checkbox" name="userdisease" id="심장병" value="심장병" onChange={props.handleInputChange} />
                                <span className={"diseaseNames"} id={"disease"}> 심장병 </span>
                            </Label>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>

        </Container>
    );

}

export default Filtering;