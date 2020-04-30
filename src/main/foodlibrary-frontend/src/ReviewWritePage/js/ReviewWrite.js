import React from 'react';
import ImageChart from "../../ProductDefaultDiv/js/ImageChart";
import OriginInfo from "../../ProductDefaultDiv/js/OriginInfo";
import StarPoint from "../../ReviewDefaultDiv/js/StarPoint";
import ReviewWriteTitle from "./ReviewWriteTitle";
import ReviewTextWrite from "./ReviewTextWrite";
import ReviewPhoto from "../../ReviewDefaultDiv/js/ReviewPhoto";
import HashTagWrite from "./HashTagWrite";
import Cancel from "../../ReviewDefaultDiv/js/Cancel";
import ProductPageHead from "../../ProductDefaultDiv/js/ProductPageHead";
import "../css/ReviewWrite.css"


function ReviewWrite() {
    return (
        <div className="ReviewWrite">
            <ProductPageHead/>
            <ReviewWriteTitle/>
            <ImageChart/>
            <OriginInfo/>
            <StarPoint/>
            <ReviewTextWrite/>
            <ReviewPhoto/>
            <HashTagWrite/>
            <Cancel/>
        </div>

    );
}

export default ReviewWrite;