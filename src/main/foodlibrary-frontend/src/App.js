import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';
import 'reactstrap';
import Main from "./MainPage/Main";
import TopBar from "./defaultDiv/js/TopBar";
import SearchResult from "./SearchResultPage/js/SearchResult";
import ProductList from "./SearchResultPage/js/ProductList";

function App() {
    return (
        <div>
            <TopBar/>
            <ProductList/>
        </div>
    );
}

export default App;