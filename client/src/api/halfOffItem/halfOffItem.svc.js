import http from "../core/http";

let getHalfOffItems = pageNo => {
  return http.get(`halfOffItems?page=${pageNo}`);
};

export default {
  getHalfOffItems
};
