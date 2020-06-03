import http from "../http-common"

const findByProductName = (searchProduct, inputValue ,allergy) => {
    return http.post(`/searchproduct/${searchProduct}/${inputValue}`, allergy);
};

const onTimeRanking = () => {
    return http.post(`/productSearchRanking`);
};

const onTimeRankingToggle = () => {
    return http.post(`/productSearchRankingPrdnm`);
}

const loginCertification = (loginInfo) => {
    return http.post('/login', loginInfo);
}


export default {
    findByProductName,
    onTimeRanking,
    onTimeRankingToggle,
    loginCertification,
};