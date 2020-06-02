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