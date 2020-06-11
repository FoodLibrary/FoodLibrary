import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Container} from 'reactstrap';
import classnames from 'classnames';
import ProductChart from './ProductChart';
import UserReview from './UserReview';
import '../css/Tabbar.css';
import Blog from "./Blog";

const Tabbar = (props) => {

  const [activeTab, setActiveTab] = useState('chart');

  const tabToggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
      <Container id={"productDetailTab"}>
        <Nav tabs>
          <NavItem>
            <NavLink
                className={classnames({ active: activeTab === 'chart' })}
                onClick={() => { tabToggle('chart'); }}>
              <span className={"tabMenu"}> 식품분석표 </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
                className={classnames({ active: activeTab === 'userReview' })}
                onClick={() => { tabToggle('userReview'); }}>
              <span className={"tabMenu"}> 회원 리뷰 </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
                className={classnames({ active: activeTab === 'blog' })}
                onClick={() => { tabToggle('blog'); }}>
              <span className={"tabMenu"}> 블로그 </span>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="chart">
            <Row>
              <Col sm="12">
                <ProductChart {...props} nutrient={props.nutrient} productHashtag={props.productHashTag}/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="userReview">
            <Col>
              <UserReview {...props}/>
            </Col>
          </TabPane>
          <TabPane tabId="blog">
            <Col>
              <Blog {...props}/>
            </Col>
          </TabPane>
        </TabContent>
      </Container>
  );
}

export default Tabbar;
