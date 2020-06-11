import http from "../http-common";

const getUser = userId => {
    return http.post(`/getuser/${userId}`);
};

const create = userInfo => {
    return http.post("/users", userInfo);
};

const update = userInfo => {
    return http.post(`/updateUser/${userInfo.nickname}`,userInfo);
}

const checkNickname = nickname =>{
    return http.get(`/checknickname/${nickname}`);
}

export default {
    checkNickname,
    create,
    update,
    getUser
};