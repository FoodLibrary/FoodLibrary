import http from "../http-common"
import {useEffect, useState} from "react";

const findByProductName = searchProduct => {
    return http.get(`/searchproduct/${searchProduct}`);
};

export default {
    findByProductName
};