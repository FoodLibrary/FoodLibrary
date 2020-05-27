import React ,{Component} from 'react';
import LoginPageLogo from './LoginPageLogo';
import LoginPageFoot from './LoginPageFoot'
import '../css/LoginPage.css';
import { Container } from 'reactstrap';
import TopBar from "../../defaultDiv/js/TopBar";

const LoginPage = () => {
    return (
      <div className="LoginPage">
          <TopBar/>
          <LoginPageLogo/>
          <LoginPageFoot/>
      </div>
    );

}
export default LoginPage;
