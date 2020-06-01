import http from "../../http-common";

const getProductInfo = (productNum) => {
    return http.get(`/productpage/${productNum}`);
};
export default {
    getProductInfo
};