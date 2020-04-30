import React, {Component} from 'react';
import '../../ReviewDefaultDiv/css/ReviewPageTitle.css';
import {Container, Row, Col} from 'reactstrap';


class ReviewWriteTitle extends Component {
    render() {
        return (
            <Container>
                <Row className={"Row"} xs={1}>
                    <Col className={"ReviewTitleCol"} xs={"auto"} md={"auto"}>
                        리뷰작성
                    </Col>
                </Row>
                <hr/>
            </Container>
        );
    }

}

export default ReviewWriteTitle;