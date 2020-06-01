import {Table} from 'reactstrap';
import React from 'react';

const ProductChart = (props) => {
    return (
        <Table responsive>
            <thead>
                <tr>
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
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
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
