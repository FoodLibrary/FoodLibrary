import React, {Component} from 'react';
import '../css/Cancel.css';
import {Container, Row, Col, Button} from 'reactstrap';

const Cancel = () => {
        return (
            <Container>
                <Row>
                    <Col xs={{size:2, offset:5}} md={{size:2, offset:5}}>
                        <Button className={"CancelButton"}>
                            닫기
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
}

export default Cancel;
