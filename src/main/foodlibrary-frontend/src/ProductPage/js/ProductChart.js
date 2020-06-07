import {Table} from 'reactstrap';
import React, {useState} from 'react';

const ProductChart = (props) => {

    const a = props.nutrient.split(",");

    return (
        <Table responsive>
            <thead>
                <tr className={"foodTable"}>
                    <th>1회 제공량 (g)</th>
                    <th>열량 (kcal)</th>
                    <th>탄수화물 (g)</th>
                    <th>단백질 (g)</th>
                    <th>지방 (g)</th>
                    <th>당류 (g)</th>
                    <th>나트륨 (g)</th>
                    <th>콜레스테롤 (mg)</th>
                    <th>포화지방산 (g)</th>
                    <th>트랜스지방산 (g)</th>
                </tr>
            </thead>
            <tbody>
                <tr className={"foodTable"}>
                    <td>{a[0]}</td>
                    <td>{a[1]}</td>
                    <td>{a[2]}</td>
                    <td>{a[3]}</td>
                    <td>{a[4]}</td>
                    <td>{a[5]}</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default ProductChart;
