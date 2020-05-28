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

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/searchResult/:searchKeyword" component={TopBar}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/myPage" component={MyPageRouter}/>
                </Switch>
            </Router>
        </div>

    );
}

export default App;