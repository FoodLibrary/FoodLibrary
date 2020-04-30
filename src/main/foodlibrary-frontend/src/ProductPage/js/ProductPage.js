import React,{Component,useEffect, useState} from 'react';
import ProductPageHead from '../../ProductDefaultDiv/js/ProductPageHead';
import ImageChart from "../../ProductDefaultDiv/js/ImageChart";
import ProductDesc from './ProductDesc';
import ProductPageMember from './ProductPageMember';
import ProductPageNaver from './ProductPageNaver';
import '../css/ProductPage.css'
import {Container,Row,Col} from 'reactstrap';

class ProductPage extends Component{
    constructor(props) {
        super(props);
        this.state={
            prdlstreportno:'',
            prdlstnm:'',
            manufacture:'',
            category:'',
            img:'',
            rawmtrl:'',
            nutrient:'',
            allergy:'',
            productHashtag:'',
            likecount:0,
            zzimcount:0

        }
    }
    callApi = () =>{
        fetch('api/productpage/2015026208379')
            .then(res=>res.json())
            .then(json=>{
                this.setState({
                    prdlstreportno:json.prdlstreportno,
                    prdlstnm:json.prdlstnm,
                    manufacture:json.manufacture,
                    category:json.category,
                    img:json.img,
                    rawmtrl:json.rawmtrl,
                    nutrient:json.nutrient,
                    allergy:json.allergy,
                    productHashtag:json.productHashtag,
                    likecount:json.likecount,
                    zzimcount:json.zzimcount
                })
            })
    }

    componentDidMount() {
        this.callApi();
    }

    render(){
        return (
            <div className="ProductPage">
                <ProductPageHead prdlstnm={this.state.prdlstnm}/>
                <Container>
                <hr/>
                <div className="ProductPageHeadManufactur">제조사: {this.state.manufacture}</div>
                <hr/>
                </Container>
                <ImageChart img={this.state.img} nutrient={this.state.nutrient}/>
                <ProductDesc rawmtrl={this.state.rawmtrl} manufacture={this.state.manufacture} allergy={this.state.allergy} />
                <ProductPageMember/>
                <ProductPageNaver/>
            </div>
        );
    }
}

export default ProductPage;