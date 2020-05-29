import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'reactstrap';
import './index.css';
import TopBar from "./defaultDiv/js/TopBar";
import {
    BrowserRouter as Router,
    Route,
    Link,
    BrowserRouter as browserHistory,
    BrowserRouter as IndexRoute,
    Switch
} from 'react-router-dom';

//메인 화면
import Main from './MainPage/Main';
import Ranking from "./RankingPage/Ranking";
import ProductPage from "./ProductPage/js/ProductPage";
import SearchResultPage from "./SearchResultPage/SearchResultPage";

function App() {

    return (
        <Router>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/Ranking" component={Ranking}/>
            <Route path="/ProductPage" component={ProductPage}/>
            <Route path="/SearchResultPage" component={SearchResultPage}/>
        </Switch>
        </Router>
    )
}

/*
 <Router>
            <RenderTest />
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to ="/Main">Main</Link>
                        </li>
                        <li>
                            <Link to ="/Ranking">Ranking</Link>
                        </li>
                    </ul>
                    <div>
                    </div>
                </div>
            </Router>
        </Router>
*/

/*
<Router >
    <Route path = "/Ranking" component ={Ranking}/>
    <Route path ='/Main' component = {Main}>
        <IndexRoute component ={Main} />
    </Route>
</Router>
*/


/*
//검색 결과 화면
import ResultFiltering from './SearchResultPage/js/ResultFiltering';
import SearchResult from './SearchResultPage/js/SearchResult';

function App() {
    return (
        <div>
            <TopBar/>
            <ResultFiltering/>
            <SearchResult/>
        </div>
    )
}

*/


/*
//랭킹 화면
import Ranking from './RankingPage/Ranking';

function App() {
    return (
        <div>
            <TopBar />
            <Ranking/>
        </div>
    )
}
*/

/*
//상품상세화면
import ProductPage from './ProductPage/js/ProductPage';

function App() {
    return (
        <div>
            <TopBar/>
            <ProductPage />
        </div>
    )
}
*/

/*
//로그인 화면
import LoginPage from './LoginPage/js/LoginPage';

function App() {
    return (
        <div>
            <TopBar/>
            <LoginPage />
        </div>
    )
}
*/

/*
//마이페이지
import MyPage from "./MyPage/MyPage";

function App() {
    return (
        <div>
            <TopBar/>
            <MyPage/>
        </div>
    )
}
*/

/*
//회원 정보 수정 화면
import EditMemberInfo from "./EditMemberInfoPage/EditMemberInfo";

function App() {
    return (
        <div>
            <TopBar/>
            <EditMemberInfo/>
        </div>
    )
}
*/

/*
//회원 가입 화면
import SignUp from "./SignUpPage/SignUp";

function App() {
    return (
        <div>
            <TopBar/>
            <SignUp/>
        </div>
    )
}
*/

/*
//리뷰 상세 화면
import ReviewDetail from './ReviewDetailPage/js/ReviewDetail';

function App() {
    return (
        <div>
            <ReviewDetail/>
        </div>
    )
}
*/


/*
//리뷰 작성 화면
import ReviewWrite from './ReviewWritePage/js/ReviewWrite';

function App() {
    return (
        <div>
            <TopBar/>
            <ReviewWrite/>
        </div>
    )
}
*/

/*
//리뷰 상세 화면
import ReviewDetail from './ReviewDetailPage/js/ReviewDetail';

function App() {
    return (
        <div>
            <ReviewDetail/>
        </div>
    )
}
*/

export default App;