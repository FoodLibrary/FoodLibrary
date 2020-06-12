import React, {useEffect, useState} from 'react';
import {
    ListGroupItem,
    ListGroup,
    UncontrolledCollapse,
    Row,
    Col, NavLink,
} from 'reactstrap';
import '../css/UserReview.css';
import ReviewPagination from "./ReviewPagination";
import BlogService from "./BlogService";

function Blog(props) {
    const [blogs, setBlogs] = useState([...Array(30).keys()].map(i => ({ id: (i+1), name: (i+1) })));
    const [pageOfItems, setPageOfItems] = useState([]);

    const onChangePage = (pageOfItems) => {
        setPageOfItems(pageOfItems);
        console.log(pageOfItems);
    }

    useEffect(() => {
        retrieveBlogs();
        onChangePage(pageOfItems);
    }, []);


    const retrieveBlogs = () => {
        console.log(props.productNumber);
        BlogService.getBlogs(props.productNumber)
            .then(response => {
                setBlogs(response.data);
                console.log("블로그 나옴");
                setPageOfItems(response.data.split(0, 3));
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const blogLink = (link) => {
        const url = link;
        window.open(url, '_blank');
    }

    const trimString = (str) =>{
        var tmp = str.split("<b>").join(" ");
        tmp = tmp.split("</b>").join(" ");
        return tmp;
    }

    const trimDate = (date) =>{
        var year = date.substring(0,4);
        var month = date.substring(4,6);
        var day = date.substring(6,8);
        return month + "월 " + day + "일 " + year +"년";
    }

    return (
        <div>
            <Row className="blogReviewTitle">
                <Col xl={3}>
                    <span id={"blogReviewTitle"} > 리뷰 제목 </span>
                </Col>
                <Col xl={5}>
                    <span id={"contents"}> 내용 </span>
                </Col>
                <Col xl={2}>
                    <span id={"blogName"}> 블로그명 </span>
                </Col>
                <Col xl={2}>
                    <span id={"blogDate"}> 작성일 </span>
                </Col>


            </Row>

            <ListGroup className="reviewListGroup">



                {pageOfItems &&
                pageOfItems.map((blog, index) => (
                    <ListGroupItem className="listItem" id={"blog" + index}  onClick={() => { blogLink(blog.link); }} action>
                        <Row>
                            <Col className="userReviewTitle" xl={3}>
                                {trimString(blog.title)}
                            </Col>
                            <Col xl={5}>
                                <div className="userName">
                                    {trimString(blog.description)}
                                </div>
                            </Col>
                            <Col xl={2}>
                                <div className="userReviewDate">
                                    {blog.bloggerName}
                                </div>
                            </Col>
                            <Col md="1" xl={2}>
                                <div className="userReviewPoint">
                                    {trimDate(blog.postDate)}
                                </div>
                            </Col>
                        </Row>
                    </ListGroupItem>
                ))}
                <ReviewPagination items={blogs} onChangePage={onChangePage}/>
            </ListGroup>
        </div>

    );
}

export default Blog;