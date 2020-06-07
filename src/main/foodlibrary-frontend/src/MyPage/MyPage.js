import React, {useState} from 'react';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import Filtering from "../defaultDiv/js/Filtering";

import './MyPageStyles.css';
import EditMemberInfo from "../EditMemberInfoPage/EditMemberInfo";
import SignUp from "../SignUpPage/SignUp";


const MyPage = () =>  {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    };

        return (
            <Container id={"myPage"}>
                <Row id={"myPageTitleArea"}>
                    <Col xs={{size:4, offset:3}} md={{size:3,offset:5}} lg={{size:4,offset:4}} xl={{size:3,offset:5}}> <span id={"myPageTitle"}> My Page </span> </Col>
                </Row>
                <Nav tabs id={"MyPageTabs"}>
                    <NavItem>
                        <NavLink
                            id={"myPageTab"}
                            className={{ active: activeTab === '1' }}
                            onClick={() => { toggle('1'); }}
                        >
                            내 찜목록
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            id={"myPageTab"}
                            className={{ active: activeTab === '2' }}
                            onClick={() => { toggle('2'); }}
                        >
                            회원 정보 수정
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Row id={"myHeartTitle"}>  <Col xs={12} md={12}> <span className={"myHeart"} id={"myHeartText"}> 내 찜목록  </span> </Col> </Row>
                    </TabPane>

                    <TabPane tabId="2">
                        <Row>
                            <EditMemberInfo/>
                        </Row>

                    </TabPane>
                </TabContent>



            </Container>

        );

}

export default MyPage;