import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from "react";

import 'reactstrap';
import ProductPage from './ProductPage/js/ProductPage';

import TopBar from "./defaultDiv/js/TopBar";
import SignUp from "./SignUpPage/SignUp";
import ReviewDetail from "./ReviewDetailPage/js/ReviewDetail";
import ResultFiltering from "./SearchResultPage/js/ResultFiltering";
import ProductList from "./SearchResultPage/js/ProductList";
import SearchResult from "./SearchResultPage/js/SearchResult";

function App() {
    const [message, setMessage] = useState("");


    return (
        <div>
            <TopBar/>
            <ResultFiltering/>
            <SearchResult/>
        </div>
    )
}

export default App;