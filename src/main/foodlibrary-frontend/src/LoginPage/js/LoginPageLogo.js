import React,{Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../css/LoginPageLogo.css';

const LoginPageLogo = () => {
        return(
            <Container>
                <Row>
                    <Col className="one" >
                        <img id="img" src='https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/86F49F96-783D-4A15-81E8-1DF8BE9138B0.png'/>
                        <span className="two">음식도서관</span>
                    </Col>
                </Row>
            </Container>
        );

}

export default LoginPageLogo;