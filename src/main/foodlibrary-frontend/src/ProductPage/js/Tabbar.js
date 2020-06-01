import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import ProductChart from './ProductChart';
import UserReview from './UserReview';
import '../css/Tabbar.css';

const Tabbar = (props) => {
  const [activeTab, setActiveTab] = useState('chart');

  const tabToggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === 'chart' })}
            onClick={() => { tabToggle('chart'); }}>
            식품분석표
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === 'userReview' })}
            onClick={() => { tabToggle('userReview'); }}>
            회원 리뷰
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="chart">
          <Row>
            <Col sm="12">
              <ProductChart/>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="userReview">
          <Row>
            <UserReview {...props}/>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Tabbar;

