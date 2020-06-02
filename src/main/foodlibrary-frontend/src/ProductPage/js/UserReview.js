import React, {useEffect, useState} from 'react';
import {
    ListGroupItem,
    ListGroup,
    UncontrolledCollapse,
    Row,
    Col,
    Pagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap';
import '../css/UserReview.css';
import ReviewService from "../js/ReviewService";
import ReviewWrite from "./ReviewWrite";

function UserReview(props) {
    const [reviews, setReviews] = useState([]);
    const [reviewCount, setReviewCount] = useState(0);
    const [submit, setSubmit] = useState(false);
    const [productUserInfo, setProductUserInfo] = useState(props);
    const [userExistFlag, setUserExistFlag] = useState(true);

    useEffect(() => {
        retrieveReviews();
    }, []);

    const retrieveReviews = () => {
        ReviewService.getStarAverage()
            .then(response => {
                console.log(response.data + "별점 평균");
            }).catch(e => {
            console.log(e);
        });
        ReviewService.getReviewCount()
            .then(response => {
                setReviewCount(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        ReviewService.getAll()
            .then(response => {
                setReviews(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const allowReviewWrite = () => {
        ReviewService.isUserReview(localStorage.getItem('id'))
            .then(response => {
                setProductUserInfo(productUserInfo);
                setUserExistFlag(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        return userExistFlag;
    }

    const writeReview = () => {
        setSubmit(true);
        retrieveReviews();
    };

    const splitHashtag = (hashtagString) => {
        return hashtagString.split(",");
    };

    const deleteReview = () => {
        ReviewService.remove(productUserInfo.nickname)
            .then(response => {
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        retrieveReviews();
    };

    return (
        <React.Fragment>
            {submit ? (
                <ReviewWrite {...props} setSubmit={setSubmit} retrieveReviews={retrieveReviews}/>
            ) : (
                <ListGroup className="reviewListGroup">
                    <Row md={2} className="reviewInfoRow">
                        <Col md={{size: 2, offset: 7}}>
                            {reviewCount}
                        </Col>
                        {productUserInfo.nickname === "" || allowReviewWrite() ?
                            <Col></Col>
                            : <Col md={{size: 3}}>
                                <button onClick={writeReview}>
                                    리뷰작성
                                </button>
                            </Col>}
                    </Row>
                    {reviews &&
                    reviews.map((review, index) => (
                        <React.Fragment>
                            <ListGroupItem className="listItem" id={"review" + index} action>
                                <Row>
                                    <Col>
                                        <div className="userReviewTitle">
                                            {review.reviewtitle}
                                        </div>
                                    </Col>
                                    <Col md={{size: 3, offset: 4}}>
                                        {splitHashtag(review.reviewhashtag).map((oneHashtag, index) => (
                                            <div className="userReviewHashTag">
                                                {oneHashtag}
                                            </div>
                                        ))}
                                    </Col>
                                    <Col>
                                        <div className="userName">
                                            {review.nickname}
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="userReviewDate">
                                            {review.datetime}
                                        </div>
                                    </Col>
                                    <Col md="1">
                                        <div className="userReviewPoint">
                                            {review.star}
                                        </div>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <UncontrolledCollapse className={"collapse"} toggler={"#review" + index}>
                                <Row>
                                    <Col>
                                        {review.reviewdesc}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        {review.reviewimg}
                                    </Col>
                                </Row>
                                {review.nickname === productUserInfo.nickname ?
                                    <button onClick={deleteReview}>
                                        리뷰삭제
                                    </button> : <React.Fragment/>
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