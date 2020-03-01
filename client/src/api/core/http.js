import axios from "./axiosInstance";
import { generateAxiosConfig } from './axiosConfigGenerater';

let get = (url, isAuth, enableLoader) => {
    let config = generateAxiosConfig(isAuth, enableLoader);
    return axios.get(url, config);
};

let post = (url, data, isAuth, enableLoader) => {
    let config = generateAxiosConfig(isAuth, enableLoader);
    return axios.post(url, data, config);
};

export default {
    get,
    post
}