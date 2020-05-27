
import React from "react";

import MyPage from "./MyPage";
import TopBar from "../defaultDiv/js/TopBar";

function MyPageRouter() {
    return (
        <div className="myPageRouter">
            <TopBar/>
            <MyPage/>
        </div>

    );
}

export default MyPageRouter;