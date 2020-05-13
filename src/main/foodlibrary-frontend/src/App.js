import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';
import 'reactstrap';
import Main from "./MainPage/Main";
import TopBar from "./defaultDiv/js/TopBar";
import SignUp from "./SignUpPage/SignUp";
import MyPage from "./MyPage/MyPage";
import ProductList from "./SearchResultPage/js/ProductList";
import ProductPage from "./ProductPage/js/ProductPage";
import SearchResult from "./SearchResultPage/js/SearchResult";

function App() {
    return (
        <div>
            <TopBar/>
            <SearchResult/>
        </div>
    )
}

export default App;