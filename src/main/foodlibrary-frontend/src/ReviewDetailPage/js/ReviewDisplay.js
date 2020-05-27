import React, { Component } from 'react';
import '../../ReviewDefaultDiv/css/Review.css';
import { Container, Row, Col } from 'reactstrap';
import ImageResources from '../../util/ImageResources';


const ReviewDisplay = () =>{
        return (
            <Container className={"Row"}>
                <Row xs={1} md={1}>
                    <Col xs={"auto"} md={"auto"}>
                        <p className={"TitleButton"}>
                            <img className={"ReviewImage"} src={ImageResources.reviewImage} alt="reviewImage" />
                            &nbsp; &nbsp;식품 후기
                        </p>
                    </Col>
                </Row>
                <Row xs={2}>
                    <Col xs={{ size: 4, offset: 1 }} md={{ size: 2, offset: 1 }}>
                        <p className={"ReviewTitleBody"}>
                            제목
                        </p>
                    </Col>
                    <Col xs={7} md={9}>
                        <span>
                            <Col className={"ReviewText"} xs={"auto"} >
                                꼭 드셔보세요!!!
                                </Col>
                        </span>
                    </Col>
                </Row>
                <Row xs={2}>
                    <Col xs={{ size: 4, offset: 1 }} md={{ size: 2, offset: 1 }}>
                        <p className={"ReviewTitleBody"}>
                            내용
                        </p>
                    </Col>
                    <Col xs={7} md={9}>
                            <span>
                                <Col className={"ReviewText"} xs={"auto"} >
                                    저는 2봉을 끓였어요!!저는 소스가 아주아주 맵더라구요.액체스프 뜯자마자 고추장매운내가 확!!!!어떻게 보면 불닭 보다 매운거 같아요.그렇지만 면이 아주 식감이 탱글 탱글해서 너무 좋아요 ㅎㅎ쪼끔만 덜매웠으면 좋겠어요 ㅎㅎ근데 야채 넣고 하면 딱 맞을꺼같은데!! 야채 손질 넘나 귀찮은.. ㅋㅋㅋ면의 식감에 강추 합니다!
                                </Col>
                            </span>
                    </Col>
                </Row>
                <hr/>
            </Container>
        );

}

export default ReviewDisplay;