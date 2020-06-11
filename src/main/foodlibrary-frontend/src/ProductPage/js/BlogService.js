import http from "../../http-common";

const getBlogs = productNumber => {
    return http.post(`/naverBlogs/${productNumber}`);
};

export default {
    getBlogs
};