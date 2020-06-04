import React, {useEffect, useState} from "react";


import Ranking from "./Ranking";
import TopBar from "../defaultDiv/js/TopBar";
import ProductDetailPage from "../ProductPage/js/ProductDetailPage";

function RankingRouter() {
    const [selectedAllergy, setSelectedAllergy] = useState(["알러지없음"]);
    const [selectedDisease, setSelectedDisease] = useState(["질병없음"]);
    const [searchResults, setSearchResults] = useState("");
    return (
        <div>
            <TopBar searchResults={searchResults} selectedAllergy={selectedAllergy} selectedDisease={selectedDisease}/>
            <Ranking searchResults={searchResults} selectedAllergy={selectedAllergy} selectedDisease={selectedDisease}/>
        </div>

    );
}

export default RankingRouter;