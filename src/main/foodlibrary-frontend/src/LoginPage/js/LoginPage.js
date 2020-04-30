import React ,{Component} from 'react';
import LoginPageLogo from './LoginPageLogo';
import LoginPageFoot from './LoginPageFoot'
import '../css/LoginPage.css';
import { Container } from 'reactstrap';

class LoginPage extends Component {
  render(){
    return (
      <Container className="LoginPage">
          <LoginPageLogo/>
          <LoginPageFoot/>
      </Container>
    );
  }
}
export default LoginPage;
