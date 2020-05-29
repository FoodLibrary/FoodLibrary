import React, {Component} from 'react';
import '../css/SearchResult.css';
import {Container, Row, Col, Label} from 'reactstrap';
import ProductList from "./ProductList";
import axios from "axios";


class SearchResult extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: '',
            product1: '',
            product2: '',
            product3: '',
            product4: '',
            product5: '',
            product6: '',
            product7: '',
            product8: '',
            product9: '',
        }
    }

    callApi = () => {
        axios.post("http://localhost:8081/searchproduct/떡/좋아요",
            [])
            .then(res => {
                this.setState({
                    product: res.data[0].prdlstnm,
                    product1: res.data[1].prdlstnm,
                    product2: res.data[2].prdlstnm,
                    product3: res.data[3].prdlstnm,
                    product4: res.data[4].prdlstnm,
                })
            })

            .catch(res => console.log(res))
    }

    componentDidMount() {
        this.callApi();
    }


    render() {
        return (
            <div>
                <div className="searchResult">
                    검색 결과
                </div>
                <div className="classification">
                    대분류 > 소분류
                </div>
                <div className="resultSort">
                    정렬 :
                    <button className="likeSort"> 좋아요순 |</button>
                    <button className="starSort"> 별점순 |</button>
                    <button className="reviewSort"> 리뷰순</button>
                </div>
                <div>
                    <div>1. {this.state.product}</div>
                    <div>2. {this.state.product1}</div>
                    <div>3. {this.state.product2}</div>
                    <div>4. {this.state.product3}</div>
                    <div>5. {this.state.product4}</div>
                    <div>6. {this.state.product5}</div>
                    <div>7. {this.state.product6}</div>
                    <div>8. {this.state.product7}</div>
                    <div>9. {this.state.product8}</div>
                    <div>10. {this.state.product9}</div>

                </div>

                {/*<div className="productList">
                    <ProductList/>
                </div>
                */}
                <div className="moreResult">
                    <button className="moreResultBtn"> 더 보 기</button>
                </div>
            </div>
        );
    }
}

export default SearchResult;
