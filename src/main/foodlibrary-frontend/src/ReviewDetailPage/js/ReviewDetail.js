import React from 'react';
import ImageChart from "../../ProductDefaultDiv/js/ImageChart";
import OriginInfo from "../../ProductDefaultDiv/js/OriginInfo";
import StarPoint from "../../ReviewDefaultDiv/js/StarPoint";
import ReviewPhoto from "../../ReviewDefaultDiv/js/ReviewPhoto";
import ProductPageHead from "../../ProductDefaultDiv/js/ProductPageHead";
import Cancel from "../../ReviewDefaultDiv/js/Cancel";
import ReviewDetailTitle from "./ReviewDetailTitle";
import ReviewDisplay from "./ReviewDisplay";
import HashTagDisplay from "./HashTagDisplay";
import "../css/ReviewDetail.css"

function ReviewDetail() {
    return (
        <div className="ReviewDetail">
            <ProductPageHead/>
            <ReviewDetailTitle/>
            <ImageChart/>
            <OriginInfo/>
            <StarPoint/>
            <ReviewDisplay/>
            <ReviewPhoto/>
            <HashTagDisplay/>
            <Cancel/>
        </div>

    );
}

export default ReviewDetail;
