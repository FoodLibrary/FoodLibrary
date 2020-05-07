import React, {Component} from 'react';
import './RankingList.css';
import {Container, Row, Col} from 'reactstrap';
import {Image} from "react-bootstrap";

const imageResources = require('../util/ImageResources.js');

class RankingList extends Component {
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
            <div>
                <table className={"RankingList"}>
                    <tbody>
                    <th className={"indexAndButtons"}>
                        <div className={"indexAndButtonsContainer"}>
                            <div>
                                <div className={"index"}> 1</div>
                            </div>
                            <div>
                                <div className={"heart"}>
                                    <Image src={imageResources.myHeart}
                                           className={"heartAndThumbImages"}/>
                                </div>
                            </div>
                            <div>
                                <div className={"thumb"}>
                                    <Image src={imageResources.thumb}
                                           className={"heartAndThumbImages"}/>
                                </div>
                            </div>
                        </div>

                    </th>

                    <td>
                        <img className="foodPictureAreaCol" src={this.state.img}/>
                        {this.state.prdlstnm}
                    </td>

                    <th className={"indexAndButtons"}>
                        <div className={"indexAndButtonsContainer"}>
                            <div>
                                <div className={"index"}> 2</div>
                            </div>
                            <div>
                                <div className={"heart"}>
                                    <Image src={imageResources.myHeart}
                                           className={"heartAndThumbImages"}/>
                                </div>
                            </div>
                            <div>
                                <div className={"thumb"}>
                                    <Image src={imageResources.thumb}
                                           className={"heartAndThumbImages"}/>
                                </div>
                            </div>
                        </div>

                    </th>
                    <td>
                        <img className="foodPictureAreaCol" src={this.state.img}/>
                        {this.state.prdlstnm}
                    </td>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default RankingList;
