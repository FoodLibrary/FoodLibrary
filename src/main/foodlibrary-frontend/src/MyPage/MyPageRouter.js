
import React, {useEffect, useState} from "react";

import MyPage from "./MyPage";
import TopBar from "../defaultDiv/js/TopBar";
import SearchService from "../services/SearchService";

function MyPageRouter() {
    const selectedAllergy = ["알러지없음"];
    const selectedDisease = ["질병없음"];

    const [searchResults, setSearchResults] = useState("");

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        SearchService.getUserZzim(localStorage.getItem('id'))
            .then(response => {
                const productList = response.data;
                setProductList(productList);
            })
            .catch(e => {
                console.log(e);
            });
    },[]);

    return (
        <div className="myPageRouter">
            <TopBar searchResults={searchResults} selectedAllergy={selectedAllergy} selectedDisease={selectedDisease} />
            <MyPage productList={productList}/>
        </div>

    );
}

export default MyPageRouter;