import React, {useEffect, useState} from 'react';

import TopBar from "../../defaultDiv/js/TopBar";
import ProductDetailPage from "./ProductDetailPage";


const ProductDetailPageRouter = ({match}) => {
    const [productInfo, setProductInfo] = useState({
        productNumber: match.params.productInfo,
        nickname: localStorage.getItem('id')
    });
    const [searchResults, setResults] = useState(match.params.searchKeyword);
    const [selectedAllergy, setSelectedAllergy] = useState(match.params.allergyInfo)

    return (
        <div>
            <TopBar searchResults={searchResults} selectedAllergy={selectedAllergy}/>
            <ProductDetailPage productInfo={productInfo}/>
        </div>
    );

}

export default ProductDetailPageRouter;