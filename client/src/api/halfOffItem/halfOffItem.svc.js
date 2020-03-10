import http from "../core/http";

console.log(
	"asdsad"
	)
const getHalfOffItems = pageNo => {
  return http.get(`halfOffItems?page=${pageNo}`);
};

export default {
  getHalfOffItems
};
