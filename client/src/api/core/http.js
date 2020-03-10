import axios from "./axiosInstance";
import { generateAxiosConfig } from "./axiosConfigGenerater";

const get = async (url, isAuth, enableLoader) => {
  const config = generateAxiosConfig(isAuth, enableLoader);
  const result = await axios.get(url, config);
  return result.data;
};

const post = async (url, data, isAuth, enableLoader) => {
  const config = generateAxiosConfig(isAuth, enableLoader);
  const result = await axios.post(url, data, config);
  return result.data;
};

export default {
  get,
  post
};
