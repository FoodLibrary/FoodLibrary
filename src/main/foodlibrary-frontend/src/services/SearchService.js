import http from "../http-common"

const findByProductName = (searchProduct, category, inputValue ,allergyAndDisease , nickname) => {
    return http.post(`/searchproduct/${searchProduct}/${category}/${inputValue}/${nickname}`, allergyAndDisease);
};

const onTimeRanking = () => {
    return http.post(`/productSearchRanking`);
};

const onTimeRankingToggleBar = () => {
    return http.get('/topranking');
};

const reviewRanking = () => {
    return http.post('/productReviewRanking');
};

const sexRanking = (inputSexValue) => {
    return http.post(`/productSexRanking/${inputSexValue}`);
};

const ageRanking = (inputAgeValue) => {
    return http.post(`/productAgeRanking/${inputAgeValue}`);
};

const loginCertification = (loginInfo) => {
    return http.post('/login', loginInfo);
};

const findNickname = (userInfo) => {
    return http.post('/findnickname',userInfo);
};

const findPassword = (userInfoForPW) => {
    return http.post('/findpassword',userInfoForPW );
};

const addLike = (likeInfo) => {
    return http.post('/addlike', likeInfo);
};

const addZzim = (zzimInfo) => {
    return http.post('/addzzim',zzimInfo);
};

const getLikeUsers = (productNo) => {
    return http.post(`/likeUsers/${productNo}`);
};

const getZzimUsers = (productNo) => {
    return http.post(`/zzimUsers/${productNo}`);
};

const getUserZzim = (nickname) => {
    return http.post(`/userzzimproduct/${nickname}`)
};

const getProductInfoForZzim = (prdlstreportno) => {
    return http.post(`/productListForZzim`,prdlstreportno)
}



export default {
    findByProductName,
    onTimeRanking,
    onTimeRankingToggleBar,
    loginCertification,
    reviewRanking,
    sexRanking,
    ageRanking,
    findNickname,
    findPassword,
    addLike,
    addZzim,
    getLikeUsers,
    getZzimUsers,
    getUserZzim,
    getProductInfoForZzim,
};