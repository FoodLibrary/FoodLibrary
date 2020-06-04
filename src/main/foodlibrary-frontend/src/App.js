import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';
import 'reactstrap';
import Main from "./MainPage/Main";
import TopBar from "./defaultDiv/js/TopBar";
import {
    BrowserRouter as Router,
    Route,
    Link,
    BrowserRouter as browserHistory,
    BrowserRouter as IndexRoute,
    Switch,
} from 'react-router-dom';
import SearchResultRouter from "./SearchResultPage/js/SearchResultRouter";
import LoginPage from "./LoginPage/js/LoginPage";
import MyPageRouter from "./MyPage/MyPageRouter";
import SearchResult from "./SearchResultPage/js/SearchResult";
import Ranking from "./RankingPage/Ranking";
import RankingRouter from "./RankingPage/RankingRouter";
import SignUp from "./SignUpPage/SignUp";
import SignUpRouter from "./SignUpPage/SignUpRouter";
import ProductDetailPageRouter from "./ProductPage/js/ProductDetailPageRouter";

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/searchResult/:searchKeyword/:allergyInfo/:diseaseInfo" component={SearchResultRouter}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/myPage" component={MyPageRouter}/>
                    <Route path="/ranking" component={RankingRouter}/>
                    <Route path="/signUp" component={SignUpRouter}/>
                    <Route path="/productPage/:searchKeyword/:allergyInfo/:productInfo" component={ProductDetailPageRouter}/>

                </Switch>
            </Router>
        </div>

    );
}

export default App;