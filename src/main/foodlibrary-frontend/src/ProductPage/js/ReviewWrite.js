import React, {useEffect, useState} from 'react';
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import '../css/UserReview.css';
import ReviewService from "./ReviewService";
import moment from "moment";
import "moment/locale/ko";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Box from '@material-ui/core/Box';



function ReviewWrite (props){
    const [productUserInfo] = useState(props);
    const initialReviewState = {
        prdlstreportno: "",
        reviewdesc: "",
        reviewhashtag: "",
        reviewimg: "",
        reviewtitle: "",
        star: 0.0,
        nickname: "",
        datetime: ""
    };
    const [reviewWrite, setReviewWrite] = useState(initialReviewState);
    const [selectedFile, setSelectedFile] = useState("");

    const handleInputChange = event => {
        const {name, value} = event.target;
        setReviewWrite({...reviewWrite, [name]: value});
    };


    const inputHashtag = (event, value) => {
        setReviewWrite({...reviewWrite,[event.target.name]:value.join(",")});
        console.log(reviewWrite.reviewhashtag);
    }

    const saveReview = () => {
        moment.locale('ko');
        var data = {
            nickname: productUserInfo.nickname,
            prdlstreportno: productUserInfo.prdlstreportno,
            reviewtitle: reviewWrite.reviewtitle,
            reviewdesc: reviewWrite.reviewdesc,
            reviewhashtag: reviewWrite.reviewhashtag,
            reviewimg: reviewWrite.reviewimg,
            star: reviewWrite.star,
            datetime: moment().format("YYYY MMMM Do, hh:mm")
        };
        ReviewService.create(data)
            .catch(e => {
                console.log(e);
            });
        props.setSubmit(false);
        props.retrieveReviews();
    };

    const addHash = (event) => {
        event.target.value = "#" + event.target.value;
    };

    // const onFileChangeHandler = (event) => {
    //     event.preventDefault();
    //     setSelectedFile(event.target.files[0]);
    //     const formData = new FormData();
    //     formData.append('file', selectedFile);
    //     ReviewService.upload(formData)
    //         .then(response =>{
    //             console.log(response.data);
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // };

    return (
        <React.Fragment>
        <Form className = "ReviewWrite">
            <FormGroup>
                <Label for="reviewTitle">리뷰제목</Label>
                <Input required type="text" id="reviewTitle" placeholder="리뷰제목"
                       onChange={handleInputChange} name="reviewtitle" value={reviewWrite.reviewtitle}/>
            </FormGroup>
            <FormGroup>
                <Label for="reviewDesc">내용</Label>
                <Input required type="textarea" id="reviewDesc" placeholder="리뷰내용"
                       onChange={handleInputChange} name="reviewdesc" value={reviewWrite.reviewdesc}/>
                <Box component="fieldset" mb={5} borderColor="transparent">
                    <Typography component="legend">별점</Typography>
                    <Rating name="star" size="large" defaultValue={5} max={5} precision={0.5}
                    onChange={handleInputChange}/>
                </Box>
            </FormGroup>
                <Autocomplete
                    multiple
                    name="reviewhashtag"
                    options={hashtags.map((option) => option.title)}
                    freeSolo
                    onChange={inputHashtag}
                    renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                            <Chip variant="outlined" label={option} {...getTagProps({index})} />
                        ))
                    }
                    renderInput={(inputedHashtag) => (
                        <TextField {...inputedHashtag} onClick={addHash}  name={"reviewhashtag"} variant="outlined" label="해쉬태그" on placeholder="Hashtags"/>
                    )}
                />
            <FormGroup>
                {/*<input type="file" className="fileupload" name="file" onChange={}/>*/}
            </FormGroup>

        </Form>
    <button onClick={saveReview}/>
        </React.Fragment>
    );
};
const hashtags = [
    {title: '#맛있어요'},
    {title: '#짜요'},
    {title: '#달아요',},
    {title: '#싱거워요'}
]

export default ReviewWrite;

