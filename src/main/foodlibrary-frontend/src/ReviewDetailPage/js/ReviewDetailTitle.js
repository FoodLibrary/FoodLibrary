import React, {Component} from 'react';
import '../../ReviewDefaultDiv/css/ReviewPageTitle.css';
import {Container, Row, Col} from 'reactstrap';


const ReviewDetailTitle = () => {
        return (
            <Container>
                <Row className={"Row"} xs={1}>
                    <Col className={"ReviewTitleCol"} xs={"auto"} md={"auto"}>
                        리뷰상세
                    </Col>
                </Row>
                <hr/>
            </Container>
        );

}

export default ReviewDetailTitle;