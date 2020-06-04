import http from "../http-common"

const findByProductName = (searchProduct, category, inputValue ,allergyAndDisease ) => {
    return http.post(`/searchproduct/${searchProduct}/${category}/${inputValue}`, allergyAndDisease);
};

const onTimeRanking = () => {
    return http.post(`/productSearchRanking`);
};

const onTimeRankingToggle = () => {
    return http.post(`/productSearchRankingPrdnm`);
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
}


export default {
    findByProductName,
    onTimeRanking,
    onTimeRankingToggle,
    loginCertification,
    reviewRanking,
    sexRanking,
    ageRanking,

};