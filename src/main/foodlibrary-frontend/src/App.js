import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'reactstrap';
import ProductPage from './ProductPage/js/ProductPage';

import TopBar from "./defaultDiv/js/TopBar";
import SignUp from "./SignUpPage/SignUp";
import ReviewDetail from "./ReviewDetailPage/js/ReviewDetail";

function App() {
    return (
        <div>
            <TopBar/>
            <ReviewDetail/>
        </div>
    )
}

export default App;