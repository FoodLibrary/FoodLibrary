import React, {useEffect, useState} from "react";


import Ranking from "./Ranking";
import TopBar from "../defaultDiv/js/TopBar";

function RankingRouter() {
    return (
        <div>
            <TopBar/>
            <Ranking/>
        </div>

    );
}

export default RankingRouter;