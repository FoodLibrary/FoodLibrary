import React, {useEffect, useState} from 'react';
import {
    ListGroupItem,
    ListGroup,
    UncontrolledCollapse,
    Row,
    Col,
    Pagination,
    PaginationItem,
    PaginationLink,
    Button
} from 'reactstrap';
import '../css/UserReview.css';
import ReviewService from "../js/ReviewService";
import ReviewWrite from "./ReviewWrite";

function UserReview(props) {
    const [reviews, setReviews] = useState([]);
    const [reviewCount, setReviewCount] = useState(0);
    const [submit, setSubmit] = useState(false);
    const [productUserInfo, setProductUserInfo] = useState({
        prdlstreportno: props.productNumber,
        nickname: props.nickname
    });
    const [userExistFlag, setUserExistFlag] = useState(true);

    useEffect(() => {
        retrieveReviews();
    }, []);

    const retrieveReviews = () => {
        ReviewService.getAll(productUserInfo.prdlstreportno)
            .then(response => {
                setReviews(response.data);
                setReviewCount(response.data.length);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const allowReviewWrite = () => {
        ReviewService.isUserReview(productUserInfo)
            .then(response => {
                setUserExistFlag(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        return userExistFlag;
    }

    const writeReview = () => {
        setSubmit(true);
    };

    const splitHashtag = (hashtagString) => {
        return hashtagString.split(",");
    };

    const deleteReview = () => {
        ReviewService.remove(productUserInfo)
            .then(response => {
                retrieveReviews();
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <React.Fragment>
            {submit ? (
                <ReviewWrite {...productUserInfo} setSubmit={setSubmit} retrieveReviews={retrieveReviews}/>
            ) : (
                <ListGroup className="reviewListGroup">
                    <Row xl={2} className="reviewInfoRow">
                        {productUserInfo.nickname === "" || allowReviewWrite() ?
                            <Col xl={2}></Col>
                            : <Col xl={2}>
                                <Button onClick={writeReview} id={"reviewWriteButton"}>
                                    리뷰작성
                                </Button>
                            </Col>}
                        <Col xl={2} id={"productReviewCount"}>
                            <span > 이 제품의 리뷰 갯수 : {reviewCount} </span>
                        </Col>

                    </Row>
                    {reviews &&
                    reviews.map((review, index) => (
                        <React.Fragment>
                            <ListGroupItem className="listItem" id={"review" + index} action>
                                <Row>
                                    <Col className="userReviewTitle" xl={4}>
                                        {review.reviewtitle}
                                    </Col>
                                    <Col xl={3}>
                                        {splitHashtag(review.reviewhashtag).map((oneHashtag, index) => (
                                            <div className="userReviewHashTag">
                                                {oneHashtag}
                                            </div>
                                        ))}
                                    </Col>
                                    <Col xl={2}>
                                        <div className="userName">
                                            {review.nickname}
                                        </div>
                                    </Col>
                                    <Col xl={2}>
                                        <div className="userReviewDate">
                                            {review.datetime}
                                        </div>
                                    </Col>
                                    <Col md="1" xl={1}>
                                        <div className="userReviewPoint">
                                            {review.star}
                                        </div>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <UncontrolledCollapse className={"collapse"} toggler={"#review" + index}>
                                <Row> <span id={"reviewTextTitle"}> [내용] </span> </Row>
                                <Row>
                                    <Col id={"reviewText"}>
                                        {review.reviewdesc}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        {review.reviewimg}
                                    </Col>
                                </Row>
                                {review.nickname === productUserInfo.nickname ?
                                    <Button onClick={deleteReview} id={"deleteReview"}>
                                        리뷰삭제
                                    </Button> : <React.Fragment/>
                                }
                            </UncontrolledCollapse>
                        </React.Fragment>
                    ))}
                    <Pagination className="pagination" aria-label="Page navigation example">
                        <PaginationItem>
                            <PaginationLink first href="#"/>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink previous href="#"/>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                1
                            </PaginationLink>
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationLink next href="#"/>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink last href="#"/>
                        </PaginationItem>
                    </Pagination>
                </ListGroup>
            )}

        </React.Fragment>
    );
}

export default UserReview;