import http from "../core/http";

console.log("   
	asdsad

12
334
	");
const getHalfOffItems = pageNo => {
  return http.get(`halfOffItems?page=${pageNo}`);
};

export default {
  getHalfOffItems
};
