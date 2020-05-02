import React, {Component} from 'react';
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


class ReviewWrite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prdlstreportno: '',
            prdlstnm: '',
            manufacture: '',
            category: '',
            img: '',
            rawmtrl: '',
            nutrient: '',
            allergy: '',
            productHashtag: '',
            likecount: 0,
            zzimcount: 0

        }
    }

    callApi = () => {
        fetch('api/productpage/2015026208379')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    prdlstreportno: json.prdlstreportno,
                    prdlstnm: json.prdlstnm,
                    manufacture: json.manufacture,
                    category: json.category,
                    img: json.img,
                    rawmtrl: json.rawmtrl,
                    nutrient: json.nutrient,
                    allergy: json.allergy,
                    productHashtag: json.productHashtag,
                    likecount: json.likecount,
                    zzimcount: json.zzimcount
                })
            })
    }

    componentDidMount() {
        this.callApi();
    }

    render() {
        return (
            <div className="ReviewWrite">
                <ProductPageHead/>
                <ReviewWriteTitle/>
                <ImageChart img={this.state.img} nutrient={this.state.nutrient}/>
                <OriginInfo/>
                <StarPoint/>
                <ReviewTextWrite/>
                <ReviewPhoto/>
                <HashTagWrite/>
                <Cancel/>
            </div>
        );
    }
}

export default ReviewWrite;