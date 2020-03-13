import http from "../core/http";

const getHalfOffItems = pageNo => {
  return http.get(`halfOffItems?page=${pageNo}`, true, true);
};

export default {
  getHalfOffItems
};
