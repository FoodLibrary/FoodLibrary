import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';
import 'reactstrap';
import ProductPage from './ProductPage/js/ProductPage';

import TopBar from "./defaultDiv/js/TopBar";
import SignUp from "./SignUpPage/SignUp";
import ReviewDetail from "./ReviewDetailPage/js/ReviewDetail";
import MyPage from "./MyPage/MyPage";
import EditMemberInfo from "./EditMemberInfoPage/EditMemberInfo";

function App() {
    return (
        <div>
            <TopBar/>
            <EditMemberInfo/>
        </div>
    )
}

export default App;