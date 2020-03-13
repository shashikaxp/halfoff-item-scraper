import http from "../core/http";

const login = formData => {
  return http.post("/auth/login", formData, false, true);
};

const register = formData => {
  return http.post("/auth/register", formData, false, true);
};

export default {
  login,
  register
};
