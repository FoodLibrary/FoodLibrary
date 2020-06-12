import http from "../http-common"

const findByProductName = (searchProduct, inputValue ,allergy) => {
    return http.post(`/searchproduct/${searchProduct}/${inputValue}`, allergy);
};


export default {
    findByProductName,
};