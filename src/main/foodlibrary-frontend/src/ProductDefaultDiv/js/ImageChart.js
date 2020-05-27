import React, {Component} from 'react';
import '../css/ImageChart.css';
import {Container, Row, Col, Table} from 'reactstrap';
import ImageResources from '../../util/ImageResources';

/*ImageResources.productImage*/
const ImageChart = () => {
        var img = this.props.img;
        var nutrient = this.props.nutrient;
        var nutrientlist = [];
        var kcallist1 = [];
        var kcallist2 = [];
        kcallist1 = nutrient.split("kcal");
        kcallist2 = kcallist1[0].split(" ");
        var kcal = kcallist2[kcallist2.length-1];
        var tan="알수없음";
        var dan="";
        var gi="";
        var dang="";
        var na="";
        var cole="";
        var trans="";
        var pohwa="";
        nutrientlist = nutrient.split(" ");
        for(var i=0;i<nutrientlist.length;i++){
            if(nutrientlist[i]=="탄수화물"){
                tan = nutrientlist[i+1];
            }
            if(nutrientlist[i]=="단백질"){
                dan = nutrientlist[i+1];
            }
            if(nutrientlist[i]=="지방"){
                gi = nutrientlist[i+1];
            }
            if(nutrientlist[i]=="당류"){
                dang = nutrientlist[i+1];
            }
            if(nutrientlist[i]=="나트륨"){
                na = nutrientlist[i+1];
            }
            if(nutrientlist[i]=="콜레스테롤"){
                cole = nutrientlist[i+1];
            }
            if(nutrientlist[i]=="포화지방"){
                pohwa = nutrientlist[i+1];
            }
            if(nutrientlist[i]=="트랜스지방"){
                trans = nutrientlist[i+1];
            }

        }
        return (
            <Container>
            <Container>
                <Row xs="1" md="2">
                    <Col className={"ProductImageCol"} md="3">
                        <img className={"ProductImage"} src={img}/>
                    </Col>
                    <Col className="ChartRow" md={{size:7,offset:2}}>
                        <Row className={"ChartRow"} xs="1" md="1">
                            <Col className={"foodChartTitle"} xs={{size:5,offset:4}} md={{size:5, offset:4}}>식품분석표</Col>
                            <Col className="foodTable">
                                <Table className="foodTable">
                                    <tr>
                                        <th>
                                            1회제공량(g)
                                        </th>
                                        <th>
                                            열량(kcal)
                                        </th>
                                        <th>
                                            탄수화물(g)
                                        </th>
                                        <th>
                                            단백질(g)
                                        </th>
                                        <th>
                                            지방(g)
                                        </th>
                                        <th>
                                            당류(g)
                                        </th>
                                        <th>
                                            나트륨(g)
                                        </th>
                                        <th>
                                            콜레스테롤(mg)
                                        </th>
                                        <th>
                                            포화지방산(g)
                                        </th>
                                        <th>
                                            트랜스지방산(g)
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>
                                            aaa
                                        </td>
                                        <td>
                                            {kcal}
                                        </td>
                                        <td>
                                            {tan}
                                        </td>
                                        <td>
                                            {dan}
                                        </td>
                                        <td>
                                            {gi}
                                        </td>
                                        <td>
                                            {dang}
                                        </td>
                                        <td>
                                            {na}
                                        </td>
                                        <td>
                                            {cole}
                                        </td>
                                        <td>
                                            {pohwa}
                                        </td>
                                        <td>
                                            {trans}
                                        </td>

                                    </tr>
                                </Table>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr/>
            </Container>
            </Container>
        );

}

export default ImageChart;
