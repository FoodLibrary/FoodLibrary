
import React, {useState} from "react";

import MyPage from "./MyPage";
import TopBar from "../defaultDiv/js/TopBar";

function MyPageRouter() {
    const [selectedAllergy, setSelectedAllergy] = useState(["알러지없음"]);
    const [searchResults, setSearchResults] = useState("");
    return (
        <div className="myPageRouter">
            <TopBar searchResults={searchResults} selectedAllergy={selectedAllergy}/>
            <MyPage/>
        </div>

    );
}

export default MyPageRouter;