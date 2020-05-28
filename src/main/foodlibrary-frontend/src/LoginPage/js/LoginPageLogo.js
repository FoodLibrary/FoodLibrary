import React,{Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../css/LoginPageLogo.css';

const imageResources = require('../../util/ImageResources');

const LoginPageLogo = () => {
        return(
            <Container>
                <Row>
                    <Col> Login </Col>
                </Row>
            </Container>
        );

}

export default LoginPageLogo;