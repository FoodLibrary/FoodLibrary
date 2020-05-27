import http from "../http-common"

const findByProductName = (searchProduct, allergy) => {
    return http.post(`/searchproduct/${searchProduct}`, allergy);
};


export default {
    findByProductName
};