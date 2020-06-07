import http from "../http-common"

const findByProductName = (searchProduct, category, inputValue ,allergyAndDisease ) => {
    return http.post(`/searchproduct/${searchProduct}/${category}/${inputValue}`, allergyAndDisease);
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
};