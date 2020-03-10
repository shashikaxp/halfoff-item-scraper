import http from "../core/http";

const getHalfOffItems = pageNo => {
  return http.get(`halfOffItems?page=${pageNo}`);
};

export default {
  getHalfOffItems
};
