import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'reactstrap';
import './index.css';
import TopBar from "./defaultDiv/js/TopBar";

//메인화면
import Main from './MainPage/Main'
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
/*
//로그인 화면
import LoginPage from './LoginPage/js/LoginPage';

ReactDOM.render(
    <React.StrictMode>
        <TopBar/>
        <LoginPage />
    </React.StrictMode>,
    document.getElementById('root')
);
*/

/*
//마이페이지
import MyPage from "./MyPage/MyPage";

ReactDOM.render(
    <React.StrictMode>
        <TopBar />
        <MyPage/>
    </React.StrictMode>,
    document.getElementById('root')
);
*/

/*
//회원 정보 수정 화면
import EditMemberInfo from "./EditMemberInfoPage/EditMemberInfo";

ReactDOM.render(
    <React.StrictMode>
        <TopBar/>
        <EditMemberInfo/>
    </React.StrictMode>,
    document.getElementById('root')
);
*/

/*
//회원 가입 화면
import SignUp from "./SignUpPage/SignUp";

ReactDOM.render(
    <React.StrictMode>
        <TopBar/>
        <SignUp/>
    </React.StrictMode>,
    document.getElementById('root')
);
*/

/*
//상품상세화면
import ProductPage from './ProductPage/js/ProductPage';

ReactDOM.render(
    <React.StrictMode>
        <TopBar/>
        <ProductPage />
    </React.StrictMode>,
    document.getElementById('root')
);
*/

/*
//리뷰 상세 화면
import ReviewDetail from './ReviewDetailPage/js/ReviewDetail';

ReactDOM.render(
    <React.StrictMode>
        <ReviewDetail/>
    </React.StrictMode>,
    document.getElementById('root')
);

*/

/*
//리뷰 작성 화면
import ReviewWrite from './ReviewWritePage/js/ReviewWrite';

ReactDOM.render(
    <React.StrictMode>
        <TopBar/>
        <ReviewWrite/>
    </React.StrictMode>,
    document.getElementById('root')
);
*/

/*
//검색 결과 화면
import './SearchResultPage/css/ResultIndex.css';
import ResultFiltering from './SearchResultPage/js/ResultFiltering';
import SearchResult from './SearchResultPage/js/SearchResult';

ReactDOM.render(
    <React.StrictMode>
        <TopBar/>
        <ResultFiltering />
        <SearchResult />
    </React.StrictMode>,
    document.getElementById('root')
);
*/

/*
//랭킹 화면
import Ranking from './RankingPage/Ranking';

ReactDOM.render(
    <React.StrictMode>
        <TopBar/>
        <Ranking />
    </React.StrictMode>,
    document.getElementById('root')
);
*/




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
