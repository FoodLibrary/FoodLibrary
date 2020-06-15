import {Table} from 'reactstrap';
import React, {useEffect, useState} from 'react';
import ProductService from "./ProductService";
import ReviewService from "./ReviewService";

function ProductChart(props) {
    const propsName = ["열량", "탄수화물", "당류", "단백질", "지방", "포화지방", "트랜스지방", "콜레스테롤", "나트륨"];
    const [nutrientProps, setNutrientProps] = useState({
            탄수화물: "",
            당류: "",
            단백질: "",
            지방: "",
            포화지방: "",
            트랜스지방: "",
            콜레스테롤: "",
            나트륨: ""
        }
    )

    useEffect(() => {
        getNutrientInfo();
    }, []);

    const getNutrientInfo = () => {
        ProductService.getProductInfo(props.productNumber)
            .then(foundProduct => {
                if (foundProduct.data.nutrient === "알수없음")
                    insertNull();
                else if (foundProduct.data.nutrient.split(",").length <= 4)
                    getEachChart(foundProduct.data.nutrient.trim().split("%"), "%")
                else if( foundProduct.data.nutrient.split(", ").length <= 4)
                    getEachChart(foundProduct.data.nutrient.trim().split(","), ",");
                else
                    getEachChart(foundProduct.data.nutrient.trim().split(", "), ", ");
            }).catch(e => {
            console.log(e);
        });
    };

    const getEachChart = (nutrientArr, parser) => {
        let offset = 1;
        if (nutrientArr[nutrientArr.length] === "")
            offset += 1;
        propsName.forEach(propName =>
            nutrientArr.forEach(function (element) {
                let index = -1;
                index = element.search(propName);
                element = element.trim();
                if (parser === "%")
                    element = element.concat('', "%");
                if (index >= 0) {
                    if ((element.includes("포화지방") || element.includes("트랜스지방")) && (propName === "지방")) {

                    } else if (element == nutrientArr[nutrientArr.length - offset]) {
                        let tmp = element.search("%");
                        insertProps(propName, removeOtherProp(element.substring(propName.length).substring(0, tmp - offset).trim()));
                    } else {
                        insertProps(propName, removeOtherProp(element.substring(index).substring(propName.length).trim()));
                    }
                }
            }));
    }

    const removeOtherProp = (str) => {
        console.log(str);
        propsName.forEach(propName => {
                if (str.includes(propName))
                    str = str.substring(0, str.indexOf(propName)).trim();
            }
        );
        console.log(str);
        return str;
    }

    const insertNull = () => {
        propsName.forEach(propName => {
                insertProps(propName, "알수없음");
            }
        );
    }

    const insertProps = (name, value) => {
        const na = name;
        const va = value;
        setNutrientProps(nutrientProps => ({
            ...nutrientProps,
            [na]: va
        }));
    };

    return (
        <Table responsive>
            <thead>
            <tr className={"foodTable"}>
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
                <td>{nutrientProps.탄수화물}</td>
                <td>{nutrientProps.단백질}</td>
                <td>{nutrientProps.지방}</td>
                <td>{nutrientProps.당류}</td>
                <td>{nutrientProps.나트륨}</td>
                <td>{nutrientProps.콜레스테롤}</td>
                <td>{nutrientProps.포화지방}</td>
                <td>{nutrientProps.트랜스지방}</td>
            </tr>
            </tbody>
        </Table>
    );
}

export default ProductChart;