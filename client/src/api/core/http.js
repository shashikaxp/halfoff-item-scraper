import axios from "./axiosInstance";
import { generateAxiosConfig } from './axiosConfigGenerater';

let get = (url, isAuth, enableLoader) => {
    let config = generateAxiosConfig(isAuth, enableLoader);
    return axios.get(url, config);
};

export default {
    get,
}