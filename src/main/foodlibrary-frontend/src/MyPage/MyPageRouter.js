
import React, {useEffect, useState} from "react";

import MyPage from "./MyPage";
import TopBar from "../defaultDiv/js/TopBar";
import SearchService from "../services/SearchService";

function MyPageRouter() {
    const [selectedAllergy, setSelectedAllergy] = useState(["알러지없음"]);
    const [selectedDisease, setSelectedDisease] = useState(["질병없음"]);
    const [searchResults, setSearchResults] = useState("");

    useEffect(() => {
        SearchService.getUserZzim("타노스는내발밑")
            .then(response => {
                console.log(response.data)
            })
            .catch(e => {
                console.log(e);
            });
    });

    return (
        <div className="myPageRouter">
            <TopBar searchResults={searchResults} selectedAllergy={selectedAllergy} selectedDisease={selectedDisease} />
            <MyPage/>
        </div>

    );
}

export default MyPageRouter;