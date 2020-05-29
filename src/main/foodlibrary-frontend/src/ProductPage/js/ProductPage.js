import React,{Component,useEffect, useState} from 'react';
import ProductPageHead from '../../ProductDefaultDiv/js/ProductPageHead';
import ImageChart from "../../ProductDefaultDiv/js/ImageChart";
import ProductDesc from './ProductDesc';
import ProductPageMember from './ProductPageMember';
import ProductPageNaver from './ProductPageNaver';
import '../css/ProductPage.css'
import {Container,Row,Col} from 'reactstrap';
import axios from "axios";
import TopBar from "../../defaultDiv/js/TopBar";

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
        axios.post("http://localhost:8081/api/productpage/20150405027137")
            .then(res=>{
                this.setState({
                    prdlstreportno:res.data.prdlstreportno,
                    prdlstnm:res.data.prdlstnm,
                    manufacture:res.data.manufacture,
                    category:res.data.category,
                    img:res.data.img,
                    rawmtrl:res.data.rawmtrl,
                    nutrient:res.data.nutrient,
                    allergy:res.data.allergy,
                    productHashtag:res.data.productHashtag,
                    likecount:res.data.likecount,
                    zzimcount:res.data.zzimcount
                })
            })
            .catch(res=>console.log(res))
    }

    componentDidMount() {
        this.callApi();
    }

    render(){
        return (
            <div className="ProductPage">
                <TopBar />
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