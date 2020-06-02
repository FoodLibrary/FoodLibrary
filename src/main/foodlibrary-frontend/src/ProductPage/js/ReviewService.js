import http from "../../http-common";

const isUserReview = productUserInfo => {
  return http.post("/isUserReview", productUserInfo);
};

const getStarAverage = () => {
  return http.get("/starAverage");
};

const getReviewCount = () => {
  return http.get("/reviewCount");
};

const getAll = () => {
  return http.get("/allReviews");
};

const get = id => {
  return http.get(`/review/${id}`);
};

const create = data => {
  return http.post("/createReview", data);
};

const update = (id, data) => {
  return http.put(`/updateReview/${id}`, data);
};

const remove = nickname => {
  return http.delete(`/deleteReview/${nickname}`);
};

const removeAll = () => {
  return http.delete(`/deleteAllReview`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  getReviewCount,
  getStarAverage,
  isUserReview
};
